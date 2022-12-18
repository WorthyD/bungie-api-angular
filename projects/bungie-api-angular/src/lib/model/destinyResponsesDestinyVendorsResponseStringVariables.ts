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
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinyComponentsStringVariablesDestinyStringVariablesComponent";
import { SingleComponentResponseOfDestinyStringVariablesComponent } from "./singleComponentResponseOfDestinyStringVariablesComponent";

/**
 * A map of string variable values by hash for this character context.  COMPONENT TYPE: StringVariables
 */
export interface DestinyResponsesDestinyVendorsResponseStringVariables {
  data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;
  privacy?: number;
  /**
   * If true, this component is disabled.
   */
  disabled?: boolean;
}
