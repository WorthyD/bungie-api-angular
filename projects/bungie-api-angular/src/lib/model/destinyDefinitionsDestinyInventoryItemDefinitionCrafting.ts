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
import { DestinyDefinitionsDestinyItemCraftingBlockBonusPlugDefinition } from "./destinyDefinitionsDestinyItemCraftingBlockBonusPlugDefinition";
import { DestinyDefinitionsDestinyItemCraftingBlockDefinition } from "./destinyDefinitionsDestinyItemCraftingBlockDefinition";

/**
 * Recipe items will have relevant crafting information available here.
 */
export interface DestinyDefinitionsDestinyInventoryItemDefinitionCrafting {
  /**
   * A reference to the item definition that is created when crafting with this \'recipe\' item.
   */
  outputItemHash?: number;
  /**
   * A list of socket type hashes that describes which sockets are required for crafting with this recipe.
   */
  requiredSocketTypeHashes?: Array<number>;
  failedRequirementStrings?: Array<string>;
  /**
   * A reference to the base material requirements for crafting with this recipe.
   */
  baseMaterialRequirements?: number;
  /**
   * A list of \'bonus\' socket plugs that may be available if certain requirements are met.
   */
  bonusPlugs?: Array<DestinyDefinitionsDestinyItemCraftingBlockBonusPlugDefinition>;
}
