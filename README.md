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

```

<a name="documentation-for-api-endpoints"></a>
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

