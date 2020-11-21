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
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from './destinyHistoricalStatsDestinyHistoricalStatsValue';
import { DestinyHistoricalStatsDestinyPlayer } from './destinyHistoricalStatsDestinyPlayer';


export interface DestinyHistoricalStatsDestinyLeaderboardEntry { 
    /**
     * Where this player ranks on the leaderboard. A value of 1 is the top rank.
     */
    rank?: number;
    /**
     * Identity details of the player
     */
    player?: DestinyHistoricalStatsDestinyPlayer;
    /**
     * ID of the player's best character for the reported stat.
     */
    characterId?: number;
    /**
     * Value of the stat for this player
     */
    value?: DestinyHistoricalStatsDestinyHistoricalStatsValue;
}

