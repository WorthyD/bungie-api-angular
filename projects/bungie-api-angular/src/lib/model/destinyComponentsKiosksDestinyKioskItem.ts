/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.12.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyQuestsDestinyObjectiveProgress } from './destinyQuestsDestinyObjectiveProgress';


export interface DestinyComponentsKiosksDestinyKioskItem { 
    /**
     * The index of the item in the related DestinyVendorDefintion\'s itemList property, representing the sale.
     */
    index?: number;
    /**
     * If true, the user can not only see the item, but they can acquire it. It is possible that a user can see a kiosk item and not be able to acquire it.
     */
    canAcquire?: boolean;
    /**
     * Indexes into failureStrings for the Vendor, indicating the reasons why it failed if any.
     */
    failureIndexes?: Array<number>;
    /**
     * I may regret naming it this way - but this represents when an item has an objective that doesn\'t serve a beneficial purpose, but rather is used for \"flavor\" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
     */
    flavorObjective?: DestinyQuestsDestinyObjectiveProgress;
}

