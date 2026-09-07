export type BrandLogoType = {
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
  brandLogo: BrandLogoType;
  navLink: NavLinkType;
  ctaButton: CtaButtonType;
};
