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
import Image from "next/image";
import AppImage from "../shared-ui/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Infer } from "convex/values";
import { projectValidator } from "@/convex/schema";
import { Status } from "../sections/project-section";
import { AppIcon, AppIconVariants } from "../shared-ui/icon";
import { GithubIcon } from "../icons/lucide-github";
import { FadeOverlay } from "../shared-ui/fade-overlay";

interface ProjectCardsProps {
    projects: Infer<typeof projectValidator>[];
}

export function ProjectCards({ projects }: ProjectCardsProps) {

    return (
        <>{projects.length > 0 &&
            <div className="flex flex-col gap-base">
                {projects.slice(0, 3).map((project, i) => (
                    <Project key={project.title} index={i} project={project} />
                ))}
            </div>
        }</>
    );
}

interface ProjectProps {
    index: number;
    project: Infer<typeof projectValidator>;
    className?: string;
}

export function Project({ index, project, className }: ProjectProps) {
    const status = Status[project.status];
    const isReversed = index % 2 !== 0;

    return (
        <Card
            className={cn("p-xs gap-xs *:w-full min-h-110 border group/project",
                "transition-all duration-500 **:transition-all **:duration-300",
                "hover:border-primary/45 hover:shadow-xl rounded-2xl md:rounded-4xl",
                isReversed ? "md:flex-row-reverse" : "md:flex-row",
                className,
            )}
        >
            <CardHeader className="p-0! max-md:aspect-video relative  rounded-lg md:rounded-2xl overflow-hidden shadow-lg">
                <AppImage
                    src={project.image?.src}
                    alt={project.image?.alt ?? project.title}
                    fill
                    objectFit={'cover'}
                    rootClassName="scale-101 group-hover/project:scale-105 ease-out"
                />

                <PingTag
                    textFg={status.fg}
                    bg={status.bg}
                    bd={status.bd}
                    pingBg={status.ping}
                    className="absolute top-4 right-4 backdrop-blur-md shadow-xs"
                    text={status.label}
                />

                {project.deployment &&
                    <Link
                        href={project.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(AppIconVariants({ size: 'lg' }),
                            "absolute bottom-0 right-4 z-10 bg-white/70 text-black",
                            "opacity-0 group-hover/project:opacity-100 group-hover/project:bottom-4",
                            "hover:bg-primary hover:text-primary-foreground",
                        )}
                    >
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                }
            </CardHeader>

            <div className="h-fit flex flex-col gap-6 md:my-auto">
                <CardContent className="flex flex-col gap-4 p-0">
                    <CardTitle>
                        <H3
                            title={project.title}
                            titleClassName="group-hover/project:text-primary"
                        />
                    </CardTitle>

                    <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {project.description}
                    </CardDescription>

                    <Tags tags={project.technologies} className="gap-2 flex-wrap" variant={"muted"} />
                </CardContent>

                <CardFooter className="flex items-center p-0 pt-4 gap-4 sm:pt-6 sm:gap-6 bg-transparent *:grow *:h-10 md:*:max-w-40">
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("gap-3!",
                            buttonVariants({ variant: "outline", size: "sm" }),
                        )}
                    >
                        <GithubIcon />
                        <span>Source</span>
                    </Link>

                    {project.deployment && (
                        <Link
                            href={project.deployment}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn("gap-3!",
                                buttonVariants({ variant: "default", size: "sm" }),
                            )}
                        >
                            <span>Live Demo</span>
                            <ExternalLink className="size-3.5 opacity-80" />
                        </Link>
                    )}
                </CardFooter>
            </div>
        </Card>
    );
}
