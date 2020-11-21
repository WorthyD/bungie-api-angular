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
import { DestinyEntitiesItemsDestinyItemObjectivesComponent } from './destinyEntitiesItemsDestinyItemObjectivesComponent';


export interface DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent { 
    data?: { [key: string]: DestinyEntitiesItemsDestinyItemObjectivesComponent; };
    privacy?: number;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
}

