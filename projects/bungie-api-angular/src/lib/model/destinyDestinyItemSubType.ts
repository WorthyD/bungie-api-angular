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
 * This Enumeration further classifies items by more specific categorizations than DestinyItemType. The \"Sub-Type\" is where we classify and categorize items one step further in specificity: \"Auto Rifle\" instead of just \"Weapon\" for example, or \"Vanguard Bounty\" instead of merely \"Bounty\".  These sub-types are provided for historical compatibility with Destiny 1, but an ideal alternative is to use DestinyItemCategoryDefinitions and the DestinyItemDefinition.itemCategories property instead. Item Categories allow for arbitrary hierarchies of specificity, and for items to belong to multiple categories across multiple hierarchies simultaneously. For this enum, we pick a single type as a \"best guess\" fit.  NOTE: This is not all of the item types available, and some of these are holdovers from Destiny 1 that may or may not still exist.
 */
export type DestinyDestinyItemSubType =
  | 0
  | 1
  | 2
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33;

export const DestinyDestinyItemSubType = {
  NUMBER_0: 0 as DestinyDestinyItemSubType,
  NUMBER_1: 1 as DestinyDestinyItemSubType,
  NUMBER_2: 2 as DestinyDestinyItemSubType,
  NUMBER_5: 5 as DestinyDestinyItemSubType,
  NUMBER_6: 6 as DestinyDestinyItemSubType,
  NUMBER_7: 7 as DestinyDestinyItemSubType,
  NUMBER_8: 8 as DestinyDestinyItemSubType,
  NUMBER_9: 9 as DestinyDestinyItemSubType,
  NUMBER_10: 10 as DestinyDestinyItemSubType,
  NUMBER_11: 11 as DestinyDestinyItemSubType,
  NUMBER_12: 12 as DestinyDestinyItemSubType,
  NUMBER_13: 13 as DestinyDestinyItemSubType,
  NUMBER_14: 14 as DestinyDestinyItemSubType,
  NUMBER_16: 16 as DestinyDestinyItemSubType,
  NUMBER_17: 17 as DestinyDestinyItemSubType,
  NUMBER_18: 18 as DestinyDestinyItemSubType,
  NUMBER_19: 19 as DestinyDestinyItemSubType,
  NUMBER_20: 20 as DestinyDestinyItemSubType,
  NUMBER_21: 21 as DestinyDestinyItemSubType,
  NUMBER_22: 22 as DestinyDestinyItemSubType,
  NUMBER_23: 23 as DestinyDestinyItemSubType,
  NUMBER_24: 24 as DestinyDestinyItemSubType,
  NUMBER_25: 25 as DestinyDestinyItemSubType,
  NUMBER_26: 26 as DestinyDestinyItemSubType,
  NUMBER_27: 27 as DestinyDestinyItemSubType,
  NUMBER_28: 28 as DestinyDestinyItemSubType,
  NUMBER_29: 29 as DestinyDestinyItemSubType,
  NUMBER_30: 30 as DestinyDestinyItemSubType,
  NUMBER_31: 31 as DestinyDestinyItemSubType,
  NUMBER_32: 32 as DestinyDestinyItemSubType,
  NUMBER_33: 33 as DestinyDestinyItemSubType,
};
