export interface Header {
    visible: boolean;
    brandName: string;
    brandLogoUrl: string;
    ctaButton: HeaderCtaButton;
    navLinks: HeaderNavLink[];
}

export interface HeaderCtaButton {
    visible: boolean;
    label: string;
    path: string;
    isExternal: boolean;
}

export interface HeaderNavLink {
    id: number;
    label: string;
    path: string;
    visible: boolean;
    indexPosition: number;
}