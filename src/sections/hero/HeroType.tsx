import type { AvatarType } from "../../components/Avatar";
import type { ActionButtonType } from "../../components/Button";
import type { TagType } from "../../components/Tag";

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