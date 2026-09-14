import type { HeaderType } from "../utils/type";
import { buttonData } from "./button";
import { linkData } from "./links";

export const headerData: HeaderType = {
  hidden: false,
  logo: {
    hidden: false,
    name: "REKAHDO.dev",
    light_src: "/images/logos/logo-light.svg",
    dark_src: "/images/logos/logo-dark.svg",
    alt: "REKAHDO.dev logo"
  },
  navLink: {
    hidden: false,
    links: [
      linkData[0], 
      linkData[1], 
      linkData[2], 
      linkData[3], 
      linkData[4], 
    ]
  },
  ctaButton: buttonData[0],
};
