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
 * Provides common properties for destiny definitions.
 */
export interface DestinyDefinitionsDestinyDefinition {
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to.
   */
  hash?: number;
  /**
   * The index of the entity as it was found in the investment tables.
   */
  index?: number;
  /**
   * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
   */
  redacted?: boolean;
}