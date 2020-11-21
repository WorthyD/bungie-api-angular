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
import { DestinyQuestsDestinyObjectiveProgress } from './destinyQuestsDestinyObjectiveProgress';


/**
 * Items can have objectives and progression. When you request this block, you will obtain information about any Objectives and progression tied to this item.
 */
export interface DestinyEntitiesItemsDestinyItemObjectivesComponent { 
    /**
     * If the item has a hard association with objectives, your progress on them will be defined here.   Objectives are our standard way to describe a series of tasks that have to be completed for a reward.
     */
    objectives?: Array<DestinyQuestsDestinyObjectiveProgress>;
    /**
     * I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for \"flavor\" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
     */
    flavorObjective?: DestinyQuestsDestinyObjectiveProgress;
    /**
     * If we have any information on when these objectives were completed, this will be the date of that completion. This won't be on many items, but could be interesting for some items that do store this information.
     */
    dateCompleted?: Date;
}

