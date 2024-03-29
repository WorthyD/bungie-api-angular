/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { UserGetAvailableThemes200Response } from '../model/userGetAvailableThemes200Response';
// @ts-ignore
import { UserGetBungieNetUserById200Response } from '../model/userGetBungieNetUserById200Response';
// @ts-ignore
import { UserGetCredentialTypesForTargetAccount200Response } from '../model/userGetCredentialTypesForTargetAccount200Response';
// @ts-ignore
import { UserGetMembershipDataById200Response } from '../model/userGetMembershipDataById200Response';
// @ts-ignore
import { UserGetMembershipFromHardLinkedCredential200Response } from '../model/userGetMembershipFromHardLinkedCredential200Response';
// @ts-ignore
import { UserGetSanitizedPlatformDisplayNames200Response } from '../model/userGetSanitizedPlatformDisplayNames200Response';
// @ts-ignore
import { UserSearchByGlobalNamePrefix200Response } from '../model/userSearchByGlobalNamePrefix200Response';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class UserService {

    protected basePath = 'https://www.bungie.net/Platform';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
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

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Returns a list of all available user themes.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userGetAvailableThemes(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<UserGetAvailableThemes200Response>;
    public userGetAvailableThemes(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<UserGetAvailableThemes200Response>>;
    public userGetAvailableThemes(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<UserGetAvailableThemes200Response>>;
    public userGetAvailableThemes(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'json';;
            }
        }

        return this.httpClient.get<UserGetAvailableThemes200Response>(`${this.configuration.basePath}/User/GetAvailableThemes/`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Loads a bungienet user by membership id.
     * @param id The requested Bungie.net membership id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userGetBungieNetUserById(id: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<UserGetBungieNetUserById200Response>;
    public userGetBungieNetUserById(id: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<UserGetBungieNetUserById200Response>>;
    public userGetBungieNetUserById(id: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<UserGetBungieNetUserById200Response>>;
    public userGetBungieNetUserById(id: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userGetBungieNetUserById.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'json';;
            }
        }

        return this.httpClient.get<UserGetBungieNetUserById200Response>(`${this.configuration.basePath}/User/GetBungieNetUserById/${encodeURIComponent(String(id))}/`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns a list of credential types attached to the requested account
     * @param membershipId The user\&#39;s membership id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userGetCredentialTypesForTargetAccount(membershipId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<UserGetCredentialTypesForTargetAccount200Response>;
    public userGetCredentialTypesForTargetAccount(membershipId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<UserGetCredentialTypesForTargetAccount200Response>>;
    public userGetCredentialTypesForTargetAccount(membershipId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<UserGetCredentialTypesForTargetAccount200Response>>;
    public userGetCredentialTypesForTargetAccount(membershipId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (membershipId === null || membershipId === undefined) {
            throw new Error('Required parameter membershipId was null or undefined when calling userGetCredentialTypesForTargetAccount.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'json';;
            }
        }

        return this.httpClient.get<UserGetCredentialTypesForTargetAccount200Response>(`${this.configuration.basePath}/User/GetCredentialTypesForTargetAccount/${encodeURIComponent(String(membershipId))}/`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
     * @param membershipId The membership ID of the target user.
     * @param membershipType Type of the supplied membership ID.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userGetMembershipDataById(membershipId: number, membershipType: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<UserGetMembershipDataById200Response>;
    public userGetMembershipDataById(membershipId: number, membershipType: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<UserGetMembershipDataById200Response>>;
    public userGetMembershipDataById(membershipId: number, membershipType: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<UserGetMembershipDataById200Response>>;
    public userGetMembershipDataById(membershipId: number, membershipType: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (membershipId === null || membershipId === undefined) {
            throw new Error('Required parameter membershipId was null or undefined when calling userGetMembershipDataById.');
        }
        if (membershipType === null || membershipType === undefined) {
            throw new Error('Required parameter membershipType was null or undefined when calling userGetMembershipDataById.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'json';;
            }
        }

        return this.httpClient.get<UserGetMembershipDataById200Response>(`${this.configuration.basePath}/User/GetMembershipsById/${encodeURIComponent(String(membershipId))}/${encodeURIComponent(String(membershipType))}/`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userGetMembershipDataForCurrentUser(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<UserGetMembershipDataById200Response>;
    public userGetMembershipDataForCurrentUser(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<UserGetMembershipDataById200Response>>;
    public userGetMembershipDataForCurrentUser(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<UserGetMembershipDataById200Response>>;
    public userGetMembershipDataForCurrentUser(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'json';;
            }
        }

        return this.httpClient.get<UserGetMembershipDataById200Response>(`${this.configuration.basePath}/User/GetMembershipsForCurrentUser/`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
     * @param credential The credential to look up. Must be a valid SteamID64.
     * @param crType The credential type. \&#39;SteamId\&#39; is the only valid value at present.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userGetMembershipFromHardLinkedCredential(credential: string, crType: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<UserGetMembershipFromHardLinkedCredential200Response>;
    public userGetMembershipFromHardLinkedCredential(credential: string, crType: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<UserGetMembershipFromHardLinkedCredential200Response>>;
    public userGetMembershipFromHardLinkedCredential(credential: string, crType: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<UserGetMembershipFromHardLinkedCredential200Response>>;
    public userGetMembershipFromHardLinkedCredential(credential: string, crType: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (credential === null || credential === undefined) {
            throw new Error('Required parameter credential was null or undefined when calling userGetMembershipFromHardLinkedCredential.');
        }
        if (crType === null || crType === undefined) {
            throw new Error('Required parameter crType was null or undefined when calling userGetMembershipFromHardLinkedCredential.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'json';;
            }
        }

        return this.httpClient.get<UserGetMembershipFromHardLinkedCredential200Response>(`${this.configuration.basePath}/User/GetMembershipFromHardLinkedCredential/${encodeURIComponent(String(crType))}/${encodeURIComponent(String(credential))}/`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.
     * @param membershipId The requested membership id to load.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userGetSanitizedPlatformDisplayNames(membershipId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<UserGetSanitizedPlatformDisplayNames200Response>;
    public userGetSanitizedPlatformDisplayNames(membershipId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<UserGetSanitizedPlatformDisplayNames200Response>>;
    public userGetSanitizedPlatformDisplayNames(membershipId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<UserGetSanitizedPlatformDisplayNames200Response>>;
    public userGetSanitizedPlatformDisplayNames(membershipId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (membershipId === null || membershipId === undefined) {
            throw new Error('Required parameter membershipId was null or undefined when calling userGetSanitizedPlatformDisplayNames.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'json';;
            }
        }

        return this.httpClient.get<UserGetSanitizedPlatformDisplayNames200Response>(`${this.configuration.basePath}/User/GetSanitizedPlatformDisplayNames/${encodeURIComponent(String(membershipId))}/`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Given the prefix of a global display name, returns all users who share that name.
     * @param page The zero-based page of results you desire.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userSearchByGlobalNamePost(page: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<UserSearchByGlobalNamePrefix200Response>;
    public userSearchByGlobalNamePost(page: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<UserSearchByGlobalNamePrefix200Response>>;
    public userSearchByGlobalNamePost(page: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<UserSearchByGlobalNamePrefix200Response>>;
    public userSearchByGlobalNamePost(page: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling userSearchByGlobalNamePost.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'json';;
            }
        }

        return this.httpClient.post<UserSearchByGlobalNamePrefix200Response>(`${this.configuration.basePath}/User/Search/GlobalName/${encodeURIComponent(String(page))}/`,
            null,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.
     * @param displayNamePrefix The display name prefix you\&#39;re looking for.
     * @param page The zero-based page of results you desire.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userSearchByGlobalNamePrefix(displayNamePrefix: string, page: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<UserSearchByGlobalNamePrefix200Response>;
    public userSearchByGlobalNamePrefix(displayNamePrefix: string, page: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<UserSearchByGlobalNamePrefix200Response>>;
    public userSearchByGlobalNamePrefix(displayNamePrefix: string, page: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<UserSearchByGlobalNamePrefix200Response>>;
    public userSearchByGlobalNamePrefix(displayNamePrefix: string, page: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (displayNamePrefix === null || displayNamePrefix === undefined) {
            throw new Error('Required parameter displayNamePrefix was null or undefined when calling userSearchByGlobalNamePrefix.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling userSearchByGlobalNamePrefix.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'json';;
            }
        }

        return this.httpClient.get<UserSearchByGlobalNamePrefix200Response>(`${this.configuration.basePath}/User/Search/Prefix/${encodeURIComponent(String(displayNamePrefix))}/${encodeURIComponent(String(page))}/`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
