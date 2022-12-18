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
import { DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent } from './dictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent';
import { DestinyEntitiesCharactersDestinyCharacterProgressionComponent } from './destinyEntitiesCharactersDestinyCharacterProgressionComponent';


/**
 * Character-level progression data, keyed by the Character\'s Id.  COMPONENT TYPE: CharacterProgressions
 */
export interface DestinyResponsesDestinyProfileResponseCharacterProgressions { 
    data?: { [key: string]: DestinyEntitiesCharactersDestinyCharacterProgressionComponent; };
    privacy?: number;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
}

