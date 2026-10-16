import { Container } from "../shared-ui/container";
import { H2 } from "../shared-ui/headings";
import { CodeXml } from "lucide-react";
import { section } from "@/data/section";
import { StackCards } from "../app-ui/stack-card";
import { stacksData } from "@/data/stack";

export interface StackProps {
};

export const STACK_ID = "stack";

export async function StackSection() {

    const data = await stacksData
    const sec = section.stack;

    return (
        <Container
            id={STACK_ID}
            py={"section"}
            px={'section'}
            bgGradient={'dots'}
            wrapperClassName="relative overflow-visible"
            className="relative"
        >
            <section className="flex flex-col gap-10 w-full relative z-10">
                <H2
                    title={sec.title}
                    subtitle={sec.subtitle}
                    icon={<CodeXml className="text-primary size-6" />}
                    className={"mx-auto text-center tracking-tight"}
                />

                <StackCards data={data} />
            </section>
        </Container>
    );
}