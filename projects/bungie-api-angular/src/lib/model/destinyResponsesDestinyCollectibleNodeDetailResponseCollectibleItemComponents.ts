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
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemPlugComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemRenderComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent';
import { DestinyItemComponentSetOfuint32 } from './destinyItemComponentSetOfuint32';
import { DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemPerksComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemStatsComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent';


/**
 * Item components, keyed by the item hash of the items pointed at collectibles found under the requested Presentation Node.  NOTE: I had a lot of hemming and hawing about whether these should be keyed by collectible hash or item hash... but ultimately having it be keyed by item hash meant that UI that already uses DestinyItemComponentSet data wouldn\'t have to have a special override to do the collectible -> item lookup once you delve into an item\'s details, and it also meant that you didn\'t have to remember that the Hash being used as the key for plugSets was different from the Hash being used for the other Dictionaries. As a result, using the Item Hash felt like the least crappy solution.  We may all come to regret this decision. We will see.  COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
 */
export interface DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents { 
    instances?: DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent;
    renderData?: DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent;
    stats?: DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent;
    sockets?: DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent;
    reusablePlugs?: DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent;
    plugObjectives?: DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent;
    talentGrids?: DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent;
    plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
    objectives?: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent;
    perks?: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent;
}

