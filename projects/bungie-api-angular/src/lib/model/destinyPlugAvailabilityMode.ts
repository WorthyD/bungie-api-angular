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
 * This enum determines whether the plug is available to be inserted.  - Normal means that all existing rules for plug insertion apply.  - UnavailableIfSocketContainsMatchingPlugCategory means that the plug is only available if the socket does NOT match the plug category.  - AvailableIfSocketContainsMatchingPlugCategory means that the plug is only available if the socket DOES match the plug category.  For category matching, use the plug\'s \"plugCategoryIdentifier\" property, comparing it to
 */
export type DestinyPlugAvailabilityMode = 0 | 1 | 2;

export const DestinyPlugAvailabilityMode = {
    NUMBER_0: 0 as DestinyPlugAvailabilityMode,
    NUMBER_1: 1 as DestinyPlugAvailabilityMode,
    NUMBER_2: 2 as DestinyPlugAvailabilityMode
};

