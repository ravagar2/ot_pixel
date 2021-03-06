/*
 * OTPIXEL
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.6.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Instance', 'model/ScheduledInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Instance'), require('../model/ScheduledInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.ScheduledInstanceResourceApi = factory(root.Otpixel.ApiClient, root.Otpixel.Instance, root.Otpixel.ScheduledInstance);
  }
}(this, function(ApiClient, Instance, ScheduledInstance) {
  'use strict';

  /**
   * ScheduledInstanceResource service.
   * @module api/ScheduledInstanceResourceApi
   * @version 0.6.0
   */

  /**
   * Constructs a new ScheduledInstanceResourceApi. 
   * @alias module:api/ScheduledInstanceResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createScheduledInstance operation.
     * @callback module:api/ScheduledInstanceResourceApi~createScheduledInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Instance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a scheduled instance
     * If id is not provided, it will be randomly generated
     * @param {module:model/ScheduledInstance} body Scheduled instance description
     * @param {module:api/ScheduledInstanceResourceApi~createScheduledInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Instance}
     */
    this.createScheduledInstance = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createScheduledInstance");
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
      var returnType = Instance;

      return this.apiClient.callApi(
        '/scheduledInstances/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteScheduledInstance operation.
     * @callback module:api/ScheduledInstanceResourceApi~deleteScheduledInstanceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a scheduled instance
     * 
     * @param {String} id ID of scheduled instance
     * @param {module:api/ScheduledInstanceResourceApi~deleteScheduledInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteScheduledInstance = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteScheduledInstance");
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
        '/scheduledInstances/delete/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getScheduledInstance operation.
     * @callback module:api/ScheduledInstanceResourceApi~getScheduledInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a scheduled instance by id
     * 
     * @param {String} id scheduled instance
     * @param {module:api/ScheduledInstanceResourceApi~getScheduledInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScheduledInstance}
     */
    this.getScheduledInstance = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getScheduledInstance");
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
      var returnType = ScheduledInstance;

      return this.apiClient.callApi(
        '/scheduledInstances/get/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listScheduledInstances operation.
     * @callback module:api/ScheduledInstanceResourceApi~listScheduledInstancesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScheduledInstance>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all scheduled instances
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.idRef idRef
     * @param {String} opts.user user
     * @param {String} opts.status status
     * @param {module:api/ScheduledInstanceResourceApi~listScheduledInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScheduledInstance>}
     */
    this.listScheduledInstances = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idRef': opts['idRef'],
        'user': opts['user'],
        'status': opts['status'],
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
      var returnType = [ScheduledInstance];

      return this.apiClient.callApi(
        '/scheduledInstances/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateScheduledInstance operation.
     * @callback module:api/ScheduledInstanceResourceApi~updateScheduledInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a scheduled instance
     * 
     * @param {module:model/ScheduledInstance} body Scheduled instance description
     * @param {module:api/ScheduledInstanceResourceApi~updateScheduledInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScheduledInstance}
     */
    this.updateScheduledInstance = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateScheduledInstance");
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
      var returnType = ScheduledInstance;

      return this.apiClient.callApi(
        '/scheduledInstances/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStatusScheduledInstance operation.
     * @callback module:api/ScheduledInstanceResourceApi~updateStatusScheduledInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledInstance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update only the status of a scheduled instance
     * 
     * @param {String} id ID of scheduled instance
     * @param {String} status status
     * @param {module:api/ScheduledInstanceResourceApi~updateStatusScheduledInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScheduledInstance}
     */
    this.updateStatusScheduledInstance = function(id, status, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateStatusScheduledInstance");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling updateStatusScheduledInstance");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'status': status,
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
      var returnType = ScheduledInstance;

      return this.apiClient.callApi(
        '/scheduledInstances/updateStatus/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
