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
import { DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent } from './dictionaryComponentResponseOfint64AndDestinyItemSocketsComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemPlugComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent } from './dictionaryComponentResponseOfint64AndDestinyItemInstanceComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemStatsComponent } from './dictionaryComponentResponseOfint64AndDestinyItemStatsComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent } from './dictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent';
import { DestinyItemComponentSetOfint64 } from './destinyItemComponentSetOfint64';
import { DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent } from './dictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemRenderComponent } from './dictionaryComponentResponseOfint64AndDestinyItemRenderComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent } from './dictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemPerksComponent } from './dictionaryComponentResponseOfint64AndDestinyItemPerksComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent } from './dictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent';


/**
 * The set of components belonging to the player\'s instanced items.  COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
 */
export interface DestinyResponsesDestinyCharacterResponseItemComponents { 
    instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent;
    renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent;
    stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent;
    sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent;
    reusablePlugs?: DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent;
    plugObjectives?: DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent;
    talentGrids?: DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent;
    plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
    objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent;
    perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent;
}

