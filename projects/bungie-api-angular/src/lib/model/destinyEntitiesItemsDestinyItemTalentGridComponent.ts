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
import { DestinyDestinyProgression } from './destinyDestinyProgression';
import { DestinyDestinyTalentNode } from './destinyDestinyTalentNode';


/**
 * Well, we're here in Destiny 2, and Talent Grids are unfortunately still around.  The good news is that they're pretty much only being used for certain base information on items and for Builds/Subclasses. The bad news is that they still suck. If you really want this information, grab this component.  An important note is that talent grids are defined as such:  A Grid has 1:M Nodes, which has 1:M Steps.  Any given node can only have a single step active at one time, which represents the actual visual contents and effects of the Node (for instance, if you see a \"Super Cool Bonus\" node, the actual icon and text for the node is coming from the current Step of that node).  Nodes can be grouped into exclusivity sets *and* as of D2, exclusivity groups (which are collections of exclusivity sets that affect each other).  See DestinyTalentGridDefinition for more information. Brace yourself, the water's cold out there in the deep end.
 */
export interface DestinyEntitiesItemsDestinyItemTalentGridComponent { 
    /**
     * Most items don't have useful talent grids anymore, but Builds in particular still do.  You can use this hash to lookup the DestinyTalentGridDefinition attached to this item, which will be crucial for understanding the node values on the item.
     */
    talentGridHash?: number;
    /**
     * Detailed information about the individual nodes in the talent grid.  A node represents a single visual \"pip\" in the talent grid or Build detail view, though each node may have multiple \"steps\" which indicate the actual bonuses and visual representation of that node.
     */
    nodes?: Array<DestinyDestinyTalentNode>;
    /**
     * Indicates whether the talent grid on this item is completed, and thus whether it should have a gold border around it.  Only will be true if the item actually *has* a talent grid, and only then if it is completed (i.e. every exclusive set has an activated node, and every non-exclusive set node has been activated)
     */
    isGridComplete?: boolean;
    /**
     * If the item has a progression, it will be detailed here. A progression means that the item can gain experience. Thresholds of experience are what determines whether and when a talent node can be activated.
     */
    gridProgression?: DestinyDestinyProgression;
}

