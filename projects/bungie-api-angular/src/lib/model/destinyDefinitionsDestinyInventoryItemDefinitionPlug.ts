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
import { DestinyDefinitionsItemsDestinyItemPlugDefinitionEnergyCapacity } from "./destinyDefinitionsItemsDestinyItemPlugDefinitionEnergyCapacity";
import { DestinyDefinitionsItemsDestinyItemPlugDefinitionEnergyCost } from "./destinyDefinitionsItemsDestinyItemPlugDefinitionEnergyCost";
import { DestinyDefinitionsItemsDestinyPlugRuleDefinition } from "./destinyDefinitionsItemsDestinyPlugRuleDefinition";
import { DestinyDefinitionsItemsDestinyItemPlugDefinition } from "./destinyDefinitionsItemsDestinyItemPlugDefinition";
import { DestinyDefinitionsItemsDestinyItemPlugDefinitionParentItemOverride } from "./destinyDefinitionsItemsDestinyItemPlugDefinitionParentItemOverride";

/**
 * If this item *is* a Plug, this will be non-null and the info defined herein. See DestinyItemPlugDefinition for more information.
 */
export interface DestinyDefinitionsDestinyInventoryItemDefinitionPlug {
  /**
   * The rules around when this plug can be inserted into a socket, aside from the socket\'s individual restrictions.  The live data DestinyItemPlugComponent.insertFailIndexes will be an index into this array, so you can pull out the failure strings appropriate for the user.
   */
  insertionRules?: Array<DestinyDefinitionsItemsDestinyPlugRuleDefinition>;
  /**
   * The string identifier for the plug\'s category. Use the socket\'s DestinySocketTypeDefinition.plugWhitelist to determine whether this plug can be inserted into the socket.
   */
  plugCategoryIdentifier?: string;
  /**
   * The hash for the plugCategoryIdentifier. You can use this instead if you wish: I put both in the definition for debugging purposes.
   */
  plugCategoryHash?: number;
  /**
   * If you successfully socket the item, this will determine whether or not you get \"refunded\" on the plug.
   */
  onActionRecreateSelf?: boolean;
  /**
   * If inserting this plug requires materials, this is the hash identifier for looking up the DestinyMaterialRequirementSetDefinition for those requirements.
   */
  insertionMaterialRequirementHash?: number;
  /**
   * In the game, if you\'re inspecting a plug item directly, this will be the item shown with the plug attached. Look up the DestinyInventoryItemDefinition for this hash for the item.
   */
  previewItemOverrideHash?: number;
  /**
   * It\'s not enough for the plug to be inserted. It has to be enabled as well. For it to be enabled, it may require materials. This is the hash identifier for the DestinyMaterialRequirementSetDefinition for those requirements, if there is one.
   */
  enabledMaterialRequirementHash?: number;
  /**
   * The rules around whether the plug, once inserted, is enabled and providing its benefits.  The live data DestinyItemPlugComponent.enableFailIndexes will be an index into this array, so you can pull out the failure strings appropriate for the user.
   */
  enabledRules?: Array<DestinyDefinitionsItemsDestinyPlugRuleDefinition>;
  /**
   * Plugs can have arbitrary, UI-defined identifiers that the UI designers use to determine the style applied to plugs. Unfortunately, we have neither a definitive list of these labels nor advance warning of when new labels might be applied or how that relates to how they get rendered. If you want to, you can refer to known labels to change your own styles: but know that new ones can be created arbitrarily, and we have no way of associating the labels with any specific UI style guidance... you\'ll have to piece that together on your end. Or do what we do, and just show plugs more generically, without specialized styles.
   */
  uiPlugLabel?: string;
  plugStyle?: number;
  /**
   * Indicates the rules about when this plug can be used. See the PlugAvailabilityMode enumeration for more information!
   */
  plugAvailability?: number;
  /**
   * If the plug meets certain state requirements, it may have an alternative label applied to it. This is the alternative label that will be applied in such a situation.
   */
  alternateUiPlugLabel?: string;
  /**
   * The alternate plug of the plug: only applies when the item is in states that only the server can know about and control, unfortunately. See AlternateUiPlugLabel for the related label info.
   */
  alternatePlugStyle?: number;
  /**
   * If TRUE, this plug is used for UI display purposes only, and doesn\'t have any interesting effects of its own.
   */
  isDummyPlug?: boolean;
  parentItemOverride?: DestinyDefinitionsItemsDestinyItemPlugDefinitionParentItemOverride;
  energyCapacity?: DestinyDefinitionsItemsDestinyItemPlugDefinitionEnergyCapacity;
  energyCost?: DestinyDefinitionsItemsDestinyItemPlugDefinitionEnergyCost;
}