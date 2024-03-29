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
 * Items can have Energy Capacity, and plugs can provide that capacity such as on a piece of Armor in Armor 2.0. This is how much \"Energy\" can be spent on activating plugs for this item.
 */
export interface DestinyDefinitionsItemsDestinyEnergyCapacityEntry { 
    /**
     * How much energy capacity this plug provides.
     */
    capacityValue?: number;
    /**
     * Energy provided by a plug is always of a specific type - this is the hash identifier for the energy type for which it provides Capacity.
     */
    energyTypeHash?: number;
    /**
     * The Energy Type for this energy capacity, in enum form for easy use.
     */
    energyType?: number;
}

