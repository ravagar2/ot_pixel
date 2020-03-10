/*
 * OTPIXEL
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.6.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InstanceForceInputItem', 'model/InstanceInputItem', 'model/InstanceLoggingItem', 'model/InstanceOutputItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstanceForceInputItem'), require('./InstanceInputItem'), require('./InstanceLoggingItem'), require('./InstanceOutputItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.Instance = factory(root.Otpixel.ApiClient, root.Otpixel.InstanceForceInputItem, root.Otpixel.InstanceInputItem, root.Otpixel.InstanceLoggingItem, root.Otpixel.InstanceOutputItem);
  }
}(this, function(ApiClient, InstanceForceInputItem, InstanceInputItem, InstanceLoggingItem, InstanceOutputItem) {
  'use strict';

  /**
   * The Instance model module.
   * @module model/Instance
   * @version 0.6.0
   */

  /**
   * Constructs a new <code>Instance</code>.
   * @alias module:model/Instance
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Instance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Instance} obj Optional instance to populate.
   * @return {module:model/Instance} The populated <code>Instance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('idRef'))
        obj.idRef = ApiClient.convertToType(data['idRef'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('mode'))
        obj.mode = ApiClient.convertToType(data['mode'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
      if (data.hasOwnProperty('input'))
        obj.input = ApiClient.convertToType(data['input'], [InstanceInputItem]);
      if (data.hasOwnProperty('forceinput'))
        obj.forceinput = ApiClient.convertToType(data['forceinput'], [InstanceForceInputItem]);
      if (data.hasOwnProperty('output'))
        obj.output = ApiClient.convertToType(data['output'], [InstanceOutputItem]);
      if (data.hasOwnProperty('logging'))
        obj.logging = ApiClient.convertToType(data['logging'], [InstanceLoggingItem]);
      if (data.hasOwnProperty('creation'))
        obj.creation = ApiClient.convertToType(data['creation'], 'Number');
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'Number');
      if (data.hasOwnProperty('otStatus'))
        obj.otStatus = ApiClient.convertToType(data['otStatus'], 'String');
      if (data.hasOwnProperty('dockerId'))
        obj.dockerId = ApiClient.convertToType(data['dockerId'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} idRef
   */
  exports.prototype.idRef = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} mode
   */
  exports.prototype.mode = undefined;

  /**
   * @member {String} user
   */
  exports.prototype.user = undefined;

  /**
   * @member {Array.<module:model/InstanceInputItem>} input
   */
  exports.prototype.input = undefined;

  /**
   * @member {Array.<module:model/InstanceForceInputItem>} forceinput
   */
  exports.prototype.forceinput = undefined;

  /**
   * @member {Array.<module:model/InstanceOutputItem>} output
   */
  exports.prototype.output = undefined;

  /**
   * @member {Array.<module:model/InstanceLoggingItem>} logging
   */
  exports.prototype.logging = undefined;

  /**
   * @member {Number} creation
   */
  exports.prototype.creation = undefined;

  /**
   * @member {Number} start
   */
  exports.prototype.start = undefined;

  /**
   * @member {String} otStatus
   */
  exports.prototype.otStatus = undefined;

  /**
   * @member {String} dockerId
   */
  exports.prototype.dockerId = undefined;

  return exports;

}));
