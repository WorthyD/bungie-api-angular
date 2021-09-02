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
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from './destinyDefinitionsCommonDestinyDisplayPropertiesDefinition';

/**
 * A specific \"spot\" referred to by a location. Only one of these can be active at a time for a given Location.
 */
export interface DestinyDefinitionsDestinyLocationReleaseDefinition {
  /**
   * Sadly, these don\'t appear to be populated anymore (ever?)
   */
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
  smallTransparentIcon?: string;
  mapIcon?: string;
  largeTransparentIcon?: string;
  /**
   * If we had map information, this spawnPoint would be interesting. But sadly, we don\'t have that info.
   */
  spawnPoint?: number;
  /**
   * The Destination being pointed to by this location.
   */
  destinationHash?: number;
  /**
   * The Activity being pointed to by this location.
   */
  activityHash?: number;
  /**
   * The Activity Graph being pointed to by this location.
   */
  activityGraphHash?: number;
  /**
   * The Activity Graph Node being pointed to by this location. (Remember that Activity Graph Node hashes are only unique within an Activity Graph: so use the combination to find the node being spoken of)
   */
  activityGraphNodeHash?: number;
  /**
   * The Activity Bubble within the Destination. Look this up in the DestinyDestinationDefinition\'s bubbles and bubbleSettings properties.
   */
  activityBubbleName?: number;
  /**
   * If we had map information, this would tell us something cool about the path this location wants you to take. I wish we had map information.
   */
  activityPathBundle?: number;
  /**
   * If we had map information, this would tell us about path information related to destination on the map. Sad. Maybe you can do something cool with it. Go to town man.
   */
  activityPathDestination?: number;
  /**
   * The type of Nav Point that this represents. See the enumeration for more info.
   */
  navPointType?: number;
  /**
   * Looks like it should be the position on the map, but sadly it does not look populated... yet?
   */
  worldPosition?: Array<number>;
}
