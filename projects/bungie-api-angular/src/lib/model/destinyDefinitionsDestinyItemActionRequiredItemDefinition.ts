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
 * The definition of an item and quantity required in a character\'s inventory in order to perform an action.
 */
export interface DestinyDefinitionsDestinyItemActionRequiredItemDefinition { 
    /**
     * The minimum quantity of the item you have to have.
     */
    count?: number;
    /**
     * The hash identifier of the item you need to have. Use it to look up the DestinyInventoryItemDefinition for more info.
     */
    itemHash?: number;
    /**
     * If true, the item/quantity will be deleted from your inventory when the action is performed. Otherwise, you\'ll retain these required items after the action is complete.
     */
    deleteOnAction?: boolean;
}

