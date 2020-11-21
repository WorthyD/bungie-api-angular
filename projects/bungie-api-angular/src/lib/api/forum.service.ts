/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.9.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { InlineResponse20012 } from '../model/inlineResponse20012';
import { InlineResponse20013 } from '../model/inlineResponse20013';
import { InlineResponse20014 } from '../model/inlineResponse20014';
import { InlineResponse20015 } from '../model/inlineResponse20015';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class ForumService {

    protected basePath = 'https://www.bungie.net/Platform';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Gets a listing of all topics marked as part of the core group.
     * @param categoryFilter The category filter.
     * @param page Zero base page
     * @param quickDate The date filter.
     * @param sort The sort mode.
     * @param locales Comma seperated list of locales posts must match to return in the result list. Default &#39;en&#39;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forumGetCoreTopicsPaged(categoryFilter: number, page: number, quickDate: number, sort: number, locales?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public forumGetCoreTopicsPaged(categoryFilter: number, page: number, quickDate: number, sort: number, locales?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public forumGetCoreTopicsPaged(categoryFilter: number, page: number, quickDate: number, sort: number, locales?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public forumGetCoreTopicsPaged(categoryFilter: number, page: number, quickDate: number, sort: number, locales?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (categoryFilter === null || categoryFilter === undefined) {
            throw new Error('Required parameter categoryFilter was null or undefined when calling forumGetCoreTopicsPaged.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling forumGetCoreTopicsPaged.');
        }
        if (quickDate === null || quickDate === undefined) {
            throw new Error('Required parameter quickDate was null or undefined when calling forumGetCoreTopicsPaged.');
        }
        if (sort === null || sort === undefined) {
            throw new Error('Required parameter sort was null or undefined when calling forumGetCoreTopicsPaged.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (locales !== undefined && locales !== null) {
            queryParameters = queryParameters.set('locales', <any>locales);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20012>(`${this.configuration.basePath}/Forum/GetCoreTopicsPaged/${encodeURIComponent(String(page))}/${encodeURIComponent(String(sort))}/${encodeURIComponent(String(quickDate))}/${encodeURIComponent(String(categoryFilter))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
     * @param partialtag The partial tag input to generate suggestions from.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forumGetForumTagSuggestions(partialtag?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20014>;
    public forumGetForumTagSuggestions(partialtag?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20014>>;
    public forumGetForumTagSuggestions(partialtag?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20014>>;
    public forumGetForumTagSuggestions(partialtag?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (partialtag !== undefined && partialtag !== null) {
            queryParameters = queryParameters.set('partialtag', <any>partialtag);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20014>(`${this.configuration.basePath}/Forum/GetForumTagSuggestions/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Gets the specified forum poll.
     * @param topicId The post id of the topic that has the poll.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forumGetPoll(topicId: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public forumGetPoll(topicId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public forumGetPoll(topicId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public forumGetPoll(topicId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (topicId === null || topicId === undefined) {
            throw new Error('Required parameter topicId was null or undefined when calling forumGetPoll.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20012>(`${this.configuration.basePath}/Forum/Poll/${encodeURIComponent(String(topicId))}/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Returns the post specified and its immediate parent.
     * @param childPostId 
     * @param showbanned If this value is not null or empty, banned posts are requested to be returned
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forumGetPostAndParent(childPostId: number, showbanned?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public forumGetPostAndParent(childPostId: number, showbanned?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public forumGetPostAndParent(childPostId: number, showbanned?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public forumGetPostAndParent(childPostId: number, showbanned?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (childPostId === null || childPostId === undefined) {
            throw new Error('Required parameter childPostId was null or undefined when calling forumGetPostAndParent.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (showbanned !== undefined && showbanned !== null) {
            queryParameters = queryParameters.set('showbanned', <any>showbanned);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20012>(`${this.configuration.basePath}/Forum/GetPostAndParent/${encodeURIComponent(String(childPostId))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Returns the post specified and its immediate parent of posts that are awaiting approval.
     * @param childPostId 
     * @param showbanned If this value is not null or empty, banned posts are requested to be returned
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forumGetPostAndParentAwaitingApproval(childPostId: number, showbanned?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public forumGetPostAndParentAwaitingApproval(childPostId: number, showbanned?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public forumGetPostAndParentAwaitingApproval(childPostId: number, showbanned?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public forumGetPostAndParentAwaitingApproval(childPostId: number, showbanned?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (childPostId === null || childPostId === undefined) {
            throw new Error('Required parameter childPostId was null or undefined when calling forumGetPostAndParentAwaitingApproval.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (showbanned !== undefined && showbanned !== null) {
            queryParameters = queryParameters.set('showbanned', <any>showbanned);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20012>(`${this.configuration.basePath}/Forum/GetPostAndParentAwaitingApproval/${encodeURIComponent(String(childPostId))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
     * @param getParentPost 
     * @param page 
     * @param pageSize 
     * @param parentPostId 
     * @param replySize 
     * @param rootThreadMode 
     * @param sortMode 
     * @param showbanned If this value is not null or empty, banned posts are requested to be returned
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forumGetPostsThreadedPaged(getParentPost: boolean, page: number, pageSize: number, parentPostId: number, replySize: number, rootThreadMode: boolean, sortMode: number, showbanned?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public forumGetPostsThreadedPaged(getParentPost: boolean, page: number, pageSize: number, parentPostId: number, replySize: number, rootThreadMode: boolean, sortMode: number, showbanned?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public forumGetPostsThreadedPaged(getParentPost: boolean, page: number, pageSize: number, parentPostId: number, replySize: number, rootThreadMode: boolean, sortMode: number, showbanned?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public forumGetPostsThreadedPaged(getParentPost: boolean, page: number, pageSize: number, parentPostId: number, replySize: number, rootThreadMode: boolean, sortMode: number, showbanned?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (getParentPost === null || getParentPost === undefined) {
            throw new Error('Required parameter getParentPost was null or undefined when calling forumGetPostsThreadedPaged.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling forumGetPostsThreadedPaged.');
        }
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling forumGetPostsThreadedPaged.');
        }
        if (parentPostId === null || parentPostId === undefined) {
            throw new Error('Required parameter parentPostId was null or undefined when calling forumGetPostsThreadedPaged.');
        }
        if (replySize === null || replySize === undefined) {
            throw new Error('Required parameter replySize was null or undefined when calling forumGetPostsThreadedPaged.');
        }
        if (rootThreadMode === null || rootThreadMode === undefined) {
            throw new Error('Required parameter rootThreadMode was null or undefined when calling forumGetPostsThreadedPaged.');
        }
        if (sortMode === null || sortMode === undefined) {
            throw new Error('Required parameter sortMode was null or undefined when calling forumGetPostsThreadedPaged.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (showbanned !== undefined && showbanned !== null) {
            queryParameters = queryParameters.set('showbanned', <any>showbanned);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20012>(`${this.configuration.basePath}/Forum/GetPostsThreadedPaged/${encodeURIComponent(String(parentPostId))}/${encodeURIComponent(String(page))}/${encodeURIComponent(String(pageSize))}/${encodeURIComponent(String(replySize))}/${encodeURIComponent(String(getParentPost))}/${encodeURIComponent(String(rootThreadMode))}/${encodeURIComponent(String(sortMode))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
     * @param childPostId 
     * @param page 
     * @param pageSize 
     * @param replySize 
     * @param rootThreadMode 
     * @param sortMode 
     * @param showbanned If this value is not null or empty, banned posts are requested to be returned
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forumGetPostsThreadedPagedFromChild(childPostId: number, page: number, pageSize: number, replySize: number, rootThreadMode: boolean, sortMode: number, showbanned?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public forumGetPostsThreadedPagedFromChild(childPostId: number, page: number, pageSize: number, replySize: number, rootThreadMode: boolean, sortMode: number, showbanned?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public forumGetPostsThreadedPagedFromChild(childPostId: number, page: number, pageSize: number, replySize: number, rootThreadMode: boolean, sortMode: number, showbanned?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public forumGetPostsThreadedPagedFromChild(childPostId: number, page: number, pageSize: number, replySize: number, rootThreadMode: boolean, sortMode: number, showbanned?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (childPostId === null || childPostId === undefined) {
            throw new Error('Required parameter childPostId was null or undefined when calling forumGetPostsThreadedPagedFromChild.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling forumGetPostsThreadedPagedFromChild.');
        }
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling forumGetPostsThreadedPagedFromChild.');
        }
        if (replySize === null || replySize === undefined) {
            throw new Error('Required parameter replySize was null or undefined when calling forumGetPostsThreadedPagedFromChild.');
        }
        if (rootThreadMode === null || rootThreadMode === undefined) {
            throw new Error('Required parameter rootThreadMode was null or undefined when calling forumGetPostsThreadedPagedFromChild.');
        }
        if (sortMode === null || sortMode === undefined) {
            throw new Error('Required parameter sortMode was null or undefined when calling forumGetPostsThreadedPagedFromChild.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (showbanned !== undefined && showbanned !== null) {
            queryParameters = queryParameters.set('showbanned', <any>showbanned);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20012>(`${this.configuration.basePath}/Forum/GetPostsThreadedPagedFromChild/${encodeURIComponent(String(childPostId))}/${encodeURIComponent(String(page))}/${encodeURIComponent(String(pageSize))}/${encodeURIComponent(String(replySize))}/${encodeURIComponent(String(rootThreadMode))}/${encodeURIComponent(String(sortMode))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Allows the caller to get a list of to 25 recruitment thread summary information objects.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forumGetRecruitmentThreadSummaries(observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20015>;
    public forumGetRecruitmentThreadSummaries(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20015>>;
    public forumGetRecruitmentThreadSummaries(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20015>>;
    public forumGetRecruitmentThreadSummaries(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<InlineResponse20015>(`${this.configuration.basePath}/Forum/Recruit/Summaries/`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Gets the post Id for the given content item&#39;s comments, if it exists.
     * @param contentId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forumGetTopicForContent(contentId: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20013>;
    public forumGetTopicForContent(contentId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20013>>;
    public forumGetTopicForContent(contentId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20013>>;
    public forumGetTopicForContent(contentId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (contentId === null || contentId === undefined) {
            throw new Error('Required parameter contentId was null or undefined when calling forumGetTopicForContent.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20013>(`${this.configuration.basePath}/Forum/GetTopicForContent/${encodeURIComponent(String(contentId))}/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Get topics from any forum.
     * @param categoryFilter A category filter
     * @param group The group, if any.
     * @param page Zero paged page number
     * @param pageSize Unused
     * @param quickDate A date filter.
     * @param sort The sort mode.
     * @param locales Comma seperated list of locales posts must match to return in the result list. Default &#39;en&#39;
     * @param tagstring The tags to search, if any.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public forumGetTopicsPaged(categoryFilter: number, group: number, page: number, pageSize: number, quickDate: number, sort: number, locales?: string, tagstring?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public forumGetTopicsPaged(categoryFilter: number, group: number, page: number, pageSize: number, quickDate: number, sort: number, locales?: string, tagstring?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public forumGetTopicsPaged(categoryFilter: number, group: number, page: number, pageSize: number, quickDate: number, sort: number, locales?: string, tagstring?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public forumGetTopicsPaged(categoryFilter: number, group: number, page: number, pageSize: number, quickDate: number, sort: number, locales?: string, tagstring?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (categoryFilter === null || categoryFilter === undefined) {
            throw new Error('Required parameter categoryFilter was null or undefined when calling forumGetTopicsPaged.');
        }
        if (group === null || group === undefined) {
            throw new Error('Required parameter group was null or undefined when calling forumGetTopicsPaged.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling forumGetTopicsPaged.');
        }
        if (pageSize === null || pageSize === undefined) {
            throw new Error('Required parameter pageSize was null or undefined when calling forumGetTopicsPaged.');
        }
        if (quickDate === null || quickDate === undefined) {
            throw new Error('Required parameter quickDate was null or undefined when calling forumGetTopicsPaged.');
        }
        if (sort === null || sort === undefined) {
            throw new Error('Required parameter sort was null or undefined when calling forumGetTopicsPaged.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (locales !== undefined && locales !== null) {
            queryParameters = queryParameters.set('locales', <any>locales);
        }
        if (tagstring !== undefined && tagstring !== null) {
            queryParameters = queryParameters.set('tagstring', <any>tagstring);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse20012>(`${this.configuration.basePath}/Forum/GetTopicsPaged/${encodeURIComponent(String(page))}/${encodeURIComponent(String(pageSize))}/${encodeURIComponent(String(group))}/${encodeURIComponent(String(sort))}/${encodeURIComponent(String(quickDate))}/${encodeURIComponent(String(categoryFilter))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
