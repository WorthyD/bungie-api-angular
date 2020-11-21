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
import { UserUserInfoCard } from './userUserInfoCard';


export interface DestinyHistoricalStatsDestinyPlayer { 
    /**
     * Details about the player as they are known in game (platform display name, Destiny emblem)
     */
    destinyUserInfo?: UserUserInfoCard;
    /**
     * Class of the character if applicable and available.
     */
    characterClass?: string;
    classHash?: number;
    raceHash?: number;
    genderHash?: number;
    /**
     * Level of the character if available. Zero if it is not available.
     */
    characterLevel?: number;
    /**
     * Light Level of the character if available. Zero if it is not available.
     */
    lightLevel?: number;
    /**
     * Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
     */
    bungieNetUserInfo?: UserUserInfoCard;
    /**
     * Current clan name for the player. This value may be null or an empty string if the user does not have a clan.
     */
    clanName?: string;
    /**
     * Current clan tag for the player. This value may be null or an empty string if the user does not have a clan.
     */
    clanTag?: string;
    /**
     * If we know the emblem's hash, this can be used to look up the player's emblem at the time of a match when receiving PGCR data, or otherwise their currently equipped emblem (if we are able to obtain it).
     */
    emblemHash?: number;
}

