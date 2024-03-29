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
import { SingleComponentResponseOfDestinyItemTalentGridComponent } from './singleComponentResponseOfDestinyItemTalentGridComponent';
import { DestinyEntitiesItemsDestinyItemTalentGridComponent } from './destinyEntitiesItemsDestinyItemTalentGridComponent';


/**
 * Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character\'s \"Builds\".  COMPONENT TYPE: ItemTalentGrids
 */
export interface DestinyResponsesDestinyItemResponseTalentGrid { 
    data?: DestinyEntitiesItemsDestinyItemTalentGridComponent;
    privacy?: number;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
}

