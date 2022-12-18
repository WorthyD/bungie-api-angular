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
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from './destinyDefinitionsCommonDestinyDisplayPropertiesDefinition';
import { DestinyDefinitionsDestinyArtDyeReference } from './destinyDefinitionsDestinyArtDyeReference';


/**
 * Characters can not only have Inventory buckets (containers of items that are generally matched by their type or functionality), they can also have Equipment Slots.  The Equipment Slot is an indicator that the related bucket can have instanced items equipped on the character. For instance, the Primary Weapon bucket has an Equipment Slot that determines whether you can equip primary weapons, and holds the association between its slot and the inventory bucket from which it can have items equipped.  An Equipment Slot must have a related Inventory Bucket, but not all inventory buckets must have Equipment Slots.
 */
export interface DestinyDefinitionsDestinyEquipmentSlotDefinition { 
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * These technically point to \"Equipment Category Definitions\". But don\'t get excited. There\'s nothing of significant value in those definitions, so I didn\'t bother to expose them. You can use the hash here to group equipment slots by common functionality, which serves the same purpose as if we had the Equipment Category definitions exposed.
     */
    equipmentCategoryHash?: number;
    /**
     * The inventory bucket that owns this equipment slot.
     */
    bucketTypeHash?: number;
    /**
     * If True, equipped items should have their custom art dyes applied when rendering the item. Otherwise, custom art dyes on an item should be ignored if the item is equipped in this slot.
     */
    applyCustomArtDyes?: boolean;
    /**
     * The Art Dye Channels that apply to this equipment slot.
     */
    artDyeChannels?: Array<DestinyDefinitionsDestinyArtDyeReference>;
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

