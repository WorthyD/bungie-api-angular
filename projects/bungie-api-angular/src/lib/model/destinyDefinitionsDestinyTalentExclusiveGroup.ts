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


/**
 * As of Destiny 2, nodes can exist as part of \"Exclusive Groups\". These differ from exclusive sets in that, within the group, many nodes can be activated. But the act of activating any node in the group will cause \"opposing\" nodes (nodes in groups that are not allowed to be activated at the same time as this group) to deactivate.
 */
export interface DestinyDefinitionsDestinyTalentExclusiveGroup { 
    /**
     * The identifier for this exclusive group. Only guaranteed unique within the talent grid, not globally.
     */
    groupHash?: number;
    /**
     * If this group has an associated piece of lore to show next to it, this will be the identifier for that DestinyLoreDefinition.
     */
    loreHash?: number;
    /**
     * A quick reference of the talent nodes that are part of this group, by their Talent Node hashes. (See DestinyTalentNodeDefinition.nodeHash)
     */
    nodeHashes?: Array<number>;
    /**
     * A quick reference of Groups whose nodes will be deactivated if any node in this group is activated.
     */
    opposingGroupHashes?: Array<number>;
    /**
     * A quick reference of Nodes that will be deactivated if any node in this group is activated, by their Talent Node hashes. (See DestinyTalentNodeDefinition.nodeHash)
     */
    opposingNodeHashes?: Array<number>;
}

