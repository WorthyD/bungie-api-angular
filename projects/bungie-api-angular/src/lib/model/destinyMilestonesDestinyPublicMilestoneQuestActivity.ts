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
import { DestinyMilestonesDestinyPublicMilestoneActivity } from './destinyMilestonesDestinyPublicMilestoneActivity';
import { DestinyMilestonesDestinyPublicMilestoneActivityVariant } from './destinyMilestonesDestinyPublicMilestoneActivityVariant';


/**
 * A milestone need not have an active activity, but if there is one it will be returned here, along with any variant and additional information.
 */
export interface DestinyMilestonesDestinyPublicMilestoneQuestActivity { 
    /**
     * The hash identifier of the activity that\'s been chosen to be considered the canonical \"conceptual\" activity definition. This may have many variants, defined herein.
     */
    activityHash?: number;
    /**
     * The activity may have 0-to-many modifiers: if it does, this will contain the hashes to the DestinyActivityModifierDefinition that defines the modifier being applied.
     */
    modifierHashes?: Array<number>;
    /**
     * Every relevant variation of this conceptual activity, including the conceptual activity itself, have variants defined here.
     */
    variants?: Array<DestinyMilestonesDestinyPublicMilestoneActivityVariant>;
    /**
     * The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it\'s not clear what mode the PVP map is being played under. If it\'s a playlist, this will be less specific: but hopefully useful in some way.
     */
    activityModeHash?: number;
    /**
     * The enumeration equivalent of the most specific Activity Mode under which this activity is played.
     */
    activityModeType?: DestinyMilestonesDestinyPublicMilestoneQuestActivity.ActivityModeTypeEnum;
}
export namespace DestinyMilestonesDestinyPublicMilestoneQuestActivity {
    export type ActivityModeTypeEnum = 0 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 10 | 11 | 12 | 13 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91;
    export const ActivityModeTypeEnum = {
        NUMBER_0: 0 as ActivityModeTypeEnum,
        NUMBER_2: 2 as ActivityModeTypeEnum,
        NUMBER_3: 3 as ActivityModeTypeEnum,
        NUMBER_4: 4 as ActivityModeTypeEnum,
        NUMBER_5: 5 as ActivityModeTypeEnum,
        NUMBER_6: 6 as ActivityModeTypeEnum,
        NUMBER_7: 7 as ActivityModeTypeEnum,
        NUMBER_9: 9 as ActivityModeTypeEnum,
        NUMBER_10: 10 as ActivityModeTypeEnum,
        NUMBER_11: 11 as ActivityModeTypeEnum,
        NUMBER_12: 12 as ActivityModeTypeEnum,
        NUMBER_13: 13 as ActivityModeTypeEnum,
        NUMBER_15: 15 as ActivityModeTypeEnum,
        NUMBER_16: 16 as ActivityModeTypeEnum,
        NUMBER_17: 17 as ActivityModeTypeEnum,
        NUMBER_18: 18 as ActivityModeTypeEnum,
        NUMBER_19: 19 as ActivityModeTypeEnum,
        NUMBER_20: 20 as ActivityModeTypeEnum,
        NUMBER_21: 21 as ActivityModeTypeEnum,
        NUMBER_22: 22 as ActivityModeTypeEnum,
        NUMBER_24: 24 as ActivityModeTypeEnum,
        NUMBER_25: 25 as ActivityModeTypeEnum,
        NUMBER_26: 26 as ActivityModeTypeEnum,
        NUMBER_27: 27 as ActivityModeTypeEnum,
        NUMBER_28: 28 as ActivityModeTypeEnum,
        NUMBER_29: 29 as ActivityModeTypeEnum,
        NUMBER_30: 30 as ActivityModeTypeEnum,
        NUMBER_31: 31 as ActivityModeTypeEnum,
        NUMBER_32: 32 as ActivityModeTypeEnum,
        NUMBER_37: 37 as ActivityModeTypeEnum,
        NUMBER_38: 38 as ActivityModeTypeEnum,
        NUMBER_39: 39 as ActivityModeTypeEnum,
        NUMBER_40: 40 as ActivityModeTypeEnum,
        NUMBER_41: 41 as ActivityModeTypeEnum,
        NUMBER_42: 42 as ActivityModeTypeEnum,
        NUMBER_43: 43 as ActivityModeTypeEnum,
        NUMBER_44: 44 as ActivityModeTypeEnum,
        NUMBER_45: 45 as ActivityModeTypeEnum,
        NUMBER_46: 46 as ActivityModeTypeEnum,
        NUMBER_47: 47 as ActivityModeTypeEnum,
        NUMBER_48: 48 as ActivityModeTypeEnum,
        NUMBER_49: 49 as ActivityModeTypeEnum,
        NUMBER_50: 50 as ActivityModeTypeEnum,
        NUMBER_51: 51 as ActivityModeTypeEnum,
        NUMBER_52: 52 as ActivityModeTypeEnum,
        NUMBER_53: 53 as ActivityModeTypeEnum,
        NUMBER_54: 54 as ActivityModeTypeEnum,
        NUMBER_55: 55 as ActivityModeTypeEnum,
        NUMBER_56: 56 as ActivityModeTypeEnum,
        NUMBER_57: 57 as ActivityModeTypeEnum,
        NUMBER_58: 58 as ActivityModeTypeEnum,
        NUMBER_59: 59 as ActivityModeTypeEnum,
        NUMBER_60: 60 as ActivityModeTypeEnum,
        NUMBER_61: 61 as ActivityModeTypeEnum,
        NUMBER_62: 62 as ActivityModeTypeEnum,
        NUMBER_63: 63 as ActivityModeTypeEnum,
        NUMBER_64: 64 as ActivityModeTypeEnum,
        NUMBER_65: 65 as ActivityModeTypeEnum,
        NUMBER_66: 66 as ActivityModeTypeEnum,
        NUMBER_67: 67 as ActivityModeTypeEnum,
        NUMBER_68: 68 as ActivityModeTypeEnum,
        NUMBER_69: 69 as ActivityModeTypeEnum,
        NUMBER_70: 70 as ActivityModeTypeEnum,
        NUMBER_71: 71 as ActivityModeTypeEnum,
        NUMBER_72: 72 as ActivityModeTypeEnum,
        NUMBER_73: 73 as ActivityModeTypeEnum,
        NUMBER_74: 74 as ActivityModeTypeEnum,
        NUMBER_75: 75 as ActivityModeTypeEnum,
        NUMBER_76: 76 as ActivityModeTypeEnum,
        NUMBER_77: 77 as ActivityModeTypeEnum,
        NUMBER_78: 78 as ActivityModeTypeEnum,
        NUMBER_79: 79 as ActivityModeTypeEnum,
        NUMBER_80: 80 as ActivityModeTypeEnum,
        NUMBER_81: 81 as ActivityModeTypeEnum,
        NUMBER_82: 82 as ActivityModeTypeEnum,
        NUMBER_83: 83 as ActivityModeTypeEnum,
        NUMBER_84: 84 as ActivityModeTypeEnum,
        NUMBER_85: 85 as ActivityModeTypeEnum,
        NUMBER_86: 86 as ActivityModeTypeEnum,
        NUMBER_87: 87 as ActivityModeTypeEnum,
        NUMBER_88: 88 as ActivityModeTypeEnum,
        NUMBER_89: 89 as ActivityModeTypeEnum,
        NUMBER_90: 90 as ActivityModeTypeEnum,
        NUMBER_91: 91 as ActivityModeTypeEnum
    };
}


