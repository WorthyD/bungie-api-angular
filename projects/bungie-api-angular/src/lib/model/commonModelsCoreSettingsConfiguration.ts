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
import { CommonModelsCoreSetting } from './commonModelsCoreSetting';
import { CommonModelsCoreSystem } from './commonModelsCoreSystem';
import { CommonModelsDestiny2CoreSettings } from './commonModelsDestiny2CoreSettings';
import { UserEmailSettings } from './userEmailSettings';


export interface CommonModelsCoreSettingsConfiguration { 
    environment?: string;
    systems?: { [key: string]: CommonModelsCoreSystem; };
    ignoreReasons?: Array<CommonModelsCoreSetting>;
    forumCategories?: Array<CommonModelsCoreSetting>;
    groupAvatars?: Array<CommonModelsCoreSetting>;
    destinyMembershipTypes?: Array<CommonModelsCoreSetting>;
    recruitmentPlatformTags?: Array<CommonModelsCoreSetting>;
    recruitmentMiscTags?: Array<CommonModelsCoreSetting>;
    recruitmentActivities?: Array<CommonModelsCoreSetting>;
    userContentLocales?: Array<CommonModelsCoreSetting>;
    systemContentLocales?: Array<CommonModelsCoreSetting>;
    clanBannerDecals?: Array<CommonModelsCoreSetting>;
    clanBannerDecalColors?: Array<CommonModelsCoreSetting>;
    clanBannerGonfalons?: Array<CommonModelsCoreSetting>;
    clanBannerGonfalonColors?: Array<CommonModelsCoreSetting>;
    clanBannerGonfalonDetails?: Array<CommonModelsCoreSetting>;
    clanBannerGonfalonDetailColors?: Array<CommonModelsCoreSetting>;
    clanBannerStandards?: Array<CommonModelsCoreSetting>;
    destiny2CoreSettings?: CommonModelsDestiny2CoreSettings;
    emailSettings?: UserEmailSettings;
    fireteamActivities?: Array<CommonModelsCoreSetting>;
}

