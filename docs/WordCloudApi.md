# WordCloudApi

All URIs are relative to *https://api.prowritingaid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Post**](WordCloudApi.md#Post) | **POST** /api/async/wordcloud and **GET** /api/async/result/wordcloud | Universal word cloud analysis method creates new task which will be processed asynchronously or synchronously  


<a name="Post"></a>
# **Post**
>  Post(request:WordCloudRequest):Promise\<HttpResponse\<WordCloudResponse\>\>



### Example
```typescript
import PWA = require('pro_writing_aid_ts');

let api = new PWA.WordCloudApi();
api.SetApiKey(PWA.ApiKeys.LicenseCode, '$Your license code$');
let request = new PWA.WordCloudRequest();
request.Text = "I'd like to by that toy. wood you help me? I have twp more brothers.";
request.Orientation = PWA.OrientationEnum.EveryWhichWay;
request.CaseMethod = PWA.CaseMethodEnum.IntelligentCase;
request.PaletteName = "Earthy";
request.MaximumWordCount = 20000;
request.RemoveCommonWords = true;
request.FontName = "Arial";
request.Width = 500;
request.Height = 500;
request.OnlySentimentWords = false;
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
{ Url: '/en/Storage/Index/WordClouds/72758d12-dc38-4cfc-a293-ca549aebb716.jpg',
  Language: 'English' }
 */
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**WordCloudRequest**](WordCloudRequest.md)|  | 

### Return type

Promise<[HttpResponse](HttpResponse.md)<[**WordCloudResponse**](WordCloudResponse.md)>>


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

