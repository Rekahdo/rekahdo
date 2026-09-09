import type { HeaderType } from "../sections/header/HeaderType";

export const headerData: HeaderType = {
  hidden: false,
  logo: {
    hidden: false,
    name: "REKAHDO.dev",
    url: "/src/images/logos/logo-full.svg",
  },
  navLink: {
    hidden: false,
    links: [
      {
        id: 1,
        hidden: false,
        text: "Home",
        path: "#home",
        indexPosition: 1,
      },
      {
        id: 2,
        hidden: false,
        text: "About Me",
        path: "#about",
        indexPosition: 2,
      },
      {
        id: 3,
        hidden: false,
        text: "Tech-Stack",
        path: "#tech-stack",
        indexPosition: 3,
      },
      {
        id: 4,
        hidden: false,
        text: "Projects",
        path: "#projects",
        indexPosition: 4,
      },
      {
        id: 5,
        hidden: false,
        text: "Contact Me",
        path: "#contact",
        indexPosition: 5,
      },
    ],
  },
  ctaButton: {
    id: 1,
    hidden: false,
    text: "Download CV",
    download: {
      file_name: "Richard_Okafor_CV.pdf",
      file_path: "/Richard_Okafor_CV.pdf",
    }
  },
};
