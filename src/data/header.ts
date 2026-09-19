import type { HeaderType } from "../hooks/context";
import { downloadCVData } from "./button";
import { logoData } from "./logo";
import { navLinksData } from "./navlink";

export const headerData: HeaderType = {
  
  logo: logoData,
  navLink: navLinksData,
  downloadCV: downloadCVData,
};
