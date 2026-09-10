import type { HeroType } from "../sections/hero/HeroType";

export const heroData: HeroType = {
  hidden: false,
  greetings: "Hi there, I'm",
  fullName: "RICHARD OKAFOR",
  role: "Full Stack Developer",
  description: "Welcome to my portfolio, where I showcase my projects, skills, and experience as a passionate developer with a focus on Java-based and front-end technologies, developing innovative solutions that drive business value and user engagement.",
  location: {
    hidden: false,
    state: "Lagos",
    country: "Nigeria"
  },
  avatar: {
    hidden: false,
    file_name: "richard okafor",
    file_path: "/src/images/me/hero-section.png",
    rounded: true,
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
    }
  ],
  actionButtons: [
    {
      id: 1,
      hidden: false,
      text: "Contact Me",
      file_path: "#contact",
    },
    {
      id: 2,
      hidden: false,
      text: "Tech-Stack",
      file_path: "#tech-stack",
    },
    {
      id: 3,
      hidden: false,
      text: "Download CV",
      file_path: "/Richard_Okafor_CV.pdf",
      file_name: "Richard_Okafor_CV.pdf",
    }
  ]
}
