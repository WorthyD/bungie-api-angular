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
 * Information about matchmaking and party size for the activity.
 */
export interface DestinyDefinitionsDestinyActivityMatchmakingBlockDefinition { 
    /**
     * If TRUE, the activity is matchmade. Otherwise, it requires explicit forming of a party.
     */
    isMatchmade?: boolean;
    /**
     * The minimum # of people in the fireteam for the activity to launch.
     */
    minParty?: number;
    /**
     * The maximum # of people allowed in a Fireteam.
     */
    maxParty?: number;
    /**
     * The maximum # of people allowed across all teams in the activity.
     */
    maxPlayers?: number;
    /**
     * If true, you have to Solemnly Swear to be up to Nothing But Good(tm) to play.
     */
    requiresGuardianOath?: boolean;
}

