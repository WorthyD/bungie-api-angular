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
import { DestinyDefinitionsDestinyTalentNodeStepGroups } from './destinyDefinitionsDestinyTalentNodeStepGroups';


/**
 * In Destiny 1, the Armory\'s Perk Filtering was driven by a concept of TalentNodeStepGroups: categorizations of talent nodes based on their functionality. While the Armory isn\'t a BNet-facing thing for now, and the new Armory will need to account for Sockets rather than Talent Nodes, this categorization capability feels useful enough to still keep around.
 */
export interface DestinyDefinitionsDestinyNodeStepDefinitionStepGroups { 
    weaponPerformance?: number;
    impactEffects?: number;
    guardianAttributes?: number;
    lightAbilities?: number;
    damageTypes?: number;
}

