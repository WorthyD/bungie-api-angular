/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { { [key: string]: DestinyHistoricalStatsDestinyLeaderboard; } } from './keyStringDestinyHistoricalStatsDestinyLeaderboard';


export interface DestinyHistoricalStatsDestinyLeaderboardResults { 
  [key: string]: { [key: string]: DestinyHistoricalStatsDestinyLeaderboard; } | any;


    /**
     * Indicate the membership ID of the account that is the focal point of the provided leaderboards.
     */
    focusMembershipId?: number;
    /**
     * Indicate the character ID of the character that is the focal point of the provided leaderboards. May be null, in which case any character from the focus membership can appear in the provided leaderboards.
     */
    focusCharacterId?: number;
}

