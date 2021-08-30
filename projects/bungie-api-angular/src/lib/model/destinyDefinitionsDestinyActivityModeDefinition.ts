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
 * This definition represents an \"Activity Mode\" as it exists in the Historical Stats endpoints. An individual Activity Mode represents a collection of activities that are played in a certain way. For example, Nightfall Strikes are part of a \"Nightfall\" activity mode, and any activities played as the PVP mode \"Clash\" are part of the \"Clash activity mode.  Activity modes are nested under each other in a hierarchy, so that if you ask for - for example - \"AllPvP\", you will get any PVP activities that the user has played, regardless of what specific PVP mode was being played.
 */
export interface DestinyDefinitionsDestinyActivityModeDefinition { 
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * If this activity mode has a related PGCR image, this will be the path to said image.
     */
    pgcrImage?: string;
    /**
     * The Enumeration value for this Activity Mode. Pass this identifier into Stats endpoints to get aggregate stats for this mode.
     */
    modeType?: number;
    /**
     * The type of play being performed in broad terms (PVP, PVE)
     */
    activityModeCategory?: number;
    /**
     * If True, this mode has oppositional teams fighting against each other rather than \"Free-For-All\" or Co-operative modes of play.  Note that Aggregate modes are never marked as team based, even if they happen to be team based at the moment. At any time, an aggregate whose subordinates are only team based could be changed so that one or more aren\'t team based, and then this boolean won\'t make much sense (the aggregation would become \"sometimes team based\"). Let\'s not deal with that right now.
     */
    isTeamBased?: boolean;
    /**
     * If true, this mode is an aggregation of other, more specific modes rather than being a mode in itself. This includes modes that group Features/Events rather than Gameplay, such as Trials of The Nine: Trials of the Nine being an Event that is interesting to see aggregate data for, but when you play the activities within Trials of the Nine they are more specific activity modes such as Clash.
     */
    isAggregateMode?: boolean;
    /**
     * The hash identifiers of the DestinyActivityModeDefinitions that represent all of the \"parent\" modes for this mode. For instance, the Nightfall Mode is also a member of AllStrikes and AllPvE.
     */
    parentHashes?: Array<number>;
    /**
     * A Friendly identifier you can use for referring to this Activity Mode. We really only used this in our URLs, so... you know, take that for whatever it\'s worth.
     */
    friendlyName?: string;
    /**
     * If this exists, the mode has specific Activities (referred to by the Key) that should instead map to other Activity Modes when they are played. This was useful in D1 for Private Matches, where we wanted to have Private Matches as an activity mode while still referring to the specific mode being played.
     */
    activityModeMappings?: { [key: string]: number; };
    /**
     * If FALSE, we want to ignore this type when we\'re showing activity modes in BNet UI. It will still be returned in case 3rd parties want to use it for any purpose.
     */
    display?: boolean;
    /**
     * The relative ordering of activity modes.
     */
    order?: number;
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

