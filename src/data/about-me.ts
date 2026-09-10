type Experience = {
  hidden: boolean;
  years: number;
  text: string;
};

type Education = {
  id: number;
  title: string;
  institution: string;
  icon: string;
  hidden: boolean;
};

type CoreSkillType = {
  id: number;
  text: string;
  emoji: string;
  hidden: boolean;
};

type AboutType = {
  hidden: boolean;
  sectionTitle: string;
  headline: string;
  bio: string;
  me: string;
  experiences: Experience[];
  quote: {
    hidden: boolean;
    text: string;
  };
  education: Education[];
  coreSkills: CoreSkillType[];
};

export const aboutMeData: AboutType = {
  hidden: false,
  sectionTitle: "About me",
  headline: "Bridging Backend Stability With Frontend Inspiration",
  bio: "I am a Java backend developer with almost 2 years of experience, specializing in building scalable and robust systems using Spring Boot and microservices architecture. I also have 2 years of experience working in a solar engineering company. I am currently expanding into front-end development.",
  me: "/images/me/about-me.png",
  experiences: [
    {
      hidden: false,
      years: 1,
      text: "Backend",
    },
    {
      hidden: false,
      years: 1,
      text: "Fronted",
    },
  ],
  quote: {
    hidden: false,
    text: "To me, Full-stack development involves engineering robust, scalable systems, bringing back-end stability and front-end inspiration to create seamless user experience.",
  },
  education: [
    {
      id: 1,
      title: "Software Engineering",
      institution: "NIIT",
      icon: "/images/icons/niit.svg",
      hidden: false,
    },
    {
      id: 2,
      title: "Spring Boot Certification",
      institution: "Udemy",
      icon: "/images/icons/udemy.svg",
      hidden: false,
    },
    {
      id: 3,
      title: "Frontend Development",
      institution: "TS Academy",
      icon: "/images/icons/ts-academy.svg",
      hidden: false,
    },
  ],
  coreSkills: [
    { id: 1, text: "Teaching", emoji: "🧠", hidden: false },
    { id: 2, text: "Problem Solving", emoji: "🔧", hidden: false },
    { id: 3, text: "Communication", emoji: "💬", hidden: false },
    { id: 4, text: "Collaboration", emoji: "🤝", hidden: false },
    { id: 5, text: "Team working", emoji: "👥", hidden: false },
    { id: 6, text: "Version Control", emoji: "🔀", hidden: false },
    { id: 7, text: "Agile", emoji: "♻️", hidden: false },
  ],
};
