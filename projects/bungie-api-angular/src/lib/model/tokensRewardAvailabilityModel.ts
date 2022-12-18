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
import { TokensCollectibleDefinitions } from './tokensCollectibleDefinitions';
import { DestinyDefinitionsRecordsDestinyRecordDefinition } from './destinyDefinitionsRecordsDestinyRecordDefinition';


export interface TokensRewardAvailabilityModel { 
    HasExistingCode?: boolean;
    RecordDefinitions?: Array<DestinyDefinitionsRecordsDestinyRecordDefinition>;
    CollectibleDefinitions?: Array<TokensCollectibleDefinitions>;
    IsOffer?: boolean;
    HasOffer?: boolean;
    OfferApplied?: boolean;
    DecryptedToken?: string;
    IsLoyaltyReward?: boolean;
    ShopifyEndDate?: string;
    GameEarnByDate?: string;
    RedemptionEndDate?: string;
}

