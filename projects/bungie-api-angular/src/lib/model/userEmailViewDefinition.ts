/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserEmailViewDefinitionSetting } from './userEmailViewDefinitionSetting';


/**
 * Represents a data-driven view for Email settings. Web/Mobile UI can use this data to show new EMail settings consistently without further manual work.
 */
export interface UserEmailViewDefinition { 
    /**
     * The identifier for this view.
     */
    name?: string;
    /**
     * The ordered list of settings to show in this view.
     */
    viewSettings?: Array<UserEmailViewDefinitionSetting>;
}

