export type HeroData = {
    badge: string;
    greetings: string;
    introduction: string;
    name: string;
    headline: string;
    role: string;
    description: string;
    availableForWork: boolean;
    image: { src: string; alt: string };
    tags: { title: string; emoji?: string }[];
};

export const heroData: Promise<HeroData> = Promise.resolve({
    badge: "developer that help your business grow",
    greetings: "Hi there",
    introduction: "I'M",
    name: "RICHARD",
    headline: "",
    role: "Next.js Web Engineer",
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