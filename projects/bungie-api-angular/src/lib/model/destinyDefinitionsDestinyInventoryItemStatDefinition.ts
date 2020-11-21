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


/**
 * Defines a specific stat value on an item, and the minimum/maximum range that we could compute for the item based on our heuristics for how the item might be generated.  Not guaranteed to match real-world instances of the item, but should hopefully at least be close. If it's not close, let us know on the Bungie API forums.
 */
export interface DestinyDefinitionsDestinyInventoryItemStatDefinition { 
    /**
     * The hash for the DestinyStatDefinition representing this stat.
     */
    statHash?: number;
    /**
     * This value represents the stat value assuming the minimum possible roll but accounting for any mandatory bonuses that should be applied to the stat on item creation.  In Destiny 1, this was different from the \"minimum\" value because there were certain conditions where an item could be theoretically lower level/value than the initial roll.   In Destiny 2, this is not possible unless Talent Grids begin to be used again for these purposes or some other system change occurs... thus in practice, value and minimum should be the same in Destiny 2. Good riddance.
     */
    value?: number;
    /**
     * The minimum possible value for this stat that we think the item can roll.
     */
    minimum?: number;
    /**
     * The maximum possible value for this stat that we think the item can roll.  WARNING: In Destiny 1, this field was calculated using the potential stat rolls on the item's talent grid. In Destiny 2, items no longer have meaningful talent grids and instead have sockets: but the calculation of this field was never altered to adapt to this change. As such, this field should be considered deprecated until we can address this oversight.
     */
    maximum?: number;
    /**
     * The maximum possible value for the stat as shown in the UI, if it is being shown somewhere that reveals maximum in the UI (such as a bar chart-style view).  This is pulled directly from the item's DestinyStatGroupDefinition, and placed here for convenience.  If not returned, there is no maximum to use (and thus the stat should not be shown in a way that assumes there is a limit to the stat)
     */
    displayMaximum?: number;
}

