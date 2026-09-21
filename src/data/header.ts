import type { HeaderType } from "../sections/header/HeaderSection";
import { downloadCVData } from "./button";
import { logoData } from "./logo";
import { links } from "./links";

export const headerData: HeaderType = {
  logo: logoData,
  links: [
    links.home, 
    links.aboutMe, 
    links.techStack, 
    links.projects,
    links.contactMe,
  ],
  downloadCV: downloadCVData,
};
