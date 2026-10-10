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

    // const data = await fetchQuery(api.stack.findAll);
    const data = await stacksData
    const sec = section.stack;

    return ( 
        <Container
            id={STACK_ID}
            py={"section"}
            px={'section'}
        >
            <section className="flex flex-col gap-4 md:gap-6">
                <H2 title={sec.title} subtitle={sec.subtitle} icon={<CodeXml />}
                    className={"text-center"}
                    subtitleClassName="text-center" />

                <StackCards data={data} />
            </section>
        </Container>
    );
}