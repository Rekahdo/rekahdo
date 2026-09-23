import { Container } from "../../components/ui/container";
import { useTechStack } from "../../hooks/context";
import { H2 } from "../../components/ui/headings";
import type { SectionType } from "../about/AboutSection";
import { CodeXml } from "lucide-react";
import { StackToggle, type StackMode } from "../../components/ui/toggle";
import { useState } from "react";
import { TechCards } from "../../components/ui/tech-card";

export type LanguageType = {
    name: string;
    iconSrc: string;
    iconDarkSrc?: string;
    percentage: number;
    description: string;
    usages: string[];
};

export type TechStackType = SectionType & {
    languages: LanguageType[];
};

export function TechStackSection() {
    const [mode, setMode] = useState<StackMode>("Compact");
    
    const { data } = useTechStack()!;
    if (!data) return null;

    return (
        <Container
            id="techStack"
            bg={"secondary"}
            py={"section"}
            px={"default"}
        >
            <section className="flex flex-col gap-10 md:gap-15">
                <H2 title={data.title} subtitle={data.subtitle} icon={<CodeXml />}
                    childrenClassName="mt-8 space-y-10 flex flex-col relative">

                    <StackToggle onChange={setMode} showTextAt="md" className="mx-auto sticky top-0"/>
                    <TechCards languages={data.languages} mode={mode}/>
                </H2>
            </section>
        </Container>
    );
}