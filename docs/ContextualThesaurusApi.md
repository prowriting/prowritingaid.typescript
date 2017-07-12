# ContextualThesaurusApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Post**](ContextualThesaurusApi.md#Post) | **POST** /api/async/contextualthesaurus and **GET** /api/async/result/contextualthesaurus | Universal thesaurus analysis method creates new task which will be processed asynchronously or synchronously 


<a name="Post"></a>
# **Post**
>  Post(request:ContextualThesaurusRequest):Promise\<HttpResponse\<ContextualThesaurusResponse\>\>



### Example
```typescript
import PWA = require('pro_writing_aid_ts');

let api = new PWA.ContextualThesaurusApi();
api.SetApiKey(PWA.ApiKeys.LicenseCode, '$Your license code$');
let request = new PWA.ContextualThesaurusRequest();
request.Context = "This is a sample text in English to test the sdk thesaurus. " +
    "This is a second paragraph in the document. This  is a new line.";
request.ContextStart = 17;
request.ContextEnd = 20;

api.Post(request)
    .then(function (data) {
        console.log('API called successfully. Returned data: ');
        console.log(data.Body);
    }, function (error) {
        console.error(error);
    })
/* Example of what you will get
API called successfully. Returned data: 
{ Suggestions: 
   [ 'paragraph',
     'passage',
     'document',
     'verse',
     'content',
     'word',
     'theme',
     'idea',
     'textbook',
     'manual' ] }
 */

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ContextualThesaurusRequest**](ContextualThesaurusRequest.md)|  | 

### Return type

Promise<[HttpResponse](HttpResponse.md)<[**ContextualThesaurusResponse**](ContextualThesaurusResponse.md)>>

### Authorization

Set correct API key prior to any request

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

