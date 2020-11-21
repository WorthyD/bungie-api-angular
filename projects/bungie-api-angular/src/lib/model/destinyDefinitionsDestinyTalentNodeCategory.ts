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
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from './destinyDefinitionsCommonDestinyDisplayPropertiesDefinition';


/**
 * An artificial construct provided by Bungie.Net, where we attempt to group talent nodes by functionality.  This is a single set of references to Talent Nodes that share a common trait or purpose.
 */
export interface DestinyDefinitionsDestinyTalentNodeCategory { 
    /**
     * Mostly just for debug purposes, but if you find it useful you can have it. This is BNet's manually created identifier for this category.
     */
    identifier?: string;
    /**
     * If true, we found the localized content in a related DestinyLoreDefinition instead of local BNet localization files. This is mostly for ease of my own future investigations.
     */
    isLoreDriven?: boolean;
    /**
     * Will contain at least the \"name\", which will be the title of the category. We will likely not have description and an icon yet, but I'm going to keep my options open.
     */
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * The set of all hash identifiers for Talent Nodes (DestinyTalentNodeDefinition) in this Talent Grid that are part of this Category.
     */
    nodeHashes?: Array<number>;
}

