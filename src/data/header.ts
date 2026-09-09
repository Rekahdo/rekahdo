import type { HeaderType } from "../sections/header/HeaderType";

export const headerData: HeaderType = {
  hidden: false,
  logo: {
    hidden: false,
    name: "REKAHDO.dev",
    file_path: "/src/images/logos/logo-full.svg",
  },
  navLink: {
    hidden: false,
    links: [
      {
        id: 1,
        hidden: false,
        text: "Home",
        file_path: "#home",
        indexPosition: 1,
      },
      {
        id: 2,
        hidden: false,
        text: "About Me",
        file_path: "#about",
        indexPosition: 2,
      },
      {
        id: 3,
        hidden: false,
        text: "Tech-Stack",
        file_path: "#tech-stack",
        indexPosition: 3,
      },
      {
        id: 4,
        hidden: false,
        text: "Projects",
        file_path: "#projects",
        indexPosition: 4,
      },
      {
        id: 5,
        hidden: false,
        text: "Contact Me",
        file_path: "#contact",
        indexPosition: 5,
      },
    ],
  },
  ctaButton: {
    id: 1,
    hidden: false,
    text: "Download CV",
    file_path: "/Richard_Okafor_CV.pdf",
    file_name: "Richard_Okafor_CV.pdf",
  },
};
