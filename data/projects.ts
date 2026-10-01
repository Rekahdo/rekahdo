import { ProjectsProps } from "@/components/sections/project-section";

export const projectsData: ProjectsProps = {
    title: "projects",
    subtitle:
        "A collection of frontend applications, full-stack tools, and real-time platforms powered by Convex, modern web frameworks, and backend services.",
    projects: [
        {
            title: "Portfolio — Personal Developer Showcase",
            description:
                "A personal portfolio site with a fluid glassmorphism UI, custom gradient mesh animations, and dynamic project filtering — content is served and managed through Convex.",
            image: {
                src: "https://picsum.photos/seed/portfolio/800/450",
                alt: "Personal developer portfolio preview",
            },
            github: "https://github.com/Rekahdo/rekahdo",
            deployment: "https://rekahdo.vercel.app",
            technologies: [
                { text: "Next.js" },
                { text: "TypeScript" },
                { text: "Tailwind CSS" },
                { text: "Shadcn UI" },
                { text: "Base UI" },
                { text: "Convex" },
            ],
            status: "development",
        },
        {
            title: "Glog — Developer Blog & Publishing Platform",
            description:
                "A modern full-stack blogging platform featuring rich Markdown editing, tag-based content discovery, and real-time reader interaction powered by Convex.",
            image: {
                src: "https://picsum.photos/seed/glog/800/450",
                alt: "Glog developer blog and publishing platform preview",
            },
            github: "https://github.com/Rekahdo/glog",
            technologies: [
                { text: "Next.js" },
                { text: "TypeScript" },
                { text: "Tailwind CSS" },
                { text: "Shadcn UI" },
                { text: "Base UI" },
                { text: "Convex" },
                { text: "Better Auth" },
            ],
            status: "development",
        },
        {
            title: "SolStat — Astronomical Data Platform",
            description:
                "An interactive space and planetary data web application delivering real-time celestial insights, orbital metrics, and dynamic planetary comparisons.",
            image: {
                src: "https://picsum.photos/seed/solstat/800/450",
                alt: "SolStat astronomical data platform preview",
            },
            github: "https://github.com/Eclipse-017/SolStat",
            deployment: "https://solstat.vercel.app/",
            technologies: [
                { text: "HTML" },
                { text: "CSS" },
                { text: "Javascript" },
                { text: "React" },
            ],
            status: "deployed",
        },
        {
            title: "Delight Learning — E-Learning Hub",
            description:
                "An interactive learning platform featuring course tracking, student progress analytics, and instant feedback loops backed by Convex mutations.",
            image: {
                src: "https://picsum.photos/seed/delightlearning/800/450",
                alt: "Delight Learning e-learning hub preview",
            },
            github: "https://github.com/Rekahdo/delight-learning",
            deployment: "https://rekahdo-delight-learning.vercel.app/",
            technologies: [
                { text: "HTML" },
                { text: "CSS" },
            ],
            status: "deployed",
        },
    ],
};