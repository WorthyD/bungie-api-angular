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
import { DestinyPerksDestinyPerkReference } from './destinyPerksDestinyPerkReference';


/**
 * Instanced items can have perks: benefits that the item bestows.  These are related to DestinySandboxPerkDefinition, and sometimes - but not always - have human readable info. When they do, they are the icons and text that you see in an item\'s tooltip.  Talent Grids, Sockets, and the item itself can apply Perks, which are then summarized here for your convenience.
 */
export interface DestinyEntitiesItemsDestinyItemPerksComponent { 
    /**
     * The list of perks to display in an item tooltip - and whether or not they have been activated.
     */
    perks?: Array<DestinyPerksDestinyPerkReference>;
}

