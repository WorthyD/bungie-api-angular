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


/**
 * Information about a single inventory bucket in a vendor flyout UI and how it is shown.
 */
export interface DestinyDefinitionsDestinyVendorInventoryFlyoutBucketDefinition { 
    /**
     * If true, the inventory bucket should be able to be collapsed visually.
     */
    collapsible?: boolean;
    /**
     * The inventory bucket whose contents should be shown.
     */
    inventoryBucketHash?: number;
    /**
     * The methodology to use for sorting items from the flyout.
     */
    sortItemsBy?: number;
}

