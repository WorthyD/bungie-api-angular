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
 * The details of an overlay prompt to show to a user. They are all fairly self-explanatory localized strings that can be shown.
 */
export interface DestinyDefinitionsDestinyVendorCategoryOverlayDefinition { 
    choiceDescription?: string;
    description?: string;
    icon?: string;
    title?: string;
    /**
     * If this overlay has a currency item that it features, this is said featured item.
     */
    currencyItemHash?: number;
}

