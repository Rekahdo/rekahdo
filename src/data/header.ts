import type { HeaderType } from "../sections/header/HeaderType";

export const headerData: HeaderType = {
  visible: true,
  logo: {
    visible: true,
    name: "REKAHDO.dev",
    url: "/src/images/logos/logo-full.png",
  },
  navLink: {
    visible: true,
    links: [
      {
        id: 1,
        visible: true,
        text: "Home",
        path: "#home",
        indexPosition: 1,
      },
      {
        id: 2,
        visible: true,
        text: "About Me",
        path: "#about",
        indexPosition: 2,
      },
      {
        id: 3,
        visible: true,
        text: "Tech-Stack",
        path: "#tech-stack",
        indexPosition: 3,
      },
      {
        id: 4,
        visible: true,
        text: "Projects",
        path: "#projects",
        indexPosition: 4,
      },
      {
        id: 5,
        visible: true,
        text: "Contact Me",
        path: "#contact",
        indexPosition: 5,
      },
    ],
  },
  ctaButton: {
    id: 1,
    visible: true,
    text: "Download CV",
    path: "/resume.pdf",
    isExternal: true,
  },
};
