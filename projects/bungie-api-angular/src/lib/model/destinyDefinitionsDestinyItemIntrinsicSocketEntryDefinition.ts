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
 * Represents a socket that has a plug associated with it intrinsically. This is useful for situations where the weapon needs to have a visual plug/Mod on it, but that plug/Mod should never change.
 */
export interface DestinyDefinitionsDestinyItemIntrinsicSocketEntryDefinition {
  /**
   * Indicates the plug that is intrinsically inserted into this socket.
   */
  plugItemHash?: number;
  /**
   * Indicates the type of this intrinsic socket.
   */
  socketTypeHash?: number;
  /**
   * If true, then this socket is visible in the item\'s \"default\" state. If you have an instance, you should always check the runtime state, as that can override this visibility setting: but if you\'re looking at the item on a conceptual level, this property can be useful for hiding data such as legacy sockets - which remain defined on items for infrastructure purposes, but can be confusing for users to see.
   */
  defaultVisible?: boolean;
}
