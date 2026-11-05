import { Container } from "@/components/shared-ui/container";
import { AppLayout } from "@/components/shared-ui/layout";
import { servicesData } from "@/data/services";
import Link from "next/link";
import { cn } from "cn";
import { Tags } from "@/components/app-ui/tag";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SERVICE_ROUTE } from "@/lib/routes";

export interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
    const data = await servicesData;
    const { id } = await params;

    const activeService = data.find((service) => service.id === id);

    if (!activeService) notFound();

    return (
        <Container
            py={"section"}
            px={"section"}
            containerClassName="relative"
        >
            <AppLayout
                maxMdAxis={'y'}

                // TOP SECTION: Service Navigation
                topClassName="p-xs bg-muted/30 max-md:sticky max-md:top-0 md:justify-start border-b border-border/50"
                top={
                    <div className="flex flex-col gap-2 w-full">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2 px-3">
                            Services
                        </h2>
                        <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                            {data.map((service) => {
                                const isActive = service.id === activeService.id;

                                return (
                                    <Link
                                        key={service.id}
                                        href={`${SERVICE_ROUTE}${service.id}`}
                                        className={cn(
                                            "flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors whitespace-nowrap md:whitespace-normal",
                                            isActive
                                                ? "bg-primary/10 text-primary"
                                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        )}
                                    >
                                        <span>{service.title}</span>
                                        <ArrowRight
                                            className={cn(
                                                "size-4 shrink-0 transition-transform",
                                                isActive ? "opacity-100" : "opacity-0 -translate-x-2"
                                            )}
                                        />
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                }

                // BOTTOM SECTION: Selected Service Details
                bottomClassName="p-6 md:p-10 bg-background"
                bottom={
                    <div className="flex flex-col gap-8 max-w-3xl">
                        {/* Header */}
                        <div className="flex flex-col gap-3">
                            <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                {activeService.badge}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                {activeService.title}
                            </h1>
                            <p className="text-lg font-medium text-muted-foreground">
                                {activeService.subHeading}
                            </p>
                        </div>

                        {/* Body */}
                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            <p className="text-base leading-relaxed text-muted-foreground">
                                {activeService.description}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-col gap-3 pt-6 border-t border-border/50">
                            <h3 className="text-sm font-semibold text-foreground">Technologies & Skills</h3>
                            <Tags tags={activeService.tags} />
                        </div>

                        {/* CTA */}
                        <div className="pt-6">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                            >
                                Discuss this service
                            </Link>
                        </div>
                    </div>
                }
            />
        </Container>
    );
}