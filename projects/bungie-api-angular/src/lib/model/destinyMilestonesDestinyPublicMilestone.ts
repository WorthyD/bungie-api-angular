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
import { DestinyMilestonesDestinyPublicMilestoneQuest } from './destinyMilestonesDestinyPublicMilestoneQuest';
import { DestinyMilestonesDestinyPublicMilestoneChallengeActivity } from './destinyMilestonesDestinyPublicMilestoneChallengeActivity';
import { DestinyMilestonesDestinyPublicMilestoneVendor } from './destinyMilestonesDestinyPublicMilestoneVendor';


/**
 * Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
 */
export interface DestinyMilestonesDestinyPublicMilestone { 
    /**
     * The hash identifier for the milestone. Use it to look up the DestinyMilestoneDefinition for static data about the Milestone.
     */
    milestoneHash?: number;
    /**
     * A milestone not need have even a single quest, but if there are active quests they will be returned here.
     */
    availableQuests?: Array<DestinyMilestonesDestinyPublicMilestoneQuest>;
    activities?: Array<DestinyMilestonesDestinyPublicMilestoneChallengeActivity>;
    /**
     * Sometimes milestones - or activities active in milestones - will have relevant vendors. These are the vendors that are currently relevant.  Deprecated, already, for the sake of the new \"vendors\" property that has more data. What was I thinking.
     */
    vendorHashes?: Array<number>;
    /**
     * This is why we can\'t have nice things. This is the ordered list of vendors to be shown that relate to this milestone, potentially along with other interesting data.
     */
    vendors?: Array<DestinyMilestonesDestinyPublicMilestoneVendor>;
    /**
     * If known, this is the date when the Milestone started/became active.
     */
    startDate?: string;
    /**
     * If known, this is the date when the Milestone will expire/recycle/end.
     */
    endDate?: string;
    /**
     * Used for ordering milestones in a display to match how we order them in BNet. May pull from static data, or possibly in the future from dynamic information.
     */
    order?: number;
}

