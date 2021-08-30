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
import { GroupsV2GroupUserInfoCard } from './groupsV2GroupUserInfoCard';
import { UserUserInfoCard } from './userUserInfoCard';


export interface GroupsV2GroupBan { 
    groupId?: number;
    lastModifiedBy?: UserUserInfoCard;
    createdBy?: UserUserInfoCard;
    dateBanned?: string;
    dateExpires?: string;
    comment?: string;
    bungieNetUserInfo?: UserUserInfoCard;
    destinyUserInfo?: GroupsV2GroupUserInfoCard;
}

