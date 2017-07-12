# TextApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Post**](TextApi.md#Post) | **POST** /api/async/text and **GET** /api/async/result/text | Universal text analysis method creates new task which will be processed asynchronously or synchronously  


<a name="Post"></a>
# **Post**
>  Post(request:TextAnalysisRequest):Promise\<HttpResponse\<TextAnalysisResponse\>\>



### Example
```typescript

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TextAnalysisRequest**](TextAnalysisRequest.md)|  | 

### Return type

Promise<[HttpResponse](HttpResponse.md)<[**TextAnalysisResponse**](TextAnalysisResponse.md)>>

### Authorization

Set correct API key prior to any request

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

