import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderProvider";
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
import type { AboutType, ContactMeType, ContextValueType, FooterType, GrowthType, HeaderType, HeroType, ProjectsType, ResourcesType, ServicesType, StackUsageType, TechStack } from "../utils/type";
import { Provider } from "../utils/enum";

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