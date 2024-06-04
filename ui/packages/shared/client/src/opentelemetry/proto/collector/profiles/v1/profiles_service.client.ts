// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "opentelemetry/proto/collector/profiles/v1/profiles_service.proto" (package "opentelemetry.proto.collector.profiles.v1", syntax proto3)
// tslint:disable
//
// Copyright 2019, OpenTelemetry Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
// // This protofile is copied from
// https://github.com/open-telemetry/opentelemetry-proto-profile/blob/154f8715345b18bac436e4c55e014272cb0fd723/opentelemetry/proto/collector/profiles/v1
//
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ProfilesService } from "./profiles_service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ExportProfilesServiceResponse } from "./profiles_service";
import type { ExportProfilesServiceRequest } from "./profiles_service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Service that can be used to push profiles between one Application instrumented with
 * OpenTelemetry and a collector, or between a collector and a central collector (in this
 * case spans are sent/received to/from multiple Applications).
 *
 * @generated from protobuf service opentelemetry.proto.collector.profiles.v1.ProfilesService
 */
export interface IProfilesServiceClient {
    /**
     * For performance reasons, it is recommended to keep this RPC
     * alive for the entire life of the application.
     *
     * @generated from protobuf rpc: Export(opentelemetry.proto.collector.profiles.v1.ExportProfilesServiceRequest) returns (opentelemetry.proto.collector.profiles.v1.ExportProfilesServiceResponse);
     */
    export(input: ExportProfilesServiceRequest, options?: RpcOptions): UnaryCall<ExportProfilesServiceRequest, ExportProfilesServiceResponse>;
}
/**
 * Service that can be used to push profiles between one Application instrumented with
 * OpenTelemetry and a collector, or between a collector and a central collector (in this
 * case spans are sent/received to/from multiple Applications).
 *
 * @generated from protobuf service opentelemetry.proto.collector.profiles.v1.ProfilesService
 */
export class ProfilesServiceClient implements IProfilesServiceClient, ServiceInfo {
    typeName = ProfilesService.typeName;
    methods = ProfilesService.methods;
    options = ProfilesService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * For performance reasons, it is recommended to keep this RPC
     * alive for the entire life of the application.
     *
     * @generated from protobuf rpc: Export(opentelemetry.proto.collector.profiles.v1.ExportProfilesServiceRequest) returns (opentelemetry.proto.collector.profiles.v1.ExportProfilesServiceResponse);
     */
    export(input: ExportProfilesServiceRequest, options?: RpcOptions): UnaryCall<ExportProfilesServiceRequest, ExportProfilesServiceResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ExportProfilesServiceRequest, ExportProfilesServiceResponse>("unary", this._transport, method, opt, input);
    }
}
