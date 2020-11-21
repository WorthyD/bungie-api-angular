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


export interface CommonModelsDestiny2CoreSettings { 
    collectionRootNode?: number;
    badgesRootNode?: number;
    recordsRootNode?: number;
    medalsRootNode?: number;
    metricsRootNode?: number;
    activeTriumphsRootNodeHash?: number;
    activeSealsRootNodeHash?: number;
    legacyTriumphsRootNodeHash?: number;
    legacySealsRootNodeHash?: number;
    medalsRootNodeHash?: number;
    exoticCatalystsRootNodeHash?: number;
    loreRootNodeHash?: number;
    currentRankProgressionHashes?: Array<number>;
    undiscoveredCollectibleImage?: string;
    ammoTypeHeavyIcon?: string;
    ammoTypeSpecialIcon?: string;
    ammoTypePrimaryIcon?: string;
    currentSeasonalArtifactHash?: number;
    currentSeasonHash?: number;
    futureSeasonHashes?: Array<number>;
    pastSeasonHashes?: Array<number>;
}

