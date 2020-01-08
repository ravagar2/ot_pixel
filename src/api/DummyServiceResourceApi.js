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
    define(['ApiClient', 'model/DummyJSON', 'model/JsonNode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DummyJSON'), require('../model/JsonNode'));
  } else {
    // Browser globals (root is window)
    if (!root.Otpixel) {
      root.Otpixel = {};
    }
    root.Otpixel.DummyServiceResourceApi = factory(root.Otpixel.ApiClient, root.Otpixel.DummyJSON, root.Otpixel.JsonNode);
  }
}(this, function(ApiClient, DummyJSON, JsonNode) {
  'use strict';

  /**
   * DummyServiceResource service.
   * @module api/DummyServiceResourceApi
   * @version 0.0.1
   */

  /**
   * Constructs a new DummyServiceResourceApi. 
   * @alias module:api/DummyServiceResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDummyService operation.
     * @callback module:api/DummyServiceResourceApi~getDummyServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DummyJSON} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get dummy JSON response
     * 
     * @param {module:api/DummyServiceResourceApi~getDummyServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DummyJSON}
     */
    this.getDummyService = function(callback) {
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

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DummyJSON;

      return this.apiClient.callApi(
        '/dummyService/get', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postDummyService operation.
     * @callback module:api/DummyServiceResourceApi~postDummyServiceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtain dummy echo JSON
     * 
     * @param {module:model/JsonNode} body JSON input
     * @param {module:api/DummyServiceResourceApi~postDummyServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.postDummyService = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postDummyService");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/dummyService/post', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));