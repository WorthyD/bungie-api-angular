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
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyQuestsDestinyObjectiveProgress";

export interface DestinyComponentsItemsDestinyItemPlugObjectivesComponent {
  /**
   * This set of data is keyed by the Item Hash (DestinyInventoryItemDefinition) of the plug whose objectives are being returned, with the value being the list of those objectives.   What if two plugs with the same hash are returned for an item, you ask?   Good question! They share the same item-scoped state, and as such would have identical objective state as a result. How\'s that for convenient.   Sometimes, Plugs may have objectives: generally, these are used for flavor and display purposes. For instance, a Plug might be tracking the number of PVP kills you have made. It will use the parent item\'s data about that tracking status to determine what to show, and will generally show it using the DestinyObjectiveDefinition\'s progressDescription property. Refer to the plug\'s itemHash and objective property for more information if you would like to display even more data.
   */
  objectivesPerPlug?: {
    [key: string]: Array<DestinyQuestsDestinyObjectiveProgress>;
  };
}
