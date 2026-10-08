import { Container } from "../shared-ui/container";
import { H2 } from "../shared-ui/headings";
import { CodeXml } from "lucide-react";
import { section } from "@/data/section";
import { StackCards } from "../app-ui/stack-card";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export interface StackProps {
};

export const STACK_ID = "stack";

export async function StackSection() {

    const data = await fetchQuery(api.stack.findAll);

    const sec = section.stack;

    return (
        <Container
            id={STACK_ID}
            py={"section"}
            px={'section'}
            // className="scroll-mt-20"
        >
            <section className="flex flex-col gap-10 md:gap-15">
                <H2 title={sec.title} subtitle={sec.subtitle} icon={<CodeXml />}
                    className={"justify-center"}
                    subtitleClassName="text-center"
                    childrenClassName="mt-8 flex flex-col">

                    <StackCards data={data}/>
                </H2>
            </section>
        </Container>
    );
}