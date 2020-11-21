/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.9.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Represents a variant on an activity for a Milestone: a specific difficulty tier, or a specific activity variant for example.  These will often have more specific details, such as an associated Guided Game, progression steps, tier-specific rewards, and custom values.
 */
export interface DestinyDefinitionsMilestonesDestinyMilestoneActivityVariantDefinition { 
    /**
     * The hash to use for looking up the variant Activity's definition (DestinyActivityDefinition), where you can find its distinguishing characteristics such as difficulty level and recommended light level.   Frequently, that will be the only distinguishing characteristics in practice, which is somewhat of a bummer.
     */
    activityHash?: number;
    /**
     * If you care to do so, render the variants in the order prescribed by this value.  When you combine live Milestone data with the definition, the order becomes more useful because you'll be cross-referencing between the definition and live data.
     */
    order?: number;
}

