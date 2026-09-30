'use client'

import Image from "next/image";
import { ProjectType, StatusArray } from "../sections/project-section";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { H3 } from "../shared-ui/headings";
import { cn } from "cn";
import { hover } from "../shared-ui/_css";

interface ProjectProps {
    project: ProjectType;
    className?: string;
}

function Project({project, className}: ProjectProps) {

    return (
        <Card className={cn(className)}>
            <CardHeader>
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={project.image?.src}
                        alt={project.image.alt}
                        fill
                        className="rounded-lg object-cover "
                    />
                </AspectRatio>

                <CardTitle>
                    <H3
                        title={project.title} size={'h6'} />
                </CardTitle>

                <CardDescription className="max-xs:text-xs">
                    {project.description}
                </CardDescription>
            </CardHeader>


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
            <TabsList className={"bg-background gap-2 py-6 px-2 rounded-full"}>
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
                <TabsContent key={i} value={tab} className="flex flex-wrap justify-center gap-6">
                    {projects?.filter(project => tab === "all" || tab === project.status)
                        .map((project, i) => (
                            <Project key={i} project={project} className={cn(
                                hover.outline,
                                "grow max-xs:min-w-50  sm:min-w-70 basis-1 max-w-100"
                            )} />
                        ))}
                </TabsContent >
            ))}
        </Tabs>
    );
}

