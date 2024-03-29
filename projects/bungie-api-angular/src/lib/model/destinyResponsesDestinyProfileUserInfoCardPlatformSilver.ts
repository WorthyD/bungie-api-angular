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
import { DestinyComponentsInventoryDestinyPlatformSilverComponent } from './destinyComponentsInventoryDestinyPlatformSilverComponent';
import { DestinyEntitiesItemsDestinyItemComponent } from './destinyEntitiesItemsDestinyItemComponent';


/**
 * This is the silver available on this Profile across any platforms on which they have purchased silver.   This is only available if you are requesting yourself.
 */
export interface DestinyResponsesDestinyProfileUserInfoCardPlatformSilver { 
    /**
     * If a Profile is played on multiple platforms, this is the silver they have for each platform, keyed by Membership Type.
     */
    platformSilver?: { [key: string]: DestinyEntitiesItemsDestinyItemComponent; };
}

