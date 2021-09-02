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

import { InlineResponse20022 } from '../model/models';
import { InlineResponse20065 } from '../model/models';
import { InlineResponse20066 } from '../model/models';
import { InlineResponse20067 } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class FireteamService {
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
   * Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
   * @param groupId The group id of the clan.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public fireteamGetActivePrivateClanFireteamCount(
    groupId: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse20022>;
  public fireteamGetActivePrivateClanFireteamCount(
    groupId: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse20022>>;
  public fireteamGetActivePrivateClanFireteamCount(
    groupId: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse20022>>;
  public fireteamGetActivePrivateClanFireteamCount(
    groupId: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (groupId === null || groupId === undefined) {
      throw new Error(
        'Required parameter groupId was null or undefined when calling fireteamGetActivePrivateClanFireteamCount.'
      );
    }

    let headers = this.defaultHeaders;

    let credential: string | undefined;
    // authentication (oauth2) required
    credential = this.configuration.lookupCredential('oauth2');
    if (credential) {
      headers = headers.set('Authorization', 'Bearer ' + credential);
    }

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

    return this.httpClient.get<InlineResponse20022>(
      `${this.configuration.basePath}/Fireteam/Clan/${encodeURIComponent(String(groupId))}/ActiveCount/`,
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
   * Gets a listing of all of this clan\&#39;s fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
   * @param activityType The activity type to filter by.
   * @param dateRange The date range to grab available fireteams.
   * @param groupId The group id of the clan.
   * @param page Zero based page
   * @param platform The platform filter.
   * @param publicOnly Determines public/private filtering.
   * @param slotFilter Filters based on available slots
   * @param langFilter An optional language filter.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public fireteamGetAvailableClanFireteams(
    activityType: number,
    dateRange: number,
    groupId: number,
    page: number,
    platform: number,
    publicOnly: number,
    slotFilter: number,
    langFilter?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse20065>;
  public fireteamGetAvailableClanFireteams(
    activityType: number,
    dateRange: number,
    groupId: number,
    page: number,
    platform: number,
    publicOnly: number,
    slotFilter: number,
    langFilter?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse20065>>;
  public fireteamGetAvailableClanFireteams(
    activityType: number,
    dateRange: number,
    groupId: number,
    page: number,
    platform: number,
    publicOnly: number,
    slotFilter: number,
    langFilter?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse20065>>;
  public fireteamGetAvailableClanFireteams(
    activityType: number,
    dateRange: number,
    groupId: number,
    page: number,
    platform: number,
    publicOnly: number,
    slotFilter: number,
    langFilter?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (activityType === null || activityType === undefined) {
      throw new Error(
        'Required parameter activityType was null or undefined when calling fireteamGetAvailableClanFireteams.'
      );
    }
    if (dateRange === null || dateRange === undefined) {
      throw new Error(
        'Required parameter dateRange was null or undefined when calling fireteamGetAvailableClanFireteams.'
      );
    }
    if (groupId === null || groupId === undefined) {
      throw new Error(
        'Required parameter groupId was null or undefined when calling fireteamGetAvailableClanFireteams.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error('Required parameter page was null or undefined when calling fireteamGetAvailableClanFireteams.');
    }
    if (platform === null || platform === undefined) {
      throw new Error(
        'Required parameter platform was null or undefined when calling fireteamGetAvailableClanFireteams.'
      );
    }
    if (publicOnly === null || publicOnly === undefined) {
      throw new Error(
        'Required parameter publicOnly was null or undefined when calling fireteamGetAvailableClanFireteams.'
      );
    }
    if (slotFilter === null || slotFilter === undefined) {
      throw new Error(
        'Required parameter slotFilter was null or undefined when calling fireteamGetAvailableClanFireteams.'
      );
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (langFilter !== undefined && langFilter !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>langFilter, 'langFilter');
    }

    let headers = this.defaultHeaders;

    let credential: string | undefined;
    // authentication (oauth2) required
    credential = this.configuration.lookupCredential('oauth2');
    if (credential) {
      headers = headers.set('Authorization', 'Bearer ' + credential);
    }

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

    return this.httpClient.get<InlineResponse20065>(
      `${this.configuration.basePath}/Fireteam/Clan/${encodeURIComponent(
        String(groupId)
      )}/Available/${encodeURIComponent(String(platform))}/${encodeURIComponent(
        String(activityType)
      )}/${encodeURIComponent(String(dateRange))}/${encodeURIComponent(String(slotFilter))}/${encodeURIComponent(
        String(publicOnly)
      )}/${encodeURIComponent(String(page))}/`,
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
   * Gets a specific fireteam.
   * @param fireteamId The unique id of the fireteam.
   * @param groupId The group id of the clan.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public fireteamGetClanFireteam(
    fireteamId: number,
    groupId: number,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse20067>;
  public fireteamGetClanFireteam(
    fireteamId: number,
    groupId: number,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse20067>>;
  public fireteamGetClanFireteam(
    fireteamId: number,
    groupId: number,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse20067>>;
  public fireteamGetClanFireteam(
    fireteamId: number,
    groupId: number,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (fireteamId === null || fireteamId === undefined) {
      throw new Error('Required parameter fireteamId was null or undefined when calling fireteamGetClanFireteam.');
    }
    if (groupId === null || groupId === undefined) {
      throw new Error('Required parameter groupId was null or undefined when calling fireteamGetClanFireteam.');
    }

    let headers = this.defaultHeaders;

    let credential: string | undefined;
    // authentication (oauth2) required
    credential = this.configuration.lookupCredential('oauth2');
    if (credential) {
      headers = headers.set('Authorization', 'Bearer ' + credential);
    }

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

    return this.httpClient.get<InlineResponse20067>(
      `${this.configuration.basePath}/Fireteam/Clan/${encodeURIComponent(String(groupId))}/Summary/${encodeURIComponent(
        String(fireteamId)
      )}/`,
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
   * Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
   * @param groupId The group id of the clan. (This parameter is ignored unless the optional query parameter groupFilter is true).
   * @param includeClosed If true, return fireteams that have been closed.
   * @param page Deprecated parameter, ignored.
   * @param platform The platform filter.
   * @param groupFilter If true, filter by clan. Otherwise, ignore the clan and show all of the user\&#39;s fireteams.
   * @param langFilter An optional language filter.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public fireteamGetMyClanFireteams(
    groupId: number,
    includeClosed: boolean,
    page: number,
    platform: number,
    groupFilter?: boolean,
    langFilter?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse20066>;
  public fireteamGetMyClanFireteams(
    groupId: number,
    includeClosed: boolean,
    page: number,
    platform: number,
    groupFilter?: boolean,
    langFilter?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse20066>>;
  public fireteamGetMyClanFireteams(
    groupId: number,
    includeClosed: boolean,
    page: number,
    platform: number,
    groupFilter?: boolean,
    langFilter?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse20066>>;
  public fireteamGetMyClanFireteams(
    groupId: number,
    includeClosed: boolean,
    page: number,
    platform: number,
    groupFilter?: boolean,
    langFilter?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (groupId === null || groupId === undefined) {
      throw new Error('Required parameter groupId was null or undefined when calling fireteamGetMyClanFireteams.');
    }
    if (includeClosed === null || includeClosed === undefined) {
      throw new Error(
        'Required parameter includeClosed was null or undefined when calling fireteamGetMyClanFireteams.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error('Required parameter page was null or undefined when calling fireteamGetMyClanFireteams.');
    }
    if (platform === null || platform === undefined) {
      throw new Error('Required parameter platform was null or undefined when calling fireteamGetMyClanFireteams.');
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (groupFilter !== undefined && groupFilter !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>groupFilter, 'groupFilter');
    }
    if (langFilter !== undefined && langFilter !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>langFilter, 'langFilter');
    }

    let headers = this.defaultHeaders;

    let credential: string | undefined;
    // authentication (oauth2) required
    credential = this.configuration.lookupCredential('oauth2');
    if (credential) {
      headers = headers.set('Authorization', 'Bearer ' + credential);
    }

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

    return this.httpClient.get<InlineResponse20066>(
      `${this.configuration.basePath}/Fireteam/Clan/${encodeURIComponent(String(groupId))}/My/${encodeURIComponent(
        String(platform)
      )}/${encodeURIComponent(String(includeClosed))}/${encodeURIComponent(String(page))}/`,
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
   * Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.
   * @param activityType The activity type to filter by.
   * @param dateRange The date range to grab available fireteams.
   * @param page Zero based page
   * @param platform The platform filter.
   * @param slotFilter Filters based on available slots
   * @param langFilter An optional language filter.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public fireteamSearchPublicAvailableClanFireteams(
    activityType: number,
    dateRange: number,
    page: number,
    platform: number,
    slotFilter: number,
    langFilter?: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<InlineResponse20065>;
  public fireteamSearchPublicAvailableClanFireteams(
    activityType: number,
    dateRange: number,
    page: number,
    platform: number,
    slotFilter: number,
    langFilter?: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpResponse<InlineResponse20065>>;
  public fireteamSearchPublicAvailableClanFireteams(
    activityType: number,
    dateRange: number,
    page: number,
    platform: number,
    slotFilter: number,
    langFilter?: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<HttpEvent<InlineResponse20065>>;
  public fireteamSearchPublicAvailableClanFireteams(
    activityType: number,
    dateRange: number,
    page: number,
    platform: number,
    slotFilter: number,
    langFilter?: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: '*/*' }
  ): Observable<any> {
    if (activityType === null || activityType === undefined) {
      throw new Error(
        'Required parameter activityType was null or undefined when calling fireteamSearchPublicAvailableClanFireteams.'
      );
    }
    if (dateRange === null || dateRange === undefined) {
      throw new Error(
        'Required parameter dateRange was null or undefined when calling fireteamSearchPublicAvailableClanFireteams.'
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        'Required parameter page was null or undefined when calling fireteamSearchPublicAvailableClanFireteams.'
      );
    }
    if (platform === null || platform === undefined) {
      throw new Error(
        'Required parameter platform was null or undefined when calling fireteamSearchPublicAvailableClanFireteams.'
      );
    }
    if (slotFilter === null || slotFilter === undefined) {
      throw new Error(
        'Required parameter slotFilter was null or undefined when calling fireteamSearchPublicAvailableClanFireteams.'
      );
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (langFilter !== undefined && langFilter !== null) {
      queryParameters = this.addToHttpParams(queryParameters, <any>langFilter, 'langFilter');
    }

    let headers = this.defaultHeaders;

    let credential: string | undefined;
    // authentication (oauth2) required
    credential = this.configuration.lookupCredential('oauth2');
    if (credential) {
      headers = headers.set('Authorization', 'Bearer ' + credential);
    }

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

    return this.httpClient.get<InlineResponse20065>(
      `${this.configuration.basePath}/Fireteam/Search/Available/${encodeURIComponent(
        String(platform)
      )}/${encodeURIComponent(String(activityType))}/${encodeURIComponent(String(dateRange))}/${encodeURIComponent(
        String(slotFilter)
      )}/${encodeURIComponent(String(page))}/`,
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
}
