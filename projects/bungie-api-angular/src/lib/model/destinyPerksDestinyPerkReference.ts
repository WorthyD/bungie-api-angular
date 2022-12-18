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
 * The list of perks to display in an item tooltip - and whether or not they have been activated.  Perks apply a variety of effects to a character, and are generally either intrinsic to the item or provided in activated talent nodes or sockets.
 */
export interface DestinyPerksDestinyPerkReference { 
    /**
     * The hash identifier for the perk, which can be used to look up DestinySandboxPerkDefinition if it exists. Be warned, perks frequently do not have user-viewable information. You should examine whether you actually found a name/description in the perk\'s definition before you show it to the user.
     */
    perkHash?: number;
    /**
     * The icon for the perk.
     */
    iconPath?: string;
    /**
     * Whether this perk is currently active. (We may return perks that you have not actually activated yet: these represent perks that you should show in the item\'s tooltip, but that the user has not yet activated.)
     */
    isActive?: boolean;
    /**
     * Some perks provide benefits, but aren\'t visible in the UI. This value will let you know if this is perk should be shown in your UI.
     */
    visible?: boolean;
}

