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
import { DestinyHistoricalStatsDestinyHistoricalWeaponStats } from './destinyHistoricalStatsDestinyHistoricalWeaponStats';


export interface DestinyHistoricalStatsDestinyPostGameCarnageReportExtendedData { 
    /**
     * List of weapons and their perspective values.
     */
    weapons?: Array<DestinyHistoricalStatsDestinyHistoricalWeaponStats>;
    /**
     * Collection of stats for the player in this activity.
     */
    values?: { [key: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue; };
}

