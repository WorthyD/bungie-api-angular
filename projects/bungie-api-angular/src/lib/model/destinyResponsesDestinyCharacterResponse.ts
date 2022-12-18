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
import { DestinyResponsesDestinyCharacterResponseActivities } from "./destinyResponsesDestinyCharacterResponseActivities";
import { DestinyResponsesDestinyCharacterResponseRecords } from "./destinyResponsesDestinyCharacterResponseRecords";
import { DestinyResponsesDestinyCharacterResponseCurrencyLookups } from "./destinyResponsesDestinyCharacterResponseCurrencyLookups";
import { DestinyResponsesDestinyCharacterResponseProgressions } from "./destinyResponsesDestinyCharacterResponseProgressions";
import { DestinyResponsesDestinyCharacterResponsePlugSets } from "./destinyResponsesDestinyCharacterResponsePlugSets";
import { DestinyResponsesDestinyCharacterResponseUninstancedItemComponents } from "./destinyResponsesDestinyCharacterResponseUninstancedItemComponents";
import { DestinyResponsesDestinyCharacterResponseCollectibles } from "./destinyResponsesDestinyCharacterResponseCollectibles";
import { DestinyResponsesDestinyCharacterResponseCharacter } from "./destinyResponsesDestinyCharacterResponseCharacter";
import { DestinyResponsesDestinyCharacterResponseKiosks } from "./destinyResponsesDestinyCharacterResponseKiosks";
import { DestinyResponsesDestinyCharacterResponseItemComponents } from "./destinyResponsesDestinyCharacterResponseItemComponents";
import { DestinyResponsesDestinyCharacterResponseRenderData } from "./destinyResponsesDestinyCharacterResponseRenderData";
import { DestinyResponsesDestinyProfileResponseProfilePresentationNodes } from "./destinyResponsesDestinyProfileResponseProfilePresentationNodes";
import { DestinyResponsesDestinyCharacterResponseInventory } from "./destinyResponsesDestinyCharacterResponseInventory";
import { DestinyResponsesDestinyCharacterResponseEquipment } from "./destinyResponsesDestinyCharacterResponseEquipment";

/**
 * The Response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
 */
export interface DestinyResponsesDestinyCharacterResponse {
  inventory?: DestinyResponsesDestinyCharacterResponseInventory;
  character?: DestinyResponsesDestinyCharacterResponseCharacter;
  progressions?: DestinyResponsesDestinyCharacterResponseProgressions;
  renderData?: DestinyResponsesDestinyCharacterResponseRenderData;
  activities?: DestinyResponsesDestinyCharacterResponseActivities;
  equipment?: DestinyResponsesDestinyCharacterResponseEquipment;
  kiosks?: DestinyResponsesDestinyCharacterResponseKiosks;
  plugSets?: DestinyResponsesDestinyCharacterResponsePlugSets;
  presentationNodes?: DestinyResponsesDestinyProfileResponseProfilePresentationNodes;
  records?: DestinyResponsesDestinyCharacterResponseRecords;
  collectibles?: DestinyResponsesDestinyCharacterResponseCollectibles;
  itemComponents?: DestinyResponsesDestinyCharacterResponseItemComponents;
  uninstancedItemComponents?: DestinyResponsesDestinyCharacterResponseUninstancedItemComponents;
  currencyLookups?: DestinyResponsesDestinyCharacterResponseCurrencyLookups;
}
