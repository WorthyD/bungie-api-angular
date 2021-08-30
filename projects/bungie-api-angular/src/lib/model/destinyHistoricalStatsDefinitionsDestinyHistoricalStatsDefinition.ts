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


export interface DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition { 
    /**
     * Unique programmer friendly ID for this stat
     */
    statId?: string;
    /**
     * Statistic group
     */
    group?: number;
    /**
     * Time periods the statistic covers
     */
    periodTypes?: Array<number>;
    /**
     * Game modes where this statistic can be reported.
     */
    modes?: Array<number>;
    /**
     * Category for the stat.
     */
    category?: number;
    /**
     * Display name
     */
    statName?: string;
    /**
     * Display name abbreviated
     */
    statNameAbbr?: string;
    /**
     * Description of a stat if applicable.
     */
    statDescription?: string;
    /**
     * Unit, if any, for the statistic
     */
    unitType?: number;
    /**
     * Optional URI to an icon for the statistic
     */
    iconImage?: string;
    /**
     * Optional icon for the statistic
     */
    mergeMethod?: DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition.MergeMethodEnum;
    /**
     * Localized Unit Name for the stat.
     */
    unitLabel?: string;
    /**
     * Weight assigned to this stat indicating its relative impressiveness.
     */
    weight?: number;
    /**
     * The tier associated with this medal - be it implicitly or explicitly.
     */
    medalTierHash?: number;
}
export namespace DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition {
    export type MergeMethodEnum = 0 | 1 | 2;
    export const MergeMethodEnum = {
        NUMBER_0: 0 as MergeMethodEnum,
        NUMBER_1: 1 as MergeMethodEnum,
        NUMBER_2: 2 as MergeMethodEnum
    };
}


