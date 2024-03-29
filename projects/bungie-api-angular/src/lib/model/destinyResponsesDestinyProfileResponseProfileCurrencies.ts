/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SingleComponentResponseOfDestinyInventoryComponent } from './singleComponentResponseOfDestinyInventoryComponent';
import { DestinyEntitiesInventoryDestinyInventoryComponent } from './destinyEntitiesInventoryDestinyInventoryComponent';


/**
 * The profile-level currencies owned by the Destiny Profile.  COMPONENT TYPE: ProfileCurrencies
 */
export interface DestinyResponsesDestinyProfileResponseProfileCurrencies { 
    data?: DestinyEntitiesInventoryDestinyInventoryComponent;
    privacy?: number;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
}

