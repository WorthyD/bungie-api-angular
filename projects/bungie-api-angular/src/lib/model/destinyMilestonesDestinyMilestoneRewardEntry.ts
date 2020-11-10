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


/**
 * The character-specific data for a milestone's reward entry. See DestinyMilestoneDefinition for more information about Reward Entries.
 */
export interface DestinyMilestonesDestinyMilestoneRewardEntry { 
    /**
     * The identifier for the reward entry in question. It is important to look up the related DestinyMilestoneRewardEntryDefinition to get the static details about the reward, which you can do by looking up the milestone's DestinyMilestoneDefinition and examining the DestinyMilestoneDefinition.rewards[rewardCategoryHash].rewardEntries[rewardEntryHash] data.
     */
    rewardEntryHash?: number;
    /**
     * If TRUE, the player has earned this reward.
     */
    earned?: boolean;
    /**
     * If TRUE, the player has redeemed/picked up/obtained this reward. Feel free to alias this to \"gotTheShinyBauble\" in your own codebase.
     */
    redeemed?: boolean;
}

