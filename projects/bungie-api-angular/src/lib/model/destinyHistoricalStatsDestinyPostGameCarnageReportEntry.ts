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
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from './destinyHistoricalStatsDestinyHistoricalStatsValue';
import { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended } from './destinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended';
import { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer } from './destinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer';
import { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore } from './destinyHistoricalStatsDestinyPostGameCarnageReportEntryScore';


export interface DestinyHistoricalStatsDestinyPostGameCarnageReportEntry { 
    /**
     * Standing of the player
     */
    standing?: number;
    score?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore;
    player?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer;
    /**
     * ID of the player\'s character used in the activity.
     */
    characterId?: number;
    /**
     * Collection of stats for the player in this activity.
     */
    values?: { [key: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue; };
    extended?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended;
}

