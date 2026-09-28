import type { ReactNode } from "react";
import type { Icon, Position } from "../utils/enum";
import type { LocationType } from "../components/ui/hero-ui";
import type { QuoteType } from "../components/ui/quote";
import type { Provider } from "../hooks/context";

// ============================================================================
// ENUM-DERIVED TYPES
// ============================================================================

export type PositionType = (typeof Position)[keyof typeof Position];
export type IconType = (typeof Icon)[keyof typeof Icon];
export type ProviderType = (typeof Provider)[keyof typeof Provider];

// ============================================================================
// COMPONENT TYPES
// ============================================================================

export type ComponentType = {
    children?: ReactNode;
    className?: string;
}

export type ChildrenType = {
    children?: ReactNode;
}

export type ClassNameType = {
    className?: string;
}

export type ButtonCompType = {
    icon?: IconType;
    className?: string;
    onClick?: () => void;
};

export type ContainerType = {
    children: ReactNode;
    className?: string;
}

export type AvatarType = {
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

// ============================================================================
// DATA TYPES - ABOUT ME
// ============================================================================


// ============================================================================
// DATA TYPES - CONTACT ME
// ============================================================================

export type SocialLink = {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

export type ContactMeType = {
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
}

export type FooterQuickLink = {
  name: string;
  path: string;
}

export type FooterType = {
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
}

export type GrowthType = {
  sectionTitle: string;
  subtitle: string;
  description: string;
  items: GrowthItem[];
  quote: QuoteType;
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
  indexPosition: number;
}

export type ProjectsType = {
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
}

export type ResourceCategory = {
  id: string;
  name: string;
  subtitle: string;
  count: number;
  items: ResourceItem[];
}

export type ResourcesType = {
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
}

export type ServicesType = {
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
}

export type CategoryOverview = {
  id: number;
  category: string;
  percentage: number;
  color: string;
}

export type ProficiencyKey = {
  range: string;
  description: string;
}

export type StackUsageType = {
  sectionTitle: string;
  subtitle: string;
  individualTechnologies: Technology[];
  categoryOverview: CategoryOverview[];
  proficiencyKey: ProficiencyKey[];
}

// ============================================================================
// DATA TYPES - TECH STACK
// ============================================================================


// ============================================================================
// PAGE & SECTION TYPES
// ============================================================================

export type ErrorPageProps = {
    statusCode?: number;
    message?: string;
    description?: string;
}