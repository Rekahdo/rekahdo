import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderProvider";
import { Provider, type ContextValueType } from "../contexts/ContextProvider";
import type { HeaderType } from "../sections/header/HeaderType";
import type { HeroType } from "../sections/hero/HeroType";
import type { AboutType } from "../data/about-me";
import type { ContactMeType } from "../data/contact-me";
import type { FooterType } from "../data/footer";
import type { GrowthType } from "../data/growth";
import type { ProjectsType } from "../data/projects";
import type { ResourcesType } from "../data/resources";
import type { ServicesType } from "../data/services";
import type { StackUsageType } from "../data/stack-usage";
import type { TechStack } from "../data/tech-stack";
import { HeroContext } from "../contexts/HeroProvider";
import { AboutContext } from "../contexts/AboutProvider";
import { ContactContext } from "../contexts/ContactProvider";
import { FooterContext } from "../contexts/FooterProvider";
import { GrowthContext } from "../contexts/GrowthProvider";
import { ProjectsContext } from "../contexts/ProjectsProvider";
import { ResourcesContext } from "../contexts/ResourcesProvider";
import { ServicesContext } from "../contexts/ServicesProvider";
import { StackUsageContext } from "../contexts/StackUsageProvider";
import { TechStackContext } from "../contexts/TechStackProvider";

export const useHeader = (): ContextValueType<HeaderType> => {
  const context = useContext(HeaderContext);

  if (!context) 
    throw new Error("useHeader must be used within HeaderProvider");

  return context;
};

export const useHero = (): ContextValueType<HeroType> => {
  return HeroContext.context(Provider.HERO);
};

export const useAbout = (): ContextValueType<AboutType> => {
  return AboutContext.context(Provider.ABOUT);
};

export const useContact = (): ContextValueType<ContactMeType> => {
  return ContactContext.context(Provider.CONTACT);
};

export const useFooter = (): ContextValueType<FooterType> => {
  return FooterContext.context(Provider.FOOTER);
};

export const useGrowth = (): ContextValueType<GrowthType> => {
  return GrowthContext.context(Provider.GROWTH);
};

export const useProjects = (): ContextValueType<ProjectsType> => {
  return ProjectsContext.context(Provider.PROJECTS);
};

export const useResources = (): ContextValueType<ResourcesType> => {
  return ResourcesContext.context(Provider.RESOURCES);
};

export const useServices = (): ContextValueType<ServicesType> => {
  return ServicesContext.context(Provider.SERVICES);
};

export const useStackUsage = (): ContextValueType<StackUsageType> => {
  return StackUsageContext.context(Provider.STACK_USAGE);
};

export const useTechStack = (): ContextValueType<TechStack[]> => {
  return TechStackContext.context(Provider.TECH_STACK);
};