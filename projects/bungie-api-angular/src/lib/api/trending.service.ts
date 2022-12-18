/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.16.0
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

import { InlineResponse20062 } from '../model/models';
import { InlineResponse20063 } from '../model/models';
import { InlineResponse20064 } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: "root",
})
export class TrendingService {
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
   * Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public trendingGetTrendingCategories(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse20062>;
  public trendingGetTrendingCategories(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse20062>>;
  public trendingGetTrendingCategories(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse20062>>;
  public trendingGetTrendingCategories(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
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

    return this.httpClient.get<InlineResponse20062>(`${this.configuration.basePath}/Trending/Categories/`, {
      responseType: <any>responseType,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Returns paginated lists of trending items for a category.
   * @param categoryId The ID of the category for whom you want additional results.
   * @param pageNumber The page # of results to return.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public trendingGetTrendingCategory(
    categoryId: string,
    pageNumber: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse20063>;
  public trendingGetTrendingCategory(
    categoryId: string,
    pageNumber: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse20063>>;
  public trendingGetTrendingCategory(
    categoryId: string,
    pageNumber: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse20063>>;
  public trendingGetTrendingCategory(
    categoryId: string,
    pageNumber: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (categoryId === null || categoryId === undefined) {
      throw new Error('Required parameter categoryId was null or undefined when calling trendingGetTrendingCategory.');
    }
    if (pageNumber === null || pageNumber === undefined) {
      throw new Error('Required parameter pageNumber was null or undefined when calling trendingGetTrendingCategory.');
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

    return this.httpClient.get<InlineResponse20063>(
      `${this.configuration.basePath}/Trending/Categories/${encodeURIComponent(
        String(categoryId)
      )}/${encodeURIComponent(String(pageNumber))}/`,
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
   * Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
   * @param identifier The identifier for the entity to be returned.
   * @param trendingEntryType The type of entity to be returned.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public trendingGetTrendingEntryDetail(
    identifier: string,
    trendingEntryType: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse20064>;
  public trendingGetTrendingEntryDetail(
    identifier: string,
    trendingEntryType: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse20064>>;
  public trendingGetTrendingEntryDetail(
    identifier: string,
    trendingEntryType: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse20064>>;
  public trendingGetTrendingEntryDetail(
    identifier: string,
    trendingEntryType: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (identifier === null || identifier === undefined) {
      throw new Error(
        'Required parameter identifier was null or undefined when calling trendingGetTrendingEntryDetail.'
      );
    }
    if (trendingEntryType === null || trendingEntryType === undefined) {
      throw new Error(
        'Required parameter trendingEntryType was null or undefined when calling trendingGetTrendingEntryDetail.'
      );
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

    return this.httpClient.get<InlineResponse20064>(
      `${this.configuration.basePath}/Trending/Details/${encodeURIComponent(
        String(trendingEntryType)
      )}/${encodeURIComponent(String(identifier))}/`,
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
