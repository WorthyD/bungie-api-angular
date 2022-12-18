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
import { DestinyHistoricalStatsDestinyAggregateActivityStats } from "./destinyHistoricalStatsDestinyAggregateActivityStats";

export interface DestinyHistoricalStatsDestinyAggregateActivityResults {
  /**
   * List of all activities the player has participated in.
   */
  activities?: Array<DestinyHistoricalStatsDestinyAggregateActivityStats>;
}
