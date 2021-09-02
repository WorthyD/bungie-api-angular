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

/**
 * Represents whatever information we can return about an explicit phase in an activity. In the future, I hope we\'ll have more than just \"guh, you done gone and did something,\" but for the forseeable future that\'s all we\'ve got. I\'m making it more than just a list of booleans out of that overly-optimistic hope.
 */
export interface DestinyMilestonesDestinyMilestoneActivityPhase {
  /**
   * Indicates if the phase has been completed.
   */
  complete?: boolean;
  /**
   * In DestinyActivityDefinition, if the activity has phases, there will be a set of phases defined in the \"insertionPoints\" property. This is the hash that maps to that phase.
   */
  phaseHash?: number;
}
