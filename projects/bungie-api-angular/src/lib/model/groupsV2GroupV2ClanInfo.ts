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
import { GroupsV2ClanBanner } from './groupsV2ClanBanner';


/**
 * This contract contains clan-specific group information. It does not include any investment data.
 */
export interface GroupsV2GroupV2ClanInfo { 
    clanCallsign?: string;
    clanBannerData?: GroupsV2ClanBanner;
}

