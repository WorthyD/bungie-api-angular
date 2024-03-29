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
import { DestinyDefinitionsSocketsDestinyPlugWhitelistEntryDefinition } from './destinyDefinitionsSocketsDestinyPlugWhitelistEntryDefinition';
import { DestinyDefinitionsSocketsDestinySocketTypeScalarMaterialRequirementEntry } from './destinyDefinitionsSocketsDestinySocketTypeScalarMaterialRequirementEntry';
import { DestinyDefinitionsSocketsDestinySocketTypeDefinitionDisplayProperties } from './destinyDefinitionsSocketsDestinySocketTypeDefinitionDisplayProperties';
import { DestinyDefinitionsSocketsDestinySocketTypeDefinitionInsertAction } from './destinyDefinitionsSocketsDestinySocketTypeDefinitionInsertAction';


/**
 * All Sockets have a \"Type\": a set of common properties that determine when the socket allows Plugs to be inserted, what Categories of Plugs can be inserted, and whether the socket is even visible at all given the current game/character/account state.  See DestinyInventoryItemDefinition for more information about Socketed items and Plugs.
 */
export interface DestinyDefinitionsSocketsDestinySocketTypeDefinition { 
    displayProperties?: DestinyDefinitionsSocketsDestinySocketTypeDefinitionDisplayProperties;
    insertAction?: DestinyDefinitionsSocketsDestinySocketTypeDefinitionInsertAction;
    /**
     * A list of Plug \"Categories\" that are allowed to be plugged into sockets of this type.  These should be compared against a given plug item\'s DestinyInventoryItemDefinition.plug.plugCategoryHash, which indicates the plug item\'s category.  If the plug\'s category matches any whitelisted plug, or if the whitelist is empty, it is allowed to be inserted.
     */
    plugWhitelist?: Array<DestinyDefinitionsSocketsDestinyPlugWhitelistEntryDefinition>;
    socketCategoryHash?: number;
    /**
     * Sometimes a socket isn\'t visible. These are some of the conditions under which sockets of this type are not visible. Unfortunately, the truth of visibility is much, much more complex. Best to rely on the live data for whether the socket is visible and enabled.
     */
    visibility?: number;
    alwaysRandomizeSockets?: boolean;
    isPreviewEnabled?: boolean;
    hideDuplicateReusablePlugs?: boolean;
    /**
     * This property indicates if the socket type determines whether Emblem icons and nameplates should be overridden by the inserted plug item\'s icon and nameplate.
     */
    overridesUiAppearance?: boolean;
    avoidDuplicatesOnInitialization?: boolean;
    currencyScalars?: Array<DestinyDefinitionsSocketsDestinySocketTypeScalarMaterialRequirementEntry>;
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to.
     */
    hash?: number;
    /**
     * The index of the entity as it was found in the investment tables.
     */
    index?: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
     */
    redacted?: boolean;
}

