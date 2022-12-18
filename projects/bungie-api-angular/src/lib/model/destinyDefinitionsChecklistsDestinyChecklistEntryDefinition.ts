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
import { DestinyDefinitionsChecklistsDestinyChecklistEntryDefinitionDisplayProperties } from "./destinyDefinitionsChecklistsDestinyChecklistEntryDefinitionDisplayProperties";

/**
 * The properties of an individual checklist item. Note that almost everything is optional: it is *highly* variable what kind of data we\'ll actually be able to return: at times we may have no other relationships to entities at all.  Whatever UI you build, do it with the knowledge that any given entry might not actually be able to be associated with some other Destiny entity.
 */
export interface DestinyDefinitionsChecklistsDestinyChecklistEntryDefinition {
  /**
   * The identifier for this Checklist entry. Guaranteed unique only within this Checklist Definition, and not globally/for all checklists.
   */
  hash?: number;
  displayProperties?: DestinyDefinitionsChecklistsDestinyChecklistEntryDefinitionDisplayProperties;
  destinationHash?: number;
  locationHash?: number;
  /**
   * Note that a Bubble\'s hash doesn\'t uniquely identify a \"top level\" entity in Destiny. Only the combination of location and bubble can uniquely identify a place in the world of Destiny: so if bubbleHash is populated, locationHash must too be populated for it to have any meaning.  You can use this property if it is populated to look up the DestinyLocationDefinition\'s associated .locationReleases[].activityBubbleName property.
   */
  bubbleHash?: number;
  activityHash?: number;
  itemHash?: number;
  vendorHash?: number;
  vendorInteractionIndex?: number;
  /**
   * The scope at which this specific entry can be computed.
   */
  scope?: number;
}
