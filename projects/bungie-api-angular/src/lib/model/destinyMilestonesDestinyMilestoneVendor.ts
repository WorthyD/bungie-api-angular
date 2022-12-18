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
 * If a Milestone has one or more Vendors that are relevant to it, this will contain information about that vendor that you can choose to show.
 */
export interface DestinyMilestonesDestinyMilestoneVendor {
  /**
   * The hash identifier of the Vendor related to this Milestone. You can show useful things from this, such as thier Faction icon or whatever you might care about.
   */
  vendorHash?: number;
  /**
   * If this vendor is featuring a specific item for this event, this will be the hash identifier of that item. I\'m taking bets now on how long we go before this needs to be a list or some other, more complex representation instead and I deprecate this too. I\'m going to go with 5 months. Calling it now, 2017-09-14 at 9:46pm PST.
   */
  previewItemHash?: number;
}
