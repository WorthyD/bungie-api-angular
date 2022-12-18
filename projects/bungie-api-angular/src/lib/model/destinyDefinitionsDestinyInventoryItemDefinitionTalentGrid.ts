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
import { DestinyDefinitionsDestinyItemTalentGridBlockDefinition } from './destinyDefinitionsDestinyItemTalentGridBlockDefinition';


/**
 * If the item has a Talent Grid, this will be non-null and the properties of the grid defined herein. Note that, while many items still have talent grids, the only ones with meaningful Nodes still on them will be Subclass/\"Build\" items.
 */
export interface DestinyDefinitionsDestinyInventoryItemDefinitionTalentGrid { 
    /**
     * The hash identifier of the DestinyTalentGridDefinition attached to this item.
     */
    talentGridHash?: number;
    /**
     * This is meant to be a subtitle for looking at the talent grid. In practice, somewhat frustratingly, this always merely says the localized word for \"Details\". Great. Maybe it\'ll have more if talent grids ever get used for more than builds and subclasses again.
     */
    itemDetailString?: string;
    /**
     * A shortcut string identifier for the \"build\" in question, if this talent grid has an associated build. Doesn\'t map to anything we can expose at the moment.
     */
    buildName?: string;
    /**
     * If the talent grid implies a damage type, this is the enum value for that damage type.
     */
    hudDamageType?: number;
    /**
     * If the talent grid has a special icon that\'s shown in the game UI (like builds, funny that), this is the identifier for that icon. Sadly, we don\'t actually get that icon right now. I\'ll be looking to replace this with a path to the actual icon itself.
     */
    hudIcon?: string;
}

