/*
 * OTPIXEL
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.11
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.KpiOperationScheduled = factory(root.Otpixel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The KpiOperationScheduled model module.
   * @module model/KpiOperationScheduled
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>KpiOperationScheduled</code>.
   * @alias module:model/KpiOperationScheduled
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>KpiOperationScheduled</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KpiOperationScheduled} obj Optional instance to populate.
   * @return {module:model/KpiOperationScheduled} The populated <code>KpiOperationScheduled</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('idRef'))
        obj.idRef = ApiClient.convertToType(data['idRef'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('searchforValue'))
        obj.searchforValue = ApiClient.convertToType(data['searchforValue'], 'String');
      if (data.hasOwnProperty('serchforTimeStampUnix'))
        obj.serchforTimeStampUnix = ApiClient.convertToType(data['serchforTimeStampUnix'], 'Number');
      if (data.hasOwnProperty('searchforTimeStampIso8601'))
        obj.searchforTimeStampIso8601 = ApiClient.convertToType(data['searchforTimeStampIso8601'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} idRef
   */
  exports.prototype.idRef = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} searchforValue
   */
  exports.prototype.searchforValue = undefined;

  /**
   * @member {Number} serchforTimeStampUnix
   */
  exports.prototype.serchforTimeStampUnix = undefined;

  /**
   * @member {String} searchforTimeStampIso8601
   */
  exports.prototype.searchforTimeStampIso8601 = undefined;

  return exports;

}));
