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
 * A Flags Enumeration/bitmask where each bit represents a different state that the Collectible can be in. A collectible can be in any number of these states, and you can choose to use or ignore any or all of them when making your own UI that shows Collectible info. Our displays are going to honor them, but we\'re also the kind of people who only pretend to inhale before quickly passing it to the left. So, you know, do what you got to do.  (All joking aside, please note the caveat I mention around the Invisible flag: there are cases where it is in the best interest of your users to honor these flags even if you\'re a \"show all the data\" person. Collector-oriented compulsion is a very unfortunate and real thing, and I would hate to instill that compulsion in others through showing them items that they cannot earn. Please consider this when you are making your own apps/sites.)
 */
export type DestinyDestinyCollectibleState = 0 | 1 | 2 | 4 | 8 | 16 | 32 | 64;

export const DestinyDestinyCollectibleState = {
    NUMBER_0: 0 as DestinyDestinyCollectibleState,
    NUMBER_1: 1 as DestinyDestinyCollectibleState,
    NUMBER_2: 2 as DestinyDestinyCollectibleState,
    NUMBER_4: 4 as DestinyDestinyCollectibleState,
    NUMBER_8: 8 as DestinyDestinyCollectibleState,
    NUMBER_16: 16 as DestinyDestinyCollectibleState,
    NUMBER_32: 32 as DestinyDestinyCollectibleState,
    NUMBER_64: 64 as DestinyDestinyCollectibleState
};

