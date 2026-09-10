import type { HeroType } from "../sections/hero/HeroType";
import { buttonData } from "./button";

export const heroData: HeroType = {
  hidden: false,
  greetings: "Hi there, I'm",
  fullName: "RICHARD OKAFOR",
  role: "Full Stack Developer",
  description:
    "Welcome to my portfolio, where I showcase my projects, skills, and experience as a passionate developer with a focus on Java-based and front-end technologies, developing innovative solutions that drive business value and user engagement.",
  avatar: {
    hidden: false,
    file_name: "richard okafor",
    file_path: "/src/images/me/hero-section.png",
    rounded: true,
    location: {
      hidden: false,
      state: "Lagos",
      country: "Nigeria",
    },
  },
  tags: [
    {
      id: 1,
      hidden: false,
      text: "Clean-Code Developer",
    },
    {
      id: 2,
      hidden: false,
      text: "TS Academy Frontend Development Student",
    },
  ],
  actionButtons: [
    {
      uiTypeId: 2,
      button: buttonData[1],
    },
    {
      uiTypeId: 3,
      button: buttonData[2],
    },
    {
      uiTypeId: 4,
      button: buttonData[0],
    }
  ],
};
