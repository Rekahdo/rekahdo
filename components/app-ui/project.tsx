'use client'

import { ProjectType, Status, StatusArray } from "../sections/project-section";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { H3 } from "../shared-ui/headings";
import { cn } from "cn";
import { Tags } from "./tag";
import { PingTag } from "../shared-ui/ping";
import { OpenBtn } from "../implementions/button-impl";
import Image from "next/image";
import { AppImage } from "../shared-ui/image";

interface ProjectProps {
    project: ProjectType;
    className?: string;
}

function Project({ project, className }: ProjectProps) {

    const status = Object.entries(Status).find(([k]) => k === project.status)?.[1];

    return (
        <Card className={cn("group shadow-lg grow basis-1 p-0 gap-0",
            "min-w-60 max-w-120 max-sm:min-w-full md:min-w-80 ",
            className
        )}>
            <CardHeader className="p-0 gap-4 relative">
                <AspectRatio ratio={16 / 9} className="overflow-hidden duration-300 motion-reduce:duration-0">
                    <Image
                        src={project.image?.src}
                        alt={project.image.alt}
                        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 ease-out  group-hover:scale-110"
                    />
                </AspectRatio>

                <PingTag fg={status?.fg} bg={status?.bg} bd={status?.bd} pingBg={status?.ping}
                    className="absolute top-4 right-4" text={String(status?.label)} />
            </CardHeader>

            <CardContent className="grid p-4 gap-2">
                <CardTitle>
                    <H3 title={project.title} size={'h5'} />
                </CardTitle>

                <div className="grid gap-4">
                    <CardDescription>
                        {project.description}
                    </CardDescription>

                    <Tags tags={project.technologies} className="gap-1" variant={'muted'} />
                </div>
            </CardContent>

            <CardFooter className="*:grow *:py-6 gap-4 mt-auto">
                <OpenBtn text={"GitHub"} icon={
                    <AppImage src={"images/stack/github.svg"}
                        darkSrc={"images/stack/github-dark.svg"}
                        alt={`${project.title} gitHub button`}
                        className="w-4"
                    />
                } href={project.github} variant={'secondary'} />

                <OpenBtn text={"Live"} disabled={!Boolean(project.deployment)} href={project.deployment} />
            </CardFooter>
        </Card>
    );
}

interface ProjectsProps {
    projects?: ProjectType[];
}

export default function Projects({ projects }: ProjectsProps) {

    const tabs = ["all", ...StatusArray]

    return (
        <Tabs defaultValue={tabs[0]} className={'gap-6'}>
            <TabsList className={"bg-background gap-2 py-6 px-2 rounded-full max-xs:w-full sticky top-20 z-10"}>
                {tabs.map((tab, i) => (
                    <TabsTrigger key={i} value={tab}
                        className={cn(
                            "capitalize rounded-full py-4 px-2 max-xs:text-xs max-xs:px-2 max-xs:py-4"
                        )}>
                        {tab}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map((tab, i) => (
                <TabsContent key={i} value={tab} className="flex flex-wrap max-md:justify-center gap-4 sm:gap-6 md:gap-8">
                    {projects?.filter(project => tab === "all" || tab === project.status)
                        .map((project, i) => (
                            <Project key={i} project={project} />
                        ))}
                </TabsContent >
            ))}
        </Tabs>
    );
}

