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
import { DestinyChallengesDestinyChallengeStatus } from './destinyChallengesDestinyChallengeStatus';
import { DestinyMilestonesDestinyMilestoneActivity } from './destinyMilestonesDestinyMilestoneActivity';
import { DestinyQuestsDestinyQuestStatus } from './destinyQuestsDestinyQuestStatus';


/**
 * If a Milestone has one or more Quests, this will contain the live information for the character's status with one of those quests.
 */
export interface DestinyMilestonesDestinyMilestoneQuest { 
    /**
     * Quests are defined as Items in content. As such, this is the hash identifier of the DestinyInventoryItemDefinition that represents this quest. It will have pointers to all of the steps in the quest, and display information for the quest (title, description, icon etc) Individual steps will be referred to in the Quest item's DestinyInventoryItemDefinition.setData property, and themselves are Items with their own renderable data.
     */
    questItemHash?: number;
    /**
     * The current status of the quest for the character making the request.
     */
    status?: DestinyQuestsDestinyQuestStatus;
    /**
     * *IF* the Milestone has an active Activity that can give you greater details about what you need to do, it will be returned here. Remember to associate this with the DestinyMilestoneDefinition's activities to get details about the activity, including what specific quest it is related to if you have multiple quests to choose from.
     */
    activity?: DestinyMilestonesDestinyMilestoneActivity;
    /**
     * The activities referred to by this quest can have many associated challenges. They are all contained here, with activityHashes so that you can associate them with the specific activity variants in which they can be found. In retrospect, I probably should have put these under the specific Activity Variants, but it's too late to change it now. Theoretically, a quest without Activities can still have Challenges, which is why this is on a higher level than activity/variants, but it probably should have been in both places. That may come as a later revision.
     */
    challenges?: Array<DestinyChallengesDestinyChallengeStatus>;
}
