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


/**
 * The member levels used by all V2 Groups API. Individual group types use their own mappings in their native storage (general uses BnetDbGroupMemberType and D2 clans use ClanMemberLevel), but they are all translated to this in the runtime api. These runtime values should NEVER be stored anywhere, so the values can be changed as necessary.
 */
export type GroupsV2RuntimeGroupMemberType = 0 | 1 | 2 | 3 | 4 | 5;

export const GroupsV2RuntimeGroupMemberType = {
    NUMBER_0: 0 as GroupsV2RuntimeGroupMemberType,
    NUMBER_1: 1 as GroupsV2RuntimeGroupMemberType,
    NUMBER_2: 2 as GroupsV2RuntimeGroupMemberType,
    NUMBER_3: 3 as GroupsV2RuntimeGroupMemberType,
    NUMBER_4: 4 as GroupsV2RuntimeGroupMemberType,
    NUMBER_5: 5 as GroupsV2RuntimeGroupMemberType
};
