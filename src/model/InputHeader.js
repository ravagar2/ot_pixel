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
    root.Otpixel.InputHeader = factory(root.Otpixel.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InputHeader model module.
   * @module model/InputHeader
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InputHeader</code>.
   * @alias module:model/InputHeader
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InputHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InputHeader} obj Optional instance to populate.
   * @return {module:model/InputHeader} The populated <code>InputHeader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} key
   */
  exports.prototype.key = undefined;

  /**
   * @member {String} value
   */
  exports.prototype.value = undefined;

  return exports;

}));
