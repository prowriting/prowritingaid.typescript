# ProWritingAid.API

Official typescript [prowritingaid.com](https://prowritingaid.com) API. 

- API version: v1
- Package version: v1.0.0

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install package using command:

```shell
npm install pro_writing_aid_ts --save
```

#### git
#
Or install package from the git repo:

```shell
    npm install prowriting/prowritingaid.typescript --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```typescript
import PWA = require('pro_writing_aid_ts');

let api = new PWA.HtmlApi();
api.setApiKey(PWA.ApiKeys.licenseCode, '$Your license code$');

let request = new PWA.HtmlAnalysisRequest();
request.Html = 'I\'d like to by that toy. wood you help me? I have twp more brothers.';
request.Reports = ['grammar'];
request.Language = PWA.LanguageEnum.En;
request.Style = PWA.StyleEnum.General;

api.post(request)
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

## Documentation for API Classes

All URIs are relative to *https://api.prowritingaid.com*

Class | Method | Description
------------ | ------------- | ------------- 
*ContextualThesaurusApi* | [**Post**](docs/ContextualThesaurusApi.md#Post) |  
*HtmlApi* | [**Post**](docs/HtmlApi.md#Post) |  
*SummaryApi* | [**Post**](docs/SummaryApi.md#Post) |  
*TextApi* | [**Post**](docs/TextApi.md#Post) |  
*WordCloudApi* | [**Post**](docs/WordCloudApi.md#Post) |  


## Documentation for Models

 - [AnalysisSettings](docs/AnalysisSettings.md)
 - [AnalysisSummary](docs/AnalysisSummary.md)
 - [AnalysisSummaryGraph](docs/AnalysisSummaryGraph.md)
 - [AnalysisSummaryGraphItem](docs/AnalysisSummaryGraphItem.md)
 - [AnalysisSummaryItem](docs/AnalysisSummaryItem.md)
 - [AnalysisSummarySubItem](docs/AnalysisSummarySubItem.md)
 - [ContextualThesaurusRequest](docs/ContextualThesaurusRequest.md)
 - [ContextualThesaurusResponse](docs/ContextualThesaurusResponse.md)
 - [DocTag](docs/DocTag.md)
 - [HtmlAnalysisRequest](docs/HtmlAnalysisRequest.md)
 - [HtmlAnalysisResponse](docs/HtmlAnalysisResponse.md)
 - [HttpResponse](docs/HttpResponse.md)
 - [SuggestionCategory](docs/SuggestionCategory.md)
 - [SummaryAnalysisRequest](docs/SummaryAnalysisRequest.md)
 - [SummaryAnalysisResponse](docs/SummaryAnalysisResponse.md)
 - [TextAnalysisRequest](docs/TextAnalysisRequest.md)
 - [TextAnalysisResponse](docs/TextAnalysisResponse.md)
 - [WordCloudRequest](docs/WordCloudRequest.md)
 - [WordCloudResponse](docs/WordCloudResponse.md)


## Documentation for Authorization

### licenseCode

- **Type**: API key
- **API key parameter name**: licenseCode
- **Location**: HTTP header

