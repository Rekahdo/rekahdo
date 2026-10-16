import { heroValidator } from "@/convex/schema";
import { Infer } from "convex/values";

export const heroData: Promise<Infer<typeof heroValidator>> = Promise.resolve({
    badge: "developer that help your business grow",
    greetings: "Hi there",
    introduction: "I'M",
    headline: "",
    description:
        "I build scalable web applications, custom UI components, and high-converting websites that give businesses strong online visibility. Beyond writing clean, modern frontend code with React and Next.js, I love breaking down complex programming concepts into simple, accessible ideas for developers who are just starting out.",
    availableForWork: true,
    image: {
        src: "/images/me/hero.svg",
        alt: "richard okafor",
    },
    tags: [
        { title: "Component Driven" },
        { title: "Web Visibility" },
        { title: "Technical Mentorship" },
    ],
});