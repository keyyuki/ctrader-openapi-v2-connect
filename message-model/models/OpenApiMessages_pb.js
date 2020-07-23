// source: OpenApiMessages.proto
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

var OpenApiModelMessages_pb = require('./OpenApiModelMessages_pb.js');
goog.object.extend(proto, OpenApiModelMessages_pb);
goog.exportSymbol('proto.ProtoOAAccountAuthReq', null, global);
goog.exportSymbol('proto.ProtoOAAccountAuthRes', null, global);
goog.exportSymbol('proto.ProtoOAAccountDisconnectEvent', null, global);
goog.exportSymbol('proto.ProtoOAAccountLogoutReq', null, global);
goog.exportSymbol('proto.ProtoOAAccountLogoutRes', null, global);
goog.exportSymbol('proto.ProtoOAAccountsTokenInvalidatedEvent', null, global);
goog.exportSymbol('proto.ProtoOAAmendOrderReq', null, global);
goog.exportSymbol('proto.ProtoOAAmendPositionSLTPReq', null, global);
goog.exportSymbol('proto.ProtoOAApplicationAuthReq', null, global);
goog.exportSymbol('proto.ProtoOAApplicationAuthRes', null, global);
goog.exportSymbol('proto.ProtoOAAssetClassListReq', null, global);
goog.exportSymbol('proto.ProtoOAAssetClassListRes', null, global);
goog.exportSymbol('proto.ProtoOAAssetListReq', null, global);
goog.exportSymbol('proto.ProtoOAAssetListRes', null, global);
goog.exportSymbol('proto.ProtoOACancelOrderReq', null, global);
goog.exportSymbol('proto.ProtoOACashFlowHistoryListReq', null, global);
goog.exportSymbol('proto.ProtoOACashFlowHistoryListRes', null, global);
goog.exportSymbol('proto.ProtoOAClientDisconnectEvent', null, global);
goog.exportSymbol('proto.ProtoOAClosePositionReq', null, global);
goog.exportSymbol('proto.ProtoOADealListReq', null, global);
goog.exportSymbol('proto.ProtoOADealListRes', null, global);
goog.exportSymbol('proto.ProtoOADepthEvent', null, global);
goog.exportSymbol('proto.ProtoOAErrorRes', null, global);
goog.exportSymbol('proto.ProtoOAExecutionEvent', null, global);
goog.exportSymbol('proto.ProtoOAExpectedMarginReq', null, global);
goog.exportSymbol('proto.ProtoOAExpectedMarginRes', null, global);
goog.exportSymbol('proto.ProtoOAGetAccountListByAccessTokenReq', null, global);
goog.exportSymbol('proto.ProtoOAGetAccountListByAccessTokenRes', null, global);
goog.exportSymbol('proto.ProtoOAGetCtidProfileByTokenReq', null, global);
goog.exportSymbol('proto.ProtoOAGetCtidProfileByTokenRes', null, global);
goog.exportSymbol('proto.ProtoOAGetTickDataReq', null, global);
goog.exportSymbol('proto.ProtoOAGetTickDataRes', null, global);
goog.exportSymbol('proto.ProtoOAGetTrendbarsReq', null, global);
goog.exportSymbol('proto.ProtoOAGetTrendbarsRes', null, global);
goog.exportSymbol('proto.ProtoOAMarginCallListReq', null, global);
goog.exportSymbol('proto.ProtoOAMarginCallListRes', null, global);
goog.exportSymbol('proto.ProtoOAMarginCallTriggerEvent', null, global);
goog.exportSymbol('proto.ProtoOAMarginCallUpdateEvent', null, global);
goog.exportSymbol('proto.ProtoOAMarginCallUpdateReq', null, global);
goog.exportSymbol('proto.ProtoOAMarginCallUpdateRes', null, global);
goog.exportSymbol('proto.ProtoOAMarginChangedEvent', null, global);
goog.exportSymbol('proto.ProtoOANewOrderReq', null, global);
goog.exportSymbol('proto.ProtoOAOrderErrorEvent', null, global);
goog.exportSymbol('proto.ProtoOAReconcileReq', null, global);
goog.exportSymbol('proto.ProtoOAReconcileRes', null, global);
goog.exportSymbol('proto.ProtoOARefreshTokenReq', null, global);
goog.exportSymbol('proto.ProtoOARefreshTokenRes', null, global);
goog.exportSymbol('proto.ProtoOASpotEvent', null, global);
goog.exportSymbol('proto.ProtoOASubscribeDepthQuotesReq', null, global);
goog.exportSymbol('proto.ProtoOASubscribeDepthQuotesRes', null, global);
goog.exportSymbol('proto.ProtoOASubscribeLiveTrendbarReq', null, global);
goog.exportSymbol('proto.ProtoOASubscribeLiveTrendbarRes', null, global);
goog.exportSymbol('proto.ProtoOASubscribeSpotsReq', null, global);
goog.exportSymbol('proto.ProtoOASubscribeSpotsRes', null, global);
goog.exportSymbol('proto.ProtoOASymbolByIdReq', null, global);
goog.exportSymbol('proto.ProtoOASymbolByIdRes', null, global);
goog.exportSymbol('proto.ProtoOASymbolCategoryListReq', null, global);
goog.exportSymbol('proto.ProtoOASymbolCategoryListRes', null, global);
goog.exportSymbol('proto.ProtoOASymbolChangedEvent', null, global);
goog.exportSymbol('proto.ProtoOASymbolsForConversionReq', null, global);
goog.exportSymbol('proto.ProtoOASymbolsForConversionRes', null, global);
goog.exportSymbol('proto.ProtoOASymbolsListReq', null, global);
goog.exportSymbol('proto.ProtoOASymbolsListRes', null, global);
goog.exportSymbol('proto.ProtoOATraderReq', null, global);
goog.exportSymbol('proto.ProtoOATraderRes', null, global);
goog.exportSymbol('proto.ProtoOATraderUpdatedEvent', null, global);
goog.exportSymbol('proto.ProtoOATrailingSLChangedEvent', null, global);
goog.exportSymbol('proto.ProtoOAUnsubscribeDepthQuotesReq', null, global);
goog.exportSymbol('proto.ProtoOAUnsubscribeDepthQuotesRes', null, global);
goog.exportSymbol('proto.ProtoOAUnsubscribeLiveTrendbarReq', null, global);
goog.exportSymbol('proto.ProtoOAUnsubscribeLiveTrendbarRes', null, global);
goog.exportSymbol('proto.ProtoOAUnsubscribeSpotsReq', null, global);
goog.exportSymbol('proto.ProtoOAUnsubscribeSpotsRes', null, global);
goog.exportSymbol('proto.ProtoOAVersionReq', null, global);
goog.exportSymbol('proto.ProtoOAVersionRes', null, global);
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
proto.ProtoOAApplicationAuthReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAApplicationAuthReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAApplicationAuthReq.displayName = 'proto.ProtoOAApplicationAuthReq';
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
proto.ProtoOAApplicationAuthRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAApplicationAuthRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAApplicationAuthRes.displayName = 'proto.ProtoOAApplicationAuthRes';
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
proto.ProtoOAAccountAuthReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAAccountAuthReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAccountAuthReq.displayName = 'proto.ProtoOAAccountAuthReq';
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
proto.ProtoOAAccountAuthRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAAccountAuthRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAccountAuthRes.displayName = 'proto.ProtoOAAccountAuthRes';
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
proto.ProtoOAErrorRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAErrorRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAErrorRes.displayName = 'proto.ProtoOAErrorRes';
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
proto.ProtoOAClientDisconnectEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAClientDisconnectEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAClientDisconnectEvent.displayName = 'proto.ProtoOAClientDisconnectEvent';
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
proto.ProtoOAAccountsTokenInvalidatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAAccountsTokenInvalidatedEvent.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAAccountsTokenInvalidatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAccountsTokenInvalidatedEvent.displayName = 'proto.ProtoOAAccountsTokenInvalidatedEvent';
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
proto.ProtoOAVersionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAVersionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAVersionReq.displayName = 'proto.ProtoOAVersionReq';
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
proto.ProtoOAVersionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAVersionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAVersionRes.displayName = 'proto.ProtoOAVersionRes';
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
proto.ProtoOANewOrderReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOANewOrderReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOANewOrderReq.displayName = 'proto.ProtoOANewOrderReq';
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
proto.ProtoOAExecutionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAExecutionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAExecutionEvent.displayName = 'proto.ProtoOAExecutionEvent';
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
proto.ProtoOACancelOrderReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOACancelOrderReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOACancelOrderReq.displayName = 'proto.ProtoOACancelOrderReq';
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
proto.ProtoOAAmendOrderReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAAmendOrderReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAmendOrderReq.displayName = 'proto.ProtoOAAmendOrderReq';
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
proto.ProtoOAAmendPositionSLTPReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAAmendPositionSLTPReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAmendPositionSLTPReq.displayName = 'proto.ProtoOAAmendPositionSLTPReq';
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
proto.ProtoOAClosePositionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAClosePositionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAClosePositionReq.displayName = 'proto.ProtoOAClosePositionReq';
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
proto.ProtoOATrailingSLChangedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOATrailingSLChangedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOATrailingSLChangedEvent.displayName = 'proto.ProtoOATrailingSLChangedEvent';
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
proto.ProtoOAAssetListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAAssetListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAssetListReq.displayName = 'proto.ProtoOAAssetListReq';
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
proto.ProtoOAAssetListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAAssetListRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAAssetListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAssetListRes.displayName = 'proto.ProtoOAAssetListRes';
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
proto.ProtoOASymbolsListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOASymbolsListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASymbolsListReq.displayName = 'proto.ProtoOASymbolsListReq';
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
proto.ProtoOASymbolsListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOASymbolsListRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOASymbolsListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASymbolsListRes.displayName = 'proto.ProtoOASymbolsListRes';
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
proto.ProtoOASymbolByIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOASymbolByIdReq.repeatedFields_, null);
};
goog.inherits(proto.ProtoOASymbolByIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASymbolByIdReq.displayName = 'proto.ProtoOASymbolByIdReq';
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
proto.ProtoOASymbolByIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOASymbolByIdRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOASymbolByIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASymbolByIdRes.displayName = 'proto.ProtoOASymbolByIdRes';
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
proto.ProtoOASymbolsForConversionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOASymbolsForConversionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASymbolsForConversionReq.displayName = 'proto.ProtoOASymbolsForConversionReq';
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
proto.ProtoOASymbolsForConversionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOASymbolsForConversionRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOASymbolsForConversionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASymbolsForConversionRes.displayName = 'proto.ProtoOASymbolsForConversionRes';
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
proto.ProtoOASymbolChangedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOASymbolChangedEvent.repeatedFields_, null);
};
goog.inherits(proto.ProtoOASymbolChangedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASymbolChangedEvent.displayName = 'proto.ProtoOASymbolChangedEvent';
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
proto.ProtoOAAssetClassListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAAssetClassListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAssetClassListReq.displayName = 'proto.ProtoOAAssetClassListReq';
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
proto.ProtoOAAssetClassListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAAssetClassListRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAAssetClassListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAssetClassListRes.displayName = 'proto.ProtoOAAssetClassListRes';
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
proto.ProtoOATraderReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOATraderReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOATraderReq.displayName = 'proto.ProtoOATraderReq';
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
proto.ProtoOATraderRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOATraderRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOATraderRes.displayName = 'proto.ProtoOATraderRes';
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
proto.ProtoOATraderUpdatedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOATraderUpdatedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOATraderUpdatedEvent.displayName = 'proto.ProtoOATraderUpdatedEvent';
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
proto.ProtoOAReconcileReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAReconcileReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAReconcileReq.displayName = 'proto.ProtoOAReconcileReq';
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
proto.ProtoOAReconcileRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAReconcileRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAReconcileRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAReconcileRes.displayName = 'proto.ProtoOAReconcileRes';
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
proto.ProtoOAOrderErrorEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAOrderErrorEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAOrderErrorEvent.displayName = 'proto.ProtoOAOrderErrorEvent';
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
proto.ProtoOADealListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOADealListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOADealListReq.displayName = 'proto.ProtoOADealListReq';
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
proto.ProtoOADealListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOADealListRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOADealListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOADealListRes.displayName = 'proto.ProtoOADealListRes';
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
proto.ProtoOAExpectedMarginReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAExpectedMarginReq.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAExpectedMarginReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAExpectedMarginReq.displayName = 'proto.ProtoOAExpectedMarginReq';
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
proto.ProtoOAExpectedMarginRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAExpectedMarginRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAExpectedMarginRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAExpectedMarginRes.displayName = 'proto.ProtoOAExpectedMarginRes';
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
proto.ProtoOAMarginChangedEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAMarginChangedEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAMarginChangedEvent.displayName = 'proto.ProtoOAMarginChangedEvent';
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
proto.ProtoOACashFlowHistoryListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOACashFlowHistoryListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOACashFlowHistoryListReq.displayName = 'proto.ProtoOACashFlowHistoryListReq';
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
proto.ProtoOACashFlowHistoryListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOACashFlowHistoryListRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOACashFlowHistoryListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOACashFlowHistoryListRes.displayName = 'proto.ProtoOACashFlowHistoryListRes';
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
proto.ProtoOAGetAccountListByAccessTokenReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAGetAccountListByAccessTokenReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAGetAccountListByAccessTokenReq.displayName = 'proto.ProtoOAGetAccountListByAccessTokenReq';
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
proto.ProtoOAGetAccountListByAccessTokenRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAGetAccountListByAccessTokenRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAGetAccountListByAccessTokenRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAGetAccountListByAccessTokenRes.displayName = 'proto.ProtoOAGetAccountListByAccessTokenRes';
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
proto.ProtoOARefreshTokenReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOARefreshTokenReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOARefreshTokenReq.displayName = 'proto.ProtoOARefreshTokenReq';
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
proto.ProtoOARefreshTokenRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOARefreshTokenRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOARefreshTokenRes.displayName = 'proto.ProtoOARefreshTokenRes';
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
proto.ProtoOASubscribeSpotsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOASubscribeSpotsReq.repeatedFields_, null);
};
goog.inherits(proto.ProtoOASubscribeSpotsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASubscribeSpotsReq.displayName = 'proto.ProtoOASubscribeSpotsReq';
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
proto.ProtoOASubscribeSpotsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOASubscribeSpotsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASubscribeSpotsRes.displayName = 'proto.ProtoOASubscribeSpotsRes';
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
proto.ProtoOAUnsubscribeSpotsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAUnsubscribeSpotsReq.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAUnsubscribeSpotsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAUnsubscribeSpotsReq.displayName = 'proto.ProtoOAUnsubscribeSpotsReq';
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
proto.ProtoOAUnsubscribeSpotsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAUnsubscribeSpotsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAUnsubscribeSpotsRes.displayName = 'proto.ProtoOAUnsubscribeSpotsRes';
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
proto.ProtoOASpotEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOASpotEvent.repeatedFields_, null);
};
goog.inherits(proto.ProtoOASpotEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASpotEvent.displayName = 'proto.ProtoOASpotEvent';
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
proto.ProtoOASubscribeLiveTrendbarReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOASubscribeLiveTrendbarReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASubscribeLiveTrendbarReq.displayName = 'proto.ProtoOASubscribeLiveTrendbarReq';
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
proto.ProtoOASubscribeLiveTrendbarRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOASubscribeLiveTrendbarRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASubscribeLiveTrendbarRes.displayName = 'proto.ProtoOASubscribeLiveTrendbarRes';
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
proto.ProtoOAUnsubscribeLiveTrendbarReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAUnsubscribeLiveTrendbarReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAUnsubscribeLiveTrendbarReq.displayName = 'proto.ProtoOAUnsubscribeLiveTrendbarReq';
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
proto.ProtoOAUnsubscribeLiveTrendbarRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAUnsubscribeLiveTrendbarRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAUnsubscribeLiveTrendbarRes.displayName = 'proto.ProtoOAUnsubscribeLiveTrendbarRes';
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
proto.ProtoOAGetTrendbarsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAGetTrendbarsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAGetTrendbarsReq.displayName = 'proto.ProtoOAGetTrendbarsReq';
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
proto.ProtoOAGetTrendbarsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAGetTrendbarsRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAGetTrendbarsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAGetTrendbarsRes.displayName = 'proto.ProtoOAGetTrendbarsRes';
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
proto.ProtoOAGetTickDataReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAGetTickDataReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAGetTickDataReq.displayName = 'proto.ProtoOAGetTickDataReq';
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
proto.ProtoOAGetTickDataRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAGetTickDataRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAGetTickDataRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAGetTickDataRes.displayName = 'proto.ProtoOAGetTickDataRes';
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
proto.ProtoOAGetCtidProfileByTokenReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAGetCtidProfileByTokenReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAGetCtidProfileByTokenReq.displayName = 'proto.ProtoOAGetCtidProfileByTokenReq';
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
proto.ProtoOAGetCtidProfileByTokenRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAGetCtidProfileByTokenRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAGetCtidProfileByTokenRes.displayName = 'proto.ProtoOAGetCtidProfileByTokenRes';
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
proto.ProtoOADepthEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOADepthEvent.repeatedFields_, null);
};
goog.inherits(proto.ProtoOADepthEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOADepthEvent.displayName = 'proto.ProtoOADepthEvent';
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
proto.ProtoOASubscribeDepthQuotesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOASubscribeDepthQuotesReq.repeatedFields_, null);
};
goog.inherits(proto.ProtoOASubscribeDepthQuotesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASubscribeDepthQuotesReq.displayName = 'proto.ProtoOASubscribeDepthQuotesReq';
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
proto.ProtoOASubscribeDepthQuotesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOASubscribeDepthQuotesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASubscribeDepthQuotesRes.displayName = 'proto.ProtoOASubscribeDepthQuotesRes';
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
proto.ProtoOAUnsubscribeDepthQuotesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAUnsubscribeDepthQuotesReq.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAUnsubscribeDepthQuotesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAUnsubscribeDepthQuotesReq.displayName = 'proto.ProtoOAUnsubscribeDepthQuotesReq';
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
proto.ProtoOAUnsubscribeDepthQuotesRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAUnsubscribeDepthQuotesRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAUnsubscribeDepthQuotesRes.displayName = 'proto.ProtoOAUnsubscribeDepthQuotesRes';
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
proto.ProtoOASymbolCategoryListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOASymbolCategoryListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASymbolCategoryListReq.displayName = 'proto.ProtoOASymbolCategoryListReq';
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
proto.ProtoOASymbolCategoryListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOASymbolCategoryListRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOASymbolCategoryListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOASymbolCategoryListRes.displayName = 'proto.ProtoOASymbolCategoryListRes';
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
proto.ProtoOAAccountLogoutReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAAccountLogoutReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAccountLogoutReq.displayName = 'proto.ProtoOAAccountLogoutReq';
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
proto.ProtoOAAccountLogoutRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAAccountLogoutRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAccountLogoutRes.displayName = 'proto.ProtoOAAccountLogoutRes';
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
proto.ProtoOAAccountDisconnectEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAAccountDisconnectEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAAccountDisconnectEvent.displayName = 'proto.ProtoOAAccountDisconnectEvent';
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
proto.ProtoOAMarginCallListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAMarginCallListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAMarginCallListReq.displayName = 'proto.ProtoOAMarginCallListReq';
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
proto.ProtoOAMarginCallListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ProtoOAMarginCallListRes.repeatedFields_, null);
};
goog.inherits(proto.ProtoOAMarginCallListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAMarginCallListRes.displayName = 'proto.ProtoOAMarginCallListRes';
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
proto.ProtoOAMarginCallUpdateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAMarginCallUpdateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAMarginCallUpdateReq.displayName = 'proto.ProtoOAMarginCallUpdateReq';
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
proto.ProtoOAMarginCallUpdateRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAMarginCallUpdateRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAMarginCallUpdateRes.displayName = 'proto.ProtoOAMarginCallUpdateRes';
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
proto.ProtoOAMarginCallUpdateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAMarginCallUpdateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAMarginCallUpdateEvent.displayName = 'proto.ProtoOAMarginCallUpdateEvent';
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
proto.ProtoOAMarginCallTriggerEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProtoOAMarginCallTriggerEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProtoOAMarginCallTriggerEvent.displayName = 'proto.ProtoOAMarginCallTriggerEvent';
}



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
proto.ProtoOAApplicationAuthReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAApplicationAuthReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAApplicationAuthReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAApplicationAuthReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2100),
    clientid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    clientsecret: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ProtoOAApplicationAuthReq}
 */
proto.ProtoOAApplicationAuthReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAApplicationAuthReq;
  return proto.ProtoOAApplicationAuthReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAApplicationAuthReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAApplicationAuthReq}
 */
proto.ProtoOAApplicationAuthReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientsecret(value);
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
proto.ProtoOAApplicationAuthReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAApplicationAuthReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAApplicationAuthReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAApplicationAuthReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAApplicationAuthReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2100));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAApplicationAuthReq} returns this
 */
proto.ProtoOAApplicationAuthReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAApplicationAuthReq} returns this
 */
proto.ProtoOAApplicationAuthReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAApplicationAuthReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string clientId = 2;
 * @return {string}
 */
proto.ProtoOAApplicationAuthReq.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAApplicationAuthReq} returns this
 */
proto.ProtoOAApplicationAuthReq.prototype.setClientid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAApplicationAuthReq} returns this
 */
proto.ProtoOAApplicationAuthReq.prototype.clearClientid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAApplicationAuthReq.prototype.hasClientid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required string clientSecret = 3;
 * @return {string}
 */
proto.ProtoOAApplicationAuthReq.prototype.getClientsecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAApplicationAuthReq} returns this
 */
proto.ProtoOAApplicationAuthReq.prototype.setClientsecret = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAApplicationAuthReq} returns this
 */
proto.ProtoOAApplicationAuthReq.prototype.clearClientsecret = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAApplicationAuthReq.prototype.hasClientsecret = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ProtoOAApplicationAuthRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAApplicationAuthRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAApplicationAuthRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAApplicationAuthRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2101)
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
 * @return {!proto.ProtoOAApplicationAuthRes}
 */
proto.ProtoOAApplicationAuthRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAApplicationAuthRes;
  return proto.ProtoOAApplicationAuthRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAApplicationAuthRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAApplicationAuthRes}
 */
proto.ProtoOAApplicationAuthRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
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
proto.ProtoOAApplicationAuthRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAApplicationAuthRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAApplicationAuthRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAApplicationAuthRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAApplicationAuthRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2101));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAApplicationAuthRes} returns this
 */
proto.ProtoOAApplicationAuthRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAApplicationAuthRes} returns this
 */
proto.ProtoOAApplicationAuthRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAApplicationAuthRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.ProtoOAAccountAuthReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAccountAuthReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAccountAuthReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountAuthReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2102),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    accesstoken: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ProtoOAAccountAuthReq}
 */
proto.ProtoOAAccountAuthReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAccountAuthReq;
  return proto.ProtoOAAccountAuthReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAccountAuthReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAccountAuthReq}
 */
proto.ProtoOAAccountAuthReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstoken(value);
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
proto.ProtoOAAccountAuthReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAccountAuthReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAccountAuthReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountAuthReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAccountAuthReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2102));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAccountAuthReq} returns this
 */
proto.ProtoOAAccountAuthReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountAuthReq} returns this
 */
proto.ProtoOAAccountAuthReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountAuthReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAccountAuthReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAccountAuthReq} returns this
 */
proto.ProtoOAAccountAuthReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountAuthReq} returns this
 */
proto.ProtoOAAccountAuthReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountAuthReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required string accessToken = 3;
 * @return {string}
 */
proto.ProtoOAAccountAuthReq.prototype.getAccesstoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAAccountAuthReq} returns this
 */
proto.ProtoOAAccountAuthReq.prototype.setAccesstoken = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountAuthReq} returns this
 */
proto.ProtoOAAccountAuthReq.prototype.clearAccesstoken = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountAuthReq.prototype.hasAccesstoken = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ProtoOAAccountAuthRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAccountAuthRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAccountAuthRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountAuthRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2103),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAAccountAuthRes}
 */
proto.ProtoOAAccountAuthRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAccountAuthRes;
  return proto.ProtoOAAccountAuthRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAccountAuthRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAccountAuthRes}
 */
proto.ProtoOAAccountAuthRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAAccountAuthRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAccountAuthRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAccountAuthRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountAuthRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAccountAuthRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2103));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAccountAuthRes} returns this
 */
proto.ProtoOAAccountAuthRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountAuthRes} returns this
 */
proto.ProtoOAAccountAuthRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountAuthRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAccountAuthRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAccountAuthRes} returns this
 */
proto.ProtoOAAccountAuthRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountAuthRes} returns this
 */
proto.ProtoOAAccountAuthRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountAuthRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOAErrorRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAErrorRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAErrorRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAErrorRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2142),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    errorcode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    maintenanceendtimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ProtoOAErrorRes}
 */
proto.ProtoOAErrorRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAErrorRes;
  return proto.ProtoOAErrorRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAErrorRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAErrorRes}
 */
proto.ProtoOAErrorRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorcode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaintenanceendtimestamp(value);
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
proto.ProtoOAErrorRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAErrorRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAErrorRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAErrorRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAErrorRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2142));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAErrorRes} returns this
 */
proto.ProtoOAErrorRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAErrorRes} returns this
 */
proto.ProtoOAErrorRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAErrorRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAErrorRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAErrorRes} returns this
 */
proto.ProtoOAErrorRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAErrorRes} returns this
 */
proto.ProtoOAErrorRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAErrorRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required string errorCode = 3;
 * @return {string}
 */
proto.ProtoOAErrorRes.prototype.getErrorcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAErrorRes} returns this
 */
proto.ProtoOAErrorRes.prototype.setErrorcode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAErrorRes} returns this
 */
proto.ProtoOAErrorRes.prototype.clearErrorcode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAErrorRes.prototype.hasErrorcode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.ProtoOAErrorRes.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAErrorRes} returns this
 */
proto.ProtoOAErrorRes.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAErrorRes} returns this
 */
proto.ProtoOAErrorRes.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAErrorRes.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 maintenanceEndTimestamp = 5;
 * @return {number}
 */
proto.ProtoOAErrorRes.prototype.getMaintenanceendtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAErrorRes} returns this
 */
proto.ProtoOAErrorRes.prototype.setMaintenanceendtimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAErrorRes} returns this
 */
proto.ProtoOAErrorRes.prototype.clearMaintenanceendtimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAErrorRes.prototype.hasMaintenanceendtimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.ProtoOAClientDisconnectEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAClientDisconnectEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAClientDisconnectEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAClientDisconnectEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2148),
    reason: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAClientDisconnectEvent}
 */
proto.ProtoOAClientDisconnectEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAClientDisconnectEvent;
  return proto.ProtoOAClientDisconnectEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAClientDisconnectEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAClientDisconnectEvent}
 */
proto.ProtoOAClientDisconnectEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.ProtoOAClientDisconnectEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAClientDisconnectEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAClientDisconnectEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAClientDisconnectEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAClientDisconnectEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2148));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAClientDisconnectEvent} returns this
 */
proto.ProtoOAClientDisconnectEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAClientDisconnectEvent} returns this
 */
proto.ProtoOAClientDisconnectEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAClientDisconnectEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.ProtoOAClientDisconnectEvent.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAClientDisconnectEvent} returns this
 */
proto.ProtoOAClientDisconnectEvent.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAClientDisconnectEvent} returns this
 */
proto.ProtoOAClientDisconnectEvent.prototype.clearReason = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAClientDisconnectEvent.prototype.hasReason = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.repeatedFields_ = [2];



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
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAccountsTokenInvalidatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAccountsTokenInvalidatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2147),
    ctidtraderaccountidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    reason: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ProtoOAAccountsTokenInvalidatedEvent}
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAccountsTokenInvalidatedEvent;
  return proto.ProtoOAAccountsTokenInvalidatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAccountsTokenInvalidatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAccountsTokenInvalidatedEvent}
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addCtidtraderaccountids(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAccountsTokenInvalidatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAccountsTokenInvalidatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCtidtraderaccountidsList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2147));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAccountsTokenInvalidatedEvent} returns this
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountsTokenInvalidatedEvent} returns this
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int64 ctidTraderAccountIds = 2;
 * @return {!Array<number>}
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.getCtidtraderaccountidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ProtoOAAccountsTokenInvalidatedEvent} returns this
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.setCtidtraderaccountidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ProtoOAAccountsTokenInvalidatedEvent} returns this
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.addCtidtraderaccountids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAAccountsTokenInvalidatedEvent} returns this
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.clearCtidtraderaccountidsList = function() {
  return this.setCtidtraderaccountidsList([]);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAAccountsTokenInvalidatedEvent} returns this
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountsTokenInvalidatedEvent} returns this
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.clearReason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountsTokenInvalidatedEvent.prototype.hasReason = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ProtoOAVersionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAVersionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAVersionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAVersionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2104)
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
 * @return {!proto.ProtoOAVersionReq}
 */
proto.ProtoOAVersionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAVersionReq;
  return proto.ProtoOAVersionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAVersionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAVersionReq}
 */
proto.ProtoOAVersionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
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
proto.ProtoOAVersionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAVersionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAVersionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAVersionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAVersionReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2104));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAVersionReq} returns this
 */
proto.ProtoOAVersionReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAVersionReq} returns this
 */
proto.ProtoOAVersionReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAVersionReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.ProtoOAVersionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAVersionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAVersionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAVersionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2105),
    version: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAVersionRes}
 */
proto.ProtoOAVersionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAVersionRes;
  return proto.ProtoOAVersionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAVersionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAVersionRes}
 */
proto.ProtoOAVersionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
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
proto.ProtoOAVersionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAVersionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAVersionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAVersionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAVersionRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2105));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAVersionRes} returns this
 */
proto.ProtoOAVersionRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAVersionRes} returns this
 */
proto.ProtoOAVersionRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAVersionRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string version = 2;
 * @return {string}
 */
proto.ProtoOAVersionRes.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAVersionRes} returns this
 */
proto.ProtoOAVersionRes.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAVersionRes} returns this
 */
proto.ProtoOAVersionRes.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAVersionRes.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOANewOrderReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOANewOrderReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOANewOrderReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOANewOrderReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2106),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    ordertype: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    tradeside: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    volume: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    limitprice: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    stopprice: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    timeinforce: jspb.Message.getFieldWithDefault(msg, 9, 2),
    expirationtimestamp: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    stoploss: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
    takeprofit: (f = jspb.Message.getOptionalFloatingPointField(msg, 12)) == null ? undefined : f,
    comment: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    baseslippageprice: (f = jspb.Message.getOptionalFloatingPointField(msg, 14)) == null ? undefined : f,
    slippageinpoints: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    label: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
    positionid: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
    clientorderid: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
    relativestoploss: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    relativetakeprofit: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    guaranteedstoploss: (f = jspb.Message.getBooleanField(msg, 21)) == null ? undefined : f,
    trailingstoploss: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
    stoptriggermethod: jspb.Message.getFieldWithDefault(msg, 23, 1)
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
 * @return {!proto.ProtoOANewOrderReq}
 */
proto.ProtoOANewOrderReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOANewOrderReq;
  return proto.ProtoOANewOrderReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOANewOrderReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOANewOrderReq}
 */
proto.ProtoOANewOrderReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSymbolid(value);
      break;
    case 4:
      var value = /** @type {!proto.ProtoOAOrderType} */ (reader.readEnum());
      msg.setOrdertype(value);
      break;
    case 5:
      var value = /** @type {!proto.ProtoOATradeSide} */ (reader.readEnum());
      msg.setTradeside(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLimitprice(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopprice(value);
      break;
    case 9:
      var value = /** @type {!proto.ProtoOATimeInForce} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirationtimestamp(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStoploss(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTakeprofit(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBaseslippageprice(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSlippageinpoints(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPositionid(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRelativestoploss(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRelativetakeprofit(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGuaranteedstoploss(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrailingstoploss(value);
      break;
    case 23:
      var value = /** @type {!proto.ProtoOAOrderTriggerMethod} */ (reader.readEnum());
      msg.setStoptriggermethod(value);
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
proto.ProtoOANewOrderReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOANewOrderReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOANewOrderReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOANewOrderReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {!proto.ProtoOAOrderType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.ProtoOATradeSide} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {!proto.ProtoOATimeInForce} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBool(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = /** @type {!proto.ProtoOAOrderTriggerMethod} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeEnum(
      23,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOANewOrderReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2106));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 symbolId = 3;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setSymbolid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearSymbolid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required ProtoOAOrderType orderType = 4;
 * @return {!proto.ProtoOAOrderType}
 */
proto.ProtoOANewOrderReq.prototype.getOrdertype = function() {
  return /** @type {!proto.ProtoOAOrderType} */ (jspb.Message.getFieldWithDefault(this, 4, 1));
};


/**
 * @param {!proto.ProtoOAOrderType} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setOrdertype = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearOrdertype = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasOrdertype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required ProtoOATradeSide tradeSide = 5;
 * @return {!proto.ProtoOATradeSide}
 */
proto.ProtoOANewOrderReq.prototype.getTradeside = function() {
  return /** @type {!proto.ProtoOATradeSide} */ (jspb.Message.getFieldWithDefault(this, 5, 1));
};


/**
 * @param {!proto.ProtoOATradeSide} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setTradeside = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearTradeside = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasTradeside = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required int64 volume = 6;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setVolume = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearVolume = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double limitPrice = 7;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getLimitprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setLimitprice = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearLimitprice = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasLimitprice = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double stopPrice = 8;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getStopprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setStopprice = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearStopprice = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasStopprice = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ProtoOATimeInForce timeInForce = 9;
 * @return {!proto.ProtoOATimeInForce}
 */
proto.ProtoOANewOrderReq.prototype.getTimeinforce = function() {
  return /** @type {!proto.ProtoOATimeInForce} */ (jspb.Message.getFieldWithDefault(this, 9, 2));
};


/**
 * @param {!proto.ProtoOATimeInForce} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setTimeinforce = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearTimeinforce = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasTimeinforce = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 expirationTimestamp = 10;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getExpirationtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setExpirationtimestamp = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearExpirationtimestamp = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasExpirationtimestamp = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double stopLoss = 11;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getStoploss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setStoploss = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearStoploss = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasStoploss = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double takeProfit = 12;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getTakeprofit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setTakeprofit = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearTakeprofit = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasTakeprofit = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string comment = 13;
 * @return {string}
 */
proto.ProtoOANewOrderReq.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setComment = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearComment = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasComment = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional double baseSlippagePrice = 14;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getBaseslippageprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setBaseslippageprice = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearBaseslippageprice = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasBaseslippageprice = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 slippageInPoints = 15;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getSlippageinpoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setSlippageinpoints = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearSlippageinpoints = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasSlippageinpoints = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string label = 16;
 * @return {string}
 */
proto.ProtoOANewOrderReq.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setLabel = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearLabel = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int64 positionId = 17;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getPositionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setPositionid = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearPositionid = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasPositionid = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string clientOrderId = 18;
 * @return {string}
 */
proto.ProtoOANewOrderReq.prototype.getClientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setClientorderid = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearClientorderid = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasClientorderid = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int64 relativeStopLoss = 19;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getRelativestoploss = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setRelativestoploss = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearRelativestoploss = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasRelativestoploss = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int64 relativeTakeProfit = 20;
 * @return {number}
 */
proto.ProtoOANewOrderReq.prototype.getRelativetakeprofit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setRelativetakeprofit = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearRelativetakeprofit = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasRelativetakeprofit = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool guaranteedStopLoss = 21;
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.getGuaranteedstoploss = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setGuaranteedstoploss = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearGuaranteedstoploss = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasGuaranteedstoploss = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool trailingStopLoss = 22;
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.getTrailingstoploss = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setTrailingstoploss = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearTrailingstoploss = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasTrailingstoploss = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional ProtoOAOrderTriggerMethod stopTriggerMethod = 23;
 * @return {!proto.ProtoOAOrderTriggerMethod}
 */
proto.ProtoOANewOrderReq.prototype.getStoptriggermethod = function() {
  return /** @type {!proto.ProtoOAOrderTriggerMethod} */ (jspb.Message.getFieldWithDefault(this, 23, 1));
};


/**
 * @param {!proto.ProtoOAOrderTriggerMethod} value
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.setStoptriggermethod = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOANewOrderReq} returns this
 */
proto.ProtoOANewOrderReq.prototype.clearStoptriggermethod = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOANewOrderReq.prototype.hasStoptriggermethod = function() {
  return jspb.Message.getField(this, 23) != null;
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
proto.ProtoOAExecutionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAExecutionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAExecutionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAExecutionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2126),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    executiontype: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    position: (f = msg.getPosition()) && OpenApiModelMessages_pb.ProtoOAPosition.toObject(includeInstance, f),
    order: (f = msg.getOrder()) && OpenApiModelMessages_pb.ProtoOAOrder.toObject(includeInstance, f),
    deal: (f = msg.getDeal()) && OpenApiModelMessages_pb.ProtoOADeal.toObject(includeInstance, f),
    bonusdepositwithdraw: (f = msg.getBonusdepositwithdraw()) && OpenApiModelMessages_pb.ProtoOABonusDepositWithdraw.toObject(includeInstance, f),
    depositwithdraw: (f = msg.getDepositwithdraw()) && OpenApiModelMessages_pb.ProtoOADepositWithdraw.toObject(includeInstance, f),
    errorcode: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    isserverevent: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f
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
 * @return {!proto.ProtoOAExecutionEvent}
 */
proto.ProtoOAExecutionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAExecutionEvent;
  return proto.ProtoOAExecutionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAExecutionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAExecutionEvent}
 */
proto.ProtoOAExecutionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {!proto.ProtoOAExecutionType} */ (reader.readEnum());
      msg.setExecutiontype(value);
      break;
    case 4:
      var value = new OpenApiModelMessages_pb.ProtoOAPosition;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 5:
      var value = new OpenApiModelMessages_pb.ProtoOAOrder;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAOrder.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 6:
      var value = new OpenApiModelMessages_pb.ProtoOADeal;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOADeal.deserializeBinaryFromReader);
      msg.setDeal(value);
      break;
    case 7:
      var value = new OpenApiModelMessages_pb.ProtoOABonusDepositWithdraw;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOABonusDepositWithdraw.deserializeBinaryFromReader);
      msg.setBonusdepositwithdraw(value);
      break;
    case 8:
      var value = new OpenApiModelMessages_pb.ProtoOADepositWithdraw;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOADepositWithdraw.deserializeBinaryFromReader);
      msg.setDepositwithdraw(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorcode(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsserverevent(value);
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
proto.ProtoOAExecutionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAExecutionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAExecutionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAExecutionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {!proto.ProtoOAExecutionType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      OpenApiModelMessages_pb.ProtoOAPosition.serializeBinaryToWriter
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      OpenApiModelMessages_pb.ProtoOAOrder.serializeBinaryToWriter
    );
  }
  f = message.getDeal();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      OpenApiModelMessages_pb.ProtoOADeal.serializeBinaryToWriter
    );
  }
  f = message.getBonusdepositwithdraw();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      OpenApiModelMessages_pb.ProtoOABonusDepositWithdraw.serializeBinaryToWriter
    );
  }
  f = message.getDepositwithdraw();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      OpenApiModelMessages_pb.ProtoOADepositWithdraw.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAExecutionEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2126));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAExecutionEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ProtoOAExecutionType executionType = 3;
 * @return {!proto.ProtoOAExecutionType}
 */
proto.ProtoOAExecutionEvent.prototype.getExecutiontype = function() {
  return /** @type {!proto.ProtoOAExecutionType} */ (jspb.Message.getFieldWithDefault(this, 3, 2));
};


/**
 * @param {!proto.ProtoOAExecutionType} value
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.setExecutiontype = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.clearExecutiontype = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.hasExecutiontype = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ProtoOAPosition position = 4;
 * @return {?proto.ProtoOAPosition}
 */
proto.ProtoOAExecutionEvent.prototype.getPosition = function() {
  return /** @type{?proto.ProtoOAPosition} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOAPosition, 4));
};


/**
 * @param {?proto.ProtoOAPosition|undefined} value
 * @return {!proto.ProtoOAExecutionEvent} returns this
*/
proto.ProtoOAExecutionEvent.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ProtoOAOrder order = 5;
 * @return {?proto.ProtoOAOrder}
 */
proto.ProtoOAExecutionEvent.prototype.getOrder = function() {
  return /** @type{?proto.ProtoOAOrder} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOAOrder, 5));
};


/**
 * @param {?proto.ProtoOAOrder|undefined} value
 * @return {!proto.ProtoOAExecutionEvent} returns this
*/
proto.ProtoOAExecutionEvent.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ProtoOADeal deal = 6;
 * @return {?proto.ProtoOADeal}
 */
proto.ProtoOAExecutionEvent.prototype.getDeal = function() {
  return /** @type{?proto.ProtoOADeal} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOADeal, 6));
};


/**
 * @param {?proto.ProtoOADeal|undefined} value
 * @return {!proto.ProtoOAExecutionEvent} returns this
*/
proto.ProtoOAExecutionEvent.prototype.setDeal = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.clearDeal = function() {
  return this.setDeal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.hasDeal = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ProtoOABonusDepositWithdraw bonusDepositWithdraw = 7;
 * @return {?proto.ProtoOABonusDepositWithdraw}
 */
proto.ProtoOAExecutionEvent.prototype.getBonusdepositwithdraw = function() {
  return /** @type{?proto.ProtoOABonusDepositWithdraw} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOABonusDepositWithdraw, 7));
};


/**
 * @param {?proto.ProtoOABonusDepositWithdraw|undefined} value
 * @return {!proto.ProtoOAExecutionEvent} returns this
*/
proto.ProtoOAExecutionEvent.prototype.setBonusdepositwithdraw = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.clearBonusdepositwithdraw = function() {
  return this.setBonusdepositwithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.hasBonusdepositwithdraw = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ProtoOADepositWithdraw depositWithdraw = 8;
 * @return {?proto.ProtoOADepositWithdraw}
 */
proto.ProtoOAExecutionEvent.prototype.getDepositwithdraw = function() {
  return /** @type{?proto.ProtoOADepositWithdraw} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOADepositWithdraw, 8));
};


/**
 * @param {?proto.ProtoOADepositWithdraw|undefined} value
 * @return {!proto.ProtoOAExecutionEvent} returns this
*/
proto.ProtoOAExecutionEvent.prototype.setDepositwithdraw = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.clearDepositwithdraw = function() {
  return this.setDepositwithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.hasDepositwithdraw = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string errorCode = 9;
 * @return {string}
 */
proto.ProtoOAExecutionEvent.prototype.getErrorcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.setErrorcode = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.clearErrorcode = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.hasErrorcode = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool isServerEvent = 10;
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.getIsserverevent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.setIsserverevent = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExecutionEvent} returns this
 */
proto.ProtoOAExecutionEvent.prototype.clearIsserverevent = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExecutionEvent.prototype.hasIsserverevent = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.ProtoOACancelOrderReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOACancelOrderReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOACancelOrderReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOACancelOrderReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2108),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    orderid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ProtoOACancelOrderReq}
 */
proto.ProtoOACancelOrderReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOACancelOrderReq;
  return proto.ProtoOACancelOrderReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOACancelOrderReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOACancelOrderReq}
 */
proto.ProtoOACancelOrderReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrderid(value);
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
proto.ProtoOACancelOrderReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOACancelOrderReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOACancelOrderReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOACancelOrderReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOACancelOrderReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2108));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOACancelOrderReq} returns this
 */
proto.ProtoOACancelOrderReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOACancelOrderReq} returns this
 */
proto.ProtoOACancelOrderReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOACancelOrderReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOACancelOrderReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOACancelOrderReq} returns this
 */
proto.ProtoOACancelOrderReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOACancelOrderReq} returns this
 */
proto.ProtoOACancelOrderReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOACancelOrderReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 orderId = 3;
 * @return {number}
 */
proto.ProtoOACancelOrderReq.prototype.getOrderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOACancelOrderReq} returns this
 */
proto.ProtoOACancelOrderReq.prototype.setOrderid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOACancelOrderReq} returns this
 */
proto.ProtoOACancelOrderReq.prototype.clearOrderid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOACancelOrderReq.prototype.hasOrderid = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ProtoOAAmendOrderReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAmendOrderReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAmendOrderReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAmendOrderReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2109),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    orderid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    volume: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    limitprice: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    stopprice: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    expirationtimestamp: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    stoploss: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    takeprofit: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    slippageinpoints: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    relativestoploss: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    relativetakeprofit: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    guaranteedstoploss: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    trailingstoploss: (f = jspb.Message.getBooleanField(msg, 14)) == null ? undefined : f,
    stoptriggermethod: jspb.Message.getFieldWithDefault(msg, 15, 1)
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
 * @return {!proto.ProtoOAAmendOrderReq}
 */
proto.ProtoOAAmendOrderReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAmendOrderReq;
  return proto.ProtoOAAmendOrderReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAmendOrderReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAmendOrderReq}
 */
proto.ProtoOAAmendOrderReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrderid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLimitprice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopprice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirationtimestamp(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStoploss(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTakeprofit(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSlippageinpoints(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRelativestoploss(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRelativetakeprofit(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGuaranteedstoploss(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrailingstoploss(value);
      break;
    case 15:
      var value = /** @type {!proto.ProtoOAOrderTriggerMethod} */ (reader.readEnum());
      msg.setStoptriggermethod(value);
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
proto.ProtoOAAmendOrderReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAmendOrderReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAmendOrderReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAmendOrderReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {!proto.ProtoOAOrderTriggerMethod} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAmendOrderReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2109));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 orderId = 3;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getOrderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setOrderid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearOrderid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasOrderid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 volume = 4;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setVolume = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearVolume = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double limitPrice = 5;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getLimitprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setLimitprice = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearLimitprice = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasLimitprice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double stopPrice = 6;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getStopprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setStopprice = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearStopprice = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasStopprice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 expirationTimestamp = 7;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getExpirationtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setExpirationtimestamp = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearExpirationtimestamp = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasExpirationtimestamp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double stopLoss = 8;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getStoploss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setStoploss = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearStoploss = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasStoploss = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double takeProfit = 9;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getTakeprofit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setTakeprofit = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearTakeprofit = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasTakeprofit = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 slippageInPoints = 10;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getSlippageinpoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setSlippageinpoints = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearSlippageinpoints = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasSlippageinpoints = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 relativeStopLoss = 11;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getRelativestoploss = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setRelativestoploss = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearRelativestoploss = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasRelativestoploss = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 relativeTakeProfit = 12;
 * @return {number}
 */
proto.ProtoOAAmendOrderReq.prototype.getRelativetakeprofit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setRelativetakeprofit = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearRelativetakeprofit = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasRelativetakeprofit = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool guaranteedStopLoss = 13;
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.getGuaranteedstoploss = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setGuaranteedstoploss = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearGuaranteedstoploss = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasGuaranteedstoploss = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool trailingStopLoss = 14;
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.getTrailingstoploss = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setTrailingstoploss = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearTrailingstoploss = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasTrailingstoploss = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ProtoOAOrderTriggerMethod stopTriggerMethod = 15;
 * @return {!proto.ProtoOAOrderTriggerMethod}
 */
proto.ProtoOAAmendOrderReq.prototype.getStoptriggermethod = function() {
  return /** @type {!proto.ProtoOAOrderTriggerMethod} */ (jspb.Message.getFieldWithDefault(this, 15, 1));
};


/**
 * @param {!proto.ProtoOAOrderTriggerMethod} value
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.setStoptriggermethod = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendOrderReq} returns this
 */
proto.ProtoOAAmendOrderReq.prototype.clearStoptriggermethod = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendOrderReq.prototype.hasStoptriggermethod = function() {
  return jspb.Message.getField(this, 15) != null;
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
proto.ProtoOAAmendPositionSLTPReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAmendPositionSLTPReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAmendPositionSLTPReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAmendPositionSLTPReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2110),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    positionid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    stoploss: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    takeprofit: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    guaranteedstoploss: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    trailingstoploss: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    stoplosstriggermethod: jspb.Message.getFieldWithDefault(msg, 9, 1)
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
 * @return {!proto.ProtoOAAmendPositionSLTPReq}
 */
proto.ProtoOAAmendPositionSLTPReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAmendPositionSLTPReq;
  return proto.ProtoOAAmendPositionSLTPReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAmendPositionSLTPReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAmendPositionSLTPReq}
 */
proto.ProtoOAAmendPositionSLTPReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPositionid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStoploss(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTakeprofit(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGuaranteedstoploss(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrailingstoploss(value);
      break;
    case 9:
      var value = /** @type {!proto.ProtoOAOrderTriggerMethod} */ (reader.readEnum());
      msg.setStoplosstriggermethod(value);
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
proto.ProtoOAAmendPositionSLTPReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAmendPositionSLTPReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAmendPositionSLTPReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAmendPositionSLTPReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {!proto.ProtoOAOrderTriggerMethod} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2110));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 positionId = 3;
 * @return {number}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.getPositionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.setPositionid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.clearPositionid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.hasPositionid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double stopLoss = 4;
 * @return {number}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.getStoploss = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.setStoploss = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.clearStoploss = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.hasStoploss = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double takeProfit = 5;
 * @return {number}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.getTakeprofit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.setTakeprofit = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.clearTakeprofit = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.hasTakeprofit = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool guaranteedStopLoss = 7;
 * @return {boolean}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.getGuaranteedstoploss = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.setGuaranteedstoploss = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.clearGuaranteedstoploss = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.hasGuaranteedstoploss = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool trailingStopLoss = 8;
 * @return {boolean}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.getTrailingstoploss = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.setTrailingstoploss = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.clearTrailingstoploss = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.hasTrailingstoploss = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ProtoOAOrderTriggerMethod stopLossTriggerMethod = 9;
 * @return {!proto.ProtoOAOrderTriggerMethod}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.getStoplosstriggermethod = function() {
  return /** @type {!proto.ProtoOAOrderTriggerMethod} */ (jspb.Message.getFieldWithDefault(this, 9, 1));
};


/**
 * @param {!proto.ProtoOAOrderTriggerMethod} value
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.setStoplosstriggermethod = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAmendPositionSLTPReq} returns this
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.clearStoplosstriggermethod = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAmendPositionSLTPReq.prototype.hasStoplosstriggermethod = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.ProtoOAClosePositionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAClosePositionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAClosePositionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAClosePositionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2111),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    positionid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    volume: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ProtoOAClosePositionReq}
 */
proto.ProtoOAClosePositionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAClosePositionReq;
  return proto.ProtoOAClosePositionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAClosePositionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAClosePositionReq}
 */
proto.ProtoOAClosePositionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPositionid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
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
proto.ProtoOAClosePositionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAClosePositionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAClosePositionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAClosePositionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAClosePositionReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2111));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAClosePositionReq} returns this
 */
proto.ProtoOAClosePositionReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAClosePositionReq} returns this
 */
proto.ProtoOAClosePositionReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAClosePositionReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAClosePositionReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAClosePositionReq} returns this
 */
proto.ProtoOAClosePositionReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAClosePositionReq} returns this
 */
proto.ProtoOAClosePositionReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAClosePositionReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 positionId = 3;
 * @return {number}
 */
proto.ProtoOAClosePositionReq.prototype.getPositionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAClosePositionReq} returns this
 */
proto.ProtoOAClosePositionReq.prototype.setPositionid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAClosePositionReq} returns this
 */
proto.ProtoOAClosePositionReq.prototype.clearPositionid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAClosePositionReq.prototype.hasPositionid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 volume = 4;
 * @return {number}
 */
proto.ProtoOAClosePositionReq.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAClosePositionReq} returns this
 */
proto.ProtoOAClosePositionReq.prototype.setVolume = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAClosePositionReq} returns this
 */
proto.ProtoOAClosePositionReq.prototype.clearVolume = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAClosePositionReq.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.ProtoOATrailingSLChangedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOATrailingSLChangedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOATrailingSLChangedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOATrailingSLChangedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2107),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    positionid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    orderid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    stopprice: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    utclastupdatetimestamp: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.ProtoOATrailingSLChangedEvent}
 */
proto.ProtoOATrailingSLChangedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOATrailingSLChangedEvent;
  return proto.ProtoOATrailingSLChangedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOATrailingSLChangedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOATrailingSLChangedEvent}
 */
proto.ProtoOATrailingSLChangedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPositionid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrderid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopprice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUtclastupdatetimestamp(value);
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
proto.ProtoOATrailingSLChangedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOATrailingSLChangedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOATrailingSLChangedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOATrailingSLChangedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2107));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 positionId = 3;
 * @return {number}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.getPositionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.setPositionid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.clearPositionid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.hasPositionid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 orderId = 4;
 * @return {number}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.getOrderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.setOrderid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.clearOrderid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.hasOrderid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required double stopPrice = 5;
 * @return {number}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.getStopprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.setStopprice = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.clearStopprice = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.hasStopprice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required int64 utcLastUpdateTimestamp = 6;
 * @return {number}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.getUtclastupdatetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.setUtclastupdatetimestamp = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATrailingSLChangedEvent} returns this
 */
proto.ProtoOATrailingSLChangedEvent.prototype.clearUtclastupdatetimestamp = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATrailingSLChangedEvent.prototype.hasUtclastupdatetimestamp = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.ProtoOAAssetListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAssetListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAssetListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAssetListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2112),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAAssetListReq}
 */
proto.ProtoOAAssetListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAssetListReq;
  return proto.ProtoOAAssetListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAssetListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAssetListReq}
 */
proto.ProtoOAAssetListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAAssetListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAssetListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAssetListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAssetListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAssetListReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2112));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAssetListReq} returns this
 */
proto.ProtoOAAssetListReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAssetListReq} returns this
 */
proto.ProtoOAAssetListReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAssetListReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAssetListReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAssetListReq} returns this
 */
proto.ProtoOAAssetListReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAssetListReq} returns this
 */
proto.ProtoOAAssetListReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAssetListReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAAssetListRes.repeatedFields_ = [3];



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
proto.ProtoOAAssetListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAssetListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAssetListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAssetListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2113),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    assetList: jspb.Message.toObjectList(msg.getAssetList(),
    OpenApiModelMessages_pb.ProtoOAAsset.toObject, includeInstance)
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
 * @return {!proto.ProtoOAAssetListRes}
 */
proto.ProtoOAAssetListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAssetListRes;
  return proto.ProtoOAAssetListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAssetListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAssetListRes}
 */
proto.ProtoOAAssetListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOAAsset;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAAsset.deserializeBinaryFromReader);
      msg.addAsset(value);
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
proto.ProtoOAAssetListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAssetListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAssetListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAssetListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAssetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOAAsset.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAssetListRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2113));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAssetListRes} returns this
 */
proto.ProtoOAAssetListRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAssetListRes} returns this
 */
proto.ProtoOAAssetListRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAssetListRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAssetListRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAssetListRes} returns this
 */
proto.ProtoOAAssetListRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAssetListRes} returns this
 */
proto.ProtoOAAssetListRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAssetListRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOAAsset asset = 3;
 * @return {!Array<!proto.ProtoOAAsset>}
 */
proto.ProtoOAAssetListRes.prototype.getAssetList = function() {
  return /** @type{!Array<!proto.ProtoOAAsset>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOAAsset, 3));
};


/**
 * @param {!Array<!proto.ProtoOAAsset>} value
 * @return {!proto.ProtoOAAssetListRes} returns this
*/
proto.ProtoOAAssetListRes.prototype.setAssetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOAAsset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOAAsset}
 */
proto.ProtoOAAssetListRes.prototype.addAsset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOAAsset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAAssetListRes} returns this
 */
proto.ProtoOAAssetListRes.prototype.clearAssetList = function() {
  return this.setAssetList([]);
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
proto.ProtoOASymbolsListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASymbolsListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASymbolsListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolsListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2114),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOASymbolsListReq}
 */
proto.ProtoOASymbolsListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASymbolsListReq;
  return proto.ProtoOASymbolsListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASymbolsListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASymbolsListReq}
 */
proto.ProtoOASymbolsListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOASymbolsListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASymbolsListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASymbolsListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolsListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASymbolsListReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2114));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASymbolsListReq} returns this
 */
proto.ProtoOASymbolsListReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolsListReq} returns this
 */
proto.ProtoOASymbolsListReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolsListReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASymbolsListReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolsListReq} returns this
 */
proto.ProtoOASymbolsListReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolsListReq} returns this
 */
proto.ProtoOASymbolsListReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolsListReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOASymbolsListRes.repeatedFields_ = [3];



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
proto.ProtoOASymbolsListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASymbolsListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASymbolsListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolsListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2115),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolList: jspb.Message.toObjectList(msg.getSymbolList(),
    OpenApiModelMessages_pb.ProtoOALightSymbol.toObject, includeInstance)
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
 * @return {!proto.ProtoOASymbolsListRes}
 */
proto.ProtoOASymbolsListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASymbolsListRes;
  return proto.ProtoOASymbolsListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASymbolsListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASymbolsListRes}
 */
proto.ProtoOASymbolsListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOALightSymbol;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOALightSymbol.deserializeBinaryFromReader);
      msg.addSymbol(value);
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
proto.ProtoOASymbolsListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASymbolsListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASymbolsListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolsListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSymbolList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOALightSymbol.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASymbolsListRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2115));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASymbolsListRes} returns this
 */
proto.ProtoOASymbolsListRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolsListRes} returns this
 */
proto.ProtoOASymbolsListRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolsListRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASymbolsListRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolsListRes} returns this
 */
proto.ProtoOASymbolsListRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolsListRes} returns this
 */
proto.ProtoOASymbolsListRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolsListRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOALightSymbol symbol = 3;
 * @return {!Array<!proto.ProtoOALightSymbol>}
 */
proto.ProtoOASymbolsListRes.prototype.getSymbolList = function() {
  return /** @type{!Array<!proto.ProtoOALightSymbol>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOALightSymbol, 3));
};


/**
 * @param {!Array<!proto.ProtoOALightSymbol>} value
 * @return {!proto.ProtoOASymbolsListRes} returns this
*/
proto.ProtoOASymbolsListRes.prototype.setSymbolList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOALightSymbol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOALightSymbol}
 */
proto.ProtoOASymbolsListRes.prototype.addSymbol = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOALightSymbol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOASymbolsListRes} returns this
 */
proto.ProtoOASymbolsListRes.prototype.clearSymbolList = function() {
  return this.setSymbolList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOASymbolByIdReq.repeatedFields_ = [3];



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
proto.ProtoOASymbolByIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASymbolByIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASymbolByIdReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolByIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2116),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolidList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ProtoOASymbolByIdReq}
 */
proto.ProtoOASymbolByIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASymbolByIdReq;
  return proto.ProtoOASymbolByIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASymbolByIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASymbolByIdReq}
 */
proto.ProtoOASymbolByIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addSymbolid(value);
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
proto.ProtoOASymbolByIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASymbolByIdReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASymbolByIdReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolByIdReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSymbolidList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      3,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASymbolByIdReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2116));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASymbolByIdReq} returns this
 */
proto.ProtoOASymbolByIdReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolByIdReq} returns this
 */
proto.ProtoOASymbolByIdReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolByIdReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASymbolByIdReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolByIdReq} returns this
 */
proto.ProtoOASymbolByIdReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolByIdReq} returns this
 */
proto.ProtoOASymbolByIdReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolByIdReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated int64 symbolId = 3;
 * @return {!Array<number>}
 */
proto.ProtoOASymbolByIdReq.prototype.getSymbolidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ProtoOASymbolByIdReq} returns this
 */
proto.ProtoOASymbolByIdReq.prototype.setSymbolidList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ProtoOASymbolByIdReq} returns this
 */
proto.ProtoOASymbolByIdReq.prototype.addSymbolid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOASymbolByIdReq} returns this
 */
proto.ProtoOASymbolByIdReq.prototype.clearSymbolidList = function() {
  return this.setSymbolidList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOASymbolByIdRes.repeatedFields_ = [3];



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
proto.ProtoOASymbolByIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASymbolByIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASymbolByIdRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolByIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2117),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolList: jspb.Message.toObjectList(msg.getSymbolList(),
    OpenApiModelMessages_pb.ProtoOASymbol.toObject, includeInstance)
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
 * @return {!proto.ProtoOASymbolByIdRes}
 */
proto.ProtoOASymbolByIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASymbolByIdRes;
  return proto.ProtoOASymbolByIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASymbolByIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASymbolByIdRes}
 */
proto.ProtoOASymbolByIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOASymbol;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOASymbol.deserializeBinaryFromReader);
      msg.addSymbol(value);
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
proto.ProtoOASymbolByIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASymbolByIdRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASymbolByIdRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolByIdRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSymbolList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOASymbol.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASymbolByIdRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2117));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASymbolByIdRes} returns this
 */
proto.ProtoOASymbolByIdRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolByIdRes} returns this
 */
proto.ProtoOASymbolByIdRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolByIdRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASymbolByIdRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolByIdRes} returns this
 */
proto.ProtoOASymbolByIdRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolByIdRes} returns this
 */
proto.ProtoOASymbolByIdRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolByIdRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOASymbol symbol = 3;
 * @return {!Array<!proto.ProtoOASymbol>}
 */
proto.ProtoOASymbolByIdRes.prototype.getSymbolList = function() {
  return /** @type{!Array<!proto.ProtoOASymbol>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOASymbol, 3));
};


/**
 * @param {!Array<!proto.ProtoOASymbol>} value
 * @return {!proto.ProtoOASymbolByIdRes} returns this
*/
proto.ProtoOASymbolByIdRes.prototype.setSymbolList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOASymbol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOASymbol}
 */
proto.ProtoOASymbolByIdRes.prototype.addSymbol = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOASymbol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOASymbolByIdRes} returns this
 */
proto.ProtoOASymbolByIdRes.prototype.clearSymbolList = function() {
  return this.setSymbolList([]);
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
proto.ProtoOASymbolsForConversionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASymbolsForConversionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASymbolsForConversionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolsForConversionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2118),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    firstassetid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    lastassetid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ProtoOASymbolsForConversionReq}
 */
proto.ProtoOASymbolsForConversionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASymbolsForConversionReq;
  return proto.ProtoOASymbolsForConversionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASymbolsForConversionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASymbolsForConversionReq}
 */
proto.ProtoOASymbolsForConversionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFirstassetid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastassetid(value);
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
proto.ProtoOASymbolsForConversionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASymbolsForConversionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASymbolsForConversionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolsForConversionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASymbolsForConversionReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2118));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASymbolsForConversionReq} returns this
 */
proto.ProtoOASymbolsForConversionReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolsForConversionReq} returns this
 */
proto.ProtoOASymbolsForConversionReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolsForConversionReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASymbolsForConversionReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolsForConversionReq} returns this
 */
proto.ProtoOASymbolsForConversionReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolsForConversionReq} returns this
 */
proto.ProtoOASymbolsForConversionReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolsForConversionReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 firstAssetId = 3;
 * @return {number}
 */
proto.ProtoOASymbolsForConversionReq.prototype.getFirstassetid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolsForConversionReq} returns this
 */
proto.ProtoOASymbolsForConversionReq.prototype.setFirstassetid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolsForConversionReq} returns this
 */
proto.ProtoOASymbolsForConversionReq.prototype.clearFirstassetid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolsForConversionReq.prototype.hasFirstassetid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 lastAssetId = 4;
 * @return {number}
 */
proto.ProtoOASymbolsForConversionReq.prototype.getLastassetid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolsForConversionReq} returns this
 */
proto.ProtoOASymbolsForConversionReq.prototype.setLastassetid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolsForConversionReq} returns this
 */
proto.ProtoOASymbolsForConversionReq.prototype.clearLastassetid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolsForConversionReq.prototype.hasLastassetid = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOASymbolsForConversionRes.repeatedFields_ = [3];



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
proto.ProtoOASymbolsForConversionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASymbolsForConversionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASymbolsForConversionRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolsForConversionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2119),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolList: jspb.Message.toObjectList(msg.getSymbolList(),
    OpenApiModelMessages_pb.ProtoOALightSymbol.toObject, includeInstance)
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
 * @return {!proto.ProtoOASymbolsForConversionRes}
 */
proto.ProtoOASymbolsForConversionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASymbolsForConversionRes;
  return proto.ProtoOASymbolsForConversionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASymbolsForConversionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASymbolsForConversionRes}
 */
proto.ProtoOASymbolsForConversionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOALightSymbol;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOALightSymbol.deserializeBinaryFromReader);
      msg.addSymbol(value);
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
proto.ProtoOASymbolsForConversionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASymbolsForConversionRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASymbolsForConversionRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolsForConversionRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSymbolList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOALightSymbol.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASymbolsForConversionRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2119));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASymbolsForConversionRes} returns this
 */
proto.ProtoOASymbolsForConversionRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolsForConversionRes} returns this
 */
proto.ProtoOASymbolsForConversionRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolsForConversionRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASymbolsForConversionRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolsForConversionRes} returns this
 */
proto.ProtoOASymbolsForConversionRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolsForConversionRes} returns this
 */
proto.ProtoOASymbolsForConversionRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolsForConversionRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOALightSymbol symbol = 3;
 * @return {!Array<!proto.ProtoOALightSymbol>}
 */
proto.ProtoOASymbolsForConversionRes.prototype.getSymbolList = function() {
  return /** @type{!Array<!proto.ProtoOALightSymbol>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOALightSymbol, 3));
};


/**
 * @param {!Array<!proto.ProtoOALightSymbol>} value
 * @return {!proto.ProtoOASymbolsForConversionRes} returns this
*/
proto.ProtoOASymbolsForConversionRes.prototype.setSymbolList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOALightSymbol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOALightSymbol}
 */
proto.ProtoOASymbolsForConversionRes.prototype.addSymbol = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOALightSymbol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOASymbolsForConversionRes} returns this
 */
proto.ProtoOASymbolsForConversionRes.prototype.clearSymbolList = function() {
  return this.setSymbolList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOASymbolChangedEvent.repeatedFields_ = [3];



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
proto.ProtoOASymbolChangedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASymbolChangedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASymbolChangedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolChangedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2120),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolidList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ProtoOASymbolChangedEvent}
 */
proto.ProtoOASymbolChangedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASymbolChangedEvent;
  return proto.ProtoOASymbolChangedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASymbolChangedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASymbolChangedEvent}
 */
proto.ProtoOASymbolChangedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addSymbolid(value);
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
proto.ProtoOASymbolChangedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASymbolChangedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASymbolChangedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolChangedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSymbolidList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      3,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASymbolChangedEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2120));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASymbolChangedEvent} returns this
 */
proto.ProtoOASymbolChangedEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolChangedEvent} returns this
 */
proto.ProtoOASymbolChangedEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolChangedEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASymbolChangedEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolChangedEvent} returns this
 */
proto.ProtoOASymbolChangedEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolChangedEvent} returns this
 */
proto.ProtoOASymbolChangedEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolChangedEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated int64 symbolId = 3;
 * @return {!Array<number>}
 */
proto.ProtoOASymbolChangedEvent.prototype.getSymbolidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ProtoOASymbolChangedEvent} returns this
 */
proto.ProtoOASymbolChangedEvent.prototype.setSymbolidList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ProtoOASymbolChangedEvent} returns this
 */
proto.ProtoOASymbolChangedEvent.prototype.addSymbolid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOASymbolChangedEvent} returns this
 */
proto.ProtoOASymbolChangedEvent.prototype.clearSymbolidList = function() {
  return this.setSymbolidList([]);
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
proto.ProtoOAAssetClassListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAssetClassListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAssetClassListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAssetClassListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2153),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAAssetClassListReq}
 */
proto.ProtoOAAssetClassListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAssetClassListReq;
  return proto.ProtoOAAssetClassListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAssetClassListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAssetClassListReq}
 */
proto.ProtoOAAssetClassListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAAssetClassListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAssetClassListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAssetClassListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAssetClassListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAssetClassListReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2153));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAssetClassListReq} returns this
 */
proto.ProtoOAAssetClassListReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAssetClassListReq} returns this
 */
proto.ProtoOAAssetClassListReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAssetClassListReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAssetClassListReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAssetClassListReq} returns this
 */
proto.ProtoOAAssetClassListReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAssetClassListReq} returns this
 */
proto.ProtoOAAssetClassListReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAssetClassListReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAAssetClassListRes.repeatedFields_ = [3];



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
proto.ProtoOAAssetClassListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAssetClassListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAssetClassListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAssetClassListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2154),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    assetclassList: jspb.Message.toObjectList(msg.getAssetclassList(),
    OpenApiModelMessages_pb.ProtoOAAssetClass.toObject, includeInstance)
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
 * @return {!proto.ProtoOAAssetClassListRes}
 */
proto.ProtoOAAssetClassListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAssetClassListRes;
  return proto.ProtoOAAssetClassListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAssetClassListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAssetClassListRes}
 */
proto.ProtoOAAssetClassListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOAAssetClass;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAAssetClass.deserializeBinaryFromReader);
      msg.addAssetclass(value);
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
proto.ProtoOAAssetClassListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAssetClassListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAssetClassListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAssetClassListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAssetclassList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOAAssetClass.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAssetClassListRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2154));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAssetClassListRes} returns this
 */
proto.ProtoOAAssetClassListRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAssetClassListRes} returns this
 */
proto.ProtoOAAssetClassListRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAssetClassListRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAssetClassListRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAssetClassListRes} returns this
 */
proto.ProtoOAAssetClassListRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAssetClassListRes} returns this
 */
proto.ProtoOAAssetClassListRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAssetClassListRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOAAssetClass assetClass = 3;
 * @return {!Array<!proto.ProtoOAAssetClass>}
 */
proto.ProtoOAAssetClassListRes.prototype.getAssetclassList = function() {
  return /** @type{!Array<!proto.ProtoOAAssetClass>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOAAssetClass, 3));
};


/**
 * @param {!Array<!proto.ProtoOAAssetClass>} value
 * @return {!proto.ProtoOAAssetClassListRes} returns this
*/
proto.ProtoOAAssetClassListRes.prototype.setAssetclassList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOAAssetClass=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOAAssetClass}
 */
proto.ProtoOAAssetClassListRes.prototype.addAssetclass = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOAAssetClass, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAAssetClassListRes} returns this
 */
proto.ProtoOAAssetClassListRes.prototype.clearAssetclassList = function() {
  return this.setAssetclassList([]);
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
proto.ProtoOATraderReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOATraderReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOATraderReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOATraderReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2121),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOATraderReq}
 */
proto.ProtoOATraderReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOATraderReq;
  return proto.ProtoOATraderReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOATraderReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOATraderReq}
 */
proto.ProtoOATraderReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOATraderReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOATraderReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOATraderReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOATraderReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOATraderReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2121));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOATraderReq} returns this
 */
proto.ProtoOATraderReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATraderReq} returns this
 */
proto.ProtoOATraderReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATraderReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOATraderReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOATraderReq} returns this
 */
proto.ProtoOATraderReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATraderReq} returns this
 */
proto.ProtoOATraderReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATraderReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOATraderRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOATraderRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOATraderRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOATraderRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2122),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    trader: (f = msg.getTrader()) && OpenApiModelMessages_pb.ProtoOATrader.toObject(includeInstance, f)
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
 * @return {!proto.ProtoOATraderRes}
 */
proto.ProtoOATraderRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOATraderRes;
  return proto.ProtoOATraderRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOATraderRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOATraderRes}
 */
proto.ProtoOATraderRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOATrader;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOATrader.deserializeBinaryFromReader);
      msg.setTrader(value);
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
proto.ProtoOATraderRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOATraderRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOATraderRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOATraderRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTrader();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOATrader.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOATraderRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2122));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOATraderRes} returns this
 */
proto.ProtoOATraderRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATraderRes} returns this
 */
proto.ProtoOATraderRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATraderRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOATraderRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOATraderRes} returns this
 */
proto.ProtoOATraderRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATraderRes} returns this
 */
proto.ProtoOATraderRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATraderRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ProtoOATrader trader = 3;
 * @return {!proto.ProtoOATrader}
 */
proto.ProtoOATraderRes.prototype.getTrader = function() {
  return /** @type{!proto.ProtoOATrader} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOATrader, 3, 1));
};


/**
 * @param {!proto.ProtoOATrader} value
 * @return {!proto.ProtoOATraderRes} returns this
*/
proto.ProtoOATraderRes.prototype.setTrader = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATraderRes} returns this
 */
proto.ProtoOATraderRes.prototype.clearTrader = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATraderRes.prototype.hasTrader = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ProtoOATraderUpdatedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOATraderUpdatedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOATraderUpdatedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOATraderUpdatedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2123),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    trader: (f = msg.getTrader()) && OpenApiModelMessages_pb.ProtoOATrader.toObject(includeInstance, f)
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
 * @return {!proto.ProtoOATraderUpdatedEvent}
 */
proto.ProtoOATraderUpdatedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOATraderUpdatedEvent;
  return proto.ProtoOATraderUpdatedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOATraderUpdatedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOATraderUpdatedEvent}
 */
proto.ProtoOATraderUpdatedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOATrader;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOATrader.deserializeBinaryFromReader);
      msg.setTrader(value);
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
proto.ProtoOATraderUpdatedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOATraderUpdatedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOATraderUpdatedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOATraderUpdatedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTrader();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOATrader.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOATraderUpdatedEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2123));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOATraderUpdatedEvent} returns this
 */
proto.ProtoOATraderUpdatedEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATraderUpdatedEvent} returns this
 */
proto.ProtoOATraderUpdatedEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATraderUpdatedEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOATraderUpdatedEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOATraderUpdatedEvent} returns this
 */
proto.ProtoOATraderUpdatedEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATraderUpdatedEvent} returns this
 */
proto.ProtoOATraderUpdatedEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATraderUpdatedEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ProtoOATrader trader = 3;
 * @return {!proto.ProtoOATrader}
 */
proto.ProtoOATraderUpdatedEvent.prototype.getTrader = function() {
  return /** @type{!proto.ProtoOATrader} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOATrader, 3, 1));
};


/**
 * @param {!proto.ProtoOATrader} value
 * @return {!proto.ProtoOATraderUpdatedEvent} returns this
*/
proto.ProtoOATraderUpdatedEvent.prototype.setTrader = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOATraderUpdatedEvent} returns this
 */
proto.ProtoOATraderUpdatedEvent.prototype.clearTrader = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOATraderUpdatedEvent.prototype.hasTrader = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ProtoOAReconcileReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAReconcileReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAReconcileReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAReconcileReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2124),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAReconcileReq}
 */
proto.ProtoOAReconcileReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAReconcileReq;
  return proto.ProtoOAReconcileReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAReconcileReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAReconcileReq}
 */
proto.ProtoOAReconcileReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAReconcileReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAReconcileReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAReconcileReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAReconcileReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAReconcileReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2124));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAReconcileReq} returns this
 */
proto.ProtoOAReconcileReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAReconcileReq} returns this
 */
proto.ProtoOAReconcileReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAReconcileReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAReconcileReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAReconcileReq} returns this
 */
proto.ProtoOAReconcileReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAReconcileReq} returns this
 */
proto.ProtoOAReconcileReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAReconcileReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAReconcileRes.repeatedFields_ = [3,4];



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
proto.ProtoOAReconcileRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAReconcileRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAReconcileRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAReconcileRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2125),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    positionList: jspb.Message.toObjectList(msg.getPositionList(),
    OpenApiModelMessages_pb.ProtoOAPosition.toObject, includeInstance),
    orderList: jspb.Message.toObjectList(msg.getOrderList(),
    OpenApiModelMessages_pb.ProtoOAOrder.toObject, includeInstance)
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
 * @return {!proto.ProtoOAReconcileRes}
 */
proto.ProtoOAReconcileRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAReconcileRes;
  return proto.ProtoOAReconcileRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAReconcileRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAReconcileRes}
 */
proto.ProtoOAReconcileRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOAPosition;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAPosition.deserializeBinaryFromReader);
      msg.addPosition(value);
      break;
    case 4:
      var value = new OpenApiModelMessages_pb.ProtoOAOrder;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAOrder.deserializeBinaryFromReader);
      msg.addOrder(value);
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
proto.ProtoOAReconcileRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAReconcileRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAReconcileRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAReconcileRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPositionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOAPosition.serializeBinaryToWriter
    );
  }
  f = message.getOrderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      OpenApiModelMessages_pb.ProtoOAOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAReconcileRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2125));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAReconcileRes} returns this
 */
proto.ProtoOAReconcileRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAReconcileRes} returns this
 */
proto.ProtoOAReconcileRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAReconcileRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAReconcileRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAReconcileRes} returns this
 */
proto.ProtoOAReconcileRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAReconcileRes} returns this
 */
proto.ProtoOAReconcileRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAReconcileRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOAPosition position = 3;
 * @return {!Array<!proto.ProtoOAPosition>}
 */
proto.ProtoOAReconcileRes.prototype.getPositionList = function() {
  return /** @type{!Array<!proto.ProtoOAPosition>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOAPosition, 3));
};


/**
 * @param {!Array<!proto.ProtoOAPosition>} value
 * @return {!proto.ProtoOAReconcileRes} returns this
*/
proto.ProtoOAReconcileRes.prototype.setPositionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOAPosition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOAPosition}
 */
proto.ProtoOAReconcileRes.prototype.addPosition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOAPosition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAReconcileRes} returns this
 */
proto.ProtoOAReconcileRes.prototype.clearPositionList = function() {
  return this.setPositionList([]);
};


/**
 * repeated ProtoOAOrder order = 4;
 * @return {!Array<!proto.ProtoOAOrder>}
 */
proto.ProtoOAReconcileRes.prototype.getOrderList = function() {
  return /** @type{!Array<!proto.ProtoOAOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOAOrder, 4));
};


/**
 * @param {!Array<!proto.ProtoOAOrder>} value
 * @return {!proto.ProtoOAReconcileRes} returns this
*/
proto.ProtoOAReconcileRes.prototype.setOrderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ProtoOAOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOAOrder}
 */
proto.ProtoOAReconcileRes.prototype.addOrder = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ProtoOAOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAReconcileRes} returns this
 */
proto.ProtoOAReconcileRes.prototype.clearOrderList = function() {
  return this.setOrderList([]);
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
proto.ProtoOAOrderErrorEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAOrderErrorEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAOrderErrorEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAOrderErrorEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2132),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    errorcode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    orderid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    positionid: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.ProtoOAOrderErrorEvent}
 */
proto.ProtoOAOrderErrorEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAOrderErrorEvent;
  return proto.ProtoOAOrderErrorEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAOrderErrorEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAOrderErrorEvent}
 */
proto.ProtoOAOrderErrorEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorcode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrderid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPositionid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.ProtoOAOrderErrorEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAOrderErrorEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAOrderErrorEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAOrderErrorEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAOrderErrorEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2132));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAOrderErrorEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 5;
 * @return {number}
 */
proto.ProtoOAOrderErrorEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAOrderErrorEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required string errorCode = 2;
 * @return {string}
 */
proto.ProtoOAOrderErrorEvent.prototype.getErrorcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.setErrorcode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.clearErrorcode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAOrderErrorEvent.prototype.hasErrorcode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 orderId = 3;
 * @return {number}
 */
proto.ProtoOAOrderErrorEvent.prototype.getOrderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.setOrderid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.clearOrderid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAOrderErrorEvent.prototype.hasOrderid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 positionId = 6;
 * @return {number}
 */
proto.ProtoOAOrderErrorEvent.prototype.getPositionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.setPositionid = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.clearPositionid = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAOrderErrorEvent.prototype.hasPositionid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.ProtoOAOrderErrorEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAOrderErrorEvent} returns this
 */
proto.ProtoOAOrderErrorEvent.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAOrderErrorEvent.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.ProtoOADealListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOADealListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOADealListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOADealListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2133),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    fromtimestamp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    totimestamp: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    maxrows: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ProtoOADealListReq}
 */
proto.ProtoOADealListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOADealListReq;
  return proto.ProtoOADealListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOADealListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOADealListReq}
 */
proto.ProtoOADealListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFromtimestamp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotimestamp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxrows(value);
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
proto.ProtoOADealListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOADealListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOADealListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOADealListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOADealListReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2133));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOADealListReq} returns this
 */
proto.ProtoOADealListReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADealListReq} returns this
 */
proto.ProtoOADealListReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADealListReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOADealListReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOADealListReq} returns this
 */
proto.ProtoOADealListReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADealListReq} returns this
 */
proto.ProtoOADealListReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADealListReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 fromTimestamp = 3;
 * @return {number}
 */
proto.ProtoOADealListReq.prototype.getFromtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOADealListReq} returns this
 */
proto.ProtoOADealListReq.prototype.setFromtimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADealListReq} returns this
 */
proto.ProtoOADealListReq.prototype.clearFromtimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADealListReq.prototype.hasFromtimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 toTimestamp = 4;
 * @return {number}
 */
proto.ProtoOADealListReq.prototype.getTotimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOADealListReq} returns this
 */
proto.ProtoOADealListReq.prototype.setTotimestamp = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADealListReq} returns this
 */
proto.ProtoOADealListReq.prototype.clearTotimestamp = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADealListReq.prototype.hasTotimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 maxRows = 5;
 * @return {number}
 */
proto.ProtoOADealListReq.prototype.getMaxrows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOADealListReq} returns this
 */
proto.ProtoOADealListReq.prototype.setMaxrows = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADealListReq} returns this
 */
proto.ProtoOADealListReq.prototype.clearMaxrows = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADealListReq.prototype.hasMaxrows = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOADealListRes.repeatedFields_ = [3];



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
proto.ProtoOADealListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOADealListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOADealListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOADealListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2134),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    dealList: jspb.Message.toObjectList(msg.getDealList(),
    OpenApiModelMessages_pb.ProtoOADeal.toObject, includeInstance),
    hasmore: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ProtoOADealListRes}
 */
proto.ProtoOADealListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOADealListRes;
  return proto.ProtoOADealListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOADealListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOADealListRes}
 */
proto.ProtoOADealListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOADeal;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOADeal.deserializeBinaryFromReader);
      msg.addDeal(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasmore(value);
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
proto.ProtoOADealListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOADealListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOADealListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOADealListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDealList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOADeal.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOADealListRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2134));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOADealListRes} returns this
 */
proto.ProtoOADealListRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADealListRes} returns this
 */
proto.ProtoOADealListRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADealListRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOADealListRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOADealListRes} returns this
 */
proto.ProtoOADealListRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADealListRes} returns this
 */
proto.ProtoOADealListRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADealListRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOADeal deal = 3;
 * @return {!Array<!proto.ProtoOADeal>}
 */
proto.ProtoOADealListRes.prototype.getDealList = function() {
  return /** @type{!Array<!proto.ProtoOADeal>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOADeal, 3));
};


/**
 * @param {!Array<!proto.ProtoOADeal>} value
 * @return {!proto.ProtoOADealListRes} returns this
*/
proto.ProtoOADealListRes.prototype.setDealList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOADeal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOADeal}
 */
proto.ProtoOADealListRes.prototype.addDeal = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOADeal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOADealListRes} returns this
 */
proto.ProtoOADealListRes.prototype.clearDealList = function() {
  return this.setDealList([]);
};


/**
 * required bool hasMore = 4;
 * @return {boolean}
 */
proto.ProtoOADealListRes.prototype.getHasmore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ProtoOADealListRes} returns this
 */
proto.ProtoOADealListRes.prototype.setHasmore = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADealListRes} returns this
 */
proto.ProtoOADealListRes.prototype.clearHasmore = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADealListRes.prototype.hasHasmore = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAExpectedMarginReq.repeatedFields_ = [4];



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
proto.ProtoOAExpectedMarginReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAExpectedMarginReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAExpectedMarginReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAExpectedMarginReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2139),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    volumeList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ProtoOAExpectedMarginReq}
 */
proto.ProtoOAExpectedMarginReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAExpectedMarginReq;
  return proto.ProtoOAExpectedMarginReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAExpectedMarginReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAExpectedMarginReq}
 */
proto.ProtoOAExpectedMarginReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSymbolid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addVolume(value);
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
proto.ProtoOAExpectedMarginReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAExpectedMarginReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAExpectedMarginReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAExpectedMarginReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getVolumeList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      4,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAExpectedMarginReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2139));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAExpectedMarginReq} returns this
 */
proto.ProtoOAExpectedMarginReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExpectedMarginReq} returns this
 */
proto.ProtoOAExpectedMarginReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExpectedMarginReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAExpectedMarginReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAExpectedMarginReq} returns this
 */
proto.ProtoOAExpectedMarginReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExpectedMarginReq} returns this
 */
proto.ProtoOAExpectedMarginReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExpectedMarginReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 symbolId = 3;
 * @return {number}
 */
proto.ProtoOAExpectedMarginReq.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAExpectedMarginReq} returns this
 */
proto.ProtoOAExpectedMarginReq.prototype.setSymbolid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExpectedMarginReq} returns this
 */
proto.ProtoOAExpectedMarginReq.prototype.clearSymbolid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExpectedMarginReq.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated int64 volume = 4;
 * @return {!Array<number>}
 */
proto.ProtoOAExpectedMarginReq.prototype.getVolumeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ProtoOAExpectedMarginReq} returns this
 */
proto.ProtoOAExpectedMarginReq.prototype.setVolumeList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ProtoOAExpectedMarginReq} returns this
 */
proto.ProtoOAExpectedMarginReq.prototype.addVolume = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAExpectedMarginReq} returns this
 */
proto.ProtoOAExpectedMarginReq.prototype.clearVolumeList = function() {
  return this.setVolumeList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAExpectedMarginRes.repeatedFields_ = [3];



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
proto.ProtoOAExpectedMarginRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAExpectedMarginRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAExpectedMarginRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAExpectedMarginRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2140),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    marginList: jspb.Message.toObjectList(msg.getMarginList(),
    OpenApiModelMessages_pb.ProtoOAExpectedMargin.toObject, includeInstance),
    moneydigits: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ProtoOAExpectedMarginRes}
 */
proto.ProtoOAExpectedMarginRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAExpectedMarginRes;
  return proto.ProtoOAExpectedMarginRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAExpectedMarginRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAExpectedMarginRes}
 */
proto.ProtoOAExpectedMarginRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOAExpectedMargin;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAExpectedMargin.deserializeBinaryFromReader);
      msg.addMargin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMoneydigits(value);
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
proto.ProtoOAExpectedMarginRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAExpectedMarginRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAExpectedMarginRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAExpectedMarginRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMarginList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOAExpectedMargin.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAExpectedMarginRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2140));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAExpectedMarginRes} returns this
 */
proto.ProtoOAExpectedMarginRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExpectedMarginRes} returns this
 */
proto.ProtoOAExpectedMarginRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExpectedMarginRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAExpectedMarginRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAExpectedMarginRes} returns this
 */
proto.ProtoOAExpectedMarginRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExpectedMarginRes} returns this
 */
proto.ProtoOAExpectedMarginRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExpectedMarginRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOAExpectedMargin margin = 3;
 * @return {!Array<!proto.ProtoOAExpectedMargin>}
 */
proto.ProtoOAExpectedMarginRes.prototype.getMarginList = function() {
  return /** @type{!Array<!proto.ProtoOAExpectedMargin>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOAExpectedMargin, 3));
};


/**
 * @param {!Array<!proto.ProtoOAExpectedMargin>} value
 * @return {!proto.ProtoOAExpectedMarginRes} returns this
*/
proto.ProtoOAExpectedMarginRes.prototype.setMarginList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOAExpectedMargin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOAExpectedMargin}
 */
proto.ProtoOAExpectedMarginRes.prototype.addMargin = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOAExpectedMargin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAExpectedMarginRes} returns this
 */
proto.ProtoOAExpectedMarginRes.prototype.clearMarginList = function() {
  return this.setMarginList([]);
};


/**
 * optional uint32 moneyDigits = 4;
 * @return {number}
 */
proto.ProtoOAExpectedMarginRes.prototype.getMoneydigits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAExpectedMarginRes} returns this
 */
proto.ProtoOAExpectedMarginRes.prototype.setMoneydigits = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAExpectedMarginRes} returns this
 */
proto.ProtoOAExpectedMarginRes.prototype.clearMoneydigits = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAExpectedMarginRes.prototype.hasMoneydigits = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.ProtoOAMarginChangedEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAMarginChangedEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAMarginChangedEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginChangedEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2141),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    positionid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    usedmargin: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    moneydigits: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ProtoOAMarginChangedEvent}
 */
proto.ProtoOAMarginChangedEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAMarginChangedEvent;
  return proto.ProtoOAMarginChangedEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAMarginChangedEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAMarginChangedEvent}
 */
proto.ProtoOAMarginChangedEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPositionid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsedmargin(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMoneydigits(value);
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
proto.ProtoOAMarginChangedEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAMarginChangedEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAMarginChangedEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginChangedEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAMarginChangedEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2141));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAMarginChangedEvent} returns this
 */
proto.ProtoOAMarginChangedEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginChangedEvent} returns this
 */
proto.ProtoOAMarginChangedEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginChangedEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAMarginChangedEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAMarginChangedEvent} returns this
 */
proto.ProtoOAMarginChangedEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginChangedEvent} returns this
 */
proto.ProtoOAMarginChangedEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginChangedEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required uint64 positionId = 3;
 * @return {number}
 */
proto.ProtoOAMarginChangedEvent.prototype.getPositionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAMarginChangedEvent} returns this
 */
proto.ProtoOAMarginChangedEvent.prototype.setPositionid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginChangedEvent} returns this
 */
proto.ProtoOAMarginChangedEvent.prototype.clearPositionid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginChangedEvent.prototype.hasPositionid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required uint64 usedMargin = 4;
 * @return {number}
 */
proto.ProtoOAMarginChangedEvent.prototype.getUsedmargin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAMarginChangedEvent} returns this
 */
proto.ProtoOAMarginChangedEvent.prototype.setUsedmargin = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginChangedEvent} returns this
 */
proto.ProtoOAMarginChangedEvent.prototype.clearUsedmargin = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginChangedEvent.prototype.hasUsedmargin = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 moneyDigits = 5;
 * @return {number}
 */
proto.ProtoOAMarginChangedEvent.prototype.getMoneydigits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAMarginChangedEvent} returns this
 */
proto.ProtoOAMarginChangedEvent.prototype.setMoneydigits = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginChangedEvent} returns this
 */
proto.ProtoOAMarginChangedEvent.prototype.clearMoneydigits = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginChangedEvent.prototype.hasMoneydigits = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.ProtoOACashFlowHistoryListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOACashFlowHistoryListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOACashFlowHistoryListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOACashFlowHistoryListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2143),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    fromtimestamp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    totimestamp: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ProtoOACashFlowHistoryListReq}
 */
proto.ProtoOACashFlowHistoryListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOACashFlowHistoryListReq;
  return proto.ProtoOACashFlowHistoryListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOACashFlowHistoryListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOACashFlowHistoryListReq}
 */
proto.ProtoOACashFlowHistoryListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFromtimestamp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotimestamp(value);
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
proto.ProtoOACashFlowHistoryListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOACashFlowHistoryListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOACashFlowHistoryListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOACashFlowHistoryListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOACashFlowHistoryListReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2143));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOACashFlowHistoryListReq} returns this
 */
proto.ProtoOACashFlowHistoryListReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOACashFlowHistoryListReq} returns this
 */
proto.ProtoOACashFlowHistoryListReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOACashFlowHistoryListReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOACashFlowHistoryListReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOACashFlowHistoryListReq} returns this
 */
proto.ProtoOACashFlowHistoryListReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOACashFlowHistoryListReq} returns this
 */
proto.ProtoOACashFlowHistoryListReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOACashFlowHistoryListReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 fromTimestamp = 3;
 * @return {number}
 */
proto.ProtoOACashFlowHistoryListReq.prototype.getFromtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOACashFlowHistoryListReq} returns this
 */
proto.ProtoOACashFlowHistoryListReq.prototype.setFromtimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOACashFlowHistoryListReq} returns this
 */
proto.ProtoOACashFlowHistoryListReq.prototype.clearFromtimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOACashFlowHistoryListReq.prototype.hasFromtimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 toTimestamp = 4;
 * @return {number}
 */
proto.ProtoOACashFlowHistoryListReq.prototype.getTotimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOACashFlowHistoryListReq} returns this
 */
proto.ProtoOACashFlowHistoryListReq.prototype.setTotimestamp = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOACashFlowHistoryListReq} returns this
 */
proto.ProtoOACashFlowHistoryListReq.prototype.clearTotimestamp = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOACashFlowHistoryListReq.prototype.hasTotimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOACashFlowHistoryListRes.repeatedFields_ = [3];



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
proto.ProtoOACashFlowHistoryListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOACashFlowHistoryListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOACashFlowHistoryListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOACashFlowHistoryListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2144),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    depositwithdrawList: jspb.Message.toObjectList(msg.getDepositwithdrawList(),
    OpenApiModelMessages_pb.ProtoOADepositWithdraw.toObject, includeInstance)
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
 * @return {!proto.ProtoOACashFlowHistoryListRes}
 */
proto.ProtoOACashFlowHistoryListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOACashFlowHistoryListRes;
  return proto.ProtoOACashFlowHistoryListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOACashFlowHistoryListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOACashFlowHistoryListRes}
 */
proto.ProtoOACashFlowHistoryListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOADepositWithdraw;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOADepositWithdraw.deserializeBinaryFromReader);
      msg.addDepositwithdraw(value);
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
proto.ProtoOACashFlowHistoryListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOACashFlowHistoryListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOACashFlowHistoryListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOACashFlowHistoryListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDepositwithdrawList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOADepositWithdraw.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOACashFlowHistoryListRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2144));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOACashFlowHistoryListRes} returns this
 */
proto.ProtoOACashFlowHistoryListRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOACashFlowHistoryListRes} returns this
 */
proto.ProtoOACashFlowHistoryListRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOACashFlowHistoryListRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOACashFlowHistoryListRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOACashFlowHistoryListRes} returns this
 */
proto.ProtoOACashFlowHistoryListRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOACashFlowHistoryListRes} returns this
 */
proto.ProtoOACashFlowHistoryListRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOACashFlowHistoryListRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOADepositWithdraw depositWithdraw = 3;
 * @return {!Array<!proto.ProtoOADepositWithdraw>}
 */
proto.ProtoOACashFlowHistoryListRes.prototype.getDepositwithdrawList = function() {
  return /** @type{!Array<!proto.ProtoOADepositWithdraw>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOADepositWithdraw, 3));
};


/**
 * @param {!Array<!proto.ProtoOADepositWithdraw>} value
 * @return {!proto.ProtoOACashFlowHistoryListRes} returns this
*/
proto.ProtoOACashFlowHistoryListRes.prototype.setDepositwithdrawList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOADepositWithdraw=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOADepositWithdraw}
 */
proto.ProtoOACashFlowHistoryListRes.prototype.addDepositwithdraw = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOADepositWithdraw, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOACashFlowHistoryListRes} returns this
 */
proto.ProtoOACashFlowHistoryListRes.prototype.clearDepositwithdrawList = function() {
  return this.setDepositwithdrawList([]);
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
proto.ProtoOAGetAccountListByAccessTokenReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAGetAccountListByAccessTokenReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAGetAccountListByAccessTokenReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetAccountListByAccessTokenReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2149),
    accesstoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAGetAccountListByAccessTokenReq}
 */
proto.ProtoOAGetAccountListByAccessTokenReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAGetAccountListByAccessTokenReq;
  return proto.ProtoOAGetAccountListByAccessTokenReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAGetAccountListByAccessTokenReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAGetAccountListByAccessTokenReq}
 */
proto.ProtoOAGetAccountListByAccessTokenReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstoken(value);
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
proto.ProtoOAGetAccountListByAccessTokenReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAGetAccountListByAccessTokenReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAGetAccountListByAccessTokenReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetAccountListByAccessTokenReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAGetAccountListByAccessTokenReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2149));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAGetAccountListByAccessTokenReq} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetAccountListByAccessTokenReq} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetAccountListByAccessTokenReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string accessToken = 2;
 * @return {string}
 */
proto.ProtoOAGetAccountListByAccessTokenReq.prototype.getAccesstoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAGetAccountListByAccessTokenReq} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenReq.prototype.setAccesstoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetAccountListByAccessTokenReq} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenReq.prototype.clearAccesstoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetAccountListByAccessTokenReq.prototype.hasAccesstoken = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAGetAccountListByAccessTokenRes.repeatedFields_ = [4];



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
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAGetAccountListByAccessTokenRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAGetAccountListByAccessTokenRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetAccountListByAccessTokenRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2150),
    accesstoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    permissionscope: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    ctidtraderaccountList: jspb.Message.toObjectList(msg.getCtidtraderaccountList(),
    OpenApiModelMessages_pb.ProtoOACtidTraderAccount.toObject, includeInstance)
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
 * @return {!proto.ProtoOAGetAccountListByAccessTokenRes}
 */
proto.ProtoOAGetAccountListByAccessTokenRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAGetAccountListByAccessTokenRes;
  return proto.ProtoOAGetAccountListByAccessTokenRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAGetAccountListByAccessTokenRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAGetAccountListByAccessTokenRes}
 */
proto.ProtoOAGetAccountListByAccessTokenRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstoken(value);
      break;
    case 3:
      var value = /** @type {!proto.ProtoOAClientPermissionScope} */ (reader.readEnum());
      msg.setPermissionscope(value);
      break;
    case 4:
      var value = new OpenApiModelMessages_pb.ProtoOACtidTraderAccount;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOACtidTraderAccount.deserializeBinaryFromReader);
      msg.addCtidtraderaccount(value);
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
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAGetAccountListByAccessTokenRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAGetAccountListByAccessTokenRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetAccountListByAccessTokenRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.ProtoOAClientPermissionScope} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCtidtraderaccountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      OpenApiModelMessages_pb.ProtoOACtidTraderAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2150));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAGetAccountListByAccessTokenRes} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetAccountListByAccessTokenRes} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string accessToken = 2;
 * @return {string}
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.getAccesstoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAGetAccountListByAccessTokenRes} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.setAccesstoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetAccountListByAccessTokenRes} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.clearAccesstoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.hasAccesstoken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ProtoOAClientPermissionScope permissionScope = 3;
 * @return {!proto.ProtoOAClientPermissionScope}
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.getPermissionscope = function() {
  return /** @type {!proto.ProtoOAClientPermissionScope} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ProtoOAClientPermissionScope} value
 * @return {!proto.ProtoOAGetAccountListByAccessTokenRes} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.setPermissionscope = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetAccountListByAccessTokenRes} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.clearPermissionscope = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.hasPermissionscope = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ProtoOACtidTraderAccount ctidTraderAccount = 4;
 * @return {!Array<!proto.ProtoOACtidTraderAccount>}
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.getCtidtraderaccountList = function() {
  return /** @type{!Array<!proto.ProtoOACtidTraderAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOACtidTraderAccount, 4));
};


/**
 * @param {!Array<!proto.ProtoOACtidTraderAccount>} value
 * @return {!proto.ProtoOAGetAccountListByAccessTokenRes} returns this
*/
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.setCtidtraderaccountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ProtoOACtidTraderAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOACtidTraderAccount}
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.addCtidtraderaccount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ProtoOACtidTraderAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAGetAccountListByAccessTokenRes} returns this
 */
proto.ProtoOAGetAccountListByAccessTokenRes.prototype.clearCtidtraderaccountList = function() {
  return this.setCtidtraderaccountList([]);
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
proto.ProtoOARefreshTokenReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOARefreshTokenReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOARefreshTokenReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOARefreshTokenReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2173),
    refreshtoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOARefreshTokenReq}
 */
proto.ProtoOARefreshTokenReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOARefreshTokenReq;
  return proto.ProtoOARefreshTokenReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOARefreshTokenReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOARefreshTokenReq}
 */
proto.ProtoOARefreshTokenReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshtoken(value);
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
proto.ProtoOARefreshTokenReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOARefreshTokenReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOARefreshTokenReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOARefreshTokenReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOARefreshTokenReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2173));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOARefreshTokenReq} returns this
 */
proto.ProtoOARefreshTokenReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOARefreshTokenReq} returns this
 */
proto.ProtoOARefreshTokenReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOARefreshTokenReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string refreshToken = 2;
 * @return {string}
 */
proto.ProtoOARefreshTokenReq.prototype.getRefreshtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOARefreshTokenReq} returns this
 */
proto.ProtoOARefreshTokenReq.prototype.setRefreshtoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOARefreshTokenReq} returns this
 */
proto.ProtoOARefreshTokenReq.prototype.clearRefreshtoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOARefreshTokenReq.prototype.hasRefreshtoken = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOARefreshTokenRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOARefreshTokenRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOARefreshTokenRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOARefreshTokenRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2174),
    accesstoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    tokentype: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    expiresin: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    refreshtoken: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ProtoOARefreshTokenRes}
 */
proto.ProtoOARefreshTokenRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOARefreshTokenRes;
  return proto.ProtoOARefreshTokenRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOARefreshTokenRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOARefreshTokenRes}
 */
proto.ProtoOARefreshTokenRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstoken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokentype(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiresin(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshtoken(value);
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
proto.ProtoOARefreshTokenRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOARefreshTokenRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOARefreshTokenRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOARefreshTokenRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOARefreshTokenRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2174));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOARefreshTokenRes} returns this
 */
proto.ProtoOARefreshTokenRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOARefreshTokenRes} returns this
 */
proto.ProtoOARefreshTokenRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOARefreshTokenRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string accessToken = 2;
 * @return {string}
 */
proto.ProtoOARefreshTokenRes.prototype.getAccesstoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOARefreshTokenRes} returns this
 */
proto.ProtoOARefreshTokenRes.prototype.setAccesstoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOARefreshTokenRes} returns this
 */
proto.ProtoOARefreshTokenRes.prototype.clearAccesstoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOARefreshTokenRes.prototype.hasAccesstoken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required string tokenType = 3;
 * @return {string}
 */
proto.ProtoOARefreshTokenRes.prototype.getTokentype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOARefreshTokenRes} returns this
 */
proto.ProtoOARefreshTokenRes.prototype.setTokentype = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOARefreshTokenRes} returns this
 */
proto.ProtoOARefreshTokenRes.prototype.clearTokentype = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOARefreshTokenRes.prototype.hasTokentype = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 expiresIn = 4;
 * @return {number}
 */
proto.ProtoOARefreshTokenRes.prototype.getExpiresin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOARefreshTokenRes} returns this
 */
proto.ProtoOARefreshTokenRes.prototype.setExpiresin = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOARefreshTokenRes} returns this
 */
proto.ProtoOARefreshTokenRes.prototype.clearExpiresin = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOARefreshTokenRes.prototype.hasExpiresin = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required string refreshToken = 5;
 * @return {string}
 */
proto.ProtoOARefreshTokenRes.prototype.getRefreshtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOARefreshTokenRes} returns this
 */
proto.ProtoOARefreshTokenRes.prototype.setRefreshtoken = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOARefreshTokenRes} returns this
 */
proto.ProtoOARefreshTokenRes.prototype.clearRefreshtoken = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOARefreshTokenRes.prototype.hasRefreshtoken = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOASubscribeSpotsReq.repeatedFields_ = [3];



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
proto.ProtoOASubscribeSpotsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASubscribeSpotsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASubscribeSpotsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeSpotsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2127),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolidList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ProtoOASubscribeSpotsReq}
 */
proto.ProtoOASubscribeSpotsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASubscribeSpotsReq;
  return proto.ProtoOASubscribeSpotsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASubscribeSpotsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASubscribeSpotsReq}
 */
proto.ProtoOASubscribeSpotsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addSymbolid(value);
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
proto.ProtoOASubscribeSpotsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASubscribeSpotsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASubscribeSpotsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeSpotsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSymbolidList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      3,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASubscribeSpotsReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2127));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASubscribeSpotsReq} returns this
 */
proto.ProtoOASubscribeSpotsReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeSpotsReq} returns this
 */
proto.ProtoOASubscribeSpotsReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeSpotsReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASubscribeSpotsReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASubscribeSpotsReq} returns this
 */
proto.ProtoOASubscribeSpotsReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeSpotsReq} returns this
 */
proto.ProtoOASubscribeSpotsReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeSpotsReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated int64 symbolId = 3;
 * @return {!Array<number>}
 */
proto.ProtoOASubscribeSpotsReq.prototype.getSymbolidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ProtoOASubscribeSpotsReq} returns this
 */
proto.ProtoOASubscribeSpotsReq.prototype.setSymbolidList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ProtoOASubscribeSpotsReq} returns this
 */
proto.ProtoOASubscribeSpotsReq.prototype.addSymbolid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOASubscribeSpotsReq} returns this
 */
proto.ProtoOASubscribeSpotsReq.prototype.clearSymbolidList = function() {
  return this.setSymbolidList([]);
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
proto.ProtoOASubscribeSpotsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASubscribeSpotsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASubscribeSpotsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeSpotsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2128),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOASubscribeSpotsRes}
 */
proto.ProtoOASubscribeSpotsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASubscribeSpotsRes;
  return proto.ProtoOASubscribeSpotsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASubscribeSpotsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASubscribeSpotsRes}
 */
proto.ProtoOASubscribeSpotsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOASubscribeSpotsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASubscribeSpotsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASubscribeSpotsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeSpotsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASubscribeSpotsRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2128));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASubscribeSpotsRes} returns this
 */
proto.ProtoOASubscribeSpotsRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeSpotsRes} returns this
 */
proto.ProtoOASubscribeSpotsRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeSpotsRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASubscribeSpotsRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASubscribeSpotsRes} returns this
 */
proto.ProtoOASubscribeSpotsRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeSpotsRes} returns this
 */
proto.ProtoOASubscribeSpotsRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeSpotsRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAUnsubscribeSpotsReq.repeatedFields_ = [3];



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
proto.ProtoOAUnsubscribeSpotsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAUnsubscribeSpotsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAUnsubscribeSpotsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeSpotsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2129),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolidList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ProtoOAUnsubscribeSpotsReq}
 */
proto.ProtoOAUnsubscribeSpotsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAUnsubscribeSpotsReq;
  return proto.ProtoOAUnsubscribeSpotsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAUnsubscribeSpotsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAUnsubscribeSpotsReq}
 */
proto.ProtoOAUnsubscribeSpotsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addSymbolid(value);
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
proto.ProtoOAUnsubscribeSpotsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAUnsubscribeSpotsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAUnsubscribeSpotsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeSpotsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSymbolidList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      3,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2129));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAUnsubscribeSpotsReq} returns this
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeSpotsReq} returns this
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAUnsubscribeSpotsReq} returns this
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeSpotsReq} returns this
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated int64 symbolId = 3;
 * @return {!Array<number>}
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.getSymbolidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ProtoOAUnsubscribeSpotsReq} returns this
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.setSymbolidList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ProtoOAUnsubscribeSpotsReq} returns this
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.addSymbolid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAUnsubscribeSpotsReq} returns this
 */
proto.ProtoOAUnsubscribeSpotsReq.prototype.clearSymbolidList = function() {
  return this.setSymbolidList([]);
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
proto.ProtoOAUnsubscribeSpotsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAUnsubscribeSpotsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAUnsubscribeSpotsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeSpotsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2130),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAUnsubscribeSpotsRes}
 */
proto.ProtoOAUnsubscribeSpotsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAUnsubscribeSpotsRes;
  return proto.ProtoOAUnsubscribeSpotsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAUnsubscribeSpotsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAUnsubscribeSpotsRes}
 */
proto.ProtoOAUnsubscribeSpotsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAUnsubscribeSpotsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAUnsubscribeSpotsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAUnsubscribeSpotsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeSpotsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAUnsubscribeSpotsRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2130));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAUnsubscribeSpotsRes} returns this
 */
proto.ProtoOAUnsubscribeSpotsRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeSpotsRes} returns this
 */
proto.ProtoOAUnsubscribeSpotsRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeSpotsRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAUnsubscribeSpotsRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAUnsubscribeSpotsRes} returns this
 */
proto.ProtoOAUnsubscribeSpotsRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeSpotsRes} returns this
 */
proto.ProtoOAUnsubscribeSpotsRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeSpotsRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOASpotEvent.repeatedFields_ = [6];



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
proto.ProtoOASpotEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASpotEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASpotEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASpotEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2131),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    bid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    ask: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    trendbarList: jspb.Message.toObjectList(msg.getTrendbarList(),
    OpenApiModelMessages_pb.ProtoOATrendbar.toObject, includeInstance),
    sessionclose: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.ProtoOASpotEvent}
 */
proto.ProtoOASpotEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASpotEvent;
  return proto.ProtoOASpotEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASpotEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASpotEvent}
 */
proto.ProtoOASpotEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSymbolid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAsk(value);
      break;
    case 6:
      var value = new OpenApiModelMessages_pb.ProtoOATrendbar;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOATrendbar.deserializeBinaryFromReader);
      msg.addTrendbar(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSessionclose(value);
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
proto.ProtoOASpotEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASpotEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASpotEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASpotEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getTrendbarList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      OpenApiModelMessages_pb.ProtoOATrendbar.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASpotEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2131));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASpotEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASpotEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASpotEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 symbolId = 3;
 * @return {number}
 */
proto.ProtoOASpotEvent.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.setSymbolid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.clearSymbolid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASpotEvent.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 bid = 4;
 * @return {number}
 */
proto.ProtoOASpotEvent.prototype.getBid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.setBid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.clearBid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASpotEvent.prototype.hasBid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 ask = 5;
 * @return {number}
 */
proto.ProtoOASpotEvent.prototype.getAsk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.setAsk = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.clearAsk = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASpotEvent.prototype.hasAsk = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated ProtoOATrendbar trendbar = 6;
 * @return {!Array<!proto.ProtoOATrendbar>}
 */
proto.ProtoOASpotEvent.prototype.getTrendbarList = function() {
  return /** @type{!Array<!proto.ProtoOATrendbar>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOATrendbar, 6));
};


/**
 * @param {!Array<!proto.ProtoOATrendbar>} value
 * @return {!proto.ProtoOASpotEvent} returns this
*/
proto.ProtoOASpotEvent.prototype.setTrendbarList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.ProtoOATrendbar=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOATrendbar}
 */
proto.ProtoOASpotEvent.prototype.addTrendbar = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.ProtoOATrendbar, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.clearTrendbarList = function() {
  return this.setTrendbarList([]);
};


/**
 * optional uint64 sessionClose = 7;
 * @return {number}
 */
proto.ProtoOASpotEvent.prototype.getSessionclose = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.setSessionclose = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASpotEvent} returns this
 */
proto.ProtoOASpotEvent.prototype.clearSessionclose = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASpotEvent.prototype.hasSessionclose = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.ProtoOASubscribeLiveTrendbarReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASubscribeLiveTrendbarReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASubscribeLiveTrendbarReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeLiveTrendbarReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2135),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    period: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    symbolid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ProtoOASubscribeLiveTrendbarReq}
 */
proto.ProtoOASubscribeLiveTrendbarReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASubscribeLiveTrendbarReq;
  return proto.ProtoOASubscribeLiveTrendbarReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASubscribeLiveTrendbarReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASubscribeLiveTrendbarReq}
 */
proto.ProtoOASubscribeLiveTrendbarReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {!proto.ProtoOATrendbarPeriod} */ (reader.readEnum());
      msg.setPeriod(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSymbolid(value);
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
proto.ProtoOASubscribeLiveTrendbarReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASubscribeLiveTrendbarReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASubscribeLiveTrendbarReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeLiveTrendbarReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {!proto.ProtoOATrendbarPeriod} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2135));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ProtoOATrendbarPeriod period = 3;
 * @return {!proto.ProtoOATrendbarPeriod}
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.getPeriod = function() {
  return /** @type {!proto.ProtoOATrendbarPeriod} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/**
 * @param {!proto.ProtoOATrendbarPeriod} value
 * @return {!proto.ProtoOASubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.setPeriod = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.clearPeriod = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 symbolId = 4;
 * @return {number}
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.setSymbolid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.clearSymbolid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeLiveTrendbarReq.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.ProtoOASubscribeLiveTrendbarRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASubscribeLiveTrendbarRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASubscribeLiveTrendbarRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeLiveTrendbarRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2165),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOASubscribeLiveTrendbarRes}
 */
proto.ProtoOASubscribeLiveTrendbarRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASubscribeLiveTrendbarRes;
  return proto.ProtoOASubscribeLiveTrendbarRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASubscribeLiveTrendbarRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASubscribeLiveTrendbarRes}
 */
proto.ProtoOASubscribeLiveTrendbarRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOASubscribeLiveTrendbarRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASubscribeLiveTrendbarRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASubscribeLiveTrendbarRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeLiveTrendbarRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASubscribeLiveTrendbarRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2165));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASubscribeLiveTrendbarRes} returns this
 */
proto.ProtoOASubscribeLiveTrendbarRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeLiveTrendbarRes} returns this
 */
proto.ProtoOASubscribeLiveTrendbarRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeLiveTrendbarRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASubscribeLiveTrendbarRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASubscribeLiveTrendbarRes} returns this
 */
proto.ProtoOASubscribeLiveTrendbarRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeLiveTrendbarRes} returns this
 */
proto.ProtoOASubscribeLiveTrendbarRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeLiveTrendbarRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAUnsubscribeLiveTrendbarReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAUnsubscribeLiveTrendbarReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2136),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    period: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    symbolid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarReq}
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAUnsubscribeLiveTrendbarReq;
  return proto.ProtoOAUnsubscribeLiveTrendbarReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAUnsubscribeLiveTrendbarReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarReq}
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {!proto.ProtoOATrendbarPeriod} */ (reader.readEnum());
      msg.setPeriod(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSymbolid(value);
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
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAUnsubscribeLiveTrendbarReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAUnsubscribeLiveTrendbarReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {!proto.ProtoOATrendbarPeriod} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2136));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ProtoOATrendbarPeriod period = 3;
 * @return {!proto.ProtoOATrendbarPeriod}
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.getPeriod = function() {
  return /** @type {!proto.ProtoOATrendbarPeriod} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/**
 * @param {!proto.ProtoOATrendbarPeriod} value
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.setPeriod = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.clearPeriod = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 symbolId = 4;
 * @return {number}
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.setSymbolid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarReq} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.clearSymbolid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeLiveTrendbarReq.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.ProtoOAUnsubscribeLiveTrendbarRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAUnsubscribeLiveTrendbarRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAUnsubscribeLiveTrendbarRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2166),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarRes}
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAUnsubscribeLiveTrendbarRes;
  return proto.ProtoOAUnsubscribeLiveTrendbarRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAUnsubscribeLiveTrendbarRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarRes}
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAUnsubscribeLiveTrendbarRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAUnsubscribeLiveTrendbarRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAUnsubscribeLiveTrendbarRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2166));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarRes} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarRes} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarRes} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeLiveTrendbarRes} returns this
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeLiveTrendbarRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOAGetTrendbarsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAGetTrendbarsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAGetTrendbarsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetTrendbarsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2137),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    fromtimestamp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    totimestamp: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    period: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    symbolid: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.ProtoOAGetTrendbarsReq}
 */
proto.ProtoOAGetTrendbarsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAGetTrendbarsReq;
  return proto.ProtoOAGetTrendbarsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAGetTrendbarsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAGetTrendbarsReq}
 */
proto.ProtoOAGetTrendbarsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFromtimestamp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotimestamp(value);
      break;
    case 5:
      var value = /** @type {!proto.ProtoOATrendbarPeriod} */ (reader.readEnum());
      msg.setPeriod(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSymbolid(value);
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
proto.ProtoOAGetTrendbarsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAGetTrendbarsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAGetTrendbarsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetTrendbarsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {!proto.ProtoOATrendbarPeriod} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAGetTrendbarsReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2137));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAGetTrendbarsReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 fromTimestamp = 3;
 * @return {number}
 */
proto.ProtoOAGetTrendbarsReq.prototype.getFromtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.setFromtimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.clearFromtimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsReq.prototype.hasFromtimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 toTimestamp = 4;
 * @return {number}
 */
proto.ProtoOAGetTrendbarsReq.prototype.getTotimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.setTotimestamp = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.clearTotimestamp = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsReq.prototype.hasTotimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required ProtoOATrendbarPeriod period = 5;
 * @return {!proto.ProtoOATrendbarPeriod}
 */
proto.ProtoOAGetTrendbarsReq.prototype.getPeriod = function() {
  return /** @type {!proto.ProtoOATrendbarPeriod} */ (jspb.Message.getFieldWithDefault(this, 5, 1));
};


/**
 * @param {!proto.ProtoOATrendbarPeriod} value
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.setPeriod = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.clearPeriod = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsReq.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required int64 symbolId = 6;
 * @return {number}
 */
proto.ProtoOAGetTrendbarsReq.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.setSymbolid = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsReq} returns this
 */
proto.ProtoOAGetTrendbarsReq.prototype.clearSymbolid = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsReq.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAGetTrendbarsRes.repeatedFields_ = [5];



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
proto.ProtoOAGetTrendbarsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAGetTrendbarsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAGetTrendbarsRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetTrendbarsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2138),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    period: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    timestamp: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    trendbarList: jspb.Message.toObjectList(msg.getTrendbarList(),
    OpenApiModelMessages_pb.ProtoOATrendbar.toObject, includeInstance),
    symbolid: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.ProtoOAGetTrendbarsRes}
 */
proto.ProtoOAGetTrendbarsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAGetTrendbarsRes;
  return proto.ProtoOAGetTrendbarsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAGetTrendbarsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAGetTrendbarsRes}
 */
proto.ProtoOAGetTrendbarsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {!proto.ProtoOATrendbarPeriod} */ (reader.readEnum());
      msg.setPeriod(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 5:
      var value = new OpenApiModelMessages_pb.ProtoOATrendbar;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOATrendbar.deserializeBinaryFromReader);
      msg.addTrendbar(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSymbolid(value);
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
proto.ProtoOAGetTrendbarsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAGetTrendbarsRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAGetTrendbarsRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetTrendbarsRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {!proto.ProtoOATrendbarPeriod} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTrendbarList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      OpenApiModelMessages_pb.ProtoOATrendbar.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAGetTrendbarsRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2138));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAGetTrendbarsRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ProtoOATrendbarPeriod period = 3;
 * @return {!proto.ProtoOATrendbarPeriod}
 */
proto.ProtoOAGetTrendbarsRes.prototype.getPeriod = function() {
  return /** @type {!proto.ProtoOATrendbarPeriod} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/**
 * @param {!proto.ProtoOATrendbarPeriod} value
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.setPeriod = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.clearPeriod = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsRes.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int64 timestamp = 4;
 * @return {number}
 */
proto.ProtoOAGetTrendbarsRes.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsRes.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated ProtoOATrendbar trendbar = 5;
 * @return {!Array<!proto.ProtoOATrendbar>}
 */
proto.ProtoOAGetTrendbarsRes.prototype.getTrendbarList = function() {
  return /** @type{!Array<!proto.ProtoOATrendbar>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOATrendbar, 5));
};


/**
 * @param {!Array<!proto.ProtoOATrendbar>} value
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
*/
proto.ProtoOAGetTrendbarsRes.prototype.setTrendbarList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ProtoOATrendbar=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOATrendbar}
 */
proto.ProtoOAGetTrendbarsRes.prototype.addTrendbar = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ProtoOATrendbar, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.clearTrendbarList = function() {
  return this.setTrendbarList([]);
};


/**
 * optional int64 symbolId = 6;
 * @return {number}
 */
proto.ProtoOAGetTrendbarsRes.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.setSymbolid = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTrendbarsRes} returns this
 */
proto.ProtoOAGetTrendbarsRes.prototype.clearSymbolid = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTrendbarsRes.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.ProtoOAGetTickDataReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAGetTickDataReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAGetTickDataReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetTickDataReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2145),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    fromtimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    totimestamp: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.ProtoOAGetTickDataReq}
 */
proto.ProtoOAGetTickDataReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAGetTickDataReq;
  return proto.ProtoOAGetTickDataReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAGetTickDataReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAGetTickDataReq}
 */
proto.ProtoOAGetTickDataReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSymbolid(value);
      break;
    case 4:
      var value = /** @type {!proto.ProtoOAQuoteType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFromtimestamp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotimestamp(value);
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
proto.ProtoOAGetTickDataReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAGetTickDataReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAGetTickDataReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetTickDataReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {!proto.ProtoOAQuoteType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAGetTickDataReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2145));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTickDataReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAGetTickDataReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTickDataReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 symbolId = 3;
 * @return {number}
 */
proto.ProtoOAGetTickDataReq.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.setSymbolid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.clearSymbolid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTickDataReq.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required ProtoOAQuoteType type = 4;
 * @return {!proto.ProtoOAQuoteType}
 */
proto.ProtoOAGetTickDataReq.prototype.getType = function() {
  return /** @type {!proto.ProtoOAQuoteType} */ (jspb.Message.getFieldWithDefault(this, 4, 1));
};


/**
 * @param {!proto.ProtoOAQuoteType} value
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.setType = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.clearType = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTickDataReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required int64 fromTimestamp = 5;
 * @return {number}
 */
proto.ProtoOAGetTickDataReq.prototype.getFromtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.setFromtimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.clearFromtimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTickDataReq.prototype.hasFromtimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required int64 toTimestamp = 6;
 * @return {number}
 */
proto.ProtoOAGetTickDataReq.prototype.getTotimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.setTotimestamp = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTickDataReq} returns this
 */
proto.ProtoOAGetTickDataReq.prototype.clearTotimestamp = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTickDataReq.prototype.hasTotimestamp = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAGetTickDataRes.repeatedFields_ = [3];



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
proto.ProtoOAGetTickDataRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAGetTickDataRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAGetTickDataRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetTickDataRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2146),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    tickdataList: jspb.Message.toObjectList(msg.getTickdataList(),
    OpenApiModelMessages_pb.ProtoOATickData.toObject, includeInstance),
    hasmore: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ProtoOAGetTickDataRes}
 */
proto.ProtoOAGetTickDataRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAGetTickDataRes;
  return proto.ProtoOAGetTickDataRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAGetTickDataRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAGetTickDataRes}
 */
proto.ProtoOAGetTickDataRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOATickData;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOATickData.deserializeBinaryFromReader);
      msg.addTickdata(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasmore(value);
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
proto.ProtoOAGetTickDataRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAGetTickDataRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAGetTickDataRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetTickDataRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTickdataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOATickData.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAGetTickDataRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2146));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAGetTickDataRes} returns this
 */
proto.ProtoOAGetTickDataRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTickDataRes} returns this
 */
proto.ProtoOAGetTickDataRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTickDataRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAGetTickDataRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAGetTickDataRes} returns this
 */
proto.ProtoOAGetTickDataRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTickDataRes} returns this
 */
proto.ProtoOAGetTickDataRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTickDataRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOATickData tickData = 3;
 * @return {!Array<!proto.ProtoOATickData>}
 */
proto.ProtoOAGetTickDataRes.prototype.getTickdataList = function() {
  return /** @type{!Array<!proto.ProtoOATickData>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOATickData, 3));
};


/**
 * @param {!Array<!proto.ProtoOATickData>} value
 * @return {!proto.ProtoOAGetTickDataRes} returns this
*/
proto.ProtoOAGetTickDataRes.prototype.setTickdataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOATickData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOATickData}
 */
proto.ProtoOAGetTickDataRes.prototype.addTickdata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOATickData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAGetTickDataRes} returns this
 */
proto.ProtoOAGetTickDataRes.prototype.clearTickdataList = function() {
  return this.setTickdataList([]);
};


/**
 * required bool hasMore = 4;
 * @return {boolean}
 */
proto.ProtoOAGetTickDataRes.prototype.getHasmore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ProtoOAGetTickDataRes} returns this
 */
proto.ProtoOAGetTickDataRes.prototype.setHasmore = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetTickDataRes} returns this
 */
proto.ProtoOAGetTickDataRes.prototype.clearHasmore = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetTickDataRes.prototype.hasHasmore = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.ProtoOAGetCtidProfileByTokenReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAGetCtidProfileByTokenReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAGetCtidProfileByTokenReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetCtidProfileByTokenReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2151),
    accesstoken: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAGetCtidProfileByTokenReq}
 */
proto.ProtoOAGetCtidProfileByTokenReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAGetCtidProfileByTokenReq;
  return proto.ProtoOAGetCtidProfileByTokenReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAGetCtidProfileByTokenReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAGetCtidProfileByTokenReq}
 */
proto.ProtoOAGetCtidProfileByTokenReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstoken(value);
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
proto.ProtoOAGetCtidProfileByTokenReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAGetCtidProfileByTokenReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAGetCtidProfileByTokenReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetCtidProfileByTokenReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAGetCtidProfileByTokenReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2151));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAGetCtidProfileByTokenReq} returns this
 */
proto.ProtoOAGetCtidProfileByTokenReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetCtidProfileByTokenReq} returns this
 */
proto.ProtoOAGetCtidProfileByTokenReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetCtidProfileByTokenReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string accessToken = 2;
 * @return {string}
 */
proto.ProtoOAGetCtidProfileByTokenReq.prototype.getAccesstoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProtoOAGetCtidProfileByTokenReq} returns this
 */
proto.ProtoOAGetCtidProfileByTokenReq.prototype.setAccesstoken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetCtidProfileByTokenReq} returns this
 */
proto.ProtoOAGetCtidProfileByTokenReq.prototype.clearAccesstoken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetCtidProfileByTokenReq.prototype.hasAccesstoken = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOAGetCtidProfileByTokenRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAGetCtidProfileByTokenRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAGetCtidProfileByTokenRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetCtidProfileByTokenRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2152),
    profile: (f = msg.getProfile()) && OpenApiModelMessages_pb.ProtoOACtidProfile.toObject(includeInstance, f)
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
 * @return {!proto.ProtoOAGetCtidProfileByTokenRes}
 */
proto.ProtoOAGetCtidProfileByTokenRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAGetCtidProfileByTokenRes;
  return proto.ProtoOAGetCtidProfileByTokenRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAGetCtidProfileByTokenRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAGetCtidProfileByTokenRes}
 */
proto.ProtoOAGetCtidProfileByTokenRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = new OpenApiModelMessages_pb.ProtoOACtidProfile;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOACtidProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
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
proto.ProtoOAGetCtidProfileByTokenRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAGetCtidProfileByTokenRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAGetCtidProfileByTokenRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAGetCtidProfileByTokenRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      OpenApiModelMessages_pb.ProtoOACtidProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAGetCtidProfileByTokenRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2152));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAGetCtidProfileByTokenRes} returns this
 */
proto.ProtoOAGetCtidProfileByTokenRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetCtidProfileByTokenRes} returns this
 */
proto.ProtoOAGetCtidProfileByTokenRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetCtidProfileByTokenRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required ProtoOACtidProfile profile = 2;
 * @return {!proto.ProtoOACtidProfile}
 */
proto.ProtoOAGetCtidProfileByTokenRes.prototype.getProfile = function() {
  return /** @type{!proto.ProtoOACtidProfile} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOACtidProfile, 2, 1));
};


/**
 * @param {!proto.ProtoOACtidProfile} value
 * @return {!proto.ProtoOAGetCtidProfileByTokenRes} returns this
*/
proto.ProtoOAGetCtidProfileByTokenRes.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAGetCtidProfileByTokenRes} returns this
 */
proto.ProtoOAGetCtidProfileByTokenRes.prototype.clearProfile = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAGetCtidProfileByTokenRes.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOADepthEvent.repeatedFields_ = [4,5];



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
proto.ProtoOADepthEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOADepthEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOADepthEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOADepthEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2155),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolid: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    newquotesList: jspb.Message.toObjectList(msg.getNewquotesList(),
    OpenApiModelMessages_pb.ProtoOADepthQuote.toObject, includeInstance),
    deletedquotesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ProtoOADepthEvent}
 */
proto.ProtoOADepthEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOADepthEvent;
  return proto.ProtoOADepthEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOADepthEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOADepthEvent}
 */
proto.ProtoOADepthEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSymbolid(value);
      break;
    case 4:
      var value = new OpenApiModelMessages_pb.ProtoOADepthQuote;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOADepthQuote.deserializeBinaryFromReader);
      msg.addNewquotes(value);
      break;
    case 5:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setDeletedquotesList(value);
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
proto.ProtoOADepthEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOADepthEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOADepthEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOADepthEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getNewquotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      OpenApiModelMessages_pb.ProtoOADepthQuote.serializeBinaryToWriter
    );
  }
  f = message.getDeletedquotesList();
  if (f.length > 0) {
    writer.writePackedUint64(
      5,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOADepthEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2155));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOADepthEvent} returns this
 */
proto.ProtoOADepthEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADepthEvent} returns this
 */
proto.ProtoOADepthEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADepthEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOADepthEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOADepthEvent} returns this
 */
proto.ProtoOADepthEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADepthEvent} returns this
 */
proto.ProtoOADepthEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADepthEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required uint64 symbolId = 3;
 * @return {number}
 */
proto.ProtoOADepthEvent.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOADepthEvent} returns this
 */
proto.ProtoOADepthEvent.prototype.setSymbolid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOADepthEvent} returns this
 */
proto.ProtoOADepthEvent.prototype.clearSymbolid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOADepthEvent.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ProtoOADepthQuote newQuotes = 4;
 * @return {!Array<!proto.ProtoOADepthQuote>}
 */
proto.ProtoOADepthEvent.prototype.getNewquotesList = function() {
  return /** @type{!Array<!proto.ProtoOADepthQuote>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOADepthQuote, 4));
};


/**
 * @param {!Array<!proto.ProtoOADepthQuote>} value
 * @return {!proto.ProtoOADepthEvent} returns this
*/
proto.ProtoOADepthEvent.prototype.setNewquotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ProtoOADepthQuote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOADepthQuote}
 */
proto.ProtoOADepthEvent.prototype.addNewquotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ProtoOADepthQuote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOADepthEvent} returns this
 */
proto.ProtoOADepthEvent.prototype.clearNewquotesList = function() {
  return this.setNewquotesList([]);
};


/**
 * repeated uint64 deletedQuotes = 5;
 * @return {!Array<number>}
 */
proto.ProtoOADepthEvent.prototype.getDeletedquotesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ProtoOADepthEvent} returns this
 */
proto.ProtoOADepthEvent.prototype.setDeletedquotesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ProtoOADepthEvent} returns this
 */
proto.ProtoOADepthEvent.prototype.addDeletedquotes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOADepthEvent} returns this
 */
proto.ProtoOADepthEvent.prototype.clearDeletedquotesList = function() {
  return this.setDeletedquotesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOASubscribeDepthQuotesReq.repeatedFields_ = [3];



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
proto.ProtoOASubscribeDepthQuotesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASubscribeDepthQuotesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASubscribeDepthQuotesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeDepthQuotesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2156),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolidList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ProtoOASubscribeDepthQuotesReq}
 */
proto.ProtoOASubscribeDepthQuotesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASubscribeDepthQuotesReq;
  return proto.ProtoOASubscribeDepthQuotesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASubscribeDepthQuotesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASubscribeDepthQuotesReq}
 */
proto.ProtoOASubscribeDepthQuotesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addSymbolid(value);
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
proto.ProtoOASubscribeDepthQuotesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASubscribeDepthQuotesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASubscribeDepthQuotesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeDepthQuotesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSymbolidList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      3,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2156));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASubscribeDepthQuotesReq} returns this
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeDepthQuotesReq} returns this
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASubscribeDepthQuotesReq} returns this
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeDepthQuotesReq} returns this
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated int64 symbolId = 3;
 * @return {!Array<number>}
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.getSymbolidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ProtoOASubscribeDepthQuotesReq} returns this
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.setSymbolidList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ProtoOASubscribeDepthQuotesReq} returns this
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.addSymbolid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOASubscribeDepthQuotesReq} returns this
 */
proto.ProtoOASubscribeDepthQuotesReq.prototype.clearSymbolidList = function() {
  return this.setSymbolidList([]);
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
proto.ProtoOASubscribeDepthQuotesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASubscribeDepthQuotesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASubscribeDepthQuotesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeDepthQuotesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2157),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOASubscribeDepthQuotesRes}
 */
proto.ProtoOASubscribeDepthQuotesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASubscribeDepthQuotesRes;
  return proto.ProtoOASubscribeDepthQuotesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASubscribeDepthQuotesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASubscribeDepthQuotesRes}
 */
proto.ProtoOASubscribeDepthQuotesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOASubscribeDepthQuotesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASubscribeDepthQuotesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASubscribeDepthQuotesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASubscribeDepthQuotesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASubscribeDepthQuotesRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2157));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASubscribeDepthQuotesRes} returns this
 */
proto.ProtoOASubscribeDepthQuotesRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeDepthQuotesRes} returns this
 */
proto.ProtoOASubscribeDepthQuotesRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeDepthQuotesRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASubscribeDepthQuotesRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASubscribeDepthQuotesRes} returns this
 */
proto.ProtoOASubscribeDepthQuotesRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASubscribeDepthQuotesRes} returns this
 */
proto.ProtoOASubscribeDepthQuotesRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASubscribeDepthQuotesRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.repeatedFields_ = [3];



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
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAUnsubscribeDepthQuotesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAUnsubscribeDepthQuotesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2158),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolidList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesReq}
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAUnsubscribeDepthQuotesReq;
  return proto.ProtoOAUnsubscribeDepthQuotesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAUnsubscribeDepthQuotesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesReq}
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addSymbolid(value);
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
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAUnsubscribeDepthQuotesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAUnsubscribeDepthQuotesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSymbolidList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      3,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2158));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesReq} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesReq} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesReq} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesReq} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated int64 symbolId = 3;
 * @return {!Array<number>}
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.getSymbolidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesReq} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.setSymbolidList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesReq} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.addSymbolid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesReq} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesReq.prototype.clearSymbolidList = function() {
  return this.setSymbolidList([]);
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
proto.ProtoOAUnsubscribeDepthQuotesRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAUnsubscribeDepthQuotesRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAUnsubscribeDepthQuotesRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2159),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesRes}
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAUnsubscribeDepthQuotesRes;
  return proto.ProtoOAUnsubscribeDepthQuotesRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAUnsubscribeDepthQuotesRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesRes}
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAUnsubscribeDepthQuotesRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAUnsubscribeDepthQuotesRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAUnsubscribeDepthQuotesRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2159));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesRes} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesRes} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesRes} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAUnsubscribeDepthQuotesRes} returns this
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAUnsubscribeDepthQuotesRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOASymbolCategoryListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASymbolCategoryListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASymbolCategoryListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolCategoryListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2160),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOASymbolCategoryListReq}
 */
proto.ProtoOASymbolCategoryListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASymbolCategoryListReq;
  return proto.ProtoOASymbolCategoryListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASymbolCategoryListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASymbolCategoryListReq}
 */
proto.ProtoOASymbolCategoryListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOASymbolCategoryListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASymbolCategoryListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASymbolCategoryListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolCategoryListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASymbolCategoryListReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2160));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASymbolCategoryListReq} returns this
 */
proto.ProtoOASymbolCategoryListReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolCategoryListReq} returns this
 */
proto.ProtoOASymbolCategoryListReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolCategoryListReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASymbolCategoryListReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolCategoryListReq} returns this
 */
proto.ProtoOASymbolCategoryListReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolCategoryListReq} returns this
 */
proto.ProtoOASymbolCategoryListReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolCategoryListReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOASymbolCategoryListRes.repeatedFields_ = [3];



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
proto.ProtoOASymbolCategoryListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOASymbolCategoryListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOASymbolCategoryListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolCategoryListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2161),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    symbolcategoryList: jspb.Message.toObjectList(msg.getSymbolcategoryList(),
    OpenApiModelMessages_pb.ProtoOASymbolCategory.toObject, includeInstance)
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
 * @return {!proto.ProtoOASymbolCategoryListRes}
 */
proto.ProtoOASymbolCategoryListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOASymbolCategoryListRes;
  return proto.ProtoOASymbolCategoryListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOASymbolCategoryListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOASymbolCategoryListRes}
 */
proto.ProtoOASymbolCategoryListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOASymbolCategory;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOASymbolCategory.deserializeBinaryFromReader);
      msg.addSymbolcategory(value);
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
proto.ProtoOASymbolCategoryListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOASymbolCategoryListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOASymbolCategoryListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOASymbolCategoryListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSymbolcategoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOASymbolCategory.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOASymbolCategoryListRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2161));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOASymbolCategoryListRes} returns this
 */
proto.ProtoOASymbolCategoryListRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolCategoryListRes} returns this
 */
proto.ProtoOASymbolCategoryListRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolCategoryListRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOASymbolCategoryListRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOASymbolCategoryListRes} returns this
 */
proto.ProtoOASymbolCategoryListRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOASymbolCategoryListRes} returns this
 */
proto.ProtoOASymbolCategoryListRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOASymbolCategoryListRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ProtoOASymbolCategory symbolCategory = 3;
 * @return {!Array<!proto.ProtoOASymbolCategory>}
 */
proto.ProtoOASymbolCategoryListRes.prototype.getSymbolcategoryList = function() {
  return /** @type{!Array<!proto.ProtoOASymbolCategory>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOASymbolCategory, 3));
};


/**
 * @param {!Array<!proto.ProtoOASymbolCategory>} value
 * @return {!proto.ProtoOASymbolCategoryListRes} returns this
*/
proto.ProtoOASymbolCategoryListRes.prototype.setSymbolcategoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ProtoOASymbolCategory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOASymbolCategory}
 */
proto.ProtoOASymbolCategoryListRes.prototype.addSymbolcategory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ProtoOASymbolCategory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOASymbolCategoryListRes} returns this
 */
proto.ProtoOASymbolCategoryListRes.prototype.clearSymbolcategoryList = function() {
  return this.setSymbolcategoryList([]);
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
proto.ProtoOAAccountLogoutReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAccountLogoutReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAccountLogoutReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountLogoutReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2162),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAAccountLogoutReq}
 */
proto.ProtoOAAccountLogoutReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAccountLogoutReq;
  return proto.ProtoOAAccountLogoutReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAccountLogoutReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAccountLogoutReq}
 */
proto.ProtoOAAccountLogoutReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAAccountLogoutReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAccountLogoutReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAccountLogoutReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountLogoutReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAccountLogoutReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2162));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAccountLogoutReq} returns this
 */
proto.ProtoOAAccountLogoutReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountLogoutReq} returns this
 */
proto.ProtoOAAccountLogoutReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountLogoutReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAccountLogoutReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAccountLogoutReq} returns this
 */
proto.ProtoOAAccountLogoutReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountLogoutReq} returns this
 */
proto.ProtoOAAccountLogoutReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountLogoutReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOAAccountLogoutRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAccountLogoutRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAccountLogoutRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountLogoutRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2163),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAAccountLogoutRes}
 */
proto.ProtoOAAccountLogoutRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAccountLogoutRes;
  return proto.ProtoOAAccountLogoutRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAccountLogoutRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAccountLogoutRes}
 */
proto.ProtoOAAccountLogoutRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAAccountLogoutRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAccountLogoutRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAccountLogoutRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountLogoutRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAccountLogoutRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2163));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAccountLogoutRes} returns this
 */
proto.ProtoOAAccountLogoutRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountLogoutRes} returns this
 */
proto.ProtoOAAccountLogoutRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountLogoutRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAccountLogoutRes.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAccountLogoutRes} returns this
 */
proto.ProtoOAAccountLogoutRes.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountLogoutRes} returns this
 */
proto.ProtoOAAccountLogoutRes.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountLogoutRes.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOAAccountDisconnectEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAAccountDisconnectEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAAccountDisconnectEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountDisconnectEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2164),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAAccountDisconnectEvent}
 */
proto.ProtoOAAccountDisconnectEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAAccountDisconnectEvent;
  return proto.ProtoOAAccountDisconnectEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAAccountDisconnectEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAAccountDisconnectEvent}
 */
proto.ProtoOAAccountDisconnectEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAAccountDisconnectEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAAccountDisconnectEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAAccountDisconnectEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAAccountDisconnectEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAAccountDisconnectEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2164));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAAccountDisconnectEvent} returns this
 */
proto.ProtoOAAccountDisconnectEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountDisconnectEvent} returns this
 */
proto.ProtoOAAccountDisconnectEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountDisconnectEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAAccountDisconnectEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAAccountDisconnectEvent} returns this
 */
proto.ProtoOAAccountDisconnectEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAAccountDisconnectEvent} returns this
 */
proto.ProtoOAAccountDisconnectEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAAccountDisconnectEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ProtoOAMarginCallListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAMarginCallListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAMarginCallListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2167),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ProtoOAMarginCallListReq}
 */
proto.ProtoOAMarginCallListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAMarginCallListReq;
  return proto.ProtoOAMarginCallListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAMarginCallListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAMarginCallListReq}
 */
proto.ProtoOAMarginCallListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
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
proto.ProtoOAMarginCallListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAMarginCallListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAMarginCallListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAMarginCallListReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2167));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAMarginCallListReq} returns this
 */
proto.ProtoOAMarginCallListReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallListReq} returns this
 */
proto.ProtoOAMarginCallListReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallListReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAMarginCallListReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAMarginCallListReq} returns this
 */
proto.ProtoOAMarginCallListReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallListReq} returns this
 */
proto.ProtoOAMarginCallListReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallListReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ProtoOAMarginCallListRes.repeatedFields_ = [2];



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
proto.ProtoOAMarginCallListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAMarginCallListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAMarginCallListRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2168),
    margincallList: jspb.Message.toObjectList(msg.getMargincallList(),
    OpenApiModelMessages_pb.ProtoOAMarginCall.toObject, includeInstance)
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
 * @return {!proto.ProtoOAMarginCallListRes}
 */
proto.ProtoOAMarginCallListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAMarginCallListRes;
  return proto.ProtoOAMarginCallListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAMarginCallListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAMarginCallListRes}
 */
proto.ProtoOAMarginCallListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = new OpenApiModelMessages_pb.ProtoOAMarginCall;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAMarginCall.deserializeBinaryFromReader);
      msg.addMargincall(value);
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
proto.ProtoOAMarginCallListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAMarginCallListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAMarginCallListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallListRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMargincallList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      OpenApiModelMessages_pb.ProtoOAMarginCall.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAMarginCallListRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2168));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAMarginCallListRes} returns this
 */
proto.ProtoOAMarginCallListRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallListRes} returns this
 */
proto.ProtoOAMarginCallListRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallListRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ProtoOAMarginCall marginCall = 2;
 * @return {!Array<!proto.ProtoOAMarginCall>}
 */
proto.ProtoOAMarginCallListRes.prototype.getMargincallList = function() {
  return /** @type{!Array<!proto.ProtoOAMarginCall>} */ (
    jspb.Message.getRepeatedWrapperField(this, OpenApiModelMessages_pb.ProtoOAMarginCall, 2));
};


/**
 * @param {!Array<!proto.ProtoOAMarginCall>} value
 * @return {!proto.ProtoOAMarginCallListRes} returns this
*/
proto.ProtoOAMarginCallListRes.prototype.setMargincallList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ProtoOAMarginCall=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ProtoOAMarginCall}
 */
proto.ProtoOAMarginCallListRes.prototype.addMargincall = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ProtoOAMarginCall, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ProtoOAMarginCallListRes} returns this
 */
proto.ProtoOAMarginCallListRes.prototype.clearMargincallList = function() {
  return this.setMargincallList([]);
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
proto.ProtoOAMarginCallUpdateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAMarginCallUpdateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAMarginCallUpdateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallUpdateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2169),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    margincall: (f = msg.getMargincall()) && OpenApiModelMessages_pb.ProtoOAMarginCall.toObject(includeInstance, f)
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
 * @return {!proto.ProtoOAMarginCallUpdateReq}
 */
proto.ProtoOAMarginCallUpdateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAMarginCallUpdateReq;
  return proto.ProtoOAMarginCallUpdateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAMarginCallUpdateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAMarginCallUpdateReq}
 */
proto.ProtoOAMarginCallUpdateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOAMarginCall;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAMarginCall.deserializeBinaryFromReader);
      msg.setMargincall(value);
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
proto.ProtoOAMarginCallUpdateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAMarginCallUpdateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAMarginCallUpdateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallUpdateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMargincall();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOAMarginCall.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAMarginCallUpdateReq.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2169));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAMarginCallUpdateReq} returns this
 */
proto.ProtoOAMarginCallUpdateReq.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallUpdateReq} returns this
 */
proto.ProtoOAMarginCallUpdateReq.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallUpdateReq.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAMarginCallUpdateReq.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAMarginCallUpdateReq} returns this
 */
proto.ProtoOAMarginCallUpdateReq.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallUpdateReq} returns this
 */
proto.ProtoOAMarginCallUpdateReq.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallUpdateReq.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ProtoOAMarginCall marginCall = 3;
 * @return {!proto.ProtoOAMarginCall}
 */
proto.ProtoOAMarginCallUpdateReq.prototype.getMargincall = function() {
  return /** @type{!proto.ProtoOAMarginCall} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOAMarginCall, 3, 1));
};


/**
 * @param {!proto.ProtoOAMarginCall} value
 * @return {!proto.ProtoOAMarginCallUpdateReq} returns this
*/
proto.ProtoOAMarginCallUpdateReq.prototype.setMargincall = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallUpdateReq} returns this
 */
proto.ProtoOAMarginCallUpdateReq.prototype.clearMargincall = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallUpdateReq.prototype.hasMargincall = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ProtoOAMarginCallUpdateRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAMarginCallUpdateRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAMarginCallUpdateRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallUpdateRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2170)
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
 * @return {!proto.ProtoOAMarginCallUpdateRes}
 */
proto.ProtoOAMarginCallUpdateRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAMarginCallUpdateRes;
  return proto.ProtoOAMarginCallUpdateRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAMarginCallUpdateRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAMarginCallUpdateRes}
 */
proto.ProtoOAMarginCallUpdateRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
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
proto.ProtoOAMarginCallUpdateRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAMarginCallUpdateRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAMarginCallUpdateRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallUpdateRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAMarginCallUpdateRes.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2170));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAMarginCallUpdateRes} returns this
 */
proto.ProtoOAMarginCallUpdateRes.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallUpdateRes} returns this
 */
proto.ProtoOAMarginCallUpdateRes.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallUpdateRes.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.ProtoOAMarginCallUpdateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAMarginCallUpdateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAMarginCallUpdateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallUpdateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2171),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    margincall: (f = msg.getMargincall()) && OpenApiModelMessages_pb.ProtoOAMarginCall.toObject(includeInstance, f)
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
 * @return {!proto.ProtoOAMarginCallUpdateEvent}
 */
proto.ProtoOAMarginCallUpdateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAMarginCallUpdateEvent;
  return proto.ProtoOAMarginCallUpdateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAMarginCallUpdateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAMarginCallUpdateEvent}
 */
proto.ProtoOAMarginCallUpdateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOAMarginCall;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAMarginCall.deserializeBinaryFromReader);
      msg.setMargincall(value);
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
proto.ProtoOAMarginCallUpdateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAMarginCallUpdateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAMarginCallUpdateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallUpdateEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMargincall();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOAMarginCall.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2171));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAMarginCallUpdateEvent} returns this
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallUpdateEvent} returns this
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAMarginCallUpdateEvent} returns this
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallUpdateEvent} returns this
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ProtoOAMarginCall marginCall = 3;
 * @return {!proto.ProtoOAMarginCall}
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.getMargincall = function() {
  return /** @type{!proto.ProtoOAMarginCall} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOAMarginCall, 3, 1));
};


/**
 * @param {!proto.ProtoOAMarginCall} value
 * @return {!proto.ProtoOAMarginCallUpdateEvent} returns this
*/
proto.ProtoOAMarginCallUpdateEvent.prototype.setMargincall = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallUpdateEvent} returns this
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.clearMargincall = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallUpdateEvent.prototype.hasMargincall = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ProtoOAMarginCallTriggerEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ProtoOAMarginCallTriggerEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProtoOAMarginCallTriggerEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallTriggerEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadtype: jspb.Message.getFieldWithDefault(msg, 1, 2172),
    ctidtraderaccountid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    margincall: (f = msg.getMargincall()) && OpenApiModelMessages_pb.ProtoOAMarginCall.toObject(includeInstance, f)
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
 * @return {!proto.ProtoOAMarginCallTriggerEvent}
 */
proto.ProtoOAMarginCallTriggerEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProtoOAMarginCallTriggerEvent;
  return proto.ProtoOAMarginCallTriggerEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProtoOAMarginCallTriggerEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProtoOAMarginCallTriggerEvent}
 */
proto.ProtoOAMarginCallTriggerEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ProtoOAPayloadType} */ (reader.readEnum());
      msg.setPayloadtype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCtidtraderaccountid(value);
      break;
    case 3:
      var value = new OpenApiModelMessages_pb.ProtoOAMarginCall;
      reader.readMessage(value,OpenApiModelMessages_pb.ProtoOAMarginCall.deserializeBinaryFromReader);
      msg.setMargincall(value);
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
proto.ProtoOAMarginCallTriggerEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProtoOAMarginCallTriggerEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProtoOAMarginCallTriggerEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProtoOAMarginCallTriggerEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMargincall();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      OpenApiModelMessages_pb.ProtoOAMarginCall.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProtoOAPayloadType payloadType = 1;
 * @return {!proto.ProtoOAPayloadType}
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.getPayloadtype = function() {
  return /** @type {!proto.ProtoOAPayloadType} */ (jspb.Message.getFieldWithDefault(this, 1, 2172));
};


/**
 * @param {!proto.ProtoOAPayloadType} value
 * @return {!proto.ProtoOAMarginCallTriggerEvent} returns this
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.setPayloadtype = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallTriggerEvent} returns this
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.clearPayloadtype = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.hasPayloadtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 ctidTraderAccountId = 2;
 * @return {number}
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.getCtidtraderaccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProtoOAMarginCallTriggerEvent} returns this
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.setCtidtraderaccountid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallTriggerEvent} returns this
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.clearCtidtraderaccountid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.hasCtidtraderaccountid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ProtoOAMarginCall marginCall = 3;
 * @return {!proto.ProtoOAMarginCall}
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.getMargincall = function() {
  return /** @type{!proto.ProtoOAMarginCall} */ (
    jspb.Message.getWrapperField(this, OpenApiModelMessages_pb.ProtoOAMarginCall, 3, 1));
};


/**
 * @param {!proto.ProtoOAMarginCall} value
 * @return {!proto.ProtoOAMarginCallTriggerEvent} returns this
*/
proto.ProtoOAMarginCallTriggerEvent.prototype.setMargincall = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ProtoOAMarginCallTriggerEvent} returns this
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.clearMargincall = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProtoOAMarginCallTriggerEvent.prototype.hasMargincall = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto);
