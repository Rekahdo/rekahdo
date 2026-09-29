import { HeroProps } from "@/components/sections/hero-section";
import { headerData } from "./header";

export const heroData: HeroProps = {
  badge: "developer that help your business grow",
  greetings: "Hi there, I'm",
  fullName: "RICHARD T. OKAFOR",
  role: "Frontend Engineer | Full-Stack Perspective",
  description:
    "Welcome to my portfolio! I specialize in crafting fast, responsive, and engaging user interfaces using React, TypeScript, and modern web technologies. I build scalable web applications focused on performance, clean code, and great user experience",
  heroImage: {
    alt: "richard okafor",
    src: "/images/me/hero-section.png",
  },
  location: "Lagos Nigeria",
  tags: [
    { text: "Clean-Code" }, 
    { text: "Object Oriented" },
    { text: "Component Based" },
  ],
  downloadCV: headerData.downloadCV, 
};
