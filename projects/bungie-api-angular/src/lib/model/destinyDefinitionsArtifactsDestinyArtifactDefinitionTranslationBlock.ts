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
import { DestinyDefinitionsDestinyItemTranslationBlockDefinition } from "./destinyDefinitionsDestinyItemTranslationBlockDefinition";
import { DestinyDefinitionsDestinyGearArtArrangementReference } from "./destinyDefinitionsDestinyGearArtArrangementReference";
import { DestinyDyeReference } from "./destinyDyeReference";

/**
 * Any Geometry/3D info we know about the Artifact. Currently sourced from a related inventory item\'s gearset information, but the source of this data is subject to change.
 */
export interface DestinyDefinitionsArtifactsDestinyArtifactDefinitionTranslationBlock {
  weaponPatternIdentifier?: string;
  weaponPatternHash?: number;
  defaultDyes?: Array<DestinyDyeReference>;
  lockedDyes?: Array<DestinyDyeReference>;
  customDyes?: Array<DestinyDyeReference>;
  arrangements?: Array<DestinyDefinitionsDestinyGearArtArrangementReference>;
  hasGeometry?: boolean;
}
