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
import { DestinyDefinitionsDestinyEntitySearchResultResults } from './destinyDefinitionsDestinyEntitySearchResultResults';


/**
 * The results of a search for Destiny content. This will be improved on over time, I\'ve been doing some experimenting to see what might be useful.
 */
export interface DestinyDefinitionsDestinyEntitySearchResult { 
    /**
     * A list of suggested words that might make for better search results, based on the text searched for.
     */
    suggestedWords?: Array<string>;
    results?: DestinyDefinitionsDestinyEntitySearchResultResults;
}

