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
import { UserUserInfoCard } from './userUserInfoCard';


/**
 * Basic info about the account that failed. Don\'t expect anything other than membership ID, Membership Type, and displayName to be populated.
 */
export interface DestinyResponsesDestinyErrorProfileInfoCard { 
    /**
     * A platform specific additional display name - ex: psn Real Name, bnet Unique Name, etc.
     */
    supplementalDisplayName?: string;
    /**
     * URL the Icon if available.
     */
    iconPath?: string;
    /**
     * If there is a cross save override in effect, this value will tell you the type that is overridding this one.
     */
    crossSaveOverride?: number;
    /**
     * The list of Membership Types indicating the platforms on which this Membership can be used.   Not in Cross Save = its original membership type. Cross Save Primary = Any membership types it is overridding, and its original membership type Cross Save Overridden = Empty list
     */
    applicableMembershipTypes?: Array<number>;
    /**
     * If True, this is a public user membership.
     */
    isPublic?: boolean;
    /**
     * Type of the membership. Not necessarily the native type.
     */
    membershipType?: number;
    /**
     * Membership ID as they user is known in the Accounts service
     */
    membershipId?: number;
    /**
     * Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
     */
    displayName?: string;
    /**
     * The bungie global display name, if set.
     */
    bungieGlobalDisplayName?: string;
    /**
     * The bungie global display name code, if set.
     */
    bungieGlobalDisplayNameCode?: number;
}

