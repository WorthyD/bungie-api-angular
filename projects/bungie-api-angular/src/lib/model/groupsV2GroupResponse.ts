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
import { GroupsV2GroupMember } from './groupsV2GroupMember';
import { GroupsV2GroupV2 } from './groupsV2GroupV2';
import { GroupsV2GroupPotentialMember } from './groupsV2GroupPotentialMember';


export interface GroupsV2GroupResponse { 
    detail?: GroupsV2GroupV2;
    founder?: GroupsV2GroupMember;
    alliedIds?: Array<number>;
    parentGroup?: GroupsV2GroupV2;
    allianceStatus?: number;
    groupJoinInviteCount?: number;
    /**
     * A convenience property that indicates if every membership you (the current user) have that is a part of this group are part of an account that is considered inactive - for example, overridden accounts in Cross Save.
     */
    currentUserMembershipsInactiveForDestiny?: boolean;
    /**
     * This property will be populated if the authenticated user is a member of the group. Note that because of account linking, a user can sometimes be part of a clan more than once. As such, this returns the highest member type available.
     */
    currentUserMemberMap?: { [key: string]: GroupsV2GroupMember; };
    /**
     * This property will be populated if the authenticated user is an applicant or has an outstanding invitation to join. Note that because of account linking, a user can sometimes be part of a clan more than once.
     */
    currentUserPotentialMemberMap?: { [key: string]: GroupsV2GroupPotentialMember; };
}

