# Otpixel.ModelResourceApi

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/otpixel/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModel**](ModelResourceApi.md#createModel) | **PUT** /models/create | Create a model
[**deleteModel**](ModelResourceApi.md#deleteModel) | **DELETE** /models/delete/{id} | Delete a model
[**getModel**](ModelResourceApi.md#getModel) | **GET** /models/get/{id} | Get a model by id
[**getModelInfo**](ModelResourceApi.md#getModelInfo) | **GET** /models/get/{id}/info | Get information of a model by id
[**listModels**](ModelResourceApi.md#listModels) | **GET** /models/list | List all models
[**updateModel**](ModelResourceApi.md#updateModel) | **POST** /models/update | Update a model


<a name="createModel"></a>
# **createModel**
> Model createModel(body)

Create a model

If id is not provided, it will be randomly generated

### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ModelResourceApi();

var body = new Otpixel.Model(); // Model | Model description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModel(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Model**](Model.md)| Model description | 

### Return type

[**Model**](Model.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteModel"></a>
# **deleteModel**
> deleteModel(id)

Delete a model



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ModelResourceApi();

var id = "id_example"; // String | ID of model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteModel(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of model | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getModel"></a>
# **getModel**
> Model getModel(id)

Get a model by id



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ModelResourceApi();

var id = "id_example"; // String | model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModel(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| model | 

### Return type

[**Model**](Model.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getModelInfo"></a>
# **getModelInfo**
> GeneralInfo getModelInfo(id)

Get information of a model by id



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ModelResourceApi();

var id = "id_example"; // String | model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelInfo(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| model | 

### Return type

[**GeneralInfo**](GeneralInfo.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listModels"></a>
# **listModels**
> [Model] listModels(opts)

List all models



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ModelResourceApi();

var opts = { 
  'otStatus': "otStatus_example", // String | otStatus
  'type': "type_example" // String | type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listModels(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otStatus** | **String**| otStatus | [optional] 
 **type** | **String**| type | [optional] 

### Return type

[**[Model]**](Model.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateModel"></a>
# **updateModel**
> Model updateModel(body)

Update a model



### Example
```javascript
var Otpixel = require('otpixel');
var defaultClient = Otpixel.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Otpixel.ModelResourceApi();

var body = new Otpixel.Model(); // Model | Model description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateModel(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Model**](Model.md)| Model description | 

### Return type

[**Model**](Model.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

