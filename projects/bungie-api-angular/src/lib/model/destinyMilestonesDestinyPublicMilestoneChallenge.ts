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


/**
 * A Milestone can have many Challenges. Challenges are just extra Objectives that provide a fun way to mix-up play and provide extra rewards.
 */
export interface DestinyMilestonesDestinyPublicMilestoneChallenge { 
    /**
     * The objective for the Challenge, which should have human-readable data about what needs to be done to accomplish the objective. Use this hash to look up the DestinyObjectiveDefinition.
     */
    objectiveHash?: number;
    /**
     * IF the Objective is related to a specific Activity, this will be that activity\'s hash. Use it to look up the DestinyActivityDefinition for additional data to show.
     */
    activityHash?: number;
}

