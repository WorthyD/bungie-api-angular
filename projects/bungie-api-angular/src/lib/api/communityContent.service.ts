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

import { Inject, Injectable, Optional } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
  HttpContext,
} from "@angular/common/http";
import { CustomHttpParameterCodec } from "../encoder";
import { Observable } from "rxjs";

// @ts-ignore
import { ForumGetTopicsPaged200Response } from "../model/forumGetTopicsPaged200Response";

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from "../variables";
import { Configuration } from "../configuration";

@Injectable({
  providedIn: "root",
})
export class CommunityContentService {
  protected basePath = "https://www.bungie.net/Platform";
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
    if (typeof this.configuration.basePath !== "string") {
      if (typeof basePath !== "string") {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  // @ts-ignore
  private addToHttpParams(
    httpParams: HttpParams,
    value: any,
    key?: string
  ): HttpParams {
    if (typeof value === "object" && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(
    httpParams: HttpParams,
    value?: any,
    key?: string
  ): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === "object") {
      if (Array.isArray(value)) {
        (value as any[]).forEach(
          (elem) =>
            (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key))
        );
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(
            key,
            (value as Date).toISOString().substr(0, 10)
          );
        } else {
          throw Error("key may not be null if value is Date");
        }
      } else {
        Object.keys(value).forEach(
          (k) =>
            (httpParams = this.addToHttpParamsRecursive(
              httpParams,
              value[k],
              key != null ? `${key}.${k}` : k
            ))
        );
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error("key may not be null if value is not object or array");
    }
    return httpParams;
  }

  /**
   * Returns community content.
   * @param mediaFilter The type of media to get
   * @param page Zero based page
   * @param sort The sort mode.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public communityContentGetCommunityContent(
    mediaFilter: number,
    page: number,
    sort: number,
    observe?: "body",
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: "*/*"; context?: HttpContext }
  ): Observable<ForumGetTopicsPaged200Response>;
  public communityContentGetCommunityContent(
    mediaFilter: number,
    page: number,
    sort: number,
    observe?: "response",
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: "*/*"; context?: HttpContext }
  ): Observable<HttpResponse<ForumGetTopicsPaged200Response>>;
  public communityContentGetCommunityContent(
    mediaFilter: number,
    page: number,
    sort: number,
    observe?: "events",
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: "*/*"; context?: HttpContext }
  ): Observable<HttpEvent<ForumGetTopicsPaged200Response>>;
  public communityContentGetCommunityContent(
    mediaFilter: number,
    page: number,
    sort: number,
    observe: any = "body",
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: "*/*"; context?: HttpContext }
  ): Observable<any> {
    if (mediaFilter === null || mediaFilter === undefined) {
      throw new Error(
        "Required parameter mediaFilter was null or undefined when calling communityContentGetCommunityContent."
      );
    }
    if (page === null || page === undefined) {
      throw new Error(
        "Required parameter page was null or undefined when calling communityContentGetCommunityContent."
      );
    }
    if (sort === null || sort === undefined) {
      throw new Error(
        "Required parameter sort was null or undefined when calling communityContentGetCommunityContent."
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ["*/*"];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        "Accept",
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: "text" | "json" | "blob" = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = "json";
      } else {
        responseType_ = "json";
      }
    }

    return this.httpClient.get<ForumGetTopicsPaged200Response>(
      `${this.configuration.basePath}/CommunityContent/Get/${encodeURIComponent(
        String(sort)
      )}/${encodeURIComponent(String(mediaFilter))}/${encodeURIComponent(
        String(page)
      )}/`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
