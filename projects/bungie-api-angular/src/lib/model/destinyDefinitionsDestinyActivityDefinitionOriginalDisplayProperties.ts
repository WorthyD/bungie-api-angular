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
import { DestinyDefinitionsCommonDestinyIconSequenceDefinition } from './destinyDefinitionsCommonDestinyIconSequenceDefinition';


/**
 * The unadulterated form of the display properties, as they ought to be shown in the Director (if the activity appears in the director).
 */
export interface DestinyDefinitionsDestinyActivityDefinitionOriginalDisplayProperties { 
    description?: string;
    name?: string;
    /**
     * Note that \"icon\" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition\'s icon was a big picture of a book.  But usually, it will be a small square image that you can use as... well, an icon.  They are currently represented as 96px x 96px images.
     */
    icon?: string;
    iconSequences?: Array<DestinyDefinitionsCommonDestinyIconSequenceDefinition>;
    /**
     * If this item has a high-res icon (at least for now, many things won\'t), then the path to that icon will be here.
     */
    highResIcon?: string;
    hasIcon?: boolean;
}

