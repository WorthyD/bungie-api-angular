/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Represents all of the data related to a single plug to be inserted.  Note that, while you *can* point to a socket that represents infusion, you will receive an error if you attempt to do so. Come on guys, let's play nice.
 */
export interface DestinyRequestsActionsDestinyInsertPlugsRequestEntry { 
    /**
     * The index into the socket array, which identifies the specific socket being operated on. We also need to know the socketArrayType in order to uniquely identify the socket.  Don't point to or try to insert a plug into an infusion socket. It won't work.
     */
    socketIndex?: number;
    /**
     * This property, combined with the socketIndex, tells us which socket we are referring to (since operations can be performed on both Intrinsic and \"default\" sockets, and they occupy different arrays in the Inventory Item Definition). I know, I know. Don't give me that look.
     */
    socketArrayType?: number;
    /**
     * Plugs are never instanced (except in infusion). So with the hash alone, we should be able to: 1) Infer whether the player actually needs to have the item, or if it's a reusable plug 2) Perform any operation needed to use the Plug, including removing the plug item and running reward sheets.
     */
    plugItemHash?: number;
}

