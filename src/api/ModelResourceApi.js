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
    define(['ApiClient', 'model/GeneralInfo', 'model/Model'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GeneralInfo'), require('../model/Model'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.ModelResourceApi = factory(root.Otpixel.ApiClient, root.Otpixel.GeneralInfo, root.Otpixel.Model);
  }
}(this, function(ApiClient, GeneralInfo, Model) {
  'use strict';

  /**
   * ModelResource service.
   * @module api/ModelResourceApi
   * @version 0.6.0
   */

  /**
   * Constructs a new ModelResourceApi. 
   * @alias module:api/ModelResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createModel operation.
     * @callback module:api/ModelResourceApi~createModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Model} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a model
     * If id is not provided, it will be randomly generated
     * @param {module:model/Model} body Model description
     * @param {module:api/ModelResourceApi~createModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model}
     */
    this.createModel = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createModel");
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
      var returnType = Model;

      return this.apiClient.callApi(
        '/models/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteModel operation.
     * @callback module:api/ModelResourceApi~deleteModelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a model
     * 
     * @param {String} id ID of model
     * @param {module:api/ModelResourceApi~deleteModelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteModel = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteModel");
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
        '/models/delete/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getModel operation.
     * @callback module:api/ModelResourceApi~getModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Model} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a model by id
     * 
     * @param {String} id model
     * @param {module:api/ModelResourceApi~getModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model}
     */
    this.getModel = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getModel");
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
      var returnType = Model;

      return this.apiClient.callApi(
        '/models/get/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelInfo operation.
     * @callback module:api/ModelResourceApi~getModelInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeneralInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information of a model by id
     * 
     * @param {String} id model
     * @param {module:api/ModelResourceApi~getModelInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeneralInfo}
     */
    this.getModelInfo = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getModelInfo");
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
      var returnType = GeneralInfo;

      return this.apiClient.callApi(
        '/models/get/{id}/info', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listModels operation.
     * @callback module:api/ModelResourceApi~listModelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Model>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all models
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.otStatus otStatus
     * @param {String} opts.type type
     * @param {module:api/ModelResourceApi~listModelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Model>}
     */
    this.listModels = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'otStatus': opts['otStatus'],
        'type': opts['type'],
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
      var returnType = [Model];

      return this.apiClient.callApi(
        '/models/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateModel operation.
     * @callback module:api/ModelResourceApi~updateModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Model} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a model
     * 
     * @param {module:model/Model} body Model description
     * @param {module:api/ModelResourceApi~updateModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Model}
     */
    this.updateModel = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateModel");
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
      var returnType = Model;

      return this.apiClient.callApi(
        '/models/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
