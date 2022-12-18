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
import { DestinyDefinitionsDestinyItemActionBlockDefinition } from './destinyDefinitionsDestinyItemActionBlockDefinition';
import { DestinyDefinitionsDestinyProgressionRewardDefinition } from './destinyDefinitionsDestinyProgressionRewardDefinition';
import { DestinyDefinitionsDestinyItemActionRequiredItemDefinition } from './destinyDefinitionsDestinyItemActionRequiredItemDefinition';


/**
 * If the item can be \"used\", this block will be non-null, and will have data related to the action performed when using the item. (Guess what? 99% of the time, this action is \"dismantle\". Shocker)
 */
export interface DestinyDefinitionsDestinyInventoryItemDefinitionAction { 
    /**
     * Localized text for the verb of the action being performed.
     */
    verbName?: string;
    /**
     * Localized text describing the action being performed.
     */
    verbDescription?: string;
    /**
     * The content has this property, however it\'s not entirely clear how it is used.
     */
    isPositive?: boolean;
    /**
     * If the action has an overlay screen associated with it, this is the name of that screen. Unfortunately, we cannot return the screen\'s data itself.
     */
    overlayScreenName?: string;
    /**
     * The icon associated with the overlay screen for the action, if any.
     */
    overlayIcon?: string;
    /**
     * The number of seconds to delay before allowing this action to be performed again.
     */
    requiredCooldownSeconds?: number;
    /**
     * If the action requires other items to exist or be destroyed, this is the list of those items and requirements.
     */
    requiredItems?: Array<DestinyDefinitionsDestinyItemActionRequiredItemDefinition>;
    /**
     * If performing this action earns you Progression, this is the list of progressions and values granted for those progressions by performing this action.
     */
    progressionRewards?: Array<DestinyDefinitionsDestinyProgressionRewardDefinition>;
    /**
     * The internal identifier for the action.
     */
    actionTypeLabel?: string;
    /**
     * Theoretically, an item could have a localized string for a hint about the location in which the action should be performed. In practice, no items yet have this property.
     */
    requiredLocation?: string;
    /**
     * The identifier hash for the Cooldown associated with this action. We have not pulled this data yet for you to have more data to use for cooldowns.
     */
    requiredCooldownHash?: number;
    /**
     * If true, the item is deleted when the action completes.
     */
    deleteOnAction?: boolean;
    /**
     * If true, the entire stack is deleted when the action completes.
     */
    consumeEntireStack?: boolean;
    /**
     * If true, this action will be performed as soon as you earn this item. Some rewards work this way, providing you a single item to pick up from a reward-granting vendor in-game and then immediately consuming itself to provide you multiple items.
     */
    useOnAcquire?: boolean;
}

