export * from "./default.service";
import { DefaultService } from "./default.service";
export * from "./app.service";
import { AppService } from "./app.service";
export * from "./communityContent.service";
import { CommunityContentService } from "./communityContent.service";
export * from "./content.service";
import { ContentService } from "./content.service";
export * from "./destiny2.service";
import { Destiny2Service } from "./destiny2.service";
export * from "./fireteam.service";
import { FireteamService } from "./fireteam.service";
export * from "./forum.service";
import { ForumService } from "./forum.service";
export * from "./groupV2.service";
import { GroupV2Service } from "./groupV2.service";
export * from "./preview.service";
import { PreviewService } from "./preview.service";
export * from "./social.service";
import { SocialService } from "./social.service";
export * from "./tokens.service";
import { TokensService } from "./tokens.service";
export * from "./trending.service";
import { TrendingService } from "./trending.service";
export * from "./user.service";
import { UserService } from "./user.service";
export const APIS = [
  DefaultService,
  AppService,
  CommunityContentService,
  ContentService,
  Destiny2Service,
  FireteamService,
  ForumService,
  GroupV2Service,
  PreviewService,
  SocialService,
  TokensService,
  TrendingService,
  UserService,
];
