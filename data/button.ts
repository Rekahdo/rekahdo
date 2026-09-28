import type { DownloadBtnType, PageBtnType } from "../components/ui/button";
import { links } from "./links";

export const anchorData = {
  contact: links.contactMe,
  techStack: links.techStack,
} as const satisfies Record<string, PageBtnType>;

export const downloadCVData: DownloadBtnType = {
  text: "Download CV",
  href: "/docs/Richard_Okafor_CV.pdf",
  file_name: "Richard_Okafor_CV.pdf",
} as const;
