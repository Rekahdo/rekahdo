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
import { Tags } from "./tag";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";
import AppImage from "../shared-ui/image";
import { ExternalLink } from "lucide-react";
import { Infer } from "convex/values";
import { projectValidator } from "@/convex/schema";
import { Status, StatusArray } from "../sections/project-section";

interface ProjectsTabsProps {
    projects: Infer<typeof projectValidator>[];
}

export function ProjectsTabs({ projects }: ProjectsTabsProps) {
    const tabs = ["all", ...StatusArray];

    return (
        <Tabs defaultValue={tabs[0]} className="flex flex-col items-center gap-8 w-full">
            <TabsList className="bg-card/80 dark:bg-card/60 backdrop-blur-md border border-border/70 p-0 h-fit rounded-full gap-1 sticky top-20 z-20 shadow-sm max-w-fit">
                {tabs.map((tab) => (
                    <TabsTrigger
                        key={tab}
                        value={tab}
                        className={cn(
                            "capitalize rounded-full px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium transition-all",
                            "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                        )}
                    >
                        {tab}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map((tab) => {
                const filtered = projects.filter((p) => tab === "all" || p.status === tab);

                return (
                    <TabsContent
                        key={tab}
                        value={tab}
                        className="w-full mt-0 focus-visible:outline-none"
                    >
                        {filtered.length === 0 ? (
                            <p className="text-center text-sm text-muted-foreground py-16">
                                No projects in this category yet.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full items-stretch">
                                {filtered.map((project) => (
                                    <Project key={project.title} project={project} />
                                ))}
                            </div>
                        )}
                    </TabsContent>
                );
            })}
        </Tabs>
    );
}

interface ProjectProps {
    project: Infer<typeof projectValidator>;
    className?: string;
}

export function Project({ project, className }: ProjectProps) {
    const status = Status[project.status];

    return (
        <Card
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl pt-0",
                "border border-border/80 bg-card/85 dark:bg-card/55 backdrop-blur-sm",
                "shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.35)]",
                "transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/45 hover:shadow-xl",
                className,
            )}
        >
            <div>

                <CardHeader className="p-0 relative overflow-hidden">
                    <AspectRatio ratio={16 / 9} className="overflow-hidden bg-muted">
                        <Image
                            src={project.image?.src}
                            alt={project.image?.alt ?? project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                    </AspectRatio>


                    <PingTag
                        textFg={status.fg}
                        bg={status.bg}
                        bd={status.bd}
                        pingBg={status.ping}
                        className="absolute top-3.5 right-3.5 backdrop-blur-md shadow-xs"
                        text={status.label}
                    />
                </CardHeader>

                <CardContent className="flex flex-col gap-3.5 p-5 sm:p-6">
                    <CardTitle>
                        <H3
                            title={project.title}
                            titleSize={"h5"}
                            titleClassName="tracking-tight font-semibold text-foreground group-hover:text-primary transition-colors"
                        />
                    </CardTitle>

                    <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {project.description}
                    </CardDescription>

                    <div className="pt-2">
                        <Tags tags={project.technologies} className="gap-1.5 flex-wrap" variant={"muted"} />
                    </div>
                </CardContent>
            </div>


            <CardFooter className="flex items-center gap-3 p-5 sm:p-6 pt-0 mt-auto border-t border-border/40">
                <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "flex-1 gap-2 rounded-xl text-xs font-medium h-9.5 hover:bg-muted transition-colors"
                    )}
                >
                    <AppImage
                        src={"images/stack/github.svg"}
                        srcDark={"images/stack/github-dark.svg"}
                        alt={`${project.title} GitHub repository`}
                        width={18}
                        height={18}
                        rootClassName="size-4"
                    />
                    <span>Source</span>
                </Link>

                {project.deployment && (
                    <Link
                        href={project.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            buttonVariants({ variant: "default", size: "sm" }),
                            "flex-1 gap-1.5 rounded-xl text-xs font-medium h-9.5 shadow-sm hover:shadow-primary/20 hover:shadow-md transition-all"
                        )}
                    >
                        <span>Live Demo</span>
                        <ExternalLink className="size-3.5 opacity-80" />
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
}
