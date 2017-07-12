"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var httpRequest = require("request");
var Promise = require("bluebird");
var defaultBasePath = 'https://api.prowritingaid.com';
var IsPositiveEnum;
(function (IsPositiveEnum) {
    IsPositiveEnum[IsPositiveEnum["Positive"] = 'Positive'] = "Positive";
    IsPositiveEnum[IsPositiveEnum["Negative"] = 'Negative'] = "Negative";
    IsPositiveEnum[IsPositiveEnum["Information"] = 'Information'] = "Information";
})(IsPositiveEnum = exports.IsPositiveEnum || (exports.IsPositiveEnum = {}));
var StyleEnum;
(function (StyleEnum) {
    StyleEnum[StyleEnum["NotSet"] = 'NotSet'] = "NotSet";
    StyleEnum[StyleEnum["General"] = 'General'] = "General";
    StyleEnum[StyleEnum["Academic"] = 'Academic'] = "Academic";
    StyleEnum[StyleEnum["Business"] = 'Business'] = "Business";
    StyleEnum[StyleEnum["Technical"] = 'Technical'] = "Technical";
    StyleEnum[StyleEnum["Creative"] = 'Creative'] = "Creative";
    StyleEnum[StyleEnum["Casual"] = 'Casual'] = "Casual";
    StyleEnum[StyleEnum["Web"] = 'Web'] = "Web";
})(StyleEnum = exports.StyleEnum || (exports.StyleEnum = {}));
var LanguageEnum;
(function (LanguageEnum) {
    LanguageEnum[LanguageEnum["EnUS"] = 'en_US'] = "EnUS";
    LanguageEnum[LanguageEnum["EnUK"] = 'en_UK'] = "EnUK";
    LanguageEnum[LanguageEnum["En"] = 'en'] = "En";
    LanguageEnum[LanguageEnum["Es"] = 'es'] = "Es";
})(LanguageEnum = exports.LanguageEnum || (exports.LanguageEnum = {}));
var OrientationEnum;
(function (OrientationEnum) {
    OrientationEnum[OrientationEnum["Horizontal"] = 'Horizontal'] = "Horizontal";
    OrientationEnum[OrientationEnum["MostlyHorizontal"] = 'MostlyHorizontal'] = "MostlyHorizontal";
    OrientationEnum[OrientationEnum["Vertical"] = 'Vertical'] = "Vertical";
    OrientationEnum[OrientationEnum["MostlyVertical"] = 'MostlyVertical'] = "MostlyVertical";
    OrientationEnum[OrientationEnum["HalfAndHalf"] = 'HalfAndHalf'] = "HalfAndHalf";
    OrientationEnum[OrientationEnum["EveryWhichWay"] = 'EveryWhichWay'] = "EveryWhichWay";
})(OrientationEnum = exports.OrientationEnum || (exports.OrientationEnum = {}));
var CaseMethodEnum;
(function (CaseMethodEnum) {
    CaseMethodEnum[CaseMethodEnum["PreserveCase"] = 'PreserveCase'] = "PreserveCase";
    CaseMethodEnum[CaseMethodEnum["Lowercase"] = 'Lowercase'] = "Lowercase";
    CaseMethodEnum[CaseMethodEnum["Uppercase"] = 'Uppercase'] = "Uppercase";
    CaseMethodEnum[CaseMethodEnum["IntelligentCase"] = 'IntelligentCase'] = "IntelligentCase";
})(CaseMethodEnum = exports.CaseMethodEnum || (exports.CaseMethodEnum = {}));
var AnalysisSettings = (function () {
    function AnalysisSettings() {
        this['ShortestAverageSentenceLength'] = 11;
        this['LongestAverageSentenceLength'] = 18;
        this['LongestIndividualSentence'] = 30;
        this['HighestPassiveIndex'] = 25;
        this['MaxGlueIndex'] = 40;
        this['MinSentenceVariety'] = 3;
        this['HighestPronounPercentage'] = 15;
        this['LowestPronounPercentage'] = 4;
        this['HighestAcademicPronounPercentage'] = 2;
        this['HighestInitialPronounPercentage'] = 30;
        this['LowestInitialPronounPercentage'] = 0;
        this['LowestWeWeScore'] = .6;
        this['LongestAverageParagraphLength'] = 6;
    }
    return AnalysisSettings;
}());
exports.AnalysisSettings = AnalysisSettings;
var AnalysisSummary = (function () {
    function AnalysisSummary() {
    }
    return AnalysisSummary;
}());
exports.AnalysisSummary = AnalysisSummary;
var AnalysisSummaryGraph = (function () {
    function AnalysisSummaryGraph() {
    }
    return AnalysisSummaryGraph;
}());
exports.AnalysisSummaryGraph = AnalysisSummaryGraph;
var AnalysisSummaryGraphItem = (function () {
    function AnalysisSummaryGraphItem() {
    }
    return AnalysisSummaryGraphItem;
}());
exports.AnalysisSummaryGraphItem = AnalysisSummaryGraphItem;
var AnalysisSummaryItem = (function () {
    function AnalysisSummaryItem() {
    }
    return AnalysisSummaryItem;
}());
exports.AnalysisSummaryItem = AnalysisSummaryItem;
var AnalysisSummarySubItem = (function () {
    function AnalysisSummarySubItem() {
    }
    return AnalysisSummarySubItem;
}());
exports.AnalysisSummarySubItem = AnalysisSummarySubItem;
var ContextualThesaurusRequest = (function () {
    function ContextualThesaurusRequest() {
    }
    return ContextualThesaurusRequest;
}());
exports.ContextualThesaurusRequest = ContextualThesaurusRequest;
var ContextualThesaurusResponse = (function () {
    function ContextualThesaurusResponse() {
    }
    return ContextualThesaurusResponse;
}());
exports.ContextualThesaurusResponse = ContextualThesaurusResponse;
var DocTag = (function () {
    function DocTag() {
    }
    return DocTag;
}());
exports.DocTag = DocTag;
var HtmlAnalysisRequest = (function () {
    function HtmlAnalysisRequest() {
    }
    return HtmlAnalysisRequest;
}());
exports.HtmlAnalysisRequest = HtmlAnalysisRequest;
var HtmlAnalysisResponse = (function () {
    function HtmlAnalysisResponse() {
    }
    return HtmlAnalysisResponse;
}());
exports.HtmlAnalysisResponse = HtmlAnalysisResponse;
var SuggestionCategory = (function () {
    function SuggestionCategory() {
    }
    return SuggestionCategory;
}());
exports.SuggestionCategory = SuggestionCategory;
var SummaryAnalysisRequest = (function () {
    function SummaryAnalysisRequest() {
    }
    return SummaryAnalysisRequest;
}());
exports.SummaryAnalysisRequest = SummaryAnalysisRequest;
var SummaryAnalysisResponse = (function () {
    function SummaryAnalysisResponse() {
    }
    return SummaryAnalysisResponse;
}());
exports.SummaryAnalysisResponse = SummaryAnalysisResponse;
var TextAnalysisRequest = (function () {
    function TextAnalysisRequest() {
    }
    return TextAnalysisRequest;
}());
exports.TextAnalysisRequest = TextAnalysisRequest;
var TextAnalysisResponse = (function () {
    function TextAnalysisResponse() {
    }
    return TextAnalysisResponse;
}());
exports.TextAnalysisResponse = TextAnalysisResponse;
var WordCloudRequest = (function () {
    function WordCloudRequest() {
    }
    return WordCloudRequest;
}());
exports.WordCloudRequest = WordCloudRequest;
var WordCloudResponse = (function () {
    function WordCloudResponse() {
    }
    return WordCloudResponse;
}());
exports.WordCloudResponse = WordCloudResponse;
var HttpResponse = (function () {
    function HttpResponse(response, body) {
        this.Body = body;
        this.Response = response;
    }
    return HttpResponse;
}());
exports.HttpResponse = HttpResponse;
var AsyncResponse = (function () {
    function AsyncResponse() {
    }
    return AsyncResponse;
}());
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    ApiKeyAuth.prototype.ApplyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header") {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
var ApiKeys;
(function (ApiKeys) {
    ApiKeys[ApiKeys["LicenseCode"] = 0] = "LicenseCode";
})(ApiKeys = exports.ApiKeys || (exports.ApiKeys = {}));
var ApiBase = (function () {
    function ApiBase(path, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this.authentications = {
            'LicenseCode': new ApiKeyAuth('header', 'licenseCode'),
        };
        this.path = path;
        if (basePath !== null && basePath !== undefined) {
            this.basePath = basePath;
        }
    }
    ApiBase.prototype.SetApiKey = function (key, value) {
        this.authentications[ApiKeys[key]].apiKey = value;
    };
    ApiBase.ExtendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    ApiBase.HandleResponse = function (response, body, resolve, reject) {
        if (response.statusCode >= 200 && response.statusCode <= 299) {
            resolve(new HttpResponse(response, body));
        }
        else {
            reject(new HttpResponse(response, body));
        }
    };
    return ApiBase;
}());
var PostApiBase = (function (_super) {
    __extends(PostApiBase, _super);
    function PostApiBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostApiBase.prototype.Post = function (request) {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling asyncContextualThesaurusPost.');
        }
        var localVarPath = this.basePath + this.path;
        var queryParameters = {};
        var headerParams = ApiBase.ExtendObj({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: false,
            json: true,
            body: request,
        };
        this.authentications.LicenseCode.ApplyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            httpRequest(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    ApiBase.HandleResponse(response, body, resolve, reject);
                }
            });
        });
    };
    return PostApiBase;
}(ApiBase));
var GetApiBase = (function (_super) {
    __extends(GetApiBase, _super);
    function GetApiBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetApiBase.prototype.Get = function (request) {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined.');
        }
        var localVarPath = this.basePath + this.path + '/' + String(request);
        var queryParameters = {};
        var headerParams = ApiBase.ExtendObj({}, this.defaultHeaders);
        var formParams = {};
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: false,
            json: true,
        };
        this.authentications.LicenseCode.ApplyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            httpRequest(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    ApiBase.HandleResponse(response, body, resolve, reject);
                }
            });
        });
    };
    return GetApiBase;
}(ApiBase));
var AsyncApiBase = (function () {
    function AsyncApiBase(apiId, basePath) {
        this.DefaultTimeoutInMs = 100000;
        this.DefaultAwaitCallDelay = 1000;
        this.setter = new PostApiBase('/api/async/' + apiId, basePath);
        this.getter = new GetApiBase('/api/async/result/' + apiId, basePath);
    }
    AsyncApiBase.prototype.SetApiKey = function (key, value) {
        this.getter.SetApiKey(key, value);
        this.setter.SetApiKey(key, value);
    };
    AsyncApiBase.prototype.Post = function (request, settings) {
        if (settings == null) {
            settings = {
                TimeoutInMs: this.DefaultTimeoutInMs,
                AwaitCallDelay: this.DefaultAwaitCallDelay
            };
        }
        if (settings.AwaitCallDelay == null) {
            settings.AwaitCallDelay = this.DefaultAwaitCallDelay;
        }
        if (settings.TimeoutInMs == null) {
            settings.TimeoutInMs = this.DefaultTimeoutInMs;
        }
        var numberOfAttempts = 0;
        var _getter = this.getter;
        function delay(interval) {
            return new Promise(function (resolve) {
                global.setTimeout(resolve, interval);
            });
        }
        function errorContinuation(error) {
            return new Promise(function (resolve, reject) {
                reject(error);
            });
        }
        function continuation(data) {
            numberOfAttempts++;
            var body = data.Body;
            if (body.Result != null) {
                return new Promise(function (resolve, reject) {
                    ApiBase.HandleResponse(data.Response, data.Body.Result, resolve, reject);
                });
            }
            if (numberOfAttempts >= settings.TimeoutInMs / settings.AwaitCallDelay) {
                return new Promise(function (resolve, reject) {
                    reject(new Error("Operation timed out"));
                });
            }
            return delay(settings.AwaitCallDelay)
                .then(function () {
                return _getter.Get(data.Body.TaskId)
                    .then(continuation);
            });
        }
        return this.setter.Post(request)
            .then(continuation, function (error) { return errorContinuation(error); });
    };
    return AsyncApiBase;
}());
exports.AsyncApiBase = AsyncApiBase;
var HtmlApi = (function (_super) {
    __extends(HtmlApi, _super);
    function HtmlApi(basePath) {
        return _super.call(this, 'html', basePath) || this;
    }
    return HtmlApi;
}(AsyncApiBase));
exports.HtmlApi = HtmlApi;
var TextApi = (function (_super) {
    __extends(TextApi, _super);
    function TextApi(basePath) {
        return _super.call(this, 'text', basePath) || this;
    }
    return TextApi;
}(AsyncApiBase));
exports.TextApi = TextApi;
var SummaryApi = (function (_super) {
    __extends(SummaryApi, _super);
    function SummaryApi(basePath) {
        return _super.call(this, 'summary', basePath) || this;
    }
    return SummaryApi;
}(AsyncApiBase));
exports.SummaryApi = SummaryApi;
var WordCloudApi = (function (_super) {
    __extends(WordCloudApi, _super);
    function WordCloudApi(basePath) {
        return _super.call(this, 'wordcloud', basePath) || this;
    }
    return WordCloudApi;
}(AsyncApiBase));
exports.WordCloudApi = WordCloudApi;
var ContextualThesaurusApi = (function (_super) {
    __extends(ContextualThesaurusApi, _super);
    function ContextualThesaurusApi(basePath) {
        return _super.call(this, 'contextualthesaurus', basePath) || this;
    }
    return ContextualThesaurusApi;
}(AsyncApiBase));
exports.ContextualThesaurusApi = ContextualThesaurusApi;
//# sourceMappingURL=api.js.map