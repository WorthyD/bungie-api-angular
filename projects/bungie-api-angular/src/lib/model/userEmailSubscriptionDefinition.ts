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
import { UserEMailSettingSubscriptionLocalization } from './userEMailSettingSubscriptionLocalization';


/**
 * Defines a single subscription: permission to send emails for a specific, focused subject (generally timeboxed, such as for a specific release of a product or feature).
 */
export interface UserEmailSubscriptionDefinition { 
    /**
     * The unique identifier for this subscription.
     */
    name?: string;
    /**
     * A dictionary of localized text for the EMail Opt-in setting, keyed by the locale.
     */
    localization?: { [key: string]: UserEMailSettingSubscriptionLocalization; };
    /**
     * The bitflag value for this subscription. Should be a unique power of two value.
     */
    value?: number;
}

