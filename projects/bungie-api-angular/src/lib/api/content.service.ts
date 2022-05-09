/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.12.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent, HttpParameterCodec } from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import { InlineResponse20010 } from '../model/models';
import { InlineResponse2007 } from '../model/models';
import { InlineResponse2008 } from '../model/models';
import { InlineResponse2009 } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  protected basePath = 'https://www.bungie.net/Platform';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        (value as any[]).forEach((elem) => (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key)));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
        } else {
          throw Error('key may not be null if value is Date');
        }
      } else {
        Object.keys(value).forEach(
          (k) => (httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k))
        );
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error('key may not be null if value is not object or array');
    }
    return httpParams;
  }

  /**
   * Returns a content item referenced by id
   * @param id
   * @param locale
   * @param head false
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public contentGetContentById(
    id: number,
    locale: string,
    head?: boolean,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse2008>;
  public contentGetContentById(
    id: number,
    locale: string,
    head?: boolean,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse2008>>;
  public contentGetContentById(
    id: number,
    locale: string,
    head?: boolean,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse2008>>;
  public contentGetContentById(
    id: number,
    locale: string,
    head?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling contentGetContentById.');
    }
    if (locale === null || locale === undefined) {
      throw new Error('Required parameter locale was null or undefined when calling contentGetContentById.');
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (head !== undefined && head !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>head, 'head');
    }

    let headers = this.defaultHeaders;

    let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
      responseType = 'text';
    }

    return this.httpClient.get<InlineResponse2008>(
      `${this.configuration.basePath}/Content/GetContentById/${encodeURIComponent(String(id))}/${encodeURIComponent(
        String(locale)
      )}/`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Returns the newest item that matches a given tag and Content Type.
   * @param locale
   * @param tag
   * @param type
   * @param head Not used.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public contentGetContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    head?: boolean,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse2008>;
  public contentGetContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    head?: boolean,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse2008>>;
  public contentGetContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    head?: boolean,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse2008>>;
  public contentGetContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    head?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (locale === null || locale === undefined) {
      throw new Error('Required parameter locale was null or undefined when calling contentGetContentByTagAndType.');
    }
    if (tag === null || tag === undefined) {
      throw new Error('Required parameter tag was null or undefined when calling contentGetContentByTagAndType.');
    }
    if (type === null || type === undefined) {
      throw new Error('Required parameter type was null or undefined when calling contentGetContentByTagAndType.');
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (head !== undefined && head !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>head, 'head');
    }

    let headers = this.defaultHeaders;

    let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
      responseType = 'text';
    }

    return this.httpClient.get<InlineResponse2008>(
      `${this.configuration.basePath}/Content/GetContentByTagAndType/${encodeURIComponent(
        String(tag)
      )}/${encodeURIComponent(String(type))}/${encodeURIComponent(String(locale))}/`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Gets an object describing a particular variant of content.
   * @param type
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public contentGetContentType(
    type: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse2007>;
  public contentGetContentType(
    type: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse2007>>;
  public contentGetContentType(
    type: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse2007>>;
  public contentGetContentType(
    type: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (type === null || type === undefined) {
      throw new Error('Required parameter type was null or undefined when calling contentGetContentType.');
    }

    let headers = this.defaultHeaders;

    let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
      responseType = 'text';
    }

    return this.httpClient.get<InlineResponse2007>(
      `${this.configuration.basePath}/Content/GetContentType/${encodeURIComponent(String(type))}/`,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Searches for Content Items that match the given Tag and Content Type.
   * @param locale
   * @param tag
   * @param type
   * @param currentpage Page number for the search results starting with page 1.
   * @param head Not used.
   * @param itemsperpage Not used.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public contentSearchContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    currentpage?: number,
    head?: boolean,
    itemsperpage?: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse2009>;
  public contentSearchContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    currentpage?: number,
    head?: boolean,
    itemsperpage?: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse2009>>;
  public contentSearchContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    currentpage?: number,
    head?: boolean,
    itemsperpage?: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse2009>>;
  public contentSearchContentByTagAndType(
    locale: string,
    tag: string,
    type: string,
    currentpage?: number,
    head?: boolean,
    itemsperpage?: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (locale === null || locale === undefined) {
      throw new Error('Required parameter locale was null or undefined when calling contentSearchContentByTagAndType.');
    }
    if (tag === null || tag === undefined) {
      throw new Error('Required parameter tag was null or undefined when calling contentSearchContentByTagAndType.');
    }
    if (type === null || type === undefined) {
      throw new Error('Required parameter type was null or undefined when calling contentSearchContentByTagAndType.');
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (currentpage !== undefined && currentpage !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>currentpage, 'currentpage');
    }
    if (head !== undefined && head !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>head, 'head');
    }
    if (itemsperpage !== undefined && itemsperpage !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>itemsperpage, 'itemsperpage');
    }

    let headers = this.defaultHeaders;

    let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
      responseType = 'text';
    }

    return this.httpClient.get<InlineResponse2009>(
      `${this.configuration.basePath}/Content/SearchContentByTagAndType/${encodeURIComponent(
        String(tag)
      )}/${encodeURIComponent(String(type))}/${encodeURIComponent(String(locale))}/`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Gets content based on querystring information passed in. Provides basic search and text search capabilities.
   * @param locale
   * @param ctype Content type tag: Help, News, etc. Supply multiple ctypes separated by space.
   * @param currentpage Page number for the search results, starting with page 1.
   * @param head Not used.
   * @param searchtext Word or phrase for the search.
   * @param source For analytics, hint at the part of the app that triggered the search. Optional.
   * @param tag Tag used on the content to be searched.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public contentSearchContentWithText(
    locale: string,
    ctype?: string,
    currentpage?: number,
    head?: boolean,
    searchtext?: string,
    source?: string,
    tag?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse2009>;
  public contentSearchContentWithText(
    locale: string,
    ctype?: string,
    currentpage?: number,
    head?: boolean,
    searchtext?: string,
    source?: string,
    tag?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse2009>>;
  public contentSearchContentWithText(
    locale: string,
    ctype?: string,
    currentpage?: number,
    head?: boolean,
    searchtext?: string,
    source?: string,
    tag?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse2009>>;
  public contentSearchContentWithText(
    locale: string,
    ctype?: string,
    currentpage?: number,
    head?: boolean,
    searchtext?: string,
    source?: string,
    tag?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (locale === null || locale === undefined) {
      throw new Error('Required parameter locale was null or undefined when calling contentSearchContentWithText.');
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (ctype !== undefined && ctype !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>ctype, 'ctype');
    }
    if (currentpage !== undefined && currentpage !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>currentpage, 'currentpage');
    }
    if (head !== undefined && head !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>head, 'head');
    }
    if (searchtext !== undefined && searchtext !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>searchtext, 'searchtext');
    }
    if (source !== undefined && source !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>source, 'source');
    }
    if (tag !== undefined && tag !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>tag, 'tag');
    }

    let headers = this.defaultHeaders;

    let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
      responseType = 'text';
    }

    return this.httpClient.get<InlineResponse2009>(
      `${this.configuration.basePath}/Content/Search/${encodeURIComponent(String(locale))}/`,
      {
        params: queryParameters,
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Search for Help Articles.
   * @param searchtext
   * @param size
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public contentSearchHelpArticles(
    searchtext: string,
    size: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse20010>;
  public contentSearchHelpArticles(
    searchtext: string,
    size: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse20010>>;
  public contentSearchHelpArticles(
    searchtext: string,
    size: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse20010>>;
  public contentSearchHelpArticles(
    searchtext: string,
    size: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (searchtext === null || searchtext === undefined) {
      throw new Error('Required parameter searchtext was null or undefined when calling contentSearchHelpArticles.');
    }
    if (size === null || size === undefined) {
      throw new Error('Required parameter size was null or undefined when calling contentSearchHelpArticles.');
    }

    let headers = this.defaultHeaders;

    let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['*/*'];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let responseType: 'text' | 'json' = 'json';
    if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
      responseType = 'text';
    }

    return this.httpClient.get<InlineResponse20010>(
      `${this.configuration.basePath}/Content/SearchHelpArticles/${encodeURIComponent(
        String(searchtext)
      )}/${encodeURIComponent(String(size))}/`,
      {
        responseType: <any>responseType,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}