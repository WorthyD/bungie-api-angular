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
import { DestinyEntitiesProfilesDestinyProfileComponentUserInfo } from './destinyEntitiesProfilesDestinyProfileComponentUserInfo';


/**
 * The most essential summary information about a Profile (in Destiny 1, we called these \"Accounts\").
 */
export interface DestinyEntitiesProfilesDestinyProfileComponent { 
    userInfo?: DestinyEntitiesProfilesDestinyProfileComponentUserInfo;
    /**
     * The last time the user played with any character on this Profile.
     */
    dateLastPlayed?: string;
    /**
     * If you want to know what expansions they own, this will contain that data.   IMPORTANT: This field may not return the data you\'re interested in for Cross-Saved users. It returns the last ownership data we saw for this account - which is to say, what they\'ve purchased on the platform on which they last played, which now could be a different platform.   If you don\'t care about per-platform ownership and only care about whatever platform it seems they are playing on most recently, then this should be \"good enough.\" Otherwise, this should be considered deprecated. We do not have a good alternative to provide at this time with platform specific ownership data for DLC.
     */
    versionsOwned?: number;
    /**
     * A list of the character IDs, for further querying on your part.
     */
    characterIds?: Array<number>;
    /**
     * A list of seasons that this profile owns. Unlike versionsOwned, these stay with the profile across Platforms, and thus will be valid.   It turns out that Stadia Pro subscriptions will give access to seasons but only while playing on Stadia and with an active subscription. So some users (users who have Stadia Pro but choose to play on some other platform) won\'t see these as available: it will be whatever seasons are available for the platform on which they last played.
     */
    seasonHashes?: Array<number>;
    /**
     * A list of hashes for event cards that a profile owns. Unlike most values in versionsOwned, these stay with the profile across all platforms.
     */
    eventCardHashesOwned?: Array<number>;
    /**
     * If populated, this is a reference to the season that is currently active.
     */
    currentSeasonHash?: number;
    /**
     * If populated, this is the reward power cap for the current season.
     */
    currentSeasonRewardPowerCap?: number;
    /**
     * If populated, this is a reference to the event card that is currently active.
     */
    activeEventCardHash?: number;
}

