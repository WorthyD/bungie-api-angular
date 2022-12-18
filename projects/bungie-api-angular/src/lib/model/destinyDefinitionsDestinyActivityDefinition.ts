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
import { DestinyDefinitionsDestinyActivityDefinitionDisplayProperties } from "./destinyDefinitionsDestinyActivityDefinitionDisplayProperties";
import { DestinyDefinitionsDestinyActivityDefinitionSelectionScreenDisplayProperties } from "./destinyDefinitionsDestinyActivityDefinitionSelectionScreenDisplayProperties";
import { DestinyDefinitionsDestinyActivityModifierReferenceDefinition } from "./destinyDefinitionsDestinyActivityModifierReferenceDefinition";
import { DestinyConstantsDestinyEnvironmentLocationMapping } from "./destinyConstantsDestinyEnvironmentLocationMapping";
import { DestinyDefinitionsDestinyActivityGraphListEntryDefinition } from "./destinyDefinitionsDestinyActivityGraphListEntryDefinition";
import { DestinyDefinitionsDestinyActivityLoadoutRequirementSet } from "./destinyDefinitionsDestinyActivityLoadoutRequirementSet";
import { DestinyDefinitionsDestinyActivityDefinitionGuidedGame } from "./destinyDefinitionsDestinyActivityDefinitionGuidedGame";
import { DestinyDefinitionsDestinyActivityUnlockStringDefinition } from "./destinyDefinitionsDestinyActivityUnlockStringDefinition";
import { DestinyDefinitionsDestinyActivityDefinitionMatchmaking } from "./destinyDefinitionsDestinyActivityDefinitionMatchmaking";
import { DestinyDefinitionsDestinyActivityDefinitionOriginalDisplayProperties } from "./destinyDefinitionsDestinyActivityDefinitionOriginalDisplayProperties";
import { DestinyDefinitionsDestinyActivityRewardDefinition } from "./destinyDefinitionsDestinyActivityRewardDefinition";
import { DestinyDefinitionsDestinyActivityChallengeDefinition } from "./destinyDefinitionsDestinyActivityChallengeDefinition";
import { DestinyDefinitionsDestinyActivityInsertionPointDefinition } from "./destinyDefinitionsDestinyActivityInsertionPointDefinition";
import { DestinyDefinitionsDestinyActivityPlaylistItemDefinition } from "./destinyDefinitionsDestinyActivityPlaylistItemDefinition";

/**
 * The static data about Activities in Destiny 2.  Note that an Activity must be combined with an ActivityMode to know - from a Gameplay perspective - what the user is \"Playing\".  In most PvE activities, this is fairly straightforward. A Story Activity can only be played in the Story Activity Mode.  However, in PvP activities, the Activity alone only tells you the map being played, or the Playlist that the user chose to enter. You\'ll need to know the Activity Mode they\'re playing to know that they\'re playing Mode X on Map Y.  Activity Definitions tell a great deal of information about what *could* be relevant to a user: what rewards they can earn, what challenges could be performed, what modifiers could be applied. To figure out which of these properties is actually live, you\'ll need to combine the definition with \"Live\" data from one of the Destiny endpoints.  Activities also have Activity Types, but unfortunately in Destiny 2 these are even less reliable of a source of information than they were in Destiny 1. I will be looking into ways to provide more reliable sources for type information as time goes on, but for now we\'re going to have to deal with the limitations. See DestinyActivityTypeDefinition for more information.
 */
export interface DestinyDefinitionsDestinyActivityDefinition {
  displayProperties?: DestinyDefinitionsDestinyActivityDefinitionDisplayProperties;
  originalDisplayProperties?: DestinyDefinitionsDestinyActivityDefinitionOriginalDisplayProperties;
  selectionScreenDisplayProperties?: DestinyDefinitionsDestinyActivityDefinitionSelectionScreenDisplayProperties;
  /**
   * If the activity has an icon associated with a specific release (such as a DLC), this is the path to that release\'s icon.
   */
  releaseIcon?: string;
  /**
   * If the activity will not be visible until a specific and known time, this will be the seconds since the Epoch when it will become visible.
   */
  releaseTime?: number;
  /**
   * The recommended light level for this activity.
   */
  activityLightLevel?: number;
  /**
   * The hash identifier for the Destination on which this Activity is played. Use it to look up the DestinyDestinationDefinition for human readable info about the destination. A Destination can be thought of as a more specific location than a \"Place\". For instance, if the \"Place\" is Earth, the \"Destination\" would be a specific city or region on Earth.
   */
  destinationHash?: number;
  /**
   * The hash identifier for the \"Place\" on which this Activity is played. Use it to look up the DestinyPlaceDefinition for human readable info about the Place. A Place is the largest-scoped concept for location information. For instance, if the \"Place\" is Earth, the \"Destination\" would be a specific city or region on Earth.
   */
  placeHash?: number;
  /**
   * The hash identifier for the Activity Type of this Activity. You may use it to look up the DestinyActivityTypeDefinition for human readable info, but be forewarned: Playlists and many PVP Map Activities will map to generic Activity Types. You\'ll have to use your knowledge of the Activity Mode being played to get more specific information about what the user is playing.
   */
  activityTypeHash?: number;
  /**
   * The difficulty tier of the activity.
   */
  tier?: number;
  /**
   * When Activities are completed, we generate a \"Post-Game Carnage Report\", or PGCR, with details about what happened in that activity (how many kills someone got, which team won, etc...) We use this image as the background when displaying PGCR information, and often use it when we refer to the Activity in general.
   */
  pgcrImage?: string;
  /**
   * The expected possible rewards for the activity. These rewards may or may not be accessible for an individual player based on their character state, the account state, and even the game\'s state overall. But it is a useful reference for possible rewards you can earn in the activity. These match up to rewards displayed when you hover over the Activity in the in-game Director, and often refer to Placeholder or \"Dummy\" items: items that tell you what you can earn in vague terms rather than what you\'ll specifically be earning (partly because the game doesn\'t even know what you\'ll earn specifically until you roll for it at the end)
   */
  rewards?: Array<DestinyDefinitionsDestinyActivityRewardDefinition>;
  /**
   * Activities can have Modifiers, as defined in DestinyActivityModifierDefinition. These are references to the modifiers that *can* be applied to that activity, along with data that we use to determine if that modifier is actually active at any given point in time.
   */
  modifiers?: Array<DestinyDefinitionsDestinyActivityModifierReferenceDefinition>;
  /**
   * If True, this Activity is actually a Playlist that refers to multiple possible specific Activities and Activity Modes. For instance, a Crucible Playlist may have references to multiple Activities (Maps) with multiple Activity Modes (specific PvP gameplay modes). If this is true, refer to the playlistItems property for the specific entries in the playlist.
   */
  isPlaylist?: boolean;
  /**
   * An activity can have many Challenges, of which any subset of them may be active for play at any given period of time. This gives the information about the challenges and data that we use to understand when they\'re active and what rewards they provide. Sadly, at the moment there\'s no central definition for challenges: much like \"Skulls\" were in Destiny 1, these are defined on individual activities and there can be many duplicates/near duplicates across the Destiny 2 ecosystem. I have it in mind to centralize these in a future revision of the API, but we are out of time.
   */
  challenges?: Array<DestinyDefinitionsDestinyActivityChallengeDefinition>;
  /**
   * If there are status strings related to the activity and based on internal state of the game, account, or character, then this will be the definition of those strings and the states needed in order for the strings to be shown.
   */
  optionalUnlockStrings?: Array<DestinyDefinitionsDestinyActivityUnlockStringDefinition>;
  /**
   * Represents all of the possible activities that could be played in the Playlist, along with information that we can use to determine if they are active at the present time.
   */
  playlistItems?: Array<DestinyDefinitionsDestinyActivityPlaylistItemDefinition>;
  /**
   * Unfortunately, in practice this is almost never populated. In theory, this is supposed to tell which Activity Graph to show if you bring up the director while in this activity.
   */
  activityGraphList?: Array<DestinyDefinitionsDestinyActivityGraphListEntryDefinition>;
  matchmaking?: DestinyDefinitionsDestinyActivityDefinitionMatchmaking;
  guidedGame?: DestinyDefinitionsDestinyActivityDefinitionGuidedGame;
  /**
   * If this activity had an activity mode directly defined on it, this will be the hash of that mode.
   */
  directActivityModeHash?: number;
  /**
   * If the activity had an activity mode directly defined on it, this will be the enum value of that mode.
   */
  directActivityModeType?: DestinyDefinitionsDestinyActivityDefinition.DirectActivityModeTypeEnum;
  /**
   * The set of all possible loadout requirements that could be active for this activity. Only one will be active at any given time, and you can discover which one through activity-associated data such as Milestones that have activity info on them.
   */
  loadouts?: Array<DestinyDefinitionsDestinyActivityLoadoutRequirementSet>;
  /**
   * The hash identifiers for Activity Modes relevant to this activity.  Note that if this is a playlist, the specific playlist entry chosen will determine the actual activity modes that end up being relevant.
   */
  activityModeHashes?: Array<number>;
  /**
   * The activity modes - if any - in enum form. Because we can\'t seem to escape the enums.
   */
  activityModeTypes?: Array<number>;
  /**
   * If true, this activity is a PVP activity or playlist.
   */
  isPvP?: boolean;
  /**
   * The list of phases or points of entry into an activity, along with information we can use to determine their gating and availability.
   */
  insertionPoints?: Array<DestinyDefinitionsDestinyActivityInsertionPointDefinition>;
  /**
   * A list of location mappings that are affected by this activity. Pulled out of DestinyLocationDefinitions for our/your lookup convenience.
   */
  activityLocationMappings?: Array<DestinyConstantsDestinyEnvironmentLocationMapping>;
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
export namespace DestinyDefinitionsDestinyActivityDefinition {
  export type DirectActivityModeTypeEnum =
    | 0
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 9
    | 10
    | 11
    | 12
    | 13
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46
    | 47
    | 48
    | 49
    | 50
    | 51
    | 52
    | 53
    | 54
    | 55
    | 56
    | 57
    | 58
    | 59
    | 60
    | 61
    | 62
    | 63
    | 64
    | 65
    | 66
    | 67
    | 68
    | 69
    | 70
    | 71
    | 72
    | 73
    | 74
    | 75
    | 76
    | 77
    | 78
    | 79
    | 80
    | 81
    | 82
    | 83
    | 84
    | 85
    | 86
    | 87
    | 88
    | 89
    | 90;
  export const DirectActivityModeTypeEnum = {
    NUMBER_0: 0 as DirectActivityModeTypeEnum,
    NUMBER_2: 2 as DirectActivityModeTypeEnum,
    NUMBER_3: 3 as DirectActivityModeTypeEnum,
    NUMBER_4: 4 as DirectActivityModeTypeEnum,
    NUMBER_5: 5 as DirectActivityModeTypeEnum,
    NUMBER_6: 6 as DirectActivityModeTypeEnum,
    NUMBER_7: 7 as DirectActivityModeTypeEnum,
    NUMBER_9: 9 as DirectActivityModeTypeEnum,
    NUMBER_10: 10 as DirectActivityModeTypeEnum,
    NUMBER_11: 11 as DirectActivityModeTypeEnum,
    NUMBER_12: 12 as DirectActivityModeTypeEnum,
    NUMBER_13: 13 as DirectActivityModeTypeEnum,
    NUMBER_15: 15 as DirectActivityModeTypeEnum,
    NUMBER_16: 16 as DirectActivityModeTypeEnum,
    NUMBER_17: 17 as DirectActivityModeTypeEnum,
    NUMBER_18: 18 as DirectActivityModeTypeEnum,
    NUMBER_19: 19 as DirectActivityModeTypeEnum,
    NUMBER_20: 20 as DirectActivityModeTypeEnum,
    NUMBER_21: 21 as DirectActivityModeTypeEnum,
    NUMBER_22: 22 as DirectActivityModeTypeEnum,
    NUMBER_24: 24 as DirectActivityModeTypeEnum,
    NUMBER_25: 25 as DirectActivityModeTypeEnum,
    NUMBER_26: 26 as DirectActivityModeTypeEnum,
    NUMBER_27: 27 as DirectActivityModeTypeEnum,
    NUMBER_28: 28 as DirectActivityModeTypeEnum,
    NUMBER_29: 29 as DirectActivityModeTypeEnum,
    NUMBER_30: 30 as DirectActivityModeTypeEnum,
    NUMBER_31: 31 as DirectActivityModeTypeEnum,
    NUMBER_32: 32 as DirectActivityModeTypeEnum,
    NUMBER_37: 37 as DirectActivityModeTypeEnum,
    NUMBER_38: 38 as DirectActivityModeTypeEnum,
    NUMBER_39: 39 as DirectActivityModeTypeEnum,
    NUMBER_40: 40 as DirectActivityModeTypeEnum,
    NUMBER_41: 41 as DirectActivityModeTypeEnum,
    NUMBER_42: 42 as DirectActivityModeTypeEnum,
    NUMBER_43: 43 as DirectActivityModeTypeEnum,
    NUMBER_44: 44 as DirectActivityModeTypeEnum,
    NUMBER_45: 45 as DirectActivityModeTypeEnum,
    NUMBER_46: 46 as DirectActivityModeTypeEnum,
    NUMBER_47: 47 as DirectActivityModeTypeEnum,
    NUMBER_48: 48 as DirectActivityModeTypeEnum,
    NUMBER_49: 49 as DirectActivityModeTypeEnum,
    NUMBER_50: 50 as DirectActivityModeTypeEnum,
    NUMBER_51: 51 as DirectActivityModeTypeEnum,
    NUMBER_52: 52 as DirectActivityModeTypeEnum,
    NUMBER_53: 53 as DirectActivityModeTypeEnum,
    NUMBER_54: 54 as DirectActivityModeTypeEnum,
    NUMBER_55: 55 as DirectActivityModeTypeEnum,
    NUMBER_56: 56 as DirectActivityModeTypeEnum,
    NUMBER_57: 57 as DirectActivityModeTypeEnum,
    NUMBER_58: 58 as DirectActivityModeTypeEnum,
    NUMBER_59: 59 as DirectActivityModeTypeEnum,
    NUMBER_60: 60 as DirectActivityModeTypeEnum,
    NUMBER_61: 61 as DirectActivityModeTypeEnum,
    NUMBER_62: 62 as DirectActivityModeTypeEnum,
    NUMBER_63: 63 as DirectActivityModeTypeEnum,
    NUMBER_64: 64 as DirectActivityModeTypeEnum,
    NUMBER_65: 65 as DirectActivityModeTypeEnum,
    NUMBER_66: 66 as DirectActivityModeTypeEnum,
    NUMBER_67: 67 as DirectActivityModeTypeEnum,
    NUMBER_68: 68 as DirectActivityModeTypeEnum,
    NUMBER_69: 69 as DirectActivityModeTypeEnum,
    NUMBER_70: 70 as DirectActivityModeTypeEnum,
    NUMBER_71: 71 as DirectActivityModeTypeEnum,
    NUMBER_72: 72 as DirectActivityModeTypeEnum,
    NUMBER_73: 73 as DirectActivityModeTypeEnum,
    NUMBER_74: 74 as DirectActivityModeTypeEnum,
    NUMBER_75: 75 as DirectActivityModeTypeEnum,
    NUMBER_76: 76 as DirectActivityModeTypeEnum,
    NUMBER_77: 77 as DirectActivityModeTypeEnum,
    NUMBER_78: 78 as DirectActivityModeTypeEnum,
    NUMBER_79: 79 as DirectActivityModeTypeEnum,
    NUMBER_80: 80 as DirectActivityModeTypeEnum,
    NUMBER_81: 81 as DirectActivityModeTypeEnum,
    NUMBER_82: 82 as DirectActivityModeTypeEnum,
    NUMBER_83: 83 as DirectActivityModeTypeEnum,
    NUMBER_84: 84 as DirectActivityModeTypeEnum,
    NUMBER_85: 85 as DirectActivityModeTypeEnum,
    NUMBER_86: 86 as DirectActivityModeTypeEnum,
    NUMBER_87: 87 as DirectActivityModeTypeEnum,
    NUMBER_88: 88 as DirectActivityModeTypeEnum,
    NUMBER_89: 89 as DirectActivityModeTypeEnum,
    NUMBER_90: 90 as DirectActivityModeTypeEnum,
  };
}
