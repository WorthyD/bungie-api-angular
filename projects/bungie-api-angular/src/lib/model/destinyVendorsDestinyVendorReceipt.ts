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
import { DestinyVendorsDestinyVendorReceiptItemReceived } from './destinyVendorsDestinyVendorReceiptItemReceived';
import { DestinyDestinyItemQuantity } from './destinyDestinyItemQuantity';


/**
 * If a character purchased an item that is refundable, a Vendor Receipt will be created on the user\'s Destiny Profile. These expire after a configurable period of time, but until then can be used to get refunds on items. BNet does not provide the ability to refund a purchase *yet*, but you know.
 */
export interface DestinyVendorsDestinyVendorReceipt { 
    /**
     * The amount paid for the item, in terms of items that were consumed in the purchase and their quantity.
     */
    currencyPaid?: Array<DestinyDestinyItemQuantity>;
    itemReceived?: DestinyVendorsDestinyVendorReceiptItemReceived;
    /**
     * The unlock flag used to determine whether you still have the purchased item.
     */
    licenseUnlockHash?: number;
    /**
     * The ID of the character who made the purchase.
     */
    purchasedByCharacterId?: number;
    /**
     * Whether you can get a refund, and what happens in order for the refund to be received. See the DestinyVendorItemRefundPolicy enum for details.
     */
    refundPolicy?: number;
    /**
     * The identifier of this receipt.
     */
    sequenceNumber?: number;
    /**
     * The seconds since epoch at which this receipt is rendered invalid.
     */
    timeToExpiration?: number;
    /**
     * The date at which this receipt is rendered invalid.
     */
    expiresOn?: string;
}

