'use client'

import { useTechStack } from "@/contexts/TechStackProvider";
import { SectionProps } from "./about-section";
import { Container } from "../shared-ui/container";
import { H2 } from "../shared-ui/headings";
import { TechCards } from "../app-ui/tech-card";
import { CodeXml } from "lucide-react";

export type LanguageType = {
    name: string;
    iconSrc: string;
    iconDarkSrc?: string;
    percentage: number;
    description: string;
    usages: string[];
};

export interface TechStackProps extends SectionProps {
    languages: LanguageType[];
};

export const STACK_ID = "stack";

export function StackSection() {
    const { data } = useTechStack()!;
    if (!data) return null;

    return (
        <Container
            id={STACK_ID}
            py={"section"}
            background={'secondary'}
            className="scroll-mt-20"
        >
            <section className="flex flex-col gap-10 md:gap-15">
                <H2 title={data.title} subtitle={data.subtitle} icon={<CodeXml />}
                    className={"justify-center"}
                    subtitleClassName="text-center"
                    childrenClassName="mt-8 space-y-10 flex flex-col relative">

                    <TechCards languages={data.languages} />
                </H2>
            </section>
        </Container>
    );
}