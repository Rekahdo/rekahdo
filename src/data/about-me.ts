import type { AboutType } from "../sections/about/AboutSection";

export const aboutMeData: AboutType = {
  title: "About me",
  headline: "Bridging Backend Stability With Frontend Inspiration",
  bio: "I am a Java backend developer with almost 2 years of experience, specializing in building scalable and robust systems using Spring Boot and microservices architecture. I also have 2 years of experience working in a solar engineering company. I am currently expanding into front-end development.",
  me: {
    src: "/images/me/richard.png",
    alt: "Richard Okafor About Me"
  },
  experiences: [
    {
      years: 1,
      title: "Backend",
    },
    {
      years: 1,
      title: "Fronted",
    },
  ],
  quote: {
    text: "To me, Full-stack development involves engineering robust, scalable systems, bringing back-end stability and front-end inspiration to create seamless user experience.",
  },
  education: [
    {
      institution: "NIIT",
      course: "Software Engineering",
      certification: "/docs/NIIT_Certification.jpg",
      website: "https://www.niit.com/nigeria/",
      logo: "/images/icons/niit.svg",
    },
    {
      institution: "Udemy",
      course: "Spring Boot Certification",
      certification: "/docs/Spring_Boot_Certification.pdf",
      website: "https://www.udemy.com/share/107zyk3@s_qIkz9IEydVxtT386qxf7AS7Nsxngx0f8X-SVtA6ghsg0cXKOaMBzJDswfjXhBYTQ==/",
      logo: "/images/icons/udemy.svg",
    },
    {
      institution: "TS Academy",
      course: "Frontend Development",
      certification: "",
      website: "https://tsacademyonline.com/",
      logo: "/images/icons/ts-academy.svg",
    },
  ],
  skillTags: [
    {text: "Teaching", emoji: "🧠"},
    {text: "Problem Solving", emoji: "🔧"},
    {text: "Communication", emoji: "💬"},
    {text: "Collaboration", emoji: "🤝"},
    {text: "Team working", emoji: "👥"},
    {text: "Version Control", emoji: "🔀"},
    {text: "Agile", emoji: "♻️"},
  ],
};
