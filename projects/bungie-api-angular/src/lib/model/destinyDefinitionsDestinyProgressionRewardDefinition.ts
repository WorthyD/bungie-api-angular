/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Inventory Items can reward progression when actions are performed on them. A common example of this in Destiny 1 was Bounties, which would reward Experience on your Character and the like when you completed the bounty.  Note that this maps to a DestinyProgressionMappingDefinition, and *not* a DestinyProgressionDefinition directly. This is apparently so that multiple progressions can be granted progression points/experience at the same time.
 */
export interface DestinyDefinitionsDestinyProgressionRewardDefinition {
  /**
   * The hash identifier of the DestinyProgressionMappingDefinition that contains the progressions for which experience should be applied.
   */
  progressionMappingHash?: number;
  /**
   * The amount of experience to give to each of the mapped progressions.
   */
  amount?: number;
  /**
   * If true, the game\'s internal mechanisms to throttle progression should be applied.
   */
  applyThrottles?: boolean;
}
