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
import { DestinyComponentsRecordsDestinyRecordComponent } from './destinyComponentsRecordsDestinyRecordComponent';


export interface DestinyComponentsRecordsDestinyProfileRecordsComponent { 
    /**
     * Your \'active\' Triumphs score, maintained for backwards compatibility.
     */
    score?: number;
    /**
     * Your \'active\' Triumphs score.
     */
    activeScore?: number;
    /**
     * Your \'legacy\' Triumphs score.
     */
    legacyScore?: number;
    /**
     * Your \'lifetime\' Triumphs score.
     */
    lifetimeScore?: number;
    /**
     * If this profile is tracking a record, this is the hash identifier of the record it is tracking.
     */
    trackedRecordHash?: number;
    records?: { [key: string]: DestinyComponentsRecordsDestinyRecordComponent; };
    /**
     * The hash for the root presentation node definition of Triumph categories.
     */
    recordCategoriesRootNodeHash?: number;
    /**
     * The hash for the root presentation node definition of Triumph Seals.
     */
    recordSealsRootNodeHash?: number;
}

