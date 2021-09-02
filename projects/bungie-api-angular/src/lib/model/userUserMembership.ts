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
 * Very basic info about a user as returned by the Account server.
 */
export interface UserUserMembership {
  /**
   * Type of the membership. Not necessarily the native type.
   */
  membershipType?: number;
  /**
   * Membership ID as they user is known in the Accounts service
   */
  membershipId?: number;
  /**
   * Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
   */
  displayName?: string;
  /**
   * The bungie global display name, if set.
   */
  bungieGlobalDisplayName?: string;
  /**
   * The bungie global display name code, if set.
   */
  bungieGlobalDisplayNameCode?: number;
}
