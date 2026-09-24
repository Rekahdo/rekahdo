import { Container } from "../../components/ui/container";
import { useTechStack } from "../../hooks/context";
import { H2 } from "../../components/ui/headings";
import type { SectionType } from "../about/AboutSection";
import { CodeXml } from "lucide-react";
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
                    
                    <TechCards languages={data.languages} />
                </H2>
            </section>
        </Container>
    );
}