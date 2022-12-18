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
import { DestinyDefinitionsSocketsDestinyInsertPlugActionDefinition } from "./destinyDefinitionsSocketsDestinyInsertPlugActionDefinition";

/**
 * Defines what happens when a plug is inserted into sockets of this type.
 */
export interface DestinyDefinitionsSocketsDestinySocketTypeDefinitionInsertAction {
  /**
   * How long it takes for the Plugging of the item to be completed once it is initiated, if you care.
   */
  actionExecuteSeconds?: number;
  /**
   * The type of action being performed when you act on this Socket Type. The most common value is \"insert plug\", but there are others as well (for instance, a \"Masterwork\" socket may allow for Re-initialization, and an Infusion socket allows for items to be consumed to upgrade the item)
   */
  actionType?: number;
}
