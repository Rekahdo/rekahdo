import type { PageBtnType } from "../components/ui/button";

export const links = {
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
} as const satisfies Record<string, PageBtnType>;