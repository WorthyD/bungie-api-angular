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
 * Display Categories are different from \"categories\" in that these are specifically for visual grouping and display of categories in Vendor UI. The \"categories\" structure is for validation of the contained items, and can be categorized entirely separately from \"Display Categories\", there need be and often will be no meaningful relationship between the two.
 */
export interface DestinyDefinitionsDestinyDisplayCategoryDefinition { 
    index?: number;
    /**
     * A string identifier for the display category.
     */
    identifier?: string;
    displayCategoryHash?: number;
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * If true, this category should be displayed in the \"Banner\" section of the vendor\'s UI.
     */
    displayInBanner?: boolean;
    /**
     * If it exists, this is the hash identifier of a DestinyProgressionDefinition that represents the progression to show on this display category.  Specific categories can now have thier own distinct progression, apparently. So that\'s cool.
     */
    progressionHash?: number;
    /**
     * If this category sorts items in a nonstandard way, this will be the way we sort.
     */
    sortOrder?: number;
    /**
     * An indicator of how the category will be displayed in the UI. It\'s up to you to do something cool or interesting in Response to this, or just to treat it as a normal category.
     */
    displayStyleHash?: number;
    /**
     * An indicator of how the category will be displayed in the UI. It\'s up to you to do something cool or interesting in Response to this, or just to treat it as a normal category.
     */
    displayStyleIdentifier?: string;
}

