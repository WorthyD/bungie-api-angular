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


export interface GroupsV2GroupOptionsEditAction { 
    /**
     * Minimum Member Level allowed to invite new members to group  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don't  Default is false for clans, true for groups.
     */
    invitePermissionOverride?: boolean;
    /**
     * Minimum Member Level allowed to update group culture  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don't  Default is false for clans, true for groups.
     */
    updateCulturePermissionOverride?: boolean;
    /**
     * Minimum Member Level allowed to host guided games  Always Allowed: Founder, Acting Founder, Admin  Allowed Overrides: None, Member, Beginner  Default is Member for clans, None for groups, although this means nothing for groups.
     */
    hostGuidedGamePermissionOverride?: GroupsV2GroupOptionsEditAction.HostGuidedGamePermissionOverrideEnum;
    /**
     * Minimum Member Level allowed to update banner  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don't  Default is false for clans, true for groups.
     */
    updateBannerPermissionOverride?: boolean;
    /**
     * Level to join a member at when accepting an invite, application, or joining an open clan  Default is Beginner.
     */
    joinLevel?: GroupsV2GroupOptionsEditAction.JoinLevelEnum;
}
export namespace GroupsV2GroupOptionsEditAction {
    export type HostGuidedGamePermissionOverrideEnum = 0 | 1 | 2;
    export const HostGuidedGamePermissionOverrideEnum = {
        NUMBER_0: 0 as HostGuidedGamePermissionOverrideEnum,
        NUMBER_1: 1 as HostGuidedGamePermissionOverrideEnum,
        NUMBER_2: 2 as HostGuidedGamePermissionOverrideEnum
    };
    export type JoinLevelEnum = 0 | 1 | 2 | 3 | 4 | 5;
    export const JoinLevelEnum = {
        NUMBER_0: 0 as JoinLevelEnum,
        NUMBER_1: 1 as JoinLevelEnum,
        NUMBER_2: 2 as JoinLevelEnum,
        NUMBER_3: 3 as JoinLevelEnum,
        NUMBER_4: 4 as JoinLevelEnum,
        NUMBER_5: 5 as JoinLevelEnum
    };
}

