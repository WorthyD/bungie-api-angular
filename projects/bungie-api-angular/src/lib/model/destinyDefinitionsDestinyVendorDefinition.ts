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
import { DatesDateRange } from './datesDateRange';
import { DestinyDefinitionsDestinyDisplayCategoryDefinition } from './destinyDefinitionsDestinyDisplayCategoryDefinition';
import { DestinyDefinitionsDestinyVendorAcceptedItemDefinition } from './destinyDefinitionsDestinyVendorAcceptedItemDefinition';
import { DestinyDefinitionsDestinyVendorActionDefinition } from './destinyDefinitionsDestinyVendorActionDefinition';
import { DestinyDefinitionsDestinyVendorCategoryEntryDefinition } from './destinyDefinitionsDestinyVendorCategoryEntryDefinition';
import { DestinyDefinitionsDestinyVendorDisplayPropertiesDefinition } from './destinyDefinitionsDestinyVendorDisplayPropertiesDefinition';
import { DestinyDefinitionsDestinyVendorGroupReference } from './destinyDefinitionsDestinyVendorGroupReference';
import { DestinyDefinitionsDestinyVendorInteractionDefinition } from './destinyDefinitionsDestinyVendorInteractionDefinition';
import { DestinyDefinitionsDestinyVendorInventoryFlyoutDefinition } from './destinyDefinitionsDestinyVendorInventoryFlyoutDefinition';
import { DestinyDefinitionsDestinyVendorItemDefinition } from './destinyDefinitionsDestinyVendorItemDefinition';
import { DestinyDefinitionsDestinyVendorServiceDefinition } from './destinyDefinitionsDestinyVendorServiceDefinition';
import { DestinyDefinitionsVendorsDestinyVendorLocationDefinition } from './destinyDefinitionsVendorsDestinyVendorLocationDefinition';


/**
 * These are the definitions for Vendors.  In Destiny, a Vendor can be a lot of things - some things that you wouldn't expect, and some things that you don't even see directly in the game. Vendors are the Dolly Levi of the Destiny universe.  - Traditional Vendors as you see in game: people who you come up to and who give you quests, rewards, or who you can buy things from.  - Kiosks/Collections, which are really just Vendors that don't charge currency (or charge some pittance of a currency) and whose gating for purchases revolves more around your character's state.  - Previews for rewards or the contents of sacks. These are implemented as Vendors, where you can't actually purchase from them but the items that they have for sale and the categories of sale items reflect the rewards or contents of the sack. This is so that the game could reuse the existing Vendor display UI for rewards and save a bunch of wheel reinvention.  - Item Transfer capabilities, like the Vault and Postmaster. Vendors can have \"acceptedItem\" buckets that determine the source and destination buckets for transfers. When you interact with such a vendor, these buckets are what gets shown in the UI instead of any items that the Vendor would have for sale. Yep, the Vault is a vendor.  It is pretty much guaranteed that they'll be used for even more features in the future. They have come to be seen more as generic categorized containers for items than \"vendors\" in a traditional sense, for better or worse.  Where possible and time allows, we'll attempt to split those out into their own more digestible derived \"Definitions\": but often time does not allow that, as you can see from the above ways that vendors are used which we never split off from Vendor Definitions externally.  Since Vendors are so many things to so many parts of the game, the definition is understandably complex. You will want to combine this data with live Vendor information from the API when it is available.
 */
export interface DestinyDefinitionsDestinyVendorDefinition { 
    displayProperties?: DestinyDefinitionsDestinyVendorDisplayPropertiesDefinition;
    /**
     * If the vendor has a custom localized string describing the \"buy\" action, that is returned here.
     */
    buyString?: string;
    /**
     * Ditto for selling. Not that you can sell items to a vendor anymore. Will it come back? Who knows. The string's still there.
     */
    sellString?: string;
    /**
     * If the vendor has an item that should be displayed as the \"featured\" item, this is the hash identifier for that DestinyVendorItemDefinition.  Apparently this is usually a related currency, like a reputation token. But it need not be restricted to that.
     */
    displayItemHash?: number;
    /**
     * If this is true, you aren't allowed to buy whatever the vendor is selling.
     */
    inhibitBuying?: boolean;
    /**
     * If this is true, you're not allowed to sell whatever the vendor is buying.
     */
    inhibitSelling?: boolean;
    /**
     * If the Vendor has a faction, this hash will be valid and point to a DestinyFactionDefinition.  The game UI and BNet often mine the faction definition for additional elements and details to place on the screen, such as the faction's Progression status (aka \"Reputation\").
     */
    factionHash?: number;
    /**
     * A number used for calculating the frequency of a vendor's inventory resetting/refreshing.  Don't worry about calculating this - we do it on the server side and send you the next refresh date with the live data.
     */
    resetIntervalMinutes?: number;
    /**
     * Again, used for reset/refreshing of inventory. Don't worry too much about it. Unless you want to.
     */
    resetOffsetMinutes?: number;
    /**
     * If an item can't be purchased from the vendor, there may be many \"custom\"/game state specific reasons why not.  This is a list of localized strings with messages for those custom failures. The live BNet data will return a failureIndexes property for items that can't be purchased: using those values to index into this array, you can show the user the appropriate failure message for the item that can't be bought.
     */
    failureStrings?: Array<string>;
    /**
     * If we were able to predict the dates when this Vendor will be visible/available, this will be the list of those date ranges. Sadly, we're not able to predict this very frequently, so this will often be useless data.
     */
    unlockRanges?: Array<DatesDateRange>;
    /**
     * The internal identifier for the Vendor. A holdover from the old days of Vendors, but we don't have time to refactor it away.
     */
    vendorIdentifier?: string;
    /**
     * A portrait of the Vendor's smiling mug. Or frothing tentacles.
     */
    vendorPortrait?: string;
    /**
     * If the vendor has a custom banner image, that can be found here.
     */
    vendorBanner?: string;
    /**
     * If a vendor is not enabled, we won't even save the vendor's definition, and we won't return any items or info about them. It's as if they don't exist.
     */
    enabled?: boolean;
    /**
     * If a vendor is not visible, we still have and will give vendor definition info, but we won't use them for things like Advisors or UI.
     */
    visible?: boolean;
    /**
     * The identifier of the VendorCategoryDefinition for this vendor's subcategory.
     */
    vendorSubcategoryIdentifier?: string;
    /**
     * If TRUE, consolidate categories that only differ by trivial properties (such as having minor differences in name)
     */
    consolidateCategories?: boolean;
    /**
     * Describes \"actions\" that can be performed on a vendor. Currently, none of these exist. But theoretically a Vendor could let you interact with it by performing actions. We'll see what these end up looking like if they ever get used.
     */
    actions?: Array<DestinyDefinitionsDestinyVendorActionDefinition>;
    /**
     * These are the headers for sections of items that the vendor is selling. When you see items organized by category in the header, it is these categories that it is showing.  Well, technically not *exactly* these. On BNet, it doesn't make sense to have categories be \"paged\" as we do in Destiny, so we run some heuristics to attempt to aggregate pages of categories together.   These are the categories post-concatenation, if the vendor had concatenation applied. If you want the pre-aggregated category data, use originalCategories.
     */
    categories?: Array<DestinyDefinitionsDestinyVendorCategoryEntryDefinition>;
    /**
     * See the categories property for a description of categories and why originalCategories exists.
     */
    originalCategories?: Array<DestinyDefinitionsDestinyVendorCategoryEntryDefinition>;
    /**
     * Display Categories are different from \"categories\" in that these are specifically for visual grouping and display of categories in Vendor UI.   The \"categories\" structure is for validation of the contained items, and can be categorized entirely separately from \"Display Categories\", there need be and often will be no meaningful relationship between the two.
     */
    displayCategories?: Array<DestinyDefinitionsDestinyDisplayCategoryDefinition>;
    /**
     * In addition to selling items, vendors can have \"interactions\": UI where you \"talk\" with the vendor and they offer you a reward, some item, or merely acknowledge via dialog that you did something cool.
     */
    interactions?: Array<DestinyDefinitionsDestinyVendorInteractionDefinition>;
    /**
     * If the vendor shows you items from your own inventory - such as the Vault vendor does - this data describes the UI around showing those inventory buckets and which ones get shown.
     */
    inventoryFlyouts?: Array<DestinyDefinitionsDestinyVendorInventoryFlyoutDefinition>;
    /**
     * If the vendor sells items (or merely has a list of items to show like the \"Sack\" vendors do), this is the list of those items that the vendor can sell. From this list, only a subset will be available from the vendor at any given time, selected randomly and reset on the vendor's refresh interval.  Note that a vendor can sell the same item multiple ways: for instance, nothing stops a vendor from selling you some specific weapon but using two different currencies, or the same weapon at multiple \"item levels\".
     */
    itemList?: Array<DestinyDefinitionsDestinyVendorItemDefinition>;
    /**
     * BNet doesn't use this data yet, but it appears to be an optional list of flavor text about services that the Vendor can provide.
     */
    services?: Array<DestinyDefinitionsDestinyVendorServiceDefinition>;
    /**
     * If the Vendor is actually a vehicle for the transferring of items (like the Vault and Postmaster vendors), this defines the list of source->destination buckets for transferring.
     */
    acceptedItems?: Array<DestinyDefinitionsDestinyVendorAcceptedItemDefinition>;
    /**
     * As many of you know, Vendor data has historically been pretty brutal on the BNet servers. In an effort to reduce this workload, only Vendors with this flag set will be returned on Vendor requests. This allows us to filter out Vendors that don't dynamic data that's particularly useful: things like \"Preview/Sack\" vendors, for example, that you can usually suss out the details for using just the definitions themselves.
     */
    returnWithVendorRequest?: boolean;
    /**
     * A vendor can be at different places in the world depending on the game/character/account state. This is the list of possible locations for the vendor, along with conditions we use to determine which one is currently active.
     */
    locations?: Array<DestinyDefinitionsVendorsDestinyVendorLocationDefinition>;
    /**
     * A vendor can be a part of 0 or 1 \"groups\" at a time: a group being a collection of Vendors related by either location or function/purpose. It's used for our our Companion Vendor UI. Only one of these can be active for a Vendor at a time.
     */
    groups?: Array<DestinyDefinitionsDestinyVendorGroupReference>;
    /**
     * Some items don't make sense to return in the API, for example because they represent an action to be performed rather than an item being sold. I'd rather we not do this, but at least in the short term this is a workable workaround.
     */
    ignoreSaleItemHashes?: Array<number>;
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

