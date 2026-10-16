import { aboutValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export type AboutData = Infer<typeof aboutValidator>;

export const aboutData: Promise<AboutData> = Promise.resolve({
  firstname: "Richard",
  lastname: "Okafor",
  role: "Next.js Web Engineer",
  stack: "Frontend Engineer | Full-Stack Perspective",
  headline: "Frontend-Focused Engineer with Full-Stack Perspective",
  bio: `I am a Frontend Developer focused on building fast, reliable, and responsive web applications using React, Next.js, and TypeScript. My tech journey began in UI/UX design before I transitioned into frontend engineering, which gave me a practical eye for clean layout structure, design consistency, and solid user flows.

        My main focus is creating modular, reusable UI components and building clear, conversion-ready landing pages that help businesses get visible online. I structure my client-side code around solid engineering principles, keeping state management clean and making sure frontend components integrate cleanly with backend APIs.

        Beyond building client-side apps, I enjoy technical teaching and mentorship. I regularly break down hard coding concepts into simple, clear steps for junior developers and beginners, focusing entirely on clean component code, reliable user interfaces, and helping businesses grow their web presence.
    `,
  profile: {
    src: "/images/me/about.svg",
    alt: "Richard Okafor About Me",
  },
  experiences: [
    { years: 1, title: "backend" },
    { years: 1, title: "frontend" },
  ],
  quote: {
    text: "To me, great frontend work isn't just about pixel-perfect layouts, it's about building maintainable code, giving businesses a real online presence, and breaking down tough concepts so others can grow.",
  },
  educations: [
    {
      institution: "NIIT",
      course: "Software Engineering ",
      certification: "/docs/NIIT_Diploma_and_Transcript_Okafor_Richard.pdf",
      website: "https://www.niit.com/nigeria/",
      logo: "/images/icons/niit.svg",
    },
    {
      institution: "Udemy",
      course: "Spring Boot Certification",
      certification: "/docs/Spring_Boot_Certification - Okafor Richard.pdf",
      website:
        "https://www.udemy.com/share/107zyk3@s_qIkz9IEydVxtT386qxf7AS7Nsxngx0f8X-SVtA6ghsg0cXKOaMBzJDswfjXhBYTQ==/",
      logo: "/images/icons/udemy.svg",
    },
    {
      institution: "TS Academy",
      course: "Frontend Development",
      certification:
        "/docs/Frontend_Development_Certification - Okafor Richard.pdf",
      website: "https://tsacademyonline.com/",
      logo: "/images/icons/tsa.svg",
    },
  ],
  skillTags: [
    { title: "Web Visibility", emoji: "🌐" },
    { title: "Component Design", emoji: "🧩" },
    { title: "Technical Mentorship", emoji: "🧠" },
    { title: "Clean Code", emoji: "✨" },
    { title: "Version Control", emoji: "🔀" },
    { title: "Patient & Approachable", emoji: "😊" },
    { title: "Friendly & Open", emoji: "💬" },
    { title: "People Person", emoji: "👥" },
    { title: "Problem Solving", emoji: "⚡" },
    { title: "Agile Workflow", emoji: "🔄" },
    { title: "Easy to Collaborate With", emoji: "🤝" },
  ],
});
