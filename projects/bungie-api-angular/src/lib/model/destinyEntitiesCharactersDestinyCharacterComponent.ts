/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor } from "./destinyEntitiesCharactersDestinyCharacterComponentEmblemColor";
import { DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression } from "./destinyEntitiesCharactersDestinyCharacterComponentLevelProgression";

/**
 * This component contains base properties of the character. You\'ll probably want to always request this component, but hey you do you.
 */
export interface DestinyEntitiesCharactersDestinyCharacterComponent {
  /**
   * Every Destiny Profile has a membershipId. This is provided on the character as well for convenience.
   */
  membershipId?: number;
  /**
   * membershipType tells you the platform on which the character plays. Examine the BungieMembershipType enumeration for possible values.
   */
  membershipType?: number;
  /**
   * The unique identifier for the character.
   */
  characterId?: number;
  /**
   * The last date that the user played Destiny.
   */
  dateLastPlayed?: string;
  /**
   * If the user is currently playing, this is how long they\'ve been playing.
   */
  minutesPlayedThisSession?: number;
  /**
   * If this value is 525,600, then they played Destiny for a year. Or they\'re a very dedicated Rent fan. Note that this includes idle time, not just time spent actually in activities shooting things.
   */
  minutesPlayedTotal?: number;
  /**
   * The user\'s calculated \"Light Level\". Light level is an indicator of your power that mostly matters in the end game, once you\'ve reached the maximum character level: it\'s a level that\'s dependent on the average Attack/Defense power of your items.
   */
  light?: number;
  /**
   * Your character\'s stats, such as Agility, Resilience, etc... *not* historical stats.  You\'ll have to call a different endpoint for those.
   */
  stats?: { [key: string]: number };
  /**
   * Use this hash to look up the character\'s DestinyRaceDefinition.
   */
  raceHash?: number;
  /**
   * Use this hash to look up the character\'s DestinyGenderDefinition.
   */
  genderHash?: number;
  /**
   * Use this hash to look up the character\'s DestinyClassDefinition.
   */
  classHash?: number;
  /**
   * Mostly for historical purposes at this point, this is an enumeration for the character\'s race.  It\'ll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove.
   */
  raceType?: number;
  /**
   * Mostly for historical purposes at this point, this is an enumeration for the character\'s class.  It\'ll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove.
   */
  classType?: number;
  /**
   * Mostly for historical purposes at this point, this is an enumeration for the character\'s Gender.  It\'ll be preferable in the general case to look up the related definition: but for some people this was too convenient to remove. And yeah, it\'s an enumeration and not a boolean. Fight me.
   */
  genderType?: number;
  /**
   * A shortcut path to the user\'s currently equipped emblem image. If you\'re just showing summary info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
   */
  emblemPath?: string;
  /**
   * A shortcut path to the user\'s currently equipped emblem background image. If you\'re just showing summary info for a user, this is more convenient than examining their equipped emblem and looking up the definition.
   */
  emblemBackgroundPath?: string;
  /**
   * The hash of the currently equipped emblem for the user. Can be used to look up the DestinyInventoryItemDefinition.
   */
  emblemHash?: number;
  emblemColor?: DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor;
  levelProgression?: DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression;
  /**
   * The \"base\" level of your character, not accounting for any light level.
   */
  baseCharacterLevel?: number;
  /**
   * A number between 0 and 100, indicating the whole and fractional % remaining to get to the next character level.
   */
  percentToNextLevel?: number;
  /**
   * If this Character has a title assigned to it, this is the identifier of the DestinyRecordDefinition that has that title information.
   */
  titleRecordHash?: number;
}
