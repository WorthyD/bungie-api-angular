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
import { DestinyMilestonesDestinyMilestoneRewardEntry } from './destinyMilestonesDestinyMilestoneRewardEntry';


/**
 * Represents a category of \"summary\" rewards that can be earned for the Milestone regardless of specific quest rewards that can be earned.
 */
export interface DestinyMilestonesDestinyMilestoneRewardCategory { 
    /**
     * Look up the relevant DestinyMilestoneDefinition, and then use rewardCategoryHash to look up the category info in DestinyMilestoneDefinition.rewards.
     */
    rewardCategoryHash?: number;
    /**
     * The individual reward entries for this category, and their status.
     */
    entries?: Array<DestinyMilestonesDestinyMilestoneRewardEntry>;
}

