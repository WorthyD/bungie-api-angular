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
import { DestinyComponentsPlugSetsDestinyPlugSetsComponent } from "./destinyComponentsPlugSetsDestinyPlugSetsComponent";
import { SingleComponentResponseOfDestinyPlugSetsComponent } from "./singleComponentResponseOfDestinyPlugSetsComponent";

/**
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are profile-scoped.  This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.  COMPONENT TYPE: ItemSockets
 */
export interface DestinyResponsesDestinyProfileResponseProfilePlugSets {
  data?: DestinyComponentsPlugSetsDestinyPlugSetsComponent;
  privacy?: number;
  /**
   * If true, this component is disabled.
   */
  disabled?: boolean;
}
