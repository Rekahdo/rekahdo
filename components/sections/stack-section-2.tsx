import { Container } from "../shared-ui/container";
import { section } from "@/data/section";
import { stacksData } from "@/data/stack";
import { StackCards } from "../app-ui/stack-card-2";

export interface StackProps {
};

export const STACK_ID = "stack";

export default async function StackSection() {

    const data = await stacksData
    const sec = section.stack;

    return (
        <Container id={STACK_ID} py={"section"} px={"section"}>
            <div className="flex flex-col gap-10">
                {/* Section Header */}
                <div className="flex flex-col items-start gap-3 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border border-border/80 bg-muted/40 text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary" />
                        Skills & Capabilities
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {sec.title}
                    </h2>
                    {sec.subtitle && (
                        <p className="text-muted-foreground text-base leading-relaxed">
                            {sec.subtitle}
                        </p>
                    )}
                </div>

                {/* Interactive Filter & Cards */}
                <StackCards items={data} />
            </div>
        </Container>
    );
}