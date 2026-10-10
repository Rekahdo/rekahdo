export type ProjectData = {
    title: string;
    description: string;
    image: { src: string; alt: string };
    github: string;
    deployment?: string;
    technologies: { title: string }[];
    status: "development" | "deployed" | "maintenance";
};

export const projectsData: Promise<ProjectData[]> = Promise.resolve([
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
            { title: "Next.js" },
            { title: "TypeScript" },
            { title: "Tailwind CSS" },
            { title: "Shadcn UI" },
            { title: "Base UI" },
            { title: "Convex" },
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
            { title: "Next.js" },
            { title: "TypeScript" },
            { title: "Tailwind CSS" },
            { title: "Shadcn UI" },
            { title: "Base UI" },
            { title: "Convex" },
            { title: "Better Auth" },
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
            { title: "HTML" },
            { title: "CSS" },
            { title: "Javascript" },
            { title: "React" },
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
        technologies: [{ title: "HTML" }, { title: "CSS" }],
        status: "deployed",
    },
    {
        title: "Nimbus — Weather Intelligence Dashboard",
        description:
            "A real-time weather dashboard featuring animated radar overlays, location-based forecasts, and severe-weather alerting driven by a third-party meteorological API.",
        image: {
            src: "https://picsum.photos/seed/nimbus/800/450",
            alt: "Nimbus weather intelligence dashboard preview",
        },
        github: "https://github.com/Rekahdo/nimbus",
        deployment: "https://nimbus-weather.vercel.app",
        technologies: [
            { title: "Next.js" },
            { title: "TypeScript" },
            { title: "Tailwind CSS" },
            { title: "Mapbox" },
            { title: "Convex" },
        ],
        status: "deployed",
    },
    {
        title: "Ledgerly — Personal Finance Tracker",
        description:
            "A budgeting and expense-tracking app with recurring transaction support, category analytics, and CSV import/export — designed for privacy-first local storage with optional Convex sync.",
        image: {
            src: "https://picsum.photos/seed/ledgerly/800/450",
            alt: "Ledgerly personal finance tracker preview",
        },
        github: "https://github.com/Rekahdo/ledgerly",
        technologies: [
            { title: "React" },
            { title: "TypeScript" },
            { title: "Tailwind CSS" },
            { title: "Recharts" },
            { title: "Zustand" },
        ],
        status: "development",
    },
    {
        title: "Verdant — Plant Care Companion",
        description:
            "A plant-care assistant that tracks watering schedules, sends push reminders, and identifies species from photos using an on-device ML model for offline-first usage.",
        image: {
            src: "https://picsum.photos/seed/verdant/800/450",
            alt: "Verdant plant care companion preview",
        },
        github: "https://github.com/Rekahdo/verdant",
        deployment: "https://verdant-plants.vercel.app",
        technologies: [
            { title: "Next.js" },
            { title: "TypeScript" },
            { title: "Tailwind CSS" },
            { title: "TensorFlow.js" },
            { title: "Base UI" },
        ],
        status: "maintenance",
    },
    {
        title: "Cadence — Collaborative Kanban Board",
        description:
            "A real-time Kanban board with drag-and-drop task management, presence indicators, threaded comments, and per-column WIP limits — powered by Convex reactive queries.",
        image: {
            src: "https://picsum.photos/seed/cadence/800/450",
            alt: "Cadence collaborative kanban board preview",
        },
        github: "https://github.com/Rekahdo/cadence",
        deployment: "https://cadence-board.vercel.app",
        technologies: [
            { title: "Next.js" },
            { title: "TypeScript" },
            { title: "Tailwind CSS" },
            { title: "dnd-kit" },
            { title: "Convex" },
            { title: "Better Auth" },
        ],
        status: "deployed",
    },
    {
        title: "Pulseboard — Team Analytics & Metrics Hub",
        description:
            "A live metrics dashboard aggregating deployment frequency, PR cycle time, and incident response stats from GitHub, Linear, and PagerDuty into a single source of truth for engineering teams.",
        image: {
            src: "https://picsum.photos/seed/pulseboard/800/450",
            alt: "Pulseboard team analytics hub preview",
        },
        github: "https://github.com/Rekahdo/pulseboard",
        deployment: "https://pulseboard-analytics.vercel.app",
        technologies: [
            { title: "Next.js" },
            { title: "TypeScript" },
            { title: "Tailwind CSS" },
            { title: "Tremor" },
            { title: "Convex" },
            { title: "Octokit" },
        ],
        status: "deployed",
    },
    {
        title: "Sonata — Ambient Music Generator",
        description:
            "A browser-based generative music tool that composes endless ambient soundscapes using Web Audio API oscillators, probabilistic note selection, and reverb modulation — no samples, no backend.",
        image: {
            src: "https://picsum.photos/seed/sonata/800/450",
            alt: "Sonata ambient music generator preview",
        },
        github: "https://github.com/Rekahdo/sonata",
        technologies: [
            { title: "React" },
            { title: "TypeScript" },
            { title: "Web Audio API" },
            { title: "Tailwind CSS" },
        ],
        status: "development",
    },
    {
        title: "Terraform — Infrastructure as Code Playground",
        description:
            "An interactive Terraform learning sandbox with guided modules, live plan/apply simulation, and side-by-side diff views — designed to teach IaC concepts without spinning up real cloud resources.",
        image: {
            src: "https://picsum.photos/seed/terraform-lab/800/450",
            alt: "Terraform infrastructure playground preview",
        },
        github: "https://github.com/Rekahdo/terraform-lab",
        deployment: "https://terraform-lab.vercel.app",
        technologies: [
            { title: "Next.js" },
            { title: "TypeScript" },
            { title: "Monaco Editor" },
            { title: "Tailwind CSS" },
            { title: "Shadcn UI" },
        ],
        status: "maintenance",
    },
    {
        title: "Aperture — Photo Portfolio & Client Proofing",
        description:
            "A photography portfolio with client proofing galleries, watermarking, license selection, and download tracking — built for freelance photographers managing multiple client shoots.",
        image: {
            src: "https://picsum.photos/seed/aperture/800/450",
            alt: "Aperture photo portfolio and client proofing preview",
        },
        github: "https://github.com/Rekahdo/aperture",
        deployment: "https://aperture-portfolio.vercel.app",
        technologies: [
            { title: "Next.js" },
            { title: "TypeScript" },
            { title: "Tailwind CSS" },
            { title: "Cloudinary" },
            { title: "Convex" },
            { title: "Stripe" },
            { title: "Better Auth" },
            { title: "Shadcn UI" },
        ],
        status: "deployed",
    },
]);