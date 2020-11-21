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
 * Defines a particular entry in an ItemSet (AKA a particular Quest Step in a Quest)
 */
export interface DestinyDefinitionsDestinyItemSetBlockEntryDefinition { 
    /**
     * Used for tracking which step a user reached. These values will be populated in the user's internal state, which we expose externally as a more usable DestinyQuestStatus object. If this item has been obtained, this value will be set in trackingUnlockValueHash.
     */
    trackingValue?: number;
    /**
     * This is the hash identifier for a DestinyInventoryItemDefinition representing this quest step.
     */
    itemHash?: number;
}

