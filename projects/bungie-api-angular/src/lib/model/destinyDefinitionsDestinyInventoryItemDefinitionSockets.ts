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
import { DestinyDefinitionsDestinyItemSocketBlockDefinition } from "./destinyDefinitionsDestinyItemSocketBlockDefinition";
import { DestinyDefinitionsDestinyItemIntrinsicSocketEntryDefinition } from "./destinyDefinitionsDestinyItemIntrinsicSocketEntryDefinition";
import { DestinyDefinitionsDestinyItemSocketEntryDefinition } from "./destinyDefinitionsDestinyItemSocketEntryDefinition";
import { DestinyDefinitionsDestinyItemSocketCategoryDefinition } from "./destinyDefinitionsDestinyItemSocketCategoryDefinition";

/**
 * If this item has any Sockets, this will be non-null and the individual sockets on the item will be defined herein.
 */
export interface DestinyDefinitionsDestinyInventoryItemDefinitionSockets {
  /**
   * This was supposed to be a string that would give per-item details about sockets. In practice, it turns out that all this ever has is the localized word \"details\". ... that\'s lame, but perhaps it will become something cool in the future.
   */
  detail?: string;
  /**
   * Each non-intrinsic (or mutable) socket on an item is defined here. Check inside for more info.
   */
  socketEntries?: Array<DestinyDefinitionsDestinyItemSocketEntryDefinition>;
  /**
   * Each intrinsic (or immutable/permanent) socket on an item is defined here, along with the plug that is permanently affixed to the socket.
   */
  intrinsicSockets?: Array<DestinyDefinitionsDestinyItemIntrinsicSocketEntryDefinition>;
  /**
   * A convenience property, that refers to the sockets in the \"sockets\" property, pre-grouped by category and ordered in the manner that they should be grouped in the UI. You could form this yourself with the existing data, but why would you want to? Enjoy life man.
   */
  socketCategories?: Array<DestinyDefinitionsDestinyItemSocketCategoryDefinition>;
}