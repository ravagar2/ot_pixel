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
    define(['ApiClient', 'model/EventLogItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EventLogItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.EventLogItemResourceApi = factory(root.Otpixel.ApiClient, root.Otpixel.EventLogItem);
  }
}(this, function(ApiClient, EventLogItem) {
  'use strict';

  /**
   * EventLogItemResource service.
   * @module api/EventLogItemResourceApi
   * @version 0.0.1
   */

  /**
   * Constructs a new EventLogItemResourceApi. 
   * @alias module:api/EventLogItemResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createEventLogItem operation.
     * @callback module:api/EventLogItemResourceApi~createEventLogItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EventLogItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an eventLogItem
     * If id is not provided, it will be randomly generated
     * @param {module:model/EventLogItem} body eventLogItem description
     * @param {module:api/EventLogItemResourceApi~createEventLogItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventLogItem}
     */
    this.createEventLogItem = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createEventLogItem");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EventLogItem;

      return this.apiClient.callApi(
        '/eventLogItem/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEventLogItem operation.
     * @callback module:api/EventLogItemResourceApi~deleteEventLogItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an EventLogItem
     * 
     * @param {String} id ID of eventLogItem
     * @param {module:api/EventLogItemResourceApi~deleteEventLogItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteEventLogItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteEventLogItem");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/eventLogItem/delete/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEventLogItemByID operation.
     * @callback module:api/EventLogItemResourceApi~getEventLogItemByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EventLogItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an eventLogItem by id
     * 
     * @param {String} id eventLogItem
     * @param {module:api/EventLogItemResourceApi~getEventLogItemByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventLogItem}
     */
    this.getEventLogItemByID = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEventLogItemByID");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EventLogItem;

      return this.apiClient.callApi(
        '/eventLogItem/get/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listEventLogItem operation.
     * @callback module:api/EventLogItemResourceApi~listEventLogItemCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EventLogItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all eventLogItems
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.category category
     * @param {module:api/EventLogItemResourceApi~listEventLogItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EventLogItem>}
     */
    this.listEventLogItem = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'category': opts['category'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [EventLogItem];

      return this.apiClient.callApi(
        '/eventLogItem/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEventLogItem operation.
     * @callback module:api/EventLogItemResourceApi~updateEventLogItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EventLogItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an EeventLogItem
     * 
     * @param {module:model/EventLogItem} body eventLogItem description
     * @param {module:api/EventLogItemResourceApi~updateEventLogItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventLogItem}
     */
    this.updateEventLogItem = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateEventLogItem");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EventLogItem;

      return this.apiClient.callApi(
        '/eventLogItem/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
