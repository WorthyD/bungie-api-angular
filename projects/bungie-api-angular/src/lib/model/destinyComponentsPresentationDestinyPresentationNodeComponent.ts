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
import { DestinyComponentsPresentationDestinyPresentationNodeComponentObjective } from './destinyComponentsPresentationDestinyPresentationNodeComponentObjective';


export interface DestinyComponentsPresentationDestinyPresentationNodeComponent { 
    state?: number;
    objective?: DestinyComponentsPresentationDestinyPresentationNodeComponentObjective;
    /**
     * How much of the presentation node is considered to be completed so far by the given character/profile.
     */
    progressValue?: number;
    /**
     * The value at which the presentation node is considered to be completed.
     */
    completionValue?: number;
    /**
     * If available, this is the current score for the record category that this node represents.
     */
    recordCategoryScore?: number;
}

