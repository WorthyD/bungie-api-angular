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
 * This is some bare minimum information about a party member in a Fireteam. Unfortunately, without great computational expense on our side we can only get at the data contained here. I\'d like to give you a character ID for example, but we don\'t have it. But we do have these three pieces of information. May they help you on your quest to show meaningful data about current Fireteams.  Notably, we don\'t and can\'t feasibly return info on characters. If you can, try to use just the data below for your UI and purposes. Only hit us with further queries if you absolutely must know the character ID of the currently playing character. Pretty please with sugar on top.
 */
export interface DestinyComponentsProfilesDestinyProfileTransitoryPartyMember { 
    /**
     * The Membership ID that matches the party member.
     */
    membershipId?: number;
    /**
     * The identifier for the DestinyInventoryItemDefinition of the player\'s emblem.
     */
    emblemHash?: number;
    /**
     * The player\'s last known display name.
     */
    displayName?: string;
    /**
     * A Flags Enumeration value indicating the states that the player is in relevant to being on a fireteam.
     */
    status?: number;
}

