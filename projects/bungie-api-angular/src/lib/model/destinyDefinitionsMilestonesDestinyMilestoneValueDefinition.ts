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
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from './destinyDefinitionsCommonDestinyDisplayPropertiesDefinition';


/**
 * The definition for information related to a key/value pair that is relevant for a particular Milestone or component within the Milestone.   This lets us more flexibly pass up information that\'s useful to someone, even if it\'s not necessarily us.
 */
export interface DestinyDefinitionsMilestonesDestinyMilestoneValueDefinition { 
    key?: string;
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
}

