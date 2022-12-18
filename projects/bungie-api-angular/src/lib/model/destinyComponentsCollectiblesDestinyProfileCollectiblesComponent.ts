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
import { DestinyComponentsCollectiblesDestinyCollectibleComponent } from "./destinyComponentsCollectiblesDestinyCollectibleComponent";

export interface DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent {
  /**
   * The list of collectibles determined by the game as having been \"recently\" acquired.
   */
  recentCollectibleHashes?: Array<number>;
  /**
   * The list of collectibles determined by the game as having been \"recently\" acquired.  The game client itself actually controls this data, so I personally question whether anyone will get much use out of this: because we can\'t edit this value through the API. But in case anyone finds it useful, here it is.
   */
  newnessFlaggedCollectibleHashes?: Array<number>;
  collectibles?: {
    [key: string]: DestinyComponentsCollectiblesDestinyCollectibleComponent;
  };
  /**
   * The hash for the root presentation node definition of Collection categories.
   */
  collectionCategoriesRootNodeHash?: number;
  /**
   * The hash for the root presentation node definition of Collection Badges.
   */
  collectionBadgesRootNodeHash?: number;
}
