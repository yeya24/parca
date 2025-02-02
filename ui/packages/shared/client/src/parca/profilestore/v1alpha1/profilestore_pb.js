// source: parca/profilestore/v1alpha1/profilestore.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.parca.profilestore.v1alpha1.Label', null, global);
goog.exportSymbol('proto.parca.profilestore.v1alpha1.LabelSet', null, global);
goog.exportSymbol('proto.parca.profilestore.v1alpha1.RawProfileSeries', null, global);
goog.exportSymbol('proto.parca.profilestore.v1alpha1.RawSample', null, global);
goog.exportSymbol('proto.parca.profilestore.v1alpha1.WriteRawRequest', null, global);
goog.exportSymbol('proto.parca.profilestore.v1alpha1.WriteRawResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.parca.profilestore.v1alpha1.WriteRawRequest.repeatedFields_, null);
};
goog.inherits(proto.parca.profilestore.v1alpha1.WriteRawRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.parca.profilestore.v1alpha1.WriteRawRequest.displayName = 'proto.parca.profilestore.v1alpha1.WriteRawRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.parca.profilestore.v1alpha1.WriteRawResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.parca.profilestore.v1alpha1.WriteRawResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.parca.profilestore.v1alpha1.WriteRawResponse.displayName = 'proto.parca.profilestore.v1alpha1.WriteRawResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.parca.profilestore.v1alpha1.RawProfileSeries.repeatedFields_, null);
};
goog.inherits(proto.parca.profilestore.v1alpha1.RawProfileSeries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.parca.profilestore.v1alpha1.RawProfileSeries.displayName = 'proto.parca.profilestore.v1alpha1.RawProfileSeries';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.parca.profilestore.v1alpha1.Label = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.parca.profilestore.v1alpha1.Label, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.parca.profilestore.v1alpha1.Label.displayName = 'proto.parca.profilestore.v1alpha1.Label';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.parca.profilestore.v1alpha1.LabelSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.parca.profilestore.v1alpha1.LabelSet.repeatedFields_, null);
};
goog.inherits(proto.parca.profilestore.v1alpha1.LabelSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.parca.profilestore.v1alpha1.LabelSet.displayName = 'proto.parca.profilestore.v1alpha1.LabelSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.parca.profilestore.v1alpha1.RawSample = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.parca.profilestore.v1alpha1.RawSample, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.parca.profilestore.v1alpha1.RawSample.displayName = 'proto.parca.profilestore.v1alpha1.RawSample';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.parca.profilestore.v1alpha1.WriteRawRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.parca.profilestore.v1alpha1.WriteRawRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
    seriesList: jspb.Message.toObjectList(msg.getSeriesList(),
    proto.parca.profilestore.v1alpha1.RawProfileSeries.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.parca.profilestore.v1alpha1.WriteRawRequest}
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.parca.profilestore.v1alpha1.WriteRawRequest;
  return proto.parca.profilestore.v1alpha1.WriteRawRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.parca.profilestore.v1alpha1.WriteRawRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.parca.profilestore.v1alpha1.WriteRawRequest}
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenant(value);
      break;
    case 2:
      var value = new proto.parca.profilestore.v1alpha1.RawProfileSeries;
      reader.readMessage(value,proto.parca.profilestore.v1alpha1.RawProfileSeries.deserializeBinaryFromReader);
      msg.addSeries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.parca.profilestore.v1alpha1.WriteRawRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.parca.profilestore.v1alpha1.WriteRawRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSeriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.parca.profilestore.v1alpha1.RawProfileSeries.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.parca.profilestore.v1alpha1.WriteRawRequest} returns this
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated RawProfileSeries series = 2;
 * @return {!Array<!proto.parca.profilestore.v1alpha1.RawProfileSeries>}
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.prototype.getSeriesList = function() {
  return /** @type{!Array<!proto.parca.profilestore.v1alpha1.RawProfileSeries>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.parca.profilestore.v1alpha1.RawProfileSeries, 2));
};


/**
 * @param {!Array<!proto.parca.profilestore.v1alpha1.RawProfileSeries>} value
 * @return {!proto.parca.profilestore.v1alpha1.WriteRawRequest} returns this
*/
proto.parca.profilestore.v1alpha1.WriteRawRequest.prototype.setSeriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.parca.profilestore.v1alpha1.RawProfileSeries=} opt_value
 * @param {number=} opt_index
 * @return {!proto.parca.profilestore.v1alpha1.RawProfileSeries}
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.prototype.addSeries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.parca.profilestore.v1alpha1.RawProfileSeries, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.parca.profilestore.v1alpha1.WriteRawRequest} returns this
 */
proto.parca.profilestore.v1alpha1.WriteRawRequest.prototype.clearSeriesList = function() {
  return this.setSeriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.parca.profilestore.v1alpha1.WriteRawResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.parca.profilestore.v1alpha1.WriteRawResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.parca.profilestore.v1alpha1.WriteRawResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.WriteRawResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.parca.profilestore.v1alpha1.WriteRawResponse}
 */
proto.parca.profilestore.v1alpha1.WriteRawResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.parca.profilestore.v1alpha1.WriteRawResponse;
  return proto.parca.profilestore.v1alpha1.WriteRawResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.parca.profilestore.v1alpha1.WriteRawResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.parca.profilestore.v1alpha1.WriteRawResponse}
 */
proto.parca.profilestore.v1alpha1.WriteRawResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.parca.profilestore.v1alpha1.WriteRawResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.parca.profilestore.v1alpha1.WriteRawResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.parca.profilestore.v1alpha1.WriteRawResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.WriteRawResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.prototype.toObject = function(opt_includeInstance) {
  return proto.parca.profilestore.v1alpha1.RawProfileSeries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.parca.profilestore.v1alpha1.RawProfileSeries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.toObject = function(includeInstance, msg) {
  var f, obj = {
    labels: (f = msg.getLabels()) && proto.parca.profilestore.v1alpha1.LabelSet.toObject(includeInstance, f),
    samplesList: jspb.Message.toObjectList(msg.getSamplesList(),
    proto.parca.profilestore.v1alpha1.RawSample.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.parca.profilestore.v1alpha1.RawProfileSeries}
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.parca.profilestore.v1alpha1.RawProfileSeries;
  return proto.parca.profilestore.v1alpha1.RawProfileSeries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.parca.profilestore.v1alpha1.RawProfileSeries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.parca.profilestore.v1alpha1.RawProfileSeries}
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.parca.profilestore.v1alpha1.LabelSet;
      reader.readMessage(value,proto.parca.profilestore.v1alpha1.LabelSet.deserializeBinaryFromReader);
      msg.setLabels(value);
      break;
    case 2:
      var value = new proto.parca.profilestore.v1alpha1.RawSample;
      reader.readMessage(value,proto.parca.profilestore.v1alpha1.RawSample.deserializeBinaryFromReader);
      msg.addSamples(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.parca.profilestore.v1alpha1.RawProfileSeries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.parca.profilestore.v1alpha1.RawProfileSeries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabels();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.parca.profilestore.v1alpha1.LabelSet.serializeBinaryToWriter
    );
  }
  f = message.getSamplesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.parca.profilestore.v1alpha1.RawSample.serializeBinaryToWriter
    );
  }
};


/**
 * optional LabelSet labels = 1;
 * @return {?proto.parca.profilestore.v1alpha1.LabelSet}
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.prototype.getLabels = function() {
  return /** @type{?proto.parca.profilestore.v1alpha1.LabelSet} */ (
    jspb.Message.getWrapperField(this, proto.parca.profilestore.v1alpha1.LabelSet, 1));
};


/**
 * @param {?proto.parca.profilestore.v1alpha1.LabelSet|undefined} value
 * @return {!proto.parca.profilestore.v1alpha1.RawProfileSeries} returns this
*/
proto.parca.profilestore.v1alpha1.RawProfileSeries.prototype.setLabels = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.parca.profilestore.v1alpha1.RawProfileSeries} returns this
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.prototype.clearLabels = function() {
  return this.setLabels(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.prototype.hasLabels = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated RawSample samples = 2;
 * @return {!Array<!proto.parca.profilestore.v1alpha1.RawSample>}
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.prototype.getSamplesList = function() {
  return /** @type{!Array<!proto.parca.profilestore.v1alpha1.RawSample>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.parca.profilestore.v1alpha1.RawSample, 2));
};


/**
 * @param {!Array<!proto.parca.profilestore.v1alpha1.RawSample>} value
 * @return {!proto.parca.profilestore.v1alpha1.RawProfileSeries} returns this
*/
proto.parca.profilestore.v1alpha1.RawProfileSeries.prototype.setSamplesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.parca.profilestore.v1alpha1.RawSample=} opt_value
 * @param {number=} opt_index
 * @return {!proto.parca.profilestore.v1alpha1.RawSample}
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.prototype.addSamples = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.parca.profilestore.v1alpha1.RawSample, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.parca.profilestore.v1alpha1.RawProfileSeries} returns this
 */
proto.parca.profilestore.v1alpha1.RawProfileSeries.prototype.clearSamplesList = function() {
  return this.setSamplesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.parca.profilestore.v1alpha1.Label.prototype.toObject = function(opt_includeInstance) {
  return proto.parca.profilestore.v1alpha1.Label.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.parca.profilestore.v1alpha1.Label} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.Label.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.parca.profilestore.v1alpha1.Label}
 */
proto.parca.profilestore.v1alpha1.Label.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.parca.profilestore.v1alpha1.Label;
  return proto.parca.profilestore.v1alpha1.Label.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.parca.profilestore.v1alpha1.Label} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.parca.profilestore.v1alpha1.Label}
 */
proto.parca.profilestore.v1alpha1.Label.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.parca.profilestore.v1alpha1.Label.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.parca.profilestore.v1alpha1.Label.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.parca.profilestore.v1alpha1.Label} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.Label.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.parca.profilestore.v1alpha1.Label.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.parca.profilestore.v1alpha1.Label} returns this
 */
proto.parca.profilestore.v1alpha1.Label.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.parca.profilestore.v1alpha1.Label.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.parca.profilestore.v1alpha1.Label} returns this
 */
proto.parca.profilestore.v1alpha1.Label.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.parca.profilestore.v1alpha1.LabelSet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.parca.profilestore.v1alpha1.LabelSet.prototype.toObject = function(opt_includeInstance) {
  return proto.parca.profilestore.v1alpha1.LabelSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.parca.profilestore.v1alpha1.LabelSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.LabelSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    proto.parca.profilestore.v1alpha1.Label.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.parca.profilestore.v1alpha1.LabelSet}
 */
proto.parca.profilestore.v1alpha1.LabelSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.parca.profilestore.v1alpha1.LabelSet;
  return proto.parca.profilestore.v1alpha1.LabelSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.parca.profilestore.v1alpha1.LabelSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.parca.profilestore.v1alpha1.LabelSet}
 */
proto.parca.profilestore.v1alpha1.LabelSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.parca.profilestore.v1alpha1.Label;
      reader.readMessage(value,proto.parca.profilestore.v1alpha1.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.parca.profilestore.v1alpha1.LabelSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.parca.profilestore.v1alpha1.LabelSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.parca.profilestore.v1alpha1.LabelSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.LabelSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.parca.profilestore.v1alpha1.Label.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Label labels = 1;
 * @return {!Array<!proto.parca.profilestore.v1alpha1.Label>}
 */
proto.parca.profilestore.v1alpha1.LabelSet.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.parca.profilestore.v1alpha1.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.parca.profilestore.v1alpha1.Label, 1));
};


/**
 * @param {!Array<!proto.parca.profilestore.v1alpha1.Label>} value
 * @return {!proto.parca.profilestore.v1alpha1.LabelSet} returns this
*/
proto.parca.profilestore.v1alpha1.LabelSet.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.parca.profilestore.v1alpha1.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.parca.profilestore.v1alpha1.Label}
 */
proto.parca.profilestore.v1alpha1.LabelSet.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.parca.profilestore.v1alpha1.Label, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.parca.profilestore.v1alpha1.LabelSet} returns this
 */
proto.parca.profilestore.v1alpha1.LabelSet.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.parca.profilestore.v1alpha1.RawSample.prototype.toObject = function(opt_includeInstance) {
  return proto.parca.profilestore.v1alpha1.RawSample.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.parca.profilestore.v1alpha1.RawSample} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.RawSample.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawProfile: msg.getRawProfile_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.parca.profilestore.v1alpha1.RawSample}
 */
proto.parca.profilestore.v1alpha1.RawSample.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.parca.profilestore.v1alpha1.RawSample;
  return proto.parca.profilestore.v1alpha1.RawSample.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.parca.profilestore.v1alpha1.RawSample} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.parca.profilestore.v1alpha1.RawSample}
 */
proto.parca.profilestore.v1alpha1.RawSample.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRawProfile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.parca.profilestore.v1alpha1.RawSample.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.parca.profilestore.v1alpha1.RawSample.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.parca.profilestore.v1alpha1.RawSample} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.parca.profilestore.v1alpha1.RawSample.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawProfile_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes raw_profile = 1;
 * @return {!(string|Uint8Array)}
 */
proto.parca.profilestore.v1alpha1.RawSample.prototype.getRawProfile = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes raw_profile = 1;
 * This is a type-conversion wrapper around `getRawProfile()`
 * @return {string}
 */
proto.parca.profilestore.v1alpha1.RawSample.prototype.getRawProfile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRawProfile()));
};


/**
 * optional bytes raw_profile = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRawProfile()`
 * @return {!Uint8Array}
 */
proto.parca.profilestore.v1alpha1.RawSample.prototype.getRawProfile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRawProfile()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.parca.profilestore.v1alpha1.RawSample} returns this
 */
proto.parca.profilestore.v1alpha1.RawSample.prototype.setRawProfile = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


goog.object.extend(exports, proto.parca.profilestore.v1alpha1);
