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
import { DestinyMilestonesDestinyMilestoneContent } from './destinyMilestonesDestinyMilestoneContent';


export interface InlineResponse20058 { 
    Response?: DestinyMilestonesDestinyMilestoneContent;
    message?: string;
    messageData?: { [key: string]: string; };
    errorStatus?: string;
    throttleSeconds?: number;
    detailedErrorTrace?: string;
    errorCode?: number;
}

