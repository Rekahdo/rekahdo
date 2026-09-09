import type { AvatarType } from "../../comps/Avatar";
import type { ButtonType } from "../../comps/Button";
import type { TagType } from "../../comps/Tag";

export type LocationType = {
  hidden: boolean;
  state: string;
  country: string;
}

export type HeroType = {
  hidden: boolean;
  greetings: string;
  fullName: string;
  role: string;
  description: string;
  location: LocationType;
  avatar: AvatarType;
  tags: TagType[];
  actionButtons: ButtonType[];
}