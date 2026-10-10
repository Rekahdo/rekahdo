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
    role: "Full Stack Web Engineer",
    description:
        "Welcome to my portfolio! I specialize in crafting fast, responsive, and engaging user interfaces using React, TypeScript, and modern web technologies. I build scalable web applications focused on performance, clean code, and great user experience",
    availableForWork: true,
    image: {
        src: "/images/me/richard.svg",
        alt: "richard okafor",
    },
    tags: [
        { title: "Clean-Code" },
        { title: "Object Oriented" },
        { title: "Component Based" },
    ],
});