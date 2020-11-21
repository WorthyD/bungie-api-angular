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
import { ApplicationsApplicationDeveloper } from './applicationsApplicationDeveloper';


export interface ApplicationsApplication { 
    /**
     * Unique ID assigned to the application
     */
    applicationId?: number;
    /**
     * Name of the application
     */
    name?: string;
    /**
     * URL used to pass the user's authorization code to the application
     */
    redirectUrl?: string;
    /**
     * Link to website for the application where a user can learn more about the app.
     */
    link?: string;
    /**
     * Permissions the application needs to work
     */
    scope?: number;
    /**
     * Value of the Origin header sent in requests generated by this application.
     */
    origin?: string;
    /**
     * Current status of the application.
     */
    status?: number;
    /**
     * Date the application was first added to our database.
     */
    creationDate?: Date;
    /**
     * Date the application status last changed.
     */
    statusChanged?: Date;
    /**
     * Date the first time the application status entered the 'Public' status.
     */
    firstPublished?: Date;
    /**
     * List of team members who manage this application on Bungie.net. Will always consist of at least the application owner.
     */
    team?: Array<ApplicationsApplicationDeveloper>;
}

