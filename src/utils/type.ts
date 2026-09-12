import type { ReactNode } from "react";
import type { Icon, Position, Provider } from "./enum";
import type { NavLinkType } from "../components/ui/nav";
import type { ButtonType } from "../components/ui/button";

// ============================================================================
// ENUM-DERIVED TYPES
// ============================================================================

export type PositionType = (typeof Position)[keyof typeof Position];
export type IconType = (typeof Icon)[keyof typeof Icon];
export type ProviderType = (typeof Provider)[keyof typeof Provider];
export type ImageFileType = typeof import("./enum").ImageType[keyof typeof import("./enum").ImageType];

// ============================================================================
// COMPONENT TYPES
// ============================================================================

export type ComponentType = {
    children: ReactNode;
    className?: string;
}

export type ChildrenType = {
    children?: ReactNode;
}

export type ClassNameType = {
    className?: string;
}

export type ActionButtonType = {
  uiTypeId: number;
  button: ButtonType;
}

export type ButtonCompType = ActionButtonType & {
    icon?: IconType;
    className?: string;
    onClick?: () => void;
};

export type ContainerType = {
    children: ReactNode;
    className?: string;
}

export type TagType = {
    readonly id: number;
    hidden: boolean;
    text: string;
}

export type TagCompType = TagType & {
    className?: string;
}

export type ImageType = {
  hidden: boolean;
  name: string;
  file_path: string;
};

export type HeaderType = {
  hidden: boolean;
  logo: ImageType;
  navLink: NavLinkType;
  ctaButton: ButtonType ;
};

export type NavBarType = {
  version?: number,
  logo: ImageType,
  navLink: NavLinkType,
  ctaButton: ActionButtonType,
}

export type LocationType = {
    hidden: boolean;
    state: string;
    country: string;
}

export type AvatarType = {
    hidden: boolean;
    file_name: string;
    file_path: string;
    rounded: boolean;
    location: LocationType;
}

export type AvatarCompType = AvatarType & {
    className?: string;
}

// ============================================================================
// CONTEXT TYPES
// ============================================================================

export type ContextChildrenType = {
    children: ReactNode;
};

export type ContextValueType<T> = {
    data: T | undefined;
    reload: () => T;
} | null;

// ============================================================================
// DATA TYPES - ABOUT ME
// ============================================================================

export type Experience = {
  hidden: boolean;
  years: number;
  text: string;
};

export type Education = {
  id: number;
  title: string;
  institution: string;
  icon: string;
  hidden: boolean;
};

export type CoreSkillType = {
  id: number;
  text: string;
  emoji: string;
  hidden: boolean;
};

export type AboutType = {
  hidden: boolean;
  sectionTitle: string;
  headline: string;
  bio: string;
  me: string;
  experiences: Experience[];
  quote: {
    hidden: boolean;
    text: string;
  };
  education: Education[];
  coreSkills: CoreSkillType[];
};

// ============================================================================
// DATA TYPES - CONTACT ME
// ============================================================================

export type SocialLink = {
  id: number;
  platform: string;
  url: string;
  icon: string;
  hidden: boolean;
}

export type ContactMeType = {
  hidden: boolean;
  email: string;
  phone: string;
  location: string;
  socialLinks: SocialLink[];
}

// ============================================================================
// DATA TYPES - ERROR PAGES
// ============================================================================

export type ErrorPageData = {
  statusCode: number;
  message: string;
  description: string;
}

// ============================================================================
// DATA TYPES - FOOTER
// ============================================================================

export type FooterSocialLink = {
  platform: string;
  url: string;
  hidden: boolean;
}

export type FooterQuickLink = {
  name: string;
  path: string;
  hidden: boolean;
}

export type FooterType = {
  hidden: boolean;
  copyrightText: string;
  socialLinks: FooterSocialLink[];
  quickLinks: FooterQuickLink[];
}

// ============================================================================
// DATA TYPES - GROWTH
// ============================================================================

export type GrowthItem = {
  id: number;
  title: string;
  provider: string;
  status: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  link: string;
  linkLabel: string;
  hidden: boolean;
}

export type Quote = {
  hidden: boolean;
  text: string;
}

export type GrowthType = {
  hidden: boolean;
  sectionTitle: string;
  subtitle: string;
  description: string;
  items: GrowthItem[];
  quote: Quote;
}

// ============================================================================
// DATA TYPES - PROJECTS
// ============================================================================

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  liveLink: string;
  technologies: string[];
  hidden: boolean;
  indexPosition: number;
}

export type ProjectsType = {
  hidden: boolean;
  sectionTitle: string;
  subtitle: string;
  projects: Project[];
}

// ============================================================================
// DATA TYPES - RESOURCES
// ============================================================================

export type ResourceItem = {
  id: number;
  title: string;
  badge: string;
  description: string;
  link: string;
  hidden: boolean;
}

export type ResourceCategory = {
  id: string;
  name: string;
  subtitle: string;
  count: number;
  hidden: boolean;
  items: ResourceItem[];
}

export type ResourcesType = {
  hidden: boolean;
  sectionTitle: string;
  subtitle: string;
  description: string;
  categories: ResourceCategory[];
}

// ============================================================================
// DATA TYPES - SERVICES
// ============================================================================

export type Service = {
  id: number;
  title: string;
  badge: string;
  subHeading: string;
  description: string;
  tags: string[];
  actionLabel: string;
  actionUrl: string;
  hidden: boolean;
}

export type ServicesType = {
  hidden: boolean;
  sectionTitle: string;
  subtitle: string;
  description: string;
  services: Service[];
}

// ============================================================================
// DATA TYPES - STACK USAGE
// ============================================================================

export type Technology = {
  id: number;
  name: string;
  icon: string;
  percentage: number;
  color: string;
  hidden: boolean;
}

export type CategoryOverview = {
  id: number;
  category: string;
  percentage: number;
  color: string;
  hidden: boolean;
}

export type ProficiencyKey = {
  range: string;
  description: string;
  hidden: boolean;
}

export type StackUsageType = {
  hidden: boolean;
  sectionTitle: string;
  subtitle: string;
  individualTechnologies: Technology[];
  categoryOverview: CategoryOverview[];
  proficiencyKey: ProficiencyKey[];
}

// ============================================================================
// DATA TYPES - TECH STACK
// ============================================================================

export type TechStack = {
  id: number;
  name: string;
  icon: string;
  description: string;
  hidden: boolean;
  indexPosition: number;
}

// ============================================================================
// PAGE & SECTION TYPES
// ============================================================================

export type ErrorPageProps = {
    statusCode?: number;
    message?: string;
    description?: string;
}

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