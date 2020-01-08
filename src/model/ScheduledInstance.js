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
    define(['ApiClient', 'model/Input', 'model/ScheduleInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Input'), require('./ScheduleInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.ScheduledInstance = factory(root.Otpixel.ApiClient, root.Otpixel.Input, root.Otpixel.ScheduleInfo);
  }
}(this, function(ApiClient, Input, ScheduleInfo) {
  'use strict';

  /**
   * The ScheduledInstance model module.
   * @module model/ScheduledInstance
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ScheduledInstance</code>.
   * @alias module:model/ScheduledInstance
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ScheduledInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduledInstance} obj Optional instance to populate.
   * @return {module:model/ScheduledInstance} The populated <code>ScheduledInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('idRef'))
        obj.idRef = ApiClient.convertToType(data['idRef'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'Number');
      if (data.hasOwnProperty('end'))
        obj.end = ApiClient.convertToType(data['end'], 'Number');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('statusMessage'))
        obj.statusMessage = ApiClient.convertToType(data['statusMessage'], 'String');
      if (data.hasOwnProperty('input'))
        obj.input = Input.constructFromObject(data['input']);
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], Object);
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('scheduleInfo'))
        obj.scheduleInfo = ScheduleInfo.constructFromObject(data['scheduleInfo']);
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
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {Number} start
   */
  exports.prototype.start = undefined;

  /**
   * @member {Number} end
   */
  exports.prototype.end = undefined;

  /**
   * @member {String} user
   */
  exports.prototype.user = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} statusMessage
   */
  exports.prototype.statusMessage = undefined;

  /**
   * @member {module:model/Input} input
   */
  exports.prototype.input = undefined;

  /**
   * @member {Object} result
   */
  exports.prototype.result = undefined;

  /**
   * @member {Boolean} active
   */
  exports.prototype.active = undefined;

  /**
   * @member {module:model/ScheduleInfo} scheduleInfo
   */
  exports.prototype.scheduleInfo = undefined;

  return exports;

}));
