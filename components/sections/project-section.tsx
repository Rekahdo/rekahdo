import { Container } from "../shared-ui/container";
import { H2 } from "../shared-ui/headings";
import { AppImageType } from "@/lib/types";
import { TagType } from "../app-ui/tag";
import { section } from "@/data/section";
import { ProjectsTabs } from "../app-ui/projects-tab";
import { projectsData } from "@/data/projects";

export const StatusArray = ["deployed", "development", "maintenance"] as const;

type StatusKey = (typeof StatusArray)[number];

type StatusValue = {
    label: string;
    fg: string;
    ping: string;
    bg: string;
    bd: string;
};

type StatusType = Record<StatusKey, StatusValue>;

export const Status: StatusType = {
    deployed: {
        label: "Live",
        fg: "text-emerald-500",
        ping: "bg-emerald-500",
        bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
        bd: "border-2 border-emerald-500/50 shadow-emerald-500/20",
    },
    development: {
        label: "In Development",
        fg: "text-amber-500",
        ping: "bg-amber-500",
        bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
        bd: "border-2 border-amber-500/50 shadow-amber-500/20",
    },
    maintenance: {
        label: "Maintenance",
        fg: "text-orange-500",
        ping: "bg-orange-500",
        bg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
        bd: "border-2 border-orange-500/50 shadow-orange-500/20",
    },
};

export type ProjectType = {
    title: string;
    description: string;
    image: AppImageType;
    github: string;
    deployment?: string;
    technologies: TagType[];
    status: StatusKey;
};

export const PROJECT_ID = "project";

export default async function ProjectsSection() {
    // const data = await fetchQuery(api.project.findFour);
    const data = await projectsData
    const sec = section.project;

    return (
        <Container id={PROJECT_ID} py={"section"} px={'section'}>
            <H2 title={sec.title} subtitle={sec.subtitle} />
            <ProjectsTabs projects={data.slice(0, 4) ?? []} />
        </Container>
    );
}