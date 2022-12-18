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


/**
 * Destinations and Activities may have default Activity Graphs that should be shown when you bring up the Director and are playing in either.  This contract defines the graph referred to and the gating for when it is relevant.
 */
export interface DestinyDefinitionsDestinyActivityGraphListEntryDefinition { 
    /**
     * The hash identifier of the DestinyActivityGraphDefinition that should be shown when opening the director.
     */
    activityGraphHash?: number;
}

