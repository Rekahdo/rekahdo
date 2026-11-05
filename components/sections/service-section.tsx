import { Container } from "../shared-ui/container";
import { H2 } from "../shared-ui/headings";
import {
    CodeXml,
    ArrowUpRight,
    Layers,
    Cpu,
    Server,
    Users,
} from "lucide-react";
import { section } from "@/data/section";
import { Card } from "../ui/card";
import Link from "next/link";
import { cn } from "cn";
import { ServiceData, servicesData } from "@/data/services";
import { Tags } from "../app-ui/tag";
import { SERVICE_ROUTE } from "@/lib/routes";

export interface ServiceProps { }

export const SERVICE_ID = "service";

const serviceIcons: Record<string, React.ReactNode> = {
    backend: <Server className="size-5 text-primary" />,
    "full-stack": <Layers className="size-5 text-primary" />,
    development: <CodeXml className="size-5 text-primary" />,
    architecture: <Cpu className="size-5 text-primary" />,
    consulting: <Users className="size-5 text-primary" />,
};

export async function ServiceSection() {
    const data = await servicesData;
    const sec = section.service;

    return (
        <Container
            id={SERVICE_ID}
            py={"section"}
            px={"section"}
            bgGradient={"dots"}
            rootClassName="relative overflow-visible"
            containerClassName="spacing-base gap-xs"
        >
            <H2
                title={sec.title}
                subtitle={sec.subtitle}
                align={"center"}
                maxWidth
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                {data.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                    />
                ))}
            </div>
        </Container>
    );
}

function ServiceCard({
    service,
    index,
}: {
    service: ServiceData;
    index: number;
}) {
    const itemNumber = String(index + 1).padStart(2, "0");
    const iconKey = service.badge.toLowerCase().replace(/\s+/g, "-");

    return (
        <Card
            className={cn(
                "group relative flex flex-col gap-4 rounded-2xl p-6",
                "border border-border bg-card",
                "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 shadow-lg"
            )}
        >
            {/* Icon + badge + item number */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-muted/50 transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                        {serviceIcons[iconKey] ?? (
                            <CodeXml className="size-5 text-primary" />
                        )}
                    </div>
                    <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {service.badge}
                    </span>
                </div>

                <span className="font-mono text-xs font-semibold text-muted-foreground/60 tracking-wider">
                    /{itemNumber}
                </span>
            </div>

            {/* Title + sub-heading */}
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                </h3>
                <p className="text-sm font-medium tracking-wide text-muted-foreground">
                    {service.subHeading}
                </p>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
            </p>

            {/* Tags */}
            <Tags tags={service.tags} />

            {/* Action link */}
            <Link
                href={`${SERVICE_ROUTE}${service.id}`}
                className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                aria-label={`Learn more about ${service.title}`}
            >
                Learn more
                <ArrowUpRight
                    className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                />
            </Link>
        </Card>
    );
}