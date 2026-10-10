"use client";

import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "../ui/card";
import { H3 } from "../shared-ui/headings";
import { cn } from "cn";
import { PingTag } from "../shared-ui/ping";
import { buttonVariants } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import { Tags } from "./tag";
import {
    ProjectType,
    StatusArray,
    Status,
} from "../sections/project-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface ProjectsTabsProps {
    projects: ProjectType[];
}

export function ProjectsTabs({ projects }: ProjectsTabsProps) {
    const tabs = ["all", ...StatusArray];

    return (
        <Tabs defaultValue={tabs[0]} className={"gap-6"}>
            <TabsList className={"bg-background gap-2 py-6 px-2 rounded-full max-xs:w-full sticky top-20 z-10"}>
                {tabs.map((tab) => (
                    <TabsTrigger
                        key={tab}
                        value={tab}
                        className={cn(
                            "capitalize rounded-full py-4 px-2 max-xs:text-xs max-xs:px-2 max-xs:py-4",
                        )}
                    >
                        {tab}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map((tab) => (
                <TabsContent
                    key={tab}
                    value={tab}
                    className="flex flex-wrap max-md:justify-center gap-4 sm:gap-6 md:gap-8"
                >
                    {projects
                        .filter((p) => tab === "all" || p.status === tab)
                        .map((project) => (
                            <Project key={project.title} project={project} />
                        ))}
                </TabsContent>
            ))}
        </Tabs>
    );
}

interface ProjectProps {
    project: ProjectType;
    className?: string;
}

export function Project({ project, className }: ProjectProps) {
    const status = Status[project.status];

    return (
        <Card
            className={cn(
                "group shadow-lg grow basis-1 p-0 gap-0",
                "min-w-60 max-w-120 max-sm:min-w-full md:min-w-80",
                className,
            )}
        >
            <CardHeader className="p-0 gap-4 relative">
                <AspectRatio
                    ratio={16 / 9}
                    className="overflow-hidden duration-300 motion-reduce:duration-0"
                >
                    <Image
                        src={project.image?.src}
                        alt={project.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                </AspectRatio>

                <PingTag
                    fg={status.fg}
                    bg={status.bg}
                    bd={status.bd}
                    pingBg={status.ping}
                    className="absolute top-4 right-4"
                    text={status.label}
                />
            </CardHeader>

            <CardContent className="grid p-4 gap-2">
                <CardTitle>
                    <H3 title={project.title} size={"h5"} />
                </CardTitle>

                <div className="grid gap-4">
                    <CardDescription>{project.description}</CardDescription>
                    <Tags tags={project.technologies} className="gap-1" variant={"muted"} />
                </div>
            </CardContent>

            <CardFooter className="*:grow *:py-6 gap-4 mt-auto">
                <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "secondary" }), "gap-2")}
                >
                    <Image
                        src={"images/stack/github.svg"}
                        alt={`${project.title} gitHub button`}
                        width={20}
                        height={20}
                        className="w-4"
                    />
                    GitHub
                </Link>

                {project.deployment && (
                    <Link
                        href={project.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants(), "gap-2")}
                    >
                        Live
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
}