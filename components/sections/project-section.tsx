import { Container } from "../shared-ui/container";
import { H2 } from "../shared-ui/headings";
import { AppImageType } from "@/lib/types";
import { TagType } from "../app-ui/tag";
import { section } from "@/data/section";
import { projectsData } from "@/data/project";
import { FolderGit2 } from "lucide-react";
import { ProjectCards } from "../app-ui/project-card";

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
        bd: "border-emerald-500/40 shadow-sm",
    },
    development: {
        label: "In Development",
        fg: "text-amber-500",
        ping: "bg-amber-500",
        bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
        bd: "border-amber-500/40 shadow-sm",
    },
    maintenance: {
        label: "Maintenance",
        fg: "text-orange-500",
        ping: "bg-orange-500",
        bg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
        bd: "border-orange-500/40 shadow-sm",
    },
};

export const PROJECT_ID = "project";

export default async function ProjectsSection() {
    const data = await projectsData;
    const sec = section.project;

    return (
        <Container
            id={PROJECT_ID}
            py={"section"}
            px={'section'}
            bgGradient={'grid-sm'}
            rootClassName="relative overflow-visible"
            containerClassName="relative"
        >
            <section className="flex flex-col gap-10 w-full relative z-10">
                <H2
                    title={sec.title}
                    subtitle={sec.subtitle}
                    icon={<FolderGit2 className="text-primary size-6" />}
                    subtitleClassName="text-center mx-auto"
                    titleClassName="mx-auto text-center tracking-tight"
                />

                <ProjectCards projects={data.filter(project => project.display) ?? []} />
            </section>
        </Container>
    );
}
