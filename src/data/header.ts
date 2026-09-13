import type { HeaderType } from "../utils/type";
import { buttonData } from "./button";

export const headerData: HeaderType = {
  hidden: false,
  logo: {
    hidden: false,
    name: "REKAHDO.dev",
    file_path: "/images/logos/logo-full.svg",
  },
  navLink: {
    hidden: false,
    links: [
      {
        b_id: 1,
        text: "Home",
        file_path: "#home",
      },
      {
        b_id: 2,
        text: "About Me",
        file_path: "#about",
      },
      {
        b_id: 3,
        text: "Tech-Stack",
        file_path: "#tech-stack",
      },
      {
        b_id: 4,
        text: "Projects",
        file_path: "#projects",
      },
      {
        b_id: 5,
        text: "Contact Me",
        file_path: "#contact",
      },
    ],
  },
  ctaButton: buttonData[0],
};
