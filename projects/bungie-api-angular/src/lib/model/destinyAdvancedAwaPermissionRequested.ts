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

export interface DestinyAdvancedAwaPermissionRequested {
  /**
   * Type of advanced write action.
   */
  type?: number;
  /**
   * Item instance ID the action shall be applied to. This is optional for all but a new AwaType values. Rule of thumb is to provide the item instance ID if one is available.
   */
  affectedItemId?: number;
  /**
   * Destiny membership type of the account to modify.
   */
  membershipType?: number;
  /**
   * Destiny character ID, if applicable, that will be affected by the action.
   */
  characterId?: number;
}
