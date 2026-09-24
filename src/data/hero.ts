import type { HeroType } from "../sections/hero/HeroSection";
import { anchorData, downloadCVData } from "./button";

export const heroData: HeroType = {
  badge: "developer that help your business grow",
  greetings: "Hi there, I'm",
  fullName: "RICHARD T. OKAFOR",
  role: "Frontend Web Engineer ",
  description:
    "Welcome to my portfolio! I specialize in crafting fast, responsive, and engaging user interfaces using React, TypeScript, and modern web technologies. I build scalable web applications focused on performance, clean code, and great user experience",
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
  buttons: {
    downloadCV: downloadCVData, 
    contact: anchorData.contact,
    techStack: anchorData.techStack,
  },
};
