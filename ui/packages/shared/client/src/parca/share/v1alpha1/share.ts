// @generated by protobuf-ts 2.9.1 with parameter generate_dependencies
// @generated from protobuf file "parca/share/v1alpha1/share.proto" (package "parca.share.v1alpha1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { TableArrow } from "../../query/v1alpha1/query";
import { Source } from "../../query/v1alpha1/query";
import { FlamegraphArrow } from "../../query/v1alpha1/query";
import { Callgraph } from "../../query/v1alpha1/query";
import { Top } from "../../query/v1alpha1/query";
import { Flamegraph } from "../../query/v1alpha1/query";
import { ProfileType } from "../../query/v1alpha1/query";
import { GroupBy } from "../../query/v1alpha1/query";
import { RuntimeFilter } from "../../query/v1alpha1/query";
import { QueryRequest_ReportType } from "../../query/v1alpha1/query";
/**
 * UploadRequest represents the request with profile bytes and description.
 *
 * @generated from protobuf message parca.share.v1alpha1.UploadRequest
 */
export interface UploadRequest {
    /**
     * pprof bytes of the profile to be uploaded.
     *
     * @generated from protobuf field: bytes profile = 1;
     */
    profile: Uint8Array;
    /**
     * Description of the profile.
     *
     * @generated from protobuf field: string description = 2;
     */
    description: string;
}
/**
 * UploadResponse represents the response with the link that can be used to access the profile.
 *
 * @generated from protobuf message parca.share.v1alpha1.UploadResponse
 */
export interface UploadResponse {
    /**
     * id of the uploaded profile.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * link that can be used to access the profile.
     *
     * @generated from protobuf field: string link = 2;
     */
    link: string;
}
/**
 * QueryRequest represents the request with the id of the profile to be queried.
 *
 * @generated from protobuf message parca.share.v1alpha1.QueryRequest
 */
export interface QueryRequest {
    /**
     * id of the profile to be queried.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * Type of the profile to be queried.
     *
     * @generated from protobuf field: optional string profile_type = 2;
     */
    profileType?: string;
    /**
     * report_type is the type of report to return
     *
     * @generated from protobuf field: parca.query.v1alpha1.QueryRequest.ReportType report_type = 3;
     */
    reportType: QueryRequest_ReportType;
    /**
     * filter_query is the query string to filter the profile samples
     *
     * @generated from protobuf field: optional string filter_query = 4;
     */
    filterQuery?: string;
    /**
     * node_trim_threshold is the threshold % where the nodes with Value less than this will be removed from the report
     *
     * @generated from protobuf field: optional float node_trim_threshold = 5;
     */
    nodeTrimThreshold?: number;
    /**
     * which runtime frames to filter out, often interpreter frames like python or ruby are not super useful by default
     *
     * @generated from protobuf field: optional parca.query.v1alpha1.RuntimeFilter runtime_filter = 6;
     */
    runtimeFilter?: RuntimeFilter;
    /**
     * group_by indicates the fields to group by
     *
     * @generated from protobuf field: optional parca.query.v1alpha1.GroupBy group_by = 7;
     */
    groupBy?: GroupBy;
}
/**
 * ProfileTypesRequest represents the profile types request with the id of the profile to be queried.
 *
 * @generated from protobuf message parca.share.v1alpha1.ProfileTypesRequest
 */
export interface ProfileTypesRequest {
    /**
     * id of the profile's types to be queried.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * ProfileTypesResponse represents the response with the list of available profile types.
 *
 * @generated from protobuf message parca.share.v1alpha1.ProfileTypesResponse
 */
export interface ProfileTypesResponse {
    /**
     * list of available profile types.
     *
     * @generated from protobuf field: repeated parca.query.v1alpha1.ProfileType types = 1;
     */
    types: ProfileType[];
    /**
     * description of the profile uploaded.
     *
     * @generated from protobuf field: string description = 2;
     */
    description: string;
}
/**
 * QueryResponse is the returned report for the given query.
 *
 * @generated from protobuf message parca.share.v1alpha1.QueryResponse
 */
export interface QueryResponse {
    /**
     * @generated from protobuf oneof: report
     */
    report: {
        oneofKind: "flamegraph";
        /**
         * flamegraph is a flamegraph representation of the report
         *
         * @generated from protobuf field: parca.query.v1alpha1.Flamegraph flamegraph = 1;
         */
        flamegraph: Flamegraph;
    } | {
        oneofKind: "pprof";
        /**
         * pprof is a pprof profile as compressed bytes
         *
         * @generated from protobuf field: bytes pprof = 2;
         */
        pprof: Uint8Array;
    } | {
        oneofKind: "top";
        /**
         * top is a top list representation of the report
         *
         * @generated from protobuf field: parca.query.v1alpha1.Top top = 3;
         */
        top: Top;
    } | {
        oneofKind: "callgraph";
        /**
         * callgraph is a callgraph nodes and edges representation of the report
         *
         * @generated from protobuf field: parca.query.v1alpha1.Callgraph callgraph = 4;
         */
        callgraph: Callgraph;
    } | {
        oneofKind: "flamegraphArrow";
        /**
         * flamegraph_arrow is a flamegraph encoded as a arrow record
         *
         * @generated from protobuf field: parca.query.v1alpha1.FlamegraphArrow flamegraph_arrow = 7;
         */
        flamegraphArrow: FlamegraphArrow;
    } | {
        oneofKind: "source";
        /**
         * source is the source report type result
         *
         * @generated from protobuf field: parca.query.v1alpha1.Source source = 8;
         */
        source: Source;
    } | {
        oneofKind: "tableArrow";
        /**
         * table_arrow is a table encoded as a arrow record
         *
         * @generated from protobuf field: parca.query.v1alpha1.TableArrow table_arrow = 9;
         */
        tableArrow: TableArrow;
    } | {
        oneofKind: undefined;
    };
    /**
     * total is the total number of samples shown in the report.
     *
     * @generated from protobuf field: int64 total = 5;
     */
    total: bigint;
    /**
     * filtered is the number of samples filtered out of the report.
     *
     * @generated from protobuf field: int64 filtered = 6;
     */
    filtered: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class UploadRequest$Type extends MessageType<UploadRequest> {
    constructor() {
        super("parca.share.v1alpha1.UploadRequest", [
            { no: 1, name: "profile", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UploadRequest>): UploadRequest {
        const message = { profile: new Uint8Array(0), description: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UploadRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadRequest): UploadRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes profile */ 1:
                    message.profile = reader.bytes();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UploadRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes profile = 1; */
        if (message.profile.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.profile);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.share.v1alpha1.UploadRequest
 */
export const UploadRequest = new UploadRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UploadResponse$Type extends MessageType<UploadResponse> {
    constructor() {
        super("parca.share.v1alpha1.UploadResponse", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "link", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UploadResponse>): UploadResponse {
        const message = { id: "", link: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UploadResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadResponse): UploadResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string link */ 2:
                    message.link = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UploadResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string link = 2; */
        if (message.link !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.link);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.share.v1alpha1.UploadResponse
 */
export const UploadResponse = new UploadResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryRequest$Type extends MessageType<QueryRequest> {
    constructor() {
        super("parca.share.v1alpha1.QueryRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "profile_type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "report_type", kind: "enum", T: () => ["parca.query.v1alpha1.QueryRequest.ReportType", QueryRequest_ReportType, "REPORT_TYPE_"] },
            { no: 4, name: "filter_query", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "node_trim_threshold", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 6, name: "runtime_filter", kind: "message", T: () => RuntimeFilter },
            { no: 7, name: "group_by", kind: "message", T: () => GroupBy }
        ]);
    }
    create(value?: PartialMessage<QueryRequest>): QueryRequest {
        const message = { id: "", reportType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryRequest): QueryRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* optional string profile_type */ 2:
                    message.profileType = reader.string();
                    break;
                case /* parca.query.v1alpha1.QueryRequest.ReportType report_type */ 3:
                    message.reportType = reader.int32();
                    break;
                case /* optional string filter_query */ 4:
                    message.filterQuery = reader.string();
                    break;
                case /* optional float node_trim_threshold */ 5:
                    message.nodeTrimThreshold = reader.float();
                    break;
                case /* optional parca.query.v1alpha1.RuntimeFilter runtime_filter */ 6:
                    message.runtimeFilter = RuntimeFilter.internalBinaryRead(reader, reader.uint32(), options, message.runtimeFilter);
                    break;
                case /* optional parca.query.v1alpha1.GroupBy group_by */ 7:
                    message.groupBy = GroupBy.internalBinaryRead(reader, reader.uint32(), options, message.groupBy);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: QueryRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* optional string profile_type = 2; */
        if (message.profileType !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.profileType);
        /* parca.query.v1alpha1.QueryRequest.ReportType report_type = 3; */
        if (message.reportType !== 0)
            writer.tag(3, WireType.Varint).int32(message.reportType);
        /* optional string filter_query = 4; */
        if (message.filterQuery !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.filterQuery);
        /* optional float node_trim_threshold = 5; */
        if (message.nodeTrimThreshold !== undefined)
            writer.tag(5, WireType.Bit32).float(message.nodeTrimThreshold);
        /* optional parca.query.v1alpha1.RuntimeFilter runtime_filter = 6; */
        if (message.runtimeFilter)
            RuntimeFilter.internalBinaryWrite(message.runtimeFilter, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* optional parca.query.v1alpha1.GroupBy group_by = 7; */
        if (message.groupBy)
            GroupBy.internalBinaryWrite(message.groupBy, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.share.v1alpha1.QueryRequest
 */
export const QueryRequest = new QueryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProfileTypesRequest$Type extends MessageType<ProfileTypesRequest> {
    constructor() {
        super("parca.share.v1alpha1.ProfileTypesRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ProfileTypesRequest>): ProfileTypesRequest {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProfileTypesRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProfileTypesRequest): ProfileTypesRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ProfileTypesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.share.v1alpha1.ProfileTypesRequest
 */
export const ProfileTypesRequest = new ProfileTypesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProfileTypesResponse$Type extends MessageType<ProfileTypesResponse> {
    constructor() {
        super("parca.share.v1alpha1.ProfileTypesResponse", [
            { no: 1, name: "types", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ProfileType },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ProfileTypesResponse>): ProfileTypesResponse {
        const message = { types: [], description: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProfileTypesResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProfileTypesResponse): ProfileTypesResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated parca.query.v1alpha1.ProfileType types */ 1:
                    message.types.push(ProfileType.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ProfileTypesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated parca.query.v1alpha1.ProfileType types = 1; */
        for (let i = 0; i < message.types.length; i++)
            ProfileType.internalBinaryWrite(message.types[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.share.v1alpha1.ProfileTypesResponse
 */
export const ProfileTypesResponse = new ProfileTypesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryResponse$Type extends MessageType<QueryResponse> {
    constructor() {
        super("parca.share.v1alpha1.QueryResponse", [
            { no: 1, name: "flamegraph", kind: "message", oneof: "report", T: () => Flamegraph },
            { no: 2, name: "pprof", kind: "scalar", oneof: "report", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "top", kind: "message", oneof: "report", T: () => Top },
            { no: 4, name: "callgraph", kind: "message", oneof: "report", T: () => Callgraph },
            { no: 7, name: "flamegraph_arrow", kind: "message", oneof: "report", T: () => FlamegraphArrow },
            { no: 8, name: "source", kind: "message", oneof: "report", T: () => Source },
            { no: 9, name: "table_arrow", kind: "message", oneof: "report", T: () => TableArrow },
            { no: 5, name: "total", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "filtered", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<QueryResponse>): QueryResponse {
        const message = { report: { oneofKind: undefined }, total: 0n, filtered: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryResponse): QueryResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* parca.query.v1alpha1.Flamegraph flamegraph */ 1:
                    message.report = {
                        oneofKind: "flamegraph",
                        flamegraph: Flamegraph.internalBinaryRead(reader, reader.uint32(), options, (message.report as any).flamegraph)
                    };
                    break;
                case /* bytes pprof */ 2:
                    message.report = {
                        oneofKind: "pprof",
                        pprof: reader.bytes()
                    };
                    break;
                case /* parca.query.v1alpha1.Top top */ 3:
                    message.report = {
                        oneofKind: "top",
                        top: Top.internalBinaryRead(reader, reader.uint32(), options, (message.report as any).top)
                    };
                    break;
                case /* parca.query.v1alpha1.Callgraph callgraph */ 4:
                    message.report = {
                        oneofKind: "callgraph",
                        callgraph: Callgraph.internalBinaryRead(reader, reader.uint32(), options, (message.report as any).callgraph)
                    };
                    break;
                case /* parca.query.v1alpha1.FlamegraphArrow flamegraph_arrow */ 7:
                    message.report = {
                        oneofKind: "flamegraphArrow",
                        flamegraphArrow: FlamegraphArrow.internalBinaryRead(reader, reader.uint32(), options, (message.report as any).flamegraphArrow)
                    };
                    break;
                case /* parca.query.v1alpha1.Source source */ 8:
                    message.report = {
                        oneofKind: "source",
                        source: Source.internalBinaryRead(reader, reader.uint32(), options, (message.report as any).source)
                    };
                    break;
                case /* parca.query.v1alpha1.TableArrow table_arrow */ 9:
                    message.report = {
                        oneofKind: "tableArrow",
                        tableArrow: TableArrow.internalBinaryRead(reader, reader.uint32(), options, (message.report as any).tableArrow)
                    };
                    break;
                case /* int64 total */ 5:
                    message.total = reader.int64().toBigInt();
                    break;
                case /* int64 filtered */ 6:
                    message.filtered = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: QueryResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* parca.query.v1alpha1.Flamegraph flamegraph = 1; */
        if (message.report.oneofKind === "flamegraph")
            Flamegraph.internalBinaryWrite(message.report.flamegraph, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bytes pprof = 2; */
        if (message.report.oneofKind === "pprof")
            writer.tag(2, WireType.LengthDelimited).bytes(message.report.pprof);
        /* parca.query.v1alpha1.Top top = 3; */
        if (message.report.oneofKind === "top")
            Top.internalBinaryWrite(message.report.top, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* parca.query.v1alpha1.Callgraph callgraph = 4; */
        if (message.report.oneofKind === "callgraph")
            Callgraph.internalBinaryWrite(message.report.callgraph, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* parca.query.v1alpha1.FlamegraphArrow flamegraph_arrow = 7; */
        if (message.report.oneofKind === "flamegraphArrow")
            FlamegraphArrow.internalBinaryWrite(message.report.flamegraphArrow, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* parca.query.v1alpha1.Source source = 8; */
        if (message.report.oneofKind === "source")
            Source.internalBinaryWrite(message.report.source, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* parca.query.v1alpha1.TableArrow table_arrow = 9; */
        if (message.report.oneofKind === "tableArrow")
            TableArrow.internalBinaryWrite(message.report.tableArrow, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* int64 total = 5; */
        if (message.total !== 0n)
            writer.tag(5, WireType.Varint).int64(message.total);
        /* int64 filtered = 6; */
        if (message.filtered !== 0n)
            writer.tag(6, WireType.Varint).int64(message.filtered);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.share.v1alpha1.QueryResponse
 */
export const QueryResponse = new QueryResponse$Type();
/**
 * @generated ServiceType for protobuf service parca.share.v1alpha1.ShareService
 */
export const ShareService = new ServiceType("parca.share.v1alpha1.ShareService", [
    { name: "Upload", options: {}, I: UploadRequest, O: UploadResponse },
    { name: "Query", options: {}, I: QueryRequest, O: QueryResponse },
    { name: "ProfileTypes", options: {}, I: ProfileTypesRequest, O: ProfileTypesResponse }
]);
