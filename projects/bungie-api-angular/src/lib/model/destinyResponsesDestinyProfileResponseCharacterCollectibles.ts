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
import { DestinyComponentsCollectiblesDestinyCollectiblesComponent } from "./destinyComponentsCollectiblesDestinyCollectiblesComponent";
import { DictionaryComponentResponseOfint64AndDestinyCollectiblesComponent } from "./dictionaryComponentResponseOfint64AndDestinyCollectiblesComponent";

/**
 * COMPONENT TYPE: Collectibles
 */
export interface DestinyResponsesDestinyProfileResponseCharacterCollectibles {
  data?: {
    [key: string]: DestinyComponentsCollectiblesDestinyCollectiblesComponent;
  };
  privacy?: number;
  /**
   * If true, this component is disabled.
   */
  disabled?: boolean;
}