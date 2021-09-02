/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.12.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SingleComponentResponseOfDestinyInventoryComponent } from './singleComponentResponseOfDestinyInventoryComponent';
import { SingleComponentResponseOfDestinyPresentationNodesComponent } from './singleComponentResponseOfDestinyPresentationNodesComponent';
import { SingleComponentResponseOfDestinyCollectiblesComponent } from './singleComponentResponseOfDestinyCollectiblesComponent';
import { DestinyBaseItemComponentSetOfuint32 } from './destinyBaseItemComponentSetOfuint32';
import { DestinyItemComponentSetOfint64 } from './destinyItemComponentSetOfint64';
import { SingleComponentResponseOfDestinyCurrenciesComponent } from './singleComponentResponseOfDestinyCurrenciesComponent';
import { SingleComponentResponseOfDestinyCharacterProgressionComponent } from './singleComponentResponseOfDestinyCharacterProgressionComponent';
import { SingleComponentResponseOfDestinyKiosksComponent } from './singleComponentResponseOfDestinyKiosksComponent';
import { SingleComponentResponseOfDestinyCharacterRecordsComponent } from './singleComponentResponseOfDestinyCharacterRecordsComponent';
import { SingleComponentResponseOfDestinyCharacterComponent } from './singleComponentResponseOfDestinyCharacterComponent';
import { SingleComponentResponseOfDestinyCharacterActivitiesComponent } from './singleComponentResponseOfDestinyCharacterActivitiesComponent';
import { SingleComponentResponseOfDestinyCharacterRenderComponent } from './singleComponentResponseOfDestinyCharacterRenderComponent';
import { SingleComponentResponseOfDestinyPlugSetsComponent } from './singleComponentResponseOfDestinyPlugSetsComponent';


/**
 * The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
 */
export interface DestinyResponsesDestinyCharacterResponse { 
    /**
     * The character-level non-equipped inventory items.  COMPONENT TYPE: CharacterInventories
     */
    inventory?: SingleComponentResponseOfDestinyInventoryComponent;
    /**
     * Base information about the character in question.  COMPONENT TYPE: Characters
     */
    character?: SingleComponentResponseOfDestinyCharacterComponent;
    /**
     * Character progression data, including Milestones.  COMPONENT TYPE: CharacterProgressions
     */
    progressions?: SingleComponentResponseOfDestinyCharacterProgressionComponent;
    /**
     * Character rendering data - a minimal set of information about equipment and dyes used for rendering.  COMPONENT TYPE: CharacterRenderData
     */
    renderData?: SingleComponentResponseOfDestinyCharacterRenderComponent;
    /**
     * Activity data - info about current activities available to the player.  COMPONENT TYPE: CharacterActivities
     */
    activities?: SingleComponentResponseOfDestinyCharacterActivitiesComponent;
    /**
     * Equipped items on the character.  COMPONENT TYPE: CharacterEquipment
     */
    equipment?: SingleComponentResponseOfDestinyInventoryComponent;
    /**
     * Items available from Kiosks that are available to this specific character.   COMPONENT TYPE: Kiosks
     */
    kiosks?: SingleComponentResponseOfDestinyKiosksComponent;
    /**
     * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are scoped to this character.  This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.  COMPONENT TYPE: ItemSockets
     */
    plugSets?: SingleComponentResponseOfDestinyPlugSetsComponent;
    /**
     * COMPONENT TYPE: PresentationNodes
     */
    presentationNodes?: SingleComponentResponseOfDestinyPresentationNodesComponent;
    /**
     * COMPONENT TYPE: Records
     */
    records?: SingleComponentResponseOfDestinyCharacterRecordsComponent;
    /**
     * COMPONENT TYPE: Collectibles
     */
    collectibles?: SingleComponentResponseOfDestinyCollectiblesComponent;
    /**
     * The set of components belonging to the player\'s instanced items.  COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
     */
    itemComponents?: DestinyItemComponentSetOfint64;
    /**
     * The set of components belonging to the player\'s UNinstanced items. Because apparently now those too can have information relevant to the character\'s state.  COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
     */
    uninstancedItemComponents?: DestinyBaseItemComponentSetOfuint32;
    /**
     * A \"lookup\" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.  COMPONENT TYPE: CurrencyLookups
     */
    currencyLookups?: SingleComponentResponseOfDestinyCurrenciesComponent;
}

