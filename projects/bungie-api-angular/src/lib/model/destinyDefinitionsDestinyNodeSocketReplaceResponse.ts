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
 * This is a bit of an odd duck. Apparently, if talent nodes steps have this data, the game will go through on step activation and alter the first Socket it finds on the item that has a type matching the given socket type, inserting the indicated plug item.
 */
export interface DestinyDefinitionsDestinyNodeSocketReplaceResponse { 
    /**
     * The hash identifier of the socket type to find amidst the item's sockets (the item to which this talent grid is attached). See DestinyInventoryItemDefinition.sockets.socketEntries to find the socket type of sockets on the item in question.
     */
    socketTypeHash?: number;
    /**
     * The hash identifier of the plug item that will be inserted into the socket found.
     */
    plugItemHash?: number;
}

