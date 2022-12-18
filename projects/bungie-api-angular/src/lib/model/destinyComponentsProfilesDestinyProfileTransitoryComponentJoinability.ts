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
import { DestinyComponentsProfilesDestinyProfileTransitoryJoinability } from './destinyComponentsProfilesDestinyProfileTransitoryJoinability';


/**
 * Information about whether and what might prevent you from joining this person on a fireteam.
 */
export interface DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability { 
    /**
     * The number of slots still available on this person\'s fireteam.
     */
    openSlots?: number;
    /**
     * Who the person is currently allowing invites from.
     */
    privacySetting?: number;
    /**
     * Reasons why a person can\'t join this person\'s fireteam.
     */
    closedReasons?: number;
}

