// source: OpenApiCommonModelMessages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ProtoErrorCode', null, global);
goog.exportSymbol('proto.ProtoPayloadType', null, global);
/**
 * @enum {number}
 */
proto.ProtoPayloadType = {
  PROTO_MESSAGE: 5,
  ERROR_RES: 50,
  HEARTBEAT_EVENT: 51
};

/**
 * @enum {number}
 */
proto.ProtoErrorCode = {
  UNKNOWN_ERROR: 1,
  UNSUPPORTED_MESSAGE: 2,
  INVALID_REQUEST: 3,
  TIMEOUT_ERROR: 5,
  ENTITY_NOT_FOUND: 6,
  CANT_ROUTE_REQUEST: 7,
  FRAME_TOO_LONG: 8,
  MARKET_CLOSED: 9,
  CONCURRENT_MODIFICATION: 10,
  BLOCKED_PAYLOAD_TYPE: 11
};

goog.object.extend(exports, proto);
