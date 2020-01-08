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
    define(['ApiClient', 'model/KPI'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/KPI'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.KPIResourceApi = factory(root.Otpixel.ApiClient, root.Otpixel.KPI);
  }
}(this, function(ApiClient, KPI) {
  'use strict';

  /**
   * KPIResource service.
   * @module api/KPIResourceApi
   * @version 0.0.1
   */

  /**
   * Constructs a new KPIResourceApi. 
   * @alias module:api/KPIResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createKPI operation.
     * @callback module:api/KPIResourceApi~createKPICallback
     * @param {String} error Error message, if any.
     * @param {module:model/KPI} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a KPI
     * If id is not provided, it will be randomly generated
     * @param {module:model/KPI} body KPI description
     * @param {module:api/KPIResourceApi~createKPICallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KPI}
     */
    this.createKPI = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createKPI");
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
      var returnType = KPI;

      return this.apiClient.callApi(
        '/kpis/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteKPI operation.
     * @callback module:api/KPIResourceApi~deleteKPICallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a kpi
     * 
     * @param {String} id ID of KPI
     * @param {module:api/KPIResourceApi~deleteKPICallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteKPI = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteKPI");
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
        '/kpis/delete/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getKPIByID operation.
     * @callback module:api/KPIResourceApi~getKPIByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/KPI} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a KPI by id
     * 
     * @param {String} id kpi
     * @param {module:api/KPIResourceApi~getKPIByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KPI}
     */
    this.getKPIByID = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getKPIByID");
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
      var returnType = KPI;

      return this.apiClient.callApi(
        '/kpis/get/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listKPIs operation.
     * @callback module:api/KPIResourceApi~listKPIsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/KPI>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all models
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.category category
     * @param {module:api/KPIResourceApi~listKPIsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/KPI>}
     */
    this.listKPIs = function(opts, callback) {
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
      var returnType = [KPI];

      return this.apiClient.callApi(
        '/kpis/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateKPI operation.
     * @callback module:api/KPIResourceApi~updateKPICallback
     * @param {String} error Error message, if any.
     * @param {module:model/KPI} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a kpi
     * 
     * @param {module:model/KPI} body KPI description
     * @param {module:api/KPIResourceApi~updateKPICallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/KPI}
     */
    this.updateKPI = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateKPI");
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
      var returnType = KPI;

      return this.apiClient.callApi(
        '/kpis/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));