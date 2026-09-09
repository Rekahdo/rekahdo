import type { ButtonType } from "../../comps/Button";

export type HeroType = {
  hidden: boolean;
  greetings: string;
  fullName: string;
  mainTitle: string;
  description: string;
  location: string;
  avatar: Avatar;
  tags: Tag[];
  actionButtons: ButtonType[];
}

export type Avatar = {
  file_path: string;
  rounded: boolean;
}

export type Tag = {
  readonly id: number;
  hidden: boolean;
  text: string;
}