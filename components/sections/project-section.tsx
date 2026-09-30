'use client'

import { useProjects } from "@/contexts/ProjectsProvider";
import { Container } from "../shared-ui/container";
import { SectionProps } from "./about-section";
import { H2 } from "../shared-ui/headings";
import Projects from "../app-ui/project";
import { ImageType } from "@/lib/prop-types";

export const StatusArray = [
  "deployed",
  "development",
  "maintenance",
] as const;

type StatusKey = (typeof StatusArray)[number];

type StatusValue = {
    label: string;
    fg: string;
    bg: string;
    bd: string;
} 

type StatusType = Record<StatusKey, StatusValue>;

const Status: StatusType = {
    deployed: {
        label: "Live",
        fg: "bg-emerald-500",
        bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
        bd: "group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/20"
    },
    development: {
        label: "In Development",
        fg: "bg-amber-500",
        bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
        bd: "group-hover:border-amber-500/50 group-hover:shadow-amber-500/20"
    },
    maintenance: {
        label: "Maintenance",
        fg: "bg-orange-500",
        bg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
        bd: "group-hover:border-orange-500/50 group-hover:shadow-orange-500/20"
    }
}

export type ProjectType = {
    id: number;
    title: string;
    description: string;
    image: ImageType;
    github?: string;
    deployment?: string;
    liveDeploymentLink?: string;
    technologies: string[];
    status: StatusKey;
};

export interface ProjectsProps extends SectionProps{
    projects: ProjectType[];
};

export default function ProjectsSection() {

    const {data} = useProjects()!;

    return (
        <Container
            id="project"
            py={'section'}
            background={'muted'}
        >
            <H2 title={data?.title} subtitle={data?.subtitle}>
                <Projects projects={data?.projects}/>
            </H2>
        </Container>
    );
}