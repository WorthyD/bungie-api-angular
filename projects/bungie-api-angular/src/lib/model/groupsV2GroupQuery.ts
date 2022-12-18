/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * NOTE: GroupQuery, as of Destiny 2, has essentially two totally different and incompatible \"modes\".  If you are querying for a group, you can pass any of the properties below.  If you are querying for a Clan, you MUST NOT pass any of the following properties (they must be null or undefined in your request, not just empty string/default values):  - groupMemberCountFilter - localeFilter - tagText  If you pass these, you will get a useless InvalidParameters error.
 */
export interface GroupsV2GroupQuery {
  name?: string;
  groupType?: number;
  creationDate?: number;
  sortBy?: number;
  groupMemberCountFilter?: GroupsV2GroupQuery.GroupMemberCountFilterEnum;
  localeFilter?: string;
  tagText?: string;
  itemsPerPage?: number;
  currentPage?: number;
  requestContinuationToken?: string;
}
export namespace GroupsV2GroupQuery {
  export type GroupMemberCountFilterEnum = 0 | 1 | 2 | 3;
  export const GroupMemberCountFilterEnum = {
    NUMBER_0: 0 as GroupMemberCountFilterEnum,
    NUMBER_1: 1 as GroupMemberCountFilterEnum,
    NUMBER_2: 2 as GroupMemberCountFilterEnum,
    NUMBER_3: 3 as GroupMemberCountFilterEnum,
  };
}
