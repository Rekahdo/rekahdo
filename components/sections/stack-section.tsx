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
            containerClassName="spacing-base gap-xs"
        >
            <H2
                title={sec.title}
                subtitle={sec.subtitle}
                icon={<CodeXml className="text-primary size-6" />}
                rootClassName={"me-auto"}
                subtitleClassName="max-w-2xl leading-relaxed"
            />

            <StackCards data={data} />
        </Container>
    );
}