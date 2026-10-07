'use client'

import { useProjects } from "@/contexts/ProjectsProvider";
import { Container } from "../shared-ui/container";
import { SectionProps } from "./about-section";
import { H2 } from "../shared-ui/headings";
import Projects from "../app-ui/project";
import { ImageType } from "@/lib/types";
import { TagType } from "../app-ui/tag";

export const StatusArray = [
    "deployed",
    "development",
    "maintenance",
] as const;

type StatusKey = (typeof StatusArray)[number];

type StatusValue = {
    label: string;
    fg: string;
    ping: string;
    bg: string;
    bd: string;
}

type StatusType = Record<StatusKey, StatusValue>;

export const Status: StatusType = {
    deployed: {
        label: "Live",
        fg: "text-emerald-500",
        ping: "bg-emerald-500",
        bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
        bd: "border-2 border-emerald-500/50 shadow-emerald-500/20"
    },
    development: {
        label: "In Development",
        fg: "text-amber-500",
        ping: "bg-amber-500",
        bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
        bd: "border-2 border-amber-500/50 shadow-amber-500/20"
    },
    maintenance: {
        label: "Maintenance",
        fg: "text-orange-500",
        ping: "bg-orange-500",
        bg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
        bd: "border-2 border-orange-500/50 shadow-orange-500/20"
    }
}

export type ProjectType = {
    title: string;
    description: string;
    image: ImageType;
    github: string;
    deployment?: string;
    technologies: TagType[];
    status: StatusKey;
};

export interface ProjectsProps extends SectionProps {
    projects: ProjectType[];
};

export default function ProjectsSection() {

    const { data } = useProjects()!;

    return (
        <Container
            id="projects"
            py={'section'}
            background={'muted'}
        >
            <H2 title={data?.title} subtitle={data?.subtitle}>
                <Projects projects={data?.projects} />
            </H2>
        </Container>
    );
}