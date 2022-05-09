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
 * The various known UI styles in which an item can be highlighted. It\'ll be up to you to determine what you want to show based on this highlighting, BNet doesn\'t have any assets that correspond to these states. And yeah, RiseOfIron and Comet have their own special highlight states. Don\'t ask me, I can\'t imagine they\'re still used.
 */
export type DestinyActivityGraphNodeHighlightType = 0 | 1 | 2 | 3 | 4;

export const DestinyActivityGraphNodeHighlightType = {
  NUMBER_0: 0 as DestinyActivityGraphNodeHighlightType,
  NUMBER_1: 1 as DestinyActivityGraphNodeHighlightType,
  NUMBER_2: 2 as DestinyActivityGraphNodeHighlightType,
  NUMBER_3: 3 as DestinyActivityGraphNodeHighlightType,
  NUMBER_4: 4 as DestinyActivityGraphNodeHighlightType
};