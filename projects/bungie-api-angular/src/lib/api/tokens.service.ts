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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { InlineResponse20017 } from '../model/models';
import { InlineResponse20032 } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class TokensService {

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
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
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
     * Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
     * @param partnerApplicationId The partner application identifier.
     * @param targetBnetMembershipId The bungie.net user to apply missing offers to. If not self, elevated permissions are required.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tokensApplyMissingPartnerOffersWithoutClaim(partnerApplicationId: number, targetBnetMembershipId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*'}): Observable<InlineResponse20017>;
    public tokensApplyMissingPartnerOffersWithoutClaim(partnerApplicationId: number, targetBnetMembershipId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*'}): Observable<HttpResponse<InlineResponse20017>>;
    public tokensApplyMissingPartnerOffersWithoutClaim(partnerApplicationId: number, targetBnetMembershipId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*'}): Observable<HttpEvent<InlineResponse20017>>;
    public tokensApplyMissingPartnerOffersWithoutClaim(partnerApplicationId: number, targetBnetMembershipId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*'}): Observable<any> {
        if (partnerApplicationId === null || partnerApplicationId === undefined) {
            throw new Error('Required parameter partnerApplicationId was null or undefined when calling tokensApplyMissingPartnerOffersWithoutClaim.');
        }
        if (targetBnetMembershipId === null || targetBnetMembershipId === undefined) {
            throw new Error('Required parameter targetBnetMembershipId was null or undefined when calling tokensApplyMissingPartnerOffersWithoutClaim.');
        }

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


        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<InlineResponse20017>(`${this.configuration.basePath}/Tokens/Partner/ApplyMissingOffers/${encodeURIComponent(String(partnerApplicationId))}/${encodeURIComponent(String(targetBnetMembershipId))}/`,
            null,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Claim a partner offer as the authenticated user.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tokensClaimPartnerOffer(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*'}): Observable<InlineResponse20017>;
    public tokensClaimPartnerOffer(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*'}): Observable<HttpResponse<InlineResponse20017>>;
    public tokensClaimPartnerOffer(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*'}): Observable<HttpEvent<InlineResponse20017>>;
    public tokensClaimPartnerOffer(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*'}): Observable<any> {

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


        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<InlineResponse20017>(`${this.configuration.basePath}/Tokens/Partner/ClaimOffer/`,
            null,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
     * @param partnerApplicationId The partner application identifier.
     * @param targetBnetMembershipId The bungie.net user to apply missing offers to. If not self, elevated permissions are required.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tokensGetPartnerOfferSkuHistory(partnerApplicationId: number, targetBnetMembershipId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*'}): Observable<InlineResponse20032>;
    public tokensGetPartnerOfferSkuHistory(partnerApplicationId: number, targetBnetMembershipId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*'}): Observable<HttpResponse<InlineResponse20032>>;
    public tokensGetPartnerOfferSkuHistory(partnerApplicationId: number, targetBnetMembershipId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*'}): Observable<HttpEvent<InlineResponse20032>>;
    public tokensGetPartnerOfferSkuHistory(partnerApplicationId: number, targetBnetMembershipId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*'}): Observable<any> {
        if (partnerApplicationId === null || partnerApplicationId === undefined) {
            throw new Error('Required parameter partnerApplicationId was null or undefined when calling tokensGetPartnerOfferSkuHistory.');
        }
        if (targetBnetMembershipId === null || targetBnetMembershipId === undefined) {
            throw new Error('Required parameter targetBnetMembershipId was null or undefined when calling tokensGetPartnerOfferSkuHistory.');
        }

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


        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<InlineResponse20032>(`${this.configuration.basePath}/Tokens/Partner/History/${encodeURIComponent(String(partnerApplicationId))}/${encodeURIComponent(String(targetBnetMembershipId))}/`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
