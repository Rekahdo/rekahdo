import { LinkType } from "@/components/shared-ui/navigation";

export const linksData = {
  home: {
    text: "Home",
    href: "home",
  },
  aboutMe: {
    text: "About Me",
    href: "aboutMe",
  },
  techStack: {
    text: "Tech-Stack",
    href: "techStack",
  },
  projects: {
    text: "Projects",
    href: "projects",
  },
  contactMe: {
    text: "Contact Me",
    href: "contact",
  },
} as const satisfies Record<string, LinkType>;