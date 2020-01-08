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
    root.Otpixel.ServiceUrls = factory(root.Otpixel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ServiceUrls model module.
   * @module model/ServiceUrls
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ServiceUrls</code>.
   * @alias module:model/ServiceUrls
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ServiceUrls</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceUrls} obj Optional instance to populate.
   * @return {module:model/ServiceUrls} The populated <code>ServiceUrls</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('serviceUrl'))
        obj.serviceUrl = ApiClient.convertToType(data['serviceUrl'], 'String');
      if (data.hasOwnProperty('dockerImageUrl'))
        obj.dockerImageUrl = ApiClient.convertToType(data['dockerImageUrl'], 'String');
      if (data.hasOwnProperty('dashboardUrl'))
        obj.dashboardUrl = ApiClient.convertToType(data['dashboardUrl'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} serviceUrl
   */
  exports.prototype.serviceUrl = undefined;

  /**
   * @member {String} dockerImageUrl
   */
  exports.prototype.dockerImageUrl = undefined;

  /**
   * @member {String} dashboardUrl
   */
  exports.prototype.dashboardUrl = undefined;

  return exports;

}));