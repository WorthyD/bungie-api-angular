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
import { DestinyBaseItemComponentSetOfuint32 } from './destinyBaseItemComponentSetOfuint32';
import { DestinyItemComponentSetOfint64 } from './destinyItemComponentSetOfint64';
import { DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent } from './dictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent';
import { DictionaryComponentResponseOfint64AndDestinyCharacterComponent } from './dictionaryComponentResponseOfint64AndDestinyCharacterComponent';
import { DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent } from './dictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent';
import { DictionaryComponentResponseOfint64AndDestinyCharacterRecordsComponent } from './dictionaryComponentResponseOfint64AndDestinyCharacterRecordsComponent';
import { DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent } from './dictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent';
import { DictionaryComponentResponseOfint64AndDestinyCollectiblesComponent } from './dictionaryComponentResponseOfint64AndDestinyCollectiblesComponent';
import { DictionaryComponentResponseOfint64AndDestinyCurrenciesComponent } from './dictionaryComponentResponseOfint64AndDestinyCurrenciesComponent';
import { DictionaryComponentResponseOfint64AndDestinyInventoryComponent } from './dictionaryComponentResponseOfint64AndDestinyInventoryComponent';
import { DictionaryComponentResponseOfint64AndDestinyKiosksComponent } from './dictionaryComponentResponseOfint64AndDestinyKiosksComponent';
import { DictionaryComponentResponseOfint64AndDestinyPlugSetsComponent } from './dictionaryComponentResponseOfint64AndDestinyPlugSetsComponent';
import { DictionaryComponentResponseOfint64AndDestinyPresentationNodesComponent } from './dictionaryComponentResponseOfint64AndDestinyPresentationNodesComponent';
import { SingleComponentResponseOfDestinyInventoryComponent } from './singleComponentResponseOfDestinyInventoryComponent';
import { SingleComponentResponseOfDestinyKiosksComponent } from './singleComponentResponseOfDestinyKiosksComponent';
import { SingleComponentResponseOfDestinyPlatformSilverComponent } from './singleComponentResponseOfDestinyPlatformSilverComponent';
import { SingleComponentResponseOfDestinyPlugSetsComponent } from './singleComponentResponseOfDestinyPlugSetsComponent';
import { SingleComponentResponseOfDestinyPresentationNodesComponent } from './singleComponentResponseOfDestinyPresentationNodesComponent';
import { SingleComponentResponseOfDestinyProfileCollectiblesComponent } from './singleComponentResponseOfDestinyProfileCollectiblesComponent';
import { SingleComponentResponseOfDestinyProfileComponent } from './singleComponentResponseOfDestinyProfileComponent';
import { SingleComponentResponseOfDestinyProfileProgressionComponent } from './singleComponentResponseOfDestinyProfileProgressionComponent';
import { SingleComponentResponseOfDestinyProfileRecordsComponent } from './singleComponentResponseOfDestinyProfileRecordsComponent';
import { SingleComponentResponseOfDestinyProfileTransitoryComponent } from './singleComponentResponseOfDestinyProfileTransitoryComponent';
import { SingleComponentResponseOfDestinyVendorReceiptsComponent } from './singleComponentResponseOfDestinyVendorReceiptsComponent';


/**
 * The response for GetDestinyProfile, with components for character and item-level data.
 */
export interface DestinyResponsesDestinyProfileResponse { 
    /**
     * Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say...  COMPONENT TYPE: VendorReceipts
     */
    vendorReceipts?: SingleComponentResponseOfDestinyVendorReceiptsComponent;
    /**
     * The profile-level inventory of the Destiny Profile.  COMPONENT TYPE: ProfileInventories
     */
    profileInventory?: SingleComponentResponseOfDestinyInventoryComponent;
    /**
     * The profile-level currencies owned by the Destiny Profile.  COMPONENT TYPE: ProfileCurrencies
     */
    profileCurrencies?: SingleComponentResponseOfDestinyInventoryComponent;
    /**
     * The basic information about the Destiny Profile (formerly \"Account\").  COMPONENT TYPE: Profiles
     */
    profile?: SingleComponentResponseOfDestinyProfileComponent;
    /**
     * Silver quantities for any platform on which this Profile plays destiny.   COMPONENT TYPE: PlatformSilver
     */
    platformSilver?: SingleComponentResponseOfDestinyPlatformSilverComponent;
    /**
     * Items available from Kiosks that are available Profile-wide (i.e. across all characters)  This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the characterKiosks property.  COMPONENT TYPE: Kiosks
     */
    profileKiosks?: SingleComponentResponseOfDestinyKiosksComponent;
    /**
     * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are profile-scoped.  This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.  COMPONENT TYPE: ItemSockets
     */
    profilePlugSets?: SingleComponentResponseOfDestinyPlugSetsComponent;
    /**
     * When we have progression information - such as Checklists - that may apply profile-wide, it will be returned here rather than in the per-character progression data.  COMPONENT TYPE: ProfileProgression
     */
    profileProgression?: SingleComponentResponseOfDestinyProfileProgressionComponent;
    /**
     * COMPONENT TYPE: PresentationNodes
     */
    profilePresentationNodes?: SingleComponentResponseOfDestinyPresentationNodesComponent;
    /**
     * COMPONENT TYPE: Records
     */
    profileRecords?: SingleComponentResponseOfDestinyProfileRecordsComponent;
    /**
     * COMPONENT TYPE: Collectibles
     */
    profileCollectibles?: SingleComponentResponseOfDestinyProfileCollectiblesComponent;
    /**
     * COMPONENT TYPE: Transitory
     */
    profileTransitoryData?: SingleComponentResponseOfDestinyProfileTransitoryComponent;
    /**
     * Basic information about each character, keyed by the CharacterId.  COMPONENT TYPE: Characters
     */
    characters?: DictionaryComponentResponseOfint64AndDestinyCharacterComponent;
    /**
     * The character-level non-equipped inventory items, keyed by the Character's Id.  COMPONENT TYPE: CharacterInventories
     */
    characterInventories?: DictionaryComponentResponseOfint64AndDestinyInventoryComponent;
    /**
     * Character-level progression data, keyed by the Character's Id.  COMPONENT TYPE: CharacterProgressions
     */
    characterProgressions?: DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent;
    /**
     * Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.  COMPONENT TYPE: CharacterRenderData
     */
    characterRenderData?: DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent;
    /**
     * Character activity data - the activities available to this character and its status, keyed by the Character's Id.  COMPONENT TYPE: CharacterActivities
     */
    characterActivities?: DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent;
    /**
     * The character's equipped items, keyed by the Character's Id.  COMPONENT TYPE: CharacterEquipment
     */
    characterEquipment?: DictionaryComponentResponseOfint64AndDestinyInventoryComponent;
    /**
     * Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk.  This component returns information about what Kiosk items are available to you on a *Character* level. Usually, kiosk items will be earned for the entire Profile (all characters) at once. To find those, look in the profileKiosks property.  COMPONENT TYPE: Kiosks
     */
    characterKiosks?: DictionaryComponentResponseOfint64AndDestinyKiosksComponent;
    /**
     * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states, per character, that are character-scoped.  This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.  COMPONENT TYPE: ItemSockets
     */
    characterPlugSets?: DictionaryComponentResponseOfint64AndDestinyPlugSetsComponent;
    /**
     * Do you ever get the feeling that a system was designed *too* flexibly? That it can be used in so many different ways that you end up being unable to provide an easy to use abstraction for the mess that's happening under the surface?  Let's talk about character-specific data that might be related to items without instances. These two statements are totally unrelated, I promise.  At some point during D2, it was decided that items - such as Bounties - could be given to characters and *not* have instance data, but that *could* display and even use relevant state information on your account and character.  Up to now, any item that had meaningful dependencies on character or account state had to be instanced, and thus \"itemComponents\" was all that you needed: it was keyed by item's instance IDs and provided the stateful information you needed inside.  Unfortunately, we don't live in such a magical world anymore. This is information held on a per-character basis about non-instanced items that the characters have in their inventory - or that reference character-specific state information even if it's in Account-level inventory - and the values related to that item's state in relation to the given character.  To give a concrete example, look at a Moments of Triumph bounty. They exist in a character's inventory, and show/care about a character's progression toward completing the bounty. But the bounty itself is a non-instanced item, like a mod or a currency. This returns that data for the characters who have the bounty in their inventory.  I'm not crying, you're crying Okay we're both crying but it's going to be okay I promise Actually I shouldn't promise that, I don't know if it's going to be okay
     */
    characterUninstancedItemComponents?: { [key: string]: DestinyBaseItemComponentSetOfuint32; };
    /**
     * COMPONENT TYPE: PresentationNodes
     */
    characterPresentationNodes?: DictionaryComponentResponseOfint64AndDestinyPresentationNodesComponent;
    /**
     * COMPONENT TYPE: Records
     */
    characterRecords?: DictionaryComponentResponseOfint64AndDestinyCharacterRecordsComponent;
    /**
     * COMPONENT TYPE: Collectibles
     */
    characterCollectibles?: DictionaryComponentResponseOfint64AndDestinyCollectiblesComponent;
    /**
     * Information about instanced items across all returned characters, keyed by the item's instance ID.  COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
     */
    itemComponents?: DestinyItemComponentSetOfint64;
    /**
     * A \"lookup\" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.  COMPONENT TYPE: CurrencyLookups
     */
    characterCurrencyLookups?: DictionaryComponentResponseOfint64AndDestinyCurrenciesComponent;
}

