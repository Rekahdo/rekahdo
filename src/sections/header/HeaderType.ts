export type LogoType = {
  visible: boolean;
  name: string;
  url: string;
};

export type LinkType = {
  id: number;
  visible: boolean;
  text: string;
  path: string;
  indexPosition: number;
};

export type NavLinkType = {
  visible: boolean;
  links: LinkType[];
};

export type CtaButtonType = {
  id: number;
  visible: boolean;
  text: string;
  path: string;
  isExternal: boolean;
};

export type HeaderType = {
  visible: boolean;
  logo: LogoType;
  navLink: NavLinkType;
  ctaButton: CtaButtonType;
};
