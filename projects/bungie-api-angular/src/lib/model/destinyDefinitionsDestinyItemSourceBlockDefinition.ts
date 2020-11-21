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
import { DestinyDefinitionsDestinyItemVendorSourceReference } from './destinyDefinitionsDestinyItemVendorSourceReference';
import { DestinyDefinitionsSourcesDestinyItemSourceDefinition } from './destinyDefinitionsSourcesDestinyItemSourceDefinition';


/**
 * Data about an item's \"sources\": ways that the item can be obtained.
 */
export interface DestinyDefinitionsDestinyItemSourceBlockDefinition { 
    /**
     * The list of hash identifiers for Reward Sources that hint where the item can be found (DestinyRewardSourceDefinition).
     */
    sourceHashes?: Array<number>;
    /**
     * A collection of details about the stats that were computed for the ways we found that the item could be spawned.
     */
    sources?: Array<DestinyDefinitionsSourcesDestinyItemSourceDefinition>;
    /**
     * If we found that this item is exclusive to a specific platform, this will be set to the BungieMembershipType enumeration that matches that platform.
     */
    exclusive?: number;
    /**
     * A denormalized reference back to vendors that potentially sell this item.
     */
    vendorSources?: Array<DestinyDefinitionsDestinyItemVendorSourceReference>;
}

