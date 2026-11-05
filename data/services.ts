import { serviceValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export type ServiceData = Infer<typeof serviceValidator> & {
  id: string;
};

export const servicesData: Promise<ServiceData[]> = Promise.resolve([
  {
    id:"1",
    title: "Web Frontend Development",
    badge: "Development",
    subHeading: "UI/UX Architecture · Responsive Design · Performance",
    description:
    "Building responsive, accessible, and high-performance web applications with modern frameworks, clean code standards, and seamless user experiences.",
    tags: [
      { title: "React" },
      { title: "Next.js" },
      { title: "Tailwind CSS" },
      { title: "TypeScript" },
    ],
    order: 1,
  },
  {
    id:"2",
    title: "Technical Consulting & Mentoring",
    badge: "Consulting",
    subHeading: "Teaching · Problem Solving · Growth",
    description:
      "Leveraging my passion for clean code and continuous learning, I assist teams with code reviews, architecture discussions, and knowledge transfer to elevate engineering quality across projects.",
    tags: [
      { title: "Code Review" },
      { title: "Pair Programming" },
      { title: "Documentation" },
      { title: "Agile" },
    ],
    order: 2,
  },
]);
