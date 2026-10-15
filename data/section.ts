export interface SectionProps {
    title: string;
    subtitle?: string;
}

export const section = {
    about: {
        title: "About",
        subtitle: "",
    },
    stack: {
        title: "Tech Stack & Usage",
        subtitle: "A comprehensive breakdown of the technologies, frameworks, and tools I use to build scalable full-stack applications.",
    },
    project: {
        title: "Projects",
        subtitle: "A collection of frontend applications, full-stack tools, and real-time platforms powered by Convex, modern web frameworks, and backend services.",
    },
    contact: {
        title: "Let's connect",
        subtitle: "Have an idea, project, or opportunity in mind? Send me a note and I'll get back to you shortly.",
    },
    service: {
        title: "Services",
        subtitle: "Have a project in mind or just want to say hi? I'd love to hear from you.",
    },
} as Record<string, SectionProps>