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
import { DestinyConfigGearAssetDataBaseDefinition } from './destinyConfigGearAssetDataBaseDefinition';
import { DestinyConfigImagePyramidEntry } from './destinyConfigImagePyramidEntry';


/**
 * DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
 */
export interface DestinyConfigDestinyManifest { 
    version?: string;
    mobileAssetContentPath?: string;
    mobileGearAssetDataBases?: Array<DestinyConfigGearAssetDataBaseDefinition>;
    mobileWorldContentPaths?: { [key: string]: string; };
    /**
     * This points to the generated JSON that contains all the Definitions. Each key is a locale. The value is a path to the aggregated world definitions (warning: large file!)
     */
    jsonWorldContentPaths?: { [key: string]: string; };
    /**
     * This points to the generated JSON that contains all the Definitions. Each key is a locale. The value is a dictionary, where the key is a definition type by name, and the value is the path to the file for that definition. WARNING: This is unsafe and subject to change - do not depend on data in these files staying around long-term.
     */
    jsonWorldComponentContentPaths?: { [key: string]: { [key: string]: string; }; };
    mobileClanBannerDatabasePath?: string;
    mobileGearCDN?: { [key: string]: string; };
    /**
     * Information about the \"Image Pyramid\" for Destiny icons. Where possible, we create smaller versions of Destiny icons. These are found as subfolders under the location of the \"original/full size\" Destiny images, with the same file name and extension as the original image itself. (this lets us avoid sending largely redundant path info with every entity, at the expense of the smaller versions of the image being less discoverable)
     */
    iconImagePyramidInfo?: Array<DestinyConfigImagePyramidEntry>;
}

