/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyResponsesDestinyProfileResponseCharacters } from "./destinyResponsesDestinyProfileResponseCharacters";
import { DestinyResponsesDestinyProfileResponsePlatformSilver } from "./destinyResponsesDestinyProfileResponsePlatformSilver";
import { DestinyResponsesDestinyProfileResponseProfileProgression } from "./destinyResponsesDestinyProfileResponseProfileProgression";
import { DestinyResponsesDestinyProfileResponseProfileRecords } from "./destinyResponsesDestinyProfileResponseProfileRecords";
import { DestinyResponsesDestinyProfileResponseCharacterPlugSets } from "./destinyResponsesDestinyProfileResponseCharacterPlugSets";
import { DestinyResponsesDestinyProfileResponseProfilePlugSets } from "./destinyResponsesDestinyProfileResponseProfilePlugSets";
import { DestinyResponsesDestinyProfileResponseCharacterEquipment } from "./destinyResponsesDestinyProfileResponseCharacterEquipment";
import { DestinyResponsesDestinyProfileResponseCharacterProgressions } from "./destinyResponsesDestinyProfileResponseCharacterProgressions";
import { DestinyResponsesDestinyProfileResponseCharacterRecords } from "./destinyResponsesDestinyProfileResponseCharacterRecords";
import { DestinyResponsesDestinyProfileResponseCharacterInventories } from "./destinyResponsesDestinyProfileResponseCharacterInventories";
import { DestinyResponsesDestinyProfileResponseVendorReceipts } from "./destinyResponsesDestinyProfileResponseVendorReceipts";
import { DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups } from "./destinyResponsesDestinyProfileResponseCharacterCurrencyLookups";
import { DestinyResponsesDestinyProfileResponseProfileInventory } from "./destinyResponsesDestinyProfileResponseProfileInventory";
import { DestinyResponsesDestinyProfileResponseProfileStringVariables } from "./destinyResponsesDestinyProfileResponseProfileStringVariables";
import { DestinyResponsesDestinyProfileResponseProfileTransitoryData } from "./destinyResponsesDestinyProfileResponseProfileTransitoryData";
import { DestinyResponsesDestinyProfileResponseCharacterRenderData } from "./destinyResponsesDestinyProfileResponseCharacterRenderData";
import { DestinyResponsesDestinyProfileResponseCharacterPresentationNodes } from "./destinyResponsesDestinyProfileResponseCharacterPresentationNodes";
import { DestinyResponsesDestinyProfileResponseCharacterCollectibles } from "./destinyResponsesDestinyProfileResponseCharacterCollectibles";
import { DestinyResponsesDestinyProfileResponseProfileCollectibles } from "./destinyResponsesDestinyProfileResponseProfileCollectibles";
import { DestinyResponsesDestinyProfileResponseCharacterActivities } from "./destinyResponsesDestinyProfileResponseCharacterActivities";
import { DestinyResponsesDestinyProfileResponseCharacterStringVariables } from "./destinyResponsesDestinyProfileResponseCharacterStringVariables";
import { DestinyResponsesDestinyProfileResponseCharacterKiosks } from "./destinyResponsesDestinyProfileResponseCharacterKiosks";
import { DestinyResponsesDestinyProfileResponseCharacterCraftables } from "./destinyResponsesDestinyProfileResponseCharacterCraftables";
import { DestinyBaseItemComponentSetOfuint32 } from "./destinyBaseItemComponentSetOfuint32";
import { DestinyResponsesDestinyProfileResponseProfileCurrencies } from "./destinyResponsesDestinyProfileResponseProfileCurrencies";
import { DestinyResponsesDestinyProfileResponseItemComponents } from "./destinyResponsesDestinyProfileResponseItemComponents";
import { DestinyResponsesDestinyProfileResponseProfilePresentationNodes } from "./destinyResponsesDestinyProfileResponseProfilePresentationNodes";
import { DestinyResponsesDestinyProfileResponseProfile } from "./destinyResponsesDestinyProfileResponseProfile";
import { DestinyResponsesDestinyProfileResponseMetrics } from "./destinyResponsesDestinyProfileResponseMetrics";
import { DestinyResponsesDestinyProfileResponseProfileKiosks } from "./destinyResponsesDestinyProfileResponseProfileKiosks";

/**
 * The Response for GetDestinyProfile, with components for character and item-level data.
 */
export interface DestinyResponsesDestinyProfileResponse {
  vendorReceipts?: DestinyResponsesDestinyProfileResponseVendorReceipts;
  profileInventory?: DestinyResponsesDestinyProfileResponseProfileInventory;
  profileCurrencies?: DestinyResponsesDestinyProfileResponseProfileCurrencies;
  profile?: DestinyResponsesDestinyProfileResponseProfile;
  platformSilver?: DestinyResponsesDestinyProfileResponsePlatformSilver;
  profileKiosks?: DestinyResponsesDestinyProfileResponseProfileKiosks;
  profilePlugSets?: DestinyResponsesDestinyProfileResponseProfilePlugSets;
  profileProgression?: DestinyResponsesDestinyProfileResponseProfileProgression;
  profilePresentationNodes?: DestinyResponsesDestinyProfileResponseProfilePresentationNodes;
  profileRecords?: DestinyResponsesDestinyProfileResponseProfileRecords;
  profileCollectibles?: DestinyResponsesDestinyProfileResponseProfileCollectibles;
  profileTransitoryData?: DestinyResponsesDestinyProfileResponseProfileTransitoryData;
  metrics?: DestinyResponsesDestinyProfileResponseMetrics;
  profileStringVariables?: DestinyResponsesDestinyProfileResponseProfileStringVariables;
  characters?: DestinyResponsesDestinyProfileResponseCharacters;
  characterInventories?: DestinyResponsesDestinyProfileResponseCharacterInventories;
  characterProgressions?: DestinyResponsesDestinyProfileResponseCharacterProgressions;
  characterRenderData?: DestinyResponsesDestinyProfileResponseCharacterRenderData;
  characterActivities?: DestinyResponsesDestinyProfileResponseCharacterActivities;
  characterEquipment?: DestinyResponsesDestinyProfileResponseCharacterEquipment;
  characterKiosks?: DestinyResponsesDestinyProfileResponseCharacterKiosks;
  characterPlugSets?: DestinyResponsesDestinyProfileResponseCharacterPlugSets;
  /**
   * Do you ever get the feeling that a system was designed *too* flexibly? That it can be used in so many different ways that you end up being unable to provide an easy to use abstraction for the mess that\'s happening under the surface?  Let\'s talk about character-specific data that might be related to items without instances. These two statements are totally unrelated, I promise.  At some point during D2, it was decided that items - such as Bounties - could be given to characters and *not* have instance data, but that *could* display and even use relevant state information on your account and character.  Up to now, any item that had meaningful dependencies on character or account state had to be instanced, and thus \"itemComponents\" was all that you needed: it was keyed by item\'s instance IDs and provided the stateful information you needed inside.  Unfortunately, we don\'t live in such a magical world anymore. This is information held on a per-character basis about non-instanced items that the characters have in their inventory - or that reference character-specific state information even if it\'s in Account-level inventory - and the values related to that item\'s state in relation to the given character.  To give a concrete example, look at a Moments of Triumph bounty. They exist in a character\'s inventory, and show/care about a character\'s progression toward completing the bounty. But the bounty itself is a non-instanced item, like a mod or a currency. This returns that data for the characters who have the bounty in their inventory.  I\'m not crying, you\'re crying Okay we\'re both crying but it\'s going to be okay I promise Actually I shouldn\'t promise that, I don\'t know if it\'s going to be okay
   */
  characterUninstancedItemComponents?: {
    [key: string]: DestinyBaseItemComponentSetOfuint32;
  };
  characterPresentationNodes?: DestinyResponsesDestinyProfileResponseCharacterPresentationNodes;
  characterRecords?: DestinyResponsesDestinyProfileResponseCharacterRecords;
  characterCollectibles?: DestinyResponsesDestinyProfileResponseCharacterCollectibles;
  characterStringVariables?: DestinyResponsesDestinyProfileResponseCharacterStringVariables;
  characterCraftables?: DestinyResponsesDestinyProfileResponseCharacterCraftables;
  itemComponents?: DestinyResponsesDestinyProfileResponseItemComponents;
  characterCurrencyLookups?: DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups;
}
