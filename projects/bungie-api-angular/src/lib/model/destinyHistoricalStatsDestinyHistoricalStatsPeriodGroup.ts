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
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from './destinyHistoricalStatsDestinyHistoricalStatsValue';
import { DestinyHistoricalStatsDestinyHistoricalStatsActivity } from './destinyHistoricalStatsDestinyHistoricalStatsActivity';


export interface DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup { 
    /**
     * Period for the group. If the stat periodType is day, then this will have a specific day. If the type is monthly, then this value will be the first day of the applicable month. This value is not set when the periodType is \'all time\'.
     */
    period?: string;
    /**
     * If the period group is for a specific activity, this property will be set.
     */
    activityDetails?: DestinyHistoricalStatsDestinyHistoricalStatsActivity;
    /**
     * Collection of stats for the period.
     */
    values?: { [key: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue; };
}

