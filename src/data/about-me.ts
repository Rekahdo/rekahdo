import type { AboutType } from "../sections/about/AboutSection";

export const aboutMeData: AboutType = {
  title: "About me",
  headline: "Frontend-Focused Engineer with Full-Stack Perspective",
  bio: "I am a Frontend Developer dedicated to building fast, scalable, and modular web applications using React, TypeScript, and modern CSS Frameworks. My engineering journey began on the backend, where working deeply with Java and Spring Boot instilled a strong foundation in Object-Oriented Programming (OOP) and system design. \n\nThat mindset directly shapes how I write client-side code today. I approach UI development by encapsulating logic and state into clean, reusable, object-like components designed for scalability and maintainability. \n\nBeyond frontend architecture, my background designing RESTful APIs, microservices, and databases allows me to bridge client-side interfaces with backend systems effortlessly. I am currently expanding my modern full-stack toolkit with Next.js, combining interactive React components with server-side capabilities.",
  me: {
    src: "/images/me/richard.svg",
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
    text: "To me, great frontend development isn't just about pixel-perfect layouts, it's also about understanding the entire data flow from backend APIs to client interactions to deliver a seamless user experience.",
  },
  educations: [
    {
      institution: "NIIT",
      course: "Software Engineering ",
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
      certification: "/docs/Frontend_Development_Certification.pdf",
      website: "https://tsacademyonline.com/",
      logo: "/images/icons/tsa.svg",
    },
  ],
  skillTags: [
    {text: "Teaching", emoji: "🧠"},
    {text: "Problem Solving", emoji: "🧩"},
    {text: "Logic Reasoning", emoji: "🔧"},
    {text: "Communication", emoji: "💬"},
    {text: "Collaboration", emoji: "🤝"},
    {text: "Team working", emoji: "👥"},
    {text: "Version Control", emoji: "🔀"},
    {text: "Agile", emoji: "♻️"},
  ],
};
