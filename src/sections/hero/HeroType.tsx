import type { AvatarType } from "../../comps/Avatar";
import type { ActionButtonType } from "../../comps/Button";
import type { TagType } from "../../comps/Tag";

export type HeroType = {
  hidden: boolean;
  greetings: string;
  fullName: string;
  role: string;
  description: string;
  avatar: AvatarType;
  tags: TagType[];
  actionButtons: ActionButtonType[];
}