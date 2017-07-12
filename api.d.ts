import http = require('http');
import Promise = require('bluebird');
export declare enum IsPositiveEnum {
    Positive,
    Negative,
    Information,
}
export declare enum StyleEnum {
    NotSet,
    General,
    Academic,
    Business,
    Technical,
    Creative,
    Casual,
    Web,
}
export declare enum LanguageEnum {
    EnUS,
    EnUK,
    En,
    Es,
}
export declare enum OrientationEnum {
    Horizontal,
    MostlyHorizontal,
    Vertical,
    MostlyVertical,
    HalfAndHalf,
    EveryWhichWay,
}
export declare enum CaseMethodEnum {
    PreserveCase,
    Lowercase,
    Uppercase,
    IntelligentCase,
}
export declare class AnalysisSettings {
    'ShortestAverageSentenceLength': number;
    'LongestAverageSentenceLength': number;
    'LongestIndividualSentence': number;
    'HighestPassiveIndex': number;
    'MaxGlueIndex': number;
    'MinSentenceVariety': number;
    'HighestPronounPercentage': number;
    'LowestPronounPercentage': number;
    'HighestAcademicPronounPercentage': number;
    'HighestInitialPronounPercentage': number;
    'LowestInitialPronounPercentage': number;
    'LowestWeWeScore': number;
    'LongestAverageParagraphLength': number;
}
export declare class AnalysisSummary {
    'ReportDisplayName': string;
    'ReportName': string;
    'SummaryItems': Array<AnalysisSummaryItem>;
    'NumberOfIssues': number;
    'ReportDescription': string;
}
export declare class AnalysisSummaryGraph {
    'Name': string;
    'Items': Array<AnalysisSummaryGraphItem>;
}
export declare class AnalysisSummaryGraphItem {
    'Label': string;
    'Color': string;
    'Length': number;
    'SubCategory': string;
    'Index': number;
    'Id': string;
}
export declare class AnalysisSummaryItem {
    'Text': string;
    'Graph': AnalysisSummaryGraph;
    'Url': string;
    'UrlText': string;
    'SubItems': Array<AnalysisSummarySubItem>;
    'IsPositive': IsPositiveEnum;
    'Category': SuggestionCategory;
    'CategoryName': string;
    'NumIssues': number;
}
export declare class AnalysisSummarySubItem {
    'TagIds': Array<string>;
    'Text': string;
    'SuggestionCategory': string;
    'SubCategory': string;
    'SearchTerm': string;
}
export declare class ContextualThesaurusRequest {
    'Context': string;
    'ContextStart': number;
    'ContextEnd': number;
}
export declare class ContextualThesaurusResponse {
    'Suggestions': Array<string>;
}
export declare class DocTag {
    'StartPos': number;
    'EndPos': number;
    'Report': string;
    'Urls': Array<string>;
    'Category': string;
    'CategoryDisplayName': string;
    'Subcategory': string;
    'Hint': string;
    'Suggestions': Array<string>;
    'IsSubTag': boolean;
    'HelpId': string;
    'Id': string;
}
export declare class HtmlAnalysisRequest {
    'Html': string;
    'Reports': Array<string>;
    'Style': StyleEnum;
    'Language': LanguageEnum;
}
export declare class HtmlAnalysisResponse {
    'Html': string;
    'WordCount': number;
    'Summaries': Array<AnalysisSummary>;
}
export declare class SuggestionCategory {
    'Name': string;
    'DisplayName': string;
    'Description': string;
}
export declare class SummaryAnalysisRequest {
    'Text': string;
    'Settings': AnalysisSettings;
    'Style': StyleEnum;
    'Language': LanguageEnum;
}
export declare class SummaryAnalysisResponse {
    'Text': string;
}
export declare class TextAnalysisRequest {
    'Text': string;
    'Reports': Array<string>;
    'Style': StyleEnum;
    'Language': LanguageEnum;
}
export declare class TextAnalysisResponse {
    'Tags': Array<DocTag>;
    'WordCount': number;
    'Summaries': Array<AnalysisSummary>;
}
export declare class WordCloudRequest {
    'Text': string;
    'Orientation': OrientationEnum;
    'CaseMethod': CaseMethodEnum;
    'PaletteName': string;
    'MaximumWordCount': number;
    'RemoveCommonWords': boolean;
    'FontName': string;
    'Width': number;
    'Height': number;
    'OnlySentimentWords': boolean;
    'Style': StyleEnum;
    'Language': LanguageEnum;
}
export declare namespace WordCloudRequest {
}
export declare class WordCloudResponse {
    'Url': string;
    'Language': string;
}
export declare class HttpResponse<T> {
    Response: http.ClientResponse;
    Body: T;
    constructor(response: http.ClientResponse, body: T);
}
export declare enum ApiKeys {
    LicenseCode = 0,
}
export declare abstract class AsyncApiBase<TRequest, TResponse> {
    private readonly setter;
    private readonly getter;
    private readonly DefaultTimeoutInMs;
    private readonly DefaultAwaitCallDelay;
    constructor(apiId: string, basePath?: string);
    SetApiKey(key: ApiKeys, value: string): void;
    Post(request: TRequest, settings?: {
        TimeoutInMs: number;
        AwaitCallDelay: number;
    }): Promise<HttpResponse<TResponse>>;
}
export declare class HtmlApi extends AsyncApiBase<HtmlAnalysisRequest, HtmlAnalysisResponse> {
    constructor(basePath?: string);
}
export declare class TextApi extends AsyncApiBase<TextAnalysisRequest, TextAnalysisResponse> {
    constructor(basePath?: string);
}
export declare class SummaryApi extends AsyncApiBase<SummaryAnalysisRequest, SummaryAnalysisResponse> {
    constructor(basePath?: string);
}
export declare class WordCloudApi extends AsyncApiBase<WordCloudRequest, WordCloudResponse> {
    constructor(basePath?: string);
}
export declare class ContextualThesaurusApi extends AsyncApiBase<ContextualThesaurusRequest, ContextualThesaurusResponse> {
    constructor(basePath?: string);
}
