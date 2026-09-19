import type { ButtonType } from "../components/ui/button";
import type { DownloadType } from "../components/ui/download-btn";

export const buttonData: ButtonType[] = [
  {
    text: "Contact Me",
    src: "#contact",
  },
  {
    text: "Tech-Stack",
    src: "#tech-stack",
  },
  {
    text: "Send Message",
    src: "#tech-stack",
  },
];

export const downloadCVData: DownloadType = {
  text: "Download CV",
  src: "/docs/Richard_Okafor_CV.pdf",
  file_name: "Richard_Okafor_CV.pdf",
};
