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
import { DestinyDefinitionsMilestonesDestinyMilestoneQuestRewardItem } from './destinyDefinitionsMilestonesDestinyMilestoneQuestRewardItem';
import { DestinyDefinitionsMilestonesDestinyMilestoneQuestRewardsDefinition } from './destinyDefinitionsMilestonesDestinyMilestoneQuestRewardsDefinition';


/**
 * The rewards you will get for completing this quest, as best as we could extract them from our data. Sometimes, it\'ll be a decent amount of data. Sometimes, it\'s going to be sucky. Sorry.
 */
export interface DestinyDefinitionsMilestonesDestinyMilestoneQuestDefinitionQuestRewards { 
    /**
     * The items that represent your reward for completing the quest.  Be warned, these could be \"dummy\" items: items that are only used to render a good-looking in-game tooltip, but aren\'t the actual items themselves.  For instance, when experience is given there\'s often a dummy item representing \"experience\", with quantity being the amount of experience you got. We don\'t have a programmatic association between those and whatever Progression is actually getting that experience... yet.
     */
    items?: Array<DestinyDefinitionsMilestonesDestinyMilestoneQuestRewardItem>;
}

