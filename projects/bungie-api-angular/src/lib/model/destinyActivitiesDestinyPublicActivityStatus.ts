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
import { DestinyDestinyItemQuantity } from './destinyDestinyItemQuantity';


/**
 * Represents the public-facing status of an activity: any data about what is currently active in the Activity, regardless of an individual character\'s progress in it.
 */
export interface DestinyActivitiesDestinyPublicActivityStatus { 
    /**
     * Active Challenges for the activity, if any - represented as hashes for DestinyObjectiveDefinitions.
     */
    challengeObjectiveHashes?: Array<number>;
    /**
     * The active modifiers on this activity, if any - represented as hashes for DestinyActivityModifierDefinitions.
     */
    modifierHashes?: Array<number>;
    /**
     * If the activity itself provides any specific \"mock\" rewards, this will be the items and their quantity.  Why \"mock\", you ask? Because these are the rewards as they are represented in the tooltip of the Activity.  These are often pointers to fake items that look good in a tooltip, but represent an abstract concept of what you will get for a reward rather than the specific items you may obtain.
     */
    rewardTooltipItems?: Array<DestinyDestinyItemQuantity>;
}

