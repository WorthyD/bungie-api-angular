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

import { InlineResponse20044 } from '../model/inlineResponse20044';
import { InlineResponse20047 } from '../model/inlineResponse20047';
import { InlineResponse20050 } from '../model/inlineResponse20050';
import { InlineResponse20051 } from '../model/inlineResponse20051';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class PreviewService {

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
     * Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
     * @param groupId Group ID of the clan whose leaderboards you wish to fetch.
     * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public destiny2GetClanAggregateStats(groupId: number, modes?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20051>;
    public destiny2GetClanAggregateStats(groupId: number, modes?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20051>>;
    public destiny2GetClanAggregateStats(groupId: number, modes?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20051>>;
    public destiny2GetClanAggregateStats(groupId: number, modes?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling destiny2GetClanAggregateStats.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (modes !== undefined && modes !== null) {
            queryParameters = queryParameters.set('modes', <any>modes);
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

        return this.httpClient.get<InlineResponse20051>(`${this.configuration.basePath}/Destiny2/Stats/AggregateClanStats/${encodeURIComponent(String(groupId))}/`,
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
     * Gets leaderboards with the signed in user&#39;s friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
     * @param groupId Group ID of the clan whose leaderboards you wish to fetch.
     * @param maxtop Maximum number of top players to return. Use a large number to get entire leaderboard.
     * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
     * @param statid ID of stat to return rather than returning all Leaderboard stats.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public destiny2GetClanLeaderboards(groupId: number, maxtop?: number, modes?: string, statid?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20050>;
    public destiny2GetClanLeaderboards(groupId: number, maxtop?: number, modes?: string, statid?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20050>>;
    public destiny2GetClanLeaderboards(groupId: number, maxtop?: number, modes?: string, statid?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20050>>;
    public destiny2GetClanLeaderboards(groupId: number, maxtop?: number, modes?: string, statid?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling destiny2GetClanLeaderboards.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (maxtop !== undefined && maxtop !== null) {
            queryParameters = queryParameters.set('maxtop', <any>maxtop);
        }
        if (modes !== undefined && modes !== null) {
            queryParameters = queryParameters.set('modes', <any>modes);
        }
        if (statid !== undefined && statid !== null) {
            queryParameters = queryParameters.set('statid', <any>statid);
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

        return this.httpClient.get<InlineResponse20050>(`${this.configuration.basePath}/Destiny2/Stats/Leaderboards/Clans/${encodeURIComponent(String(groupId))}/`,
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
     * Gets leaderboards with the signed in user&#39;s friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
     * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
     * @param membershipType A valid non-BungieNet membership type.
     * @param maxtop Maximum number of top players to return. Use a large number to get entire leaderboard.
     * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
     * @param statid ID of stat to return rather than returning all Leaderboard stats.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public destiny2GetLeaderboards(destinyMembershipId: number, membershipType: number, maxtop?: number, modes?: string, statid?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20050>;
    public destiny2GetLeaderboards(destinyMembershipId: number, membershipType: number, maxtop?: number, modes?: string, statid?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20050>>;
    public destiny2GetLeaderboards(destinyMembershipId: number, membershipType: number, maxtop?: number, modes?: string, statid?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20050>>;
    public destiny2GetLeaderboards(destinyMembershipId: number, membershipType: number, maxtop?: number, modes?: string, statid?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (destinyMembershipId === null || destinyMembershipId === undefined) {
            throw new Error('Required parameter destinyMembershipId was null or undefined when calling destiny2GetLeaderboards.');
        }
        if (membershipType === null || membershipType === undefined) {
            throw new Error('Required parameter membershipType was null or undefined when calling destiny2GetLeaderboards.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (maxtop !== undefined && maxtop !== null) {
            queryParameters = queryParameters.set('maxtop', <any>maxtop);
        }
        if (modes !== undefined && modes !== null) {
            queryParameters = queryParameters.set('modes', <any>modes);
        }
        if (statid !== undefined && statid !== null) {
            queryParameters = queryParameters.set('statid', <any>statid);
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

        return this.httpClient.get<InlineResponse20050>(`${this.configuration.basePath}/Destiny2/${encodeURIComponent(String(membershipType))}/Account/${encodeURIComponent(String(destinyMembershipId))}/Stats/Leaderboards/`,
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
     * Gets leaderboards with the signed in user&#39;s friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
     * @param characterId The specific character to build the leaderboard around for the provided Destiny Membership.
     * @param destinyMembershipId The Destiny membershipId of the user to retrieve.
     * @param membershipType A valid non-BungieNet membership type.
     * @param maxtop Maximum number of top players to return. Use a large number to get entire leaderboard.
     * @param modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
     * @param statid ID of stat to return rather than returning all Leaderboard stats.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public destiny2GetLeaderboardsForCharacter(characterId: number, destinyMembershipId: number, membershipType: number, maxtop?: number, modes?: string, statid?: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20050>;
    public destiny2GetLeaderboardsForCharacter(characterId: number, destinyMembershipId: number, membershipType: number, maxtop?: number, modes?: string, statid?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20050>>;
    public destiny2GetLeaderboardsForCharacter(characterId: number, destinyMembershipId: number, membershipType: number, maxtop?: number, modes?: string, statid?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20050>>;
    public destiny2GetLeaderboardsForCharacter(characterId: number, destinyMembershipId: number, membershipType: number, maxtop?: number, modes?: string, statid?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling destiny2GetLeaderboardsForCharacter.');
        }
        if (destinyMembershipId === null || destinyMembershipId === undefined) {
            throw new Error('Required parameter destinyMembershipId was null or undefined when calling destiny2GetLeaderboardsForCharacter.');
        }
        if (membershipType === null || membershipType === undefined) {
            throw new Error('Required parameter membershipType was null or undefined when calling destiny2GetLeaderboardsForCharacter.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (maxtop !== undefined && maxtop !== null) {
            queryParameters = queryParameters.set('maxtop', <any>maxtop);
        }
        if (modes !== undefined && modes !== null) {
            queryParameters = queryParameters.set('modes', <any>modes);
        }
        if (statid !== undefined && statid !== null) {
            queryParameters = queryParameters.set('statid', <any>statid);
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

        return this.httpClient.get<InlineResponse20050>(`${this.configuration.basePath}/Destiny2/Stats/Leaderboards/${encodeURIComponent(String(membershipType))}/${encodeURIComponent(String(destinyMembershipId))}/${encodeURIComponent(String(characterId))}/`,
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
     * Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor&#39;s available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: &#39;It&#39;s a long story...&#39;
     * @param components A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public destiny2GetPublicVendors(components?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20044>;
    public destiny2GetPublicVendors(components?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20044>>;
    public destiny2GetPublicVendors(components?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20044>>;
    public destiny2GetPublicVendors(components?: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (components) {
            queryParameters = queryParameters.set('components', components.join(COLLECTION_FORMATS['csv']));
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

        return this.httpClient.get<InlineResponse20044>(`${this.configuration.basePath}/Destiny2/Vendors/`,
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
     * Insert a plug into a socketed item. I know how it sounds, but I assure you it&#39;s much more G-rated than you might be guessing. We haven&#39;t decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for &#39;InsertPlugs&#39; from the account owner.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public destiny2InsertSocketPlug(observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20047>;
    public destiny2InsertSocketPlug(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20047>>;
    public destiny2InsertSocketPlug(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20047>>;
    public destiny2InsertSocketPlug(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

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

        return this.httpClient.post<InlineResponse20047>(`${this.configuration.basePath}/Destiny2/Actions/Items/InsertSocketPlug/`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
