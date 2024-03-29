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
import { DestinyResponsesDestinyItemResponseRenderData } from './destinyResponsesDestinyItemResponseRenderData';
import { DestinyResponsesDestinyItemResponseStats } from './destinyResponsesDestinyItemResponseStats';
import { DestinyResponsesDestinyItemResponsePerks } from './destinyResponsesDestinyItemResponsePerks';
import { DestinyResponsesDestinyItemResponseReusablePlugs } from './destinyResponsesDestinyItemResponseReusablePlugs';
import { DestinyResponsesDestinyItemResponsePlugObjectives } from './destinyResponsesDestinyItemResponsePlugObjectives';
import { DestinyResponsesDestinyItemResponseSockets } from './destinyResponsesDestinyItemResponseSockets';
import { DestinyResponsesDestinyItemResponseInstance } from './destinyResponsesDestinyItemResponseInstance';
import { DestinyResponsesDestinyItemResponseTalentGrid } from './destinyResponsesDestinyItemResponseTalentGrid';
import { DestinyResponsesDestinyItemResponseItem } from './destinyResponsesDestinyItemResponseItem';
import { DestinyResponsesDestinyItemResponseObjectives } from './destinyResponsesDestinyItemResponseObjectives';


/**
 * The Response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn\'t have an \"itemInstanceId\": for those, get your information from the DestinyInventoryDefinition.
 */
export interface DestinyResponsesDestinyItemResponse { 
    /**
     * If the item is on a character, this will return the ID of the character that is holding the item.
     */
    characterId?: number;
    item?: DestinyResponsesDestinyItemResponseItem;
    instance?: DestinyResponsesDestinyItemResponseInstance;
    objectives?: DestinyResponsesDestinyItemResponseObjectives;
    perks?: DestinyResponsesDestinyItemResponsePerks;
    renderData?: DestinyResponsesDestinyItemResponseRenderData;
    stats?: DestinyResponsesDestinyItemResponseStats;
    talentGrid?: DestinyResponsesDestinyItemResponseTalentGrid;
    sockets?: DestinyResponsesDestinyItemResponseSockets;
    reusablePlugs?: DestinyResponsesDestinyItemResponseReusablePlugs;
    plugObjectives?: DestinyResponsesDestinyItemResponsePlugObjectives;
}

