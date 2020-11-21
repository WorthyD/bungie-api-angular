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


export interface TokensPartnerOfferHistoryResponse { 
    partnerOfferKey?: string;
    membershipId?: number;
    membershipType?: TokensPartnerOfferHistoryResponse.MembershipTypeEnum;
    localizedName?: string;
    localizedDescription?: string;
    isConsumable?: boolean;
    quantityApplied?: number;
    applyDate?: Date;
}
export namespace TokensPartnerOfferHistoryResponse {
    export type MembershipTypeEnum = 0 | 1 | 2 | 3 | 4 | 5 | 10 | 254 | -1;
    export const MembershipTypeEnum = {
        NUMBER_0: 0 as MembershipTypeEnum,
        NUMBER_1: 1 as MembershipTypeEnum,
        NUMBER_2: 2 as MembershipTypeEnum,
        NUMBER_3: 3 as MembershipTypeEnum,
        NUMBER_4: 4 as MembershipTypeEnum,
        NUMBER_5: 5 as MembershipTypeEnum,
        NUMBER_10: 10 as MembershipTypeEnum,
        NUMBER_254: 254 as MembershipTypeEnum,
        NUMBER_MINUS_1: -1 as MembershipTypeEnum
    };
}

