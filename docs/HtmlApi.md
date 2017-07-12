# HtmlApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Post**](HtmlApi.md#Post) | **POST** /api/async/html and **GET** /api/async/result/html | Universal html analysis method creates new task which will be processed asynchronously or synchronously  


<a name="Post"></a>
# **Post**
>  Post(request:HtmlAnalysisRequest):Promise\<HttpResponse\<HtmlAnalysisResponse\>\>



### Example
```typescript
import PWA = require('pro_writing_aid_ts');

let api = new PWA.HtmlApi();
api.SetApiKey(PWA.ApiKeys.LicenseCode, '$Your license code$');
let request = new PWA.HtmlAnalysisRequest();
request.Html = 'I\'d like to by that toy. wood you help me? I have twp more brothers.';
request.Reports = ['grammar'];
request.Language = PWA.LanguageEnum.En;
request.Style = PWA.StyleEnum.General;
api.Post(request)
    .then(function (data) {
        console.log('API called successfully. Returned data: ');
        console.log(data.Body);
    }, function (error) {
        console.error(error);
    })
/* Example of what you will get
API called successfully. Returned data: 
{ Html: 'I\'d like to <span class=\'pwa pwa1 pwa-color pwa-blue\' title=\'Possible confused word\' data-report=\'grammar\' data-suggestions=\'buy\' data-index=\'0\' data-category=\'grammargrammar\' data-sub-category=\'by\' data-urls=\'\' data-help=\'CTF_BY_13_.9990\' data-original-text=\'by\' data-tag-id=\'cad77c6f-9553-4b4c-87a6-44cd7bd2c740\'>by</span> that toy. wood you help me? I have <span class=\'pwa pwa1 pwa-color pwa-blue\' title=\'Possible confused word\' data-report=\'grammar\' data-suggestions=\'two\' data-index=\'1\' data-category=\'grammargrammar\' data-sub-category=\'twp\' data-urls=\'\' data-help=\'CTF_TWP_11_.9998\' data-original-text=\'twp\' data-tag-id=\'1de06ac4-bd40-4429-accd-e82406eb525e\'>twp</span> more brothers.',
  WordCount: 16,
  Summaries: 
   [ { ReportDisplayName: 'Grammar Check',
       ReportName: 'grammar',
       SummaryItems: [Object],
       NumberOfIssues: 2,
       ReportDescription: 'Checks your text for grammar errors and potential word mis-use.' } ] }
 */
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**HtmlAnalysisRequest**](HtmlAnalysisRequest.md)|  | 

### Return type

Promise<[HttpResponse](HttpResponse.md)<[**HtmlAnalysisResponse**](HtmlAnalysisResponse.md)>>

### Authorization

Set correct API key prior to any request

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

