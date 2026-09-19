import type { HeroType } from "../sections/hero/HeroSection";
import { buttonData, downloadCVData } from "./button";

export const heroData: HeroType = {
  badge: "developer that help your business grow",
  greetings: "Hi there, I'm",
  fullName: "RICHARD T. OKAFOR",
  role: "Full Stack Developer",
  description:
    "Welcome to my portfolio, where I showcase my projects, skills, and experience as a passionate developer with a focus on Java-based and front-end technologies, developing innovative solutions that drive business value and user engagement.",
  heroImage: {
    alt: "richard okafor",
    src: "/images/me/hero-section.png",
  },
  location: {
    
    state: "Lagos",
    country: "Nigeria",
  },
  tags: [
    { text: "Clean-Code" }, 
    { text: "Object Oriented" },
    { text: "Component Based" },
  ],
  buttons: [downloadCVData, ...buttonData],
};
