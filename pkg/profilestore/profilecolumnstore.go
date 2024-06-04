// Copyright 2022-2024 The Parca Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package profilestore

import (
	"context"
	"strings"
	"sync"
	"time"

	"github.com/apache/arrow/go/v16/arrow/memory"
	"github.com/go-kit/log"
	"github.com/polarsignals/frostdb/dynparquet"
	"github.com/prometheus/client_golang/prometheus"
	"go.opentelemetry.io/otel/trace"
	"google.golang.org/grpc/peer"
	"google.golang.org/protobuf/types/known/durationpb"
	"google.golang.org/protobuf/types/known/timestamppb"

	otelgrpcprofilingpb "github.com/parca-dev/parca/gen/proto/go/opentelemetry/proto/collector/profiles/v1"
	profilestorepb "github.com/parca-dev/parca/gen/proto/go/parca/profilestore/v1alpha1"
	"github.com/parca-dev/parca/pkg/ingester"
	"github.com/parca-dev/parca/pkg/normalizer"
)

type agent struct {
	nodeName         string
	lastError        error
	lastPush         time.Time
	lastPushDuration time.Duration
}

type ProfileColumnStore struct {
	profilestorepb.UnimplementedProfileStoreServiceServer
	profilestorepb.UnimplementedAgentsServiceServer

	otelgrpcprofilingpb.UnimplementedProfilesServiceServer

	logger log.Logger
	tracer trace.Tracer

	ingester ingester.Ingester

	mtx sync.Mutex
	// ip as the key
	agents map[string]agent

	mem    memory.Allocator
	schema *dynparquet.Schema
}

var _ profilestorepb.ProfileStoreServiceServer = &ProfileColumnStore{}

func NewProfileColumnStore(
	reg prometheus.Registerer,
	logger log.Logger,
	tracer trace.Tracer,
	ingester ingester.Ingester,
	schema *dynparquet.Schema,
	mem memory.Allocator,
) *ProfileColumnStore {
	return &ProfileColumnStore{
		logger:   logger,
		tracer:   tracer,
		ingester: ingester,
		schema:   schema,
		mem:      mem,
		agents:   make(map[string]agent),
	}
}

func (s *ProfileColumnStore) writeSeries(ctx context.Context, req *profilestorepb.WriteRawRequest) error {
	r, err := normalizer.WriteRawRequestToArrowRecord(
		ctx,
		s.mem,
		req,
		s.schema,
	)
	if err != nil {
		return err
	}
	if r == nil {
		return nil
	}
	defer r.Release()

	if r.NumRows() == 0 {
		return nil
	}

	return s.ingester.Ingest(ctx, r)
}

func (s *ProfileColumnStore) updateAgents(nodeNameAndIP string, ag agent) {
	s.mtx.Lock()
	defer s.mtx.Unlock()

	s.agents[nodeNameAndIP] = ag

	for i, a := range s.agents {
		if a.lastPush.Before(time.Now().Add(-5 * time.Minute)) {
			delete(s.agents, i)
		}
	}
}

func nodeNameFromLabels(series []*profilestorepb.RawProfileSeries) (string, bool) {
	var nodeName string

found:
	for _, s := range series {
		for _, l := range s.Labels.Labels {
			if l.Name == "node" {
				nodeName = l.Value
				break found
			}
		}
	}

	if nodeName == "" {
		return "", false
	}

	return nodeName, true
}

func (s *ProfileColumnStore) WriteRaw(ctx context.Context, req *profilestorepb.WriteRawRequest) (*profilestorepb.WriteRawResponse, error) {
	ctx, span := s.tracer.Start(ctx, "write-raw")
	defer span.End()

	start := time.Now()
	writeErr := s.writeSeries(ctx, req)

	// update agent info only when the request is come from agent
	if p, ok := peer.FromContext(ctx); ok && len(req.Series) != 0 {
		nodeName, _ := nodeNameFromLabels(req.Series)
		ag := agent{
			nodeName:         nodeName,
			lastPush:         start,
			lastPushDuration: time.Since(start),
			lastError:        writeErr,
		}
		ipPort := p.Addr.String()
		ip := ipPort[:strings.LastIndex(ipPort, ":")]

		s.updateAgents(nodeName+ip, ag)
	}

	if writeErr != nil {
		return nil, writeErr
	}

	return &profilestorepb.WriteRawResponse{}, nil
}

func (s *ProfileColumnStore) Export(ctx context.Context, req *otelgrpcprofilingpb.ExportProfilesServiceRequest) (*otelgrpcprofilingpb.ExportProfilesServiceResponse, error) {
	ctx, span := s.tracer.Start(ctx, "otel-export")
	defer span.End()

	r, err := normalizer.OtlpRequestToArrowRecord(
		ctx,
		req,
		s.schema,
		s.mem,
	)
	if err != nil {
		return nil, err
	}
	if r == nil {
		return &otelgrpcprofilingpb.ExportProfilesServiceResponse{}, nil
	}
	defer r.Release()

	if r.NumRows() == 0 {
		return &otelgrpcprofilingpb.ExportProfilesServiceResponse{}, nil
	}

	if err := s.ingester.Ingest(ctx, r); err != nil {
		return nil, err
	}

	return &otelgrpcprofilingpb.ExportProfilesServiceResponse{}, nil
}

func (s *ProfileColumnStore) Agents(ctx context.Context, req *profilestorepb.AgentsRequest) (*profilestorepb.AgentsResponse, error) {
	s.mtx.Lock()
	defer s.mtx.Unlock()

	agents := make([]*profilestorepb.Agent, 0, len(s.agents))
	for nodeNameAndIP, ag := range s.agents {
		lastError := ""
		lerr := ag.lastError
		if lerr != nil {
			lastError = lerr.Error()
		}

		id := ag.nodeName
		if id == "" {
			id = nodeNameAndIP
		}

		agents = append(agents, &profilestorepb.Agent{
			Id:               id,
			LastError:        lastError,
			LastPush:         timestamppb.New(ag.lastPush),
			LastPushDuration: durationpb.New(ag.lastPushDuration),
		})
	}

	resp := &profilestorepb.AgentsResponse{
		Agents: agents,
	}

	return resp, nil
}
