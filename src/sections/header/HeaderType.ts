import type { ButtonType } from "../../comps/Button";

export type LogoType = {
  hidden: boolean;
  name: string;
  file_path: string;
};

export type LinkType = {
  readonly id: number;
  hidden: boolean;
  text: string;
  file_path: string;
  indexPosition: number;
};

export type NavLinkType = {
  hidden: boolean;
  links: LinkType[];
};

export type HeaderType = {
  hidden: boolean;
  logo: LogoType;
  navLink: NavLinkType;
  ctaButton: ButtonType;
};
