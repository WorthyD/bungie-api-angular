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
import { DestinyDefinitionsRecordsDestinyRecordIntervalObjective } from "./destinyDefinitionsRecordsDestinyRecordIntervalObjective";
import { DestinyDefinitionsRecordsDestinyRecordIntervalBlock } from "./destinyDefinitionsRecordsDestinyRecordIntervalBlock";
import { DestinyDefinitionsRecordsDestinyRecordIntervalRewards } from "./destinyDefinitionsRecordsDestinyRecordIntervalRewards";

/**
 * Some records have multiple \'interval\' objectives, and the record may be claimed at each completed interval
 */
export interface DestinyDefinitionsRecordsDestinyRecordDefinitionIntervalInfo {
  intervalObjectives?: Array<DestinyDefinitionsRecordsDestinyRecordIntervalObjective>;
  intervalRewards?: Array<DestinyDefinitionsRecordsDestinyRecordIntervalRewards>;
  originalObjectiveArrayInsertionIndex?: number;
}
