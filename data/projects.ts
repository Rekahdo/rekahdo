import { ProjectsProps } from "@/components/sections/project-section";

export const projectsData: ProjectsProps = {
    title: "projects",
    subtitle:
        "A collection of frontend applications, full-stack tools, and real-time platforms powered by Convex, modern web frameworks, and backend services.",
    projects: [
        {
            id: 1,
            title: "Glog — Developer Blog & Publishing Platform",
            description:
                "A modern full-stack blogging platform featuring rich Markdown editing, tag-based content discovery, and real-time reader interaction powered by Convex.",
            image: {
                src: "https://picsum.photos/seed/glog/800/450",
                alt: "Glog developer blog and publishing platform preview",
            },
            github: "https://github.com/username/glog",
            liveDeploymentLink: "https://glog.example.com",
            technologies: ["Next.js", "Convex", "TypeScript", "Tailwind CSS"],
            status: "deployed",
        },
        {
            id: 2,
            title: "SolStat — Astronomical Data Platform",
            description:
                "An interactive space and planetary data web application delivering real-time celestial insights, orbital metrics, and dynamic planetary comparisons.",
            image: {
                src: "https://picsum.photos/seed/solstat/800/450",
                alt: "SolStat astronomical data platform preview",
            },
            github: "https://github.com/username/solstat",
            liveDeploymentLink: "https://solstat.example.com",
            technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
            status: "deployed",
        },
        {
            id: 3,
            title: "Delight Learning — E-Learning Hub",
            description:
                "An interactive learning platform featuring course tracking, student progress analytics, and instant feedback loops backed by Convex mutations.",
            image: {
                src: "https://picsum.photos/seed/delightlearning/800/450",
                alt: "Delight Learning e-learning hub preview",
            },
            github: "https://github.com/username/delight-learning",
            liveDeploymentLink: "https://delight-learning.example.com",
            technologies: ["Next.js", "Convex", "Shadcn UI", "Tailwind CSS"],
            status: "development",
        },
        {
            id: 4,
            title: "Nova Analytics Dashboard",
            description:
                "A fictional real-time analytics platform for SaaS teams — featuring live metrics, workspace toggles, and instant data updates powered by Convex reactive queries.",
            image: {
                src: "https://picsum.photos/seed/novadashboard/800/450",
                alt: "Nova Analytics dashboard preview",
            },
            github: "https://github.com/username/nova-analytics",
            liveDeploymentLink: "https://nova-analytics.example.com",
            technologies: ["Next.js", "Convex", "Tailwind CSS", "Recharts"],
            status: "deployed",
        },
        {
            id: 5,
            title: "PulseDesk — Workspace & Notes",
            description:
                "A fictional collaborative workspace with real-time document editing, live cursors, and instant cross-device sync handled by Convex state functions.",
            image: {
                src: "https://picsum.photos/seed/pulsedesk/800/450",
                alt: "PulseDesk collaborative workspace preview",
            },
            github: "https://github.com/username/pulsedesk",
            deployment: "https://pulsedesk.example.com",
            technologies: ["React", "Convex", "TypeScript", "Zustand"],
            status: "development",
        },
        {
            id: 6,
            title: "Aether Commerce",
            description:
                "A fictional headless storefront with instant full-text search, live cart state, and serverless mutations for checkout and inventory processing.",
            image: {
                src: "https://picsum.photos/seed/aethercommerce/800/450",
                alt: "Aether Commerce storefront preview",
            },
            github: "https://github.com/username/aether-commerce",
            deployment: "https://aether-commerce.example.com",
            technologies: ["Next.js", "Convex", "Stripe", "Shadcn UI"],
            status: "deployed",
        },
        {
            id: 7,
            title: "Vortex Board — Sprint Tracker",
            description:
                "A fictional Kanban project management tool with drag-and-drop task ordering, automated activity logging, and role-based permissions using Convex schema rules.",
            image: {
                src: "https://picsum.photos/seed/vortexboard/800/450",
                alt: "Vortex Board sprint tracker preview",
            },
            github: "https://github.com/username/vortex-board",
            deployment: "https://vortex-board.example.com",
            technologies: ["Next.js", "Convex", "Dnd Kit", "Tailwind CSS"],
            status: "maintenance",
        },
    ],
};