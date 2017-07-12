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
import PWA = require('pro_writing_aid_ts');

let api = new PWA.TextApi();
api.SetApiKey(PWA.ApiKeys.LicenseCode, '$Your license code$');
let request = new PWA.TextAnalysisRequest();
request.Text = "I'd like to by that toy. wood you help me? I have twp more brothers.";
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
{ Tags: 
   [ { startPos: 12,
       endPos: 13,
       report: 'grammar',
       urls: null,
       category: 'grammargrammar',
       categoryDisplayName: 'Grammar (grammar)',
       subcategory: 'by',
       hint: 'Possible confused word',
       suggestions: [Object],
       isSubTag: false,
       helpId: 'CTF_BY_13_.9990',
       id: '054c3029-6860-4da3-891b-bb516f513722' },
     { startPos: 50,
       endPos: 52,
       report: 'grammar',
       urls: null,
       category: 'grammargrammar',
       categoryDisplayName: 'Grammar (grammar)',
       subcategory: 'twp',
       hint: 'Possible confused word',
       suggestions: [Object],
       isSubTag: false,
       helpId: 'CTF_TWP_11_.9998',
       id: 'ef088873-6d9a-49bd-8da9-c82d20f37ed3' } ],
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
 **request** | [**TextAnalysisRequest**](TextAnalysisRequest.md)|  | 

### Return type

Promise<[HttpResponse](HttpResponse.md)<[**TextAnalysisResponse**](TextAnalysisResponse.md)>>

### Authorization

Set correct API key prior to any request

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

