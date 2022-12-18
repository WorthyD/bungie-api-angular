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
import { DestinyDefinitionsDestinyActivityGraphListEntryDefinition } from './destinyDefinitionsDestinyActivityGraphListEntryDefinition';
import { DestinyDefinitionsDestinyDestinationBubbleSettingDefinition } from './destinyDefinitionsDestinyDestinationBubbleSettingDefinition';
import { DestinyDefinitionsDestinyBubbleDefinition } from './destinyDefinitionsDestinyBubbleDefinition';


/**
 * On to one of the more confusing subjects of the API. What is a Destination, and what is the relationship between it, Activities, Locations, and Places?  A \"Destination\" is a specific region/city/area of a larger \"Place\". For instance, a Place might be Earth where a Destination might be Bellevue, Washington. (Please, pick a more interesting destination if you come to visit Earth).
 */
export interface DestinyDefinitionsDestinyDestinationDefinition { 
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * The place that \"owns\" this Destination. Use this hash to look up the DestinyPlaceDefinition.
     */
    placeHash?: number;
    /**
     * If this Destination has a default Free-Roam activity, this is the hash for that Activity. Use it to look up the DestinyActivityDefintion.
     */
    defaultFreeroamActivityHash?: number;
    /**
     * If the Destination has default Activity Graphs (i.e. \"Map\") that should be shown in the director, this is the list of those Graphs. At most, only one should be active at any given time for a Destination: these would represent, for example, different variants on a Map if the Destination is changing on a macro level based on game state.
     */
    activityGraphEntries?: Array<DestinyDefinitionsDestinyActivityGraphListEntryDefinition>;
    /**
     * A Destination may have many \"Bubbles\" zones with human readable properties.  We don\'t get as much info as I\'d like about them - I\'d love to return info like where on the map they are located - but at least this gives you the name of those bubbles. bubbleSettings and bubbles both have the identical number of entries, and you should match up their indexes to provide matching bubble and bubbleSettings data.  DEPRECATED - Just use bubbles, it now has this data.
     */
    bubbleSettings?: Array<DestinyDefinitionsDestinyDestinationBubbleSettingDefinition>;
    /**
     * This provides the unique identifiers for every bubble in the destination (only guaranteed unique within the destination), and any intrinsic properties of the bubble.  bubbleSettings and bubbles both have the identical number of entries, and you should match up their indexes to provide matching bubble and bubbleSettings data.
     */
    bubbles?: Array<DestinyDefinitionsDestinyBubbleDefinition>;
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to.
     */
    hash?: number;
    /**
     * The index of the entity as it was found in the investment tables.
     */
    index?: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
     */
    redacted?: boolean;
}

