export type LogoType = {
  hidden: boolean;
  name: string;
  url: string;
};

export type LinkType = {
  readonly id: number;
  hidden: boolean;
  text: string;
  path: string;
  indexPosition: number;
};

export type NavLinkType = {
  hidden: boolean;
  links: LinkType[];
};

export type CtaButtonType = {
  readonly id: number;
  hidden: boolean;
  text: string;
  name: string;
  path: string;
  isExternal: boolean;
};

export type HeaderType = {
  hidden: boolean;
  logo: LogoType;
  navLink: NavLinkType;
  ctaButton: CtaButtonType;
};
