/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.9.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * In addition to item quantity information for vendor prices, this also has any optional information that may exist about how the item's quantity can be modified. (unfortunately not information that is able to be read outside of the BNet servers, but it's there)
 */
export interface DestinyDefinitionsDestinyVendorItemQuantity { 
    /**
     * The hash identifier for the item in question. Use it to look up the item's DestinyInventoryItemDefinition.
     */
    itemHash?: number;
    /**
     * If this quantity is referring to a specific instance of an item, this will have the item's instance ID. Normally, this will be null.
     */
    itemInstanceId?: number;
    /**
     * The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.
     */
    quantity?: number;
}

