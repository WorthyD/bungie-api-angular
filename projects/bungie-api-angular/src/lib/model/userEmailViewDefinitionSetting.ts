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
import { UserEMailSettingLocalization } from './userEMailSettingLocalization';
import { UserEmailSubscriptionDefinition } from './userEmailSubscriptionDefinition';


export interface UserEmailViewDefinitionSetting { 
    /**
     * The identifier for this UI Setting, which can be used to relate it to custom strings or other data as desired.
     */
    name?: string;
    /**
     * A dictionary of localized text for the EMail setting, keyed by the locale.
     */
    localization?: { [key: string]: UserEMailSettingLocalization; };
    /**
     * If true, this setting should be set by default if the user hasn\'t chosen whether it\'s set or cleared yet.
     */
    setByDefault?: boolean;
    /**
     * The OptInFlags value to set or clear if this setting is set or cleared in the UI. It is the aggregate of all underlying opt-in flags related to this setting.
     */
    optInAggregateValue?: number;
    /**
     * The subscriptions to show as children of this setting, if any.
     */
    subscriptions?: Array<UserEmailSubscriptionDefinition>;
}

