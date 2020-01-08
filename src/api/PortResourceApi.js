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
    define(['ApiClient', 'model/Port'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Port'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.PortResourceApi = factory(root.Otpixel.ApiClient, root.Otpixel.Port);
  }
}(this, function(ApiClient, Port) {
  'use strict';

  /**
   * PortResource service.
   * @module api/PortResourceApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PortResourceApi. 
   * @alias module:api/PortResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPort operation.
     * @callback module:api/PortResourceApi~createPortCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Port} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an port
     * If id is not provided, it will be randomly generated
     * @param {module:model/Port} body Port description
     * @param {module:api/PortResourceApi~createPortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Port}
     */
    this.createPort = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createPort");
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
      var returnType = Port;

      return this.apiClient.callApi(
        '/ports/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePort operation.
     * @callback module:api/PortResourceApi~deletePortCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an port
     * 
     * @param {String} id ID of port
     * @param {module:api/PortResourceApi~deletePortCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePort = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePort");
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
        '/ports/delete/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPort operation.
     * @callback module:api/PortResourceApi~getPortCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Port} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an port by id
     * 
     * @param {String} id port
     * @param {module:api/PortResourceApi~getPortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Port}
     */
    this.getPort = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPort");
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
      var returnType = Port;

      return this.apiClient.callApi(
        '/ports/get/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listPorts operation.
     * @callback module:api/PortResourceApi~listPortsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Port>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all ports
     * 
     * @param {module:api/PortResourceApi~listPortsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Port>}
     */
    this.listPorts = function(callback) {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Port];

      return this.apiClient.callApi(
        '/ports/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePort operation.
     * @callback module:api/PortResourceApi~updatePortCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Port} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an port
     * 
     * @param {module:model/Port} body Port description
     * @param {module:api/PortResourceApi~updatePortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Port}
     */
    this.updatePort = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePort");
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
      var returnType = Port;

      return this.apiClient.callApi(
        '/ports/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));