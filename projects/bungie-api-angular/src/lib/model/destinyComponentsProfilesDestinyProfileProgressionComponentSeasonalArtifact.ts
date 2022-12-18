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
import { DestinyArtifactsDestinyArtifactProfileScoped } from "./destinyArtifactsDestinyArtifactProfileScoped";
import { DestinyDestinyProgression } from "./destinyDestinyProgression";

/**
 * Data related to your progress on the current season\'s artifact that is the same across characters.
 */
export interface DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact {
  artifactHash?: number;
  pointProgression?: DestinyDestinyProgression;
  pointsAcquired?: number;
  powerBonusProgression?: DestinyDestinyProgression;
  powerBonus?: number;
}
