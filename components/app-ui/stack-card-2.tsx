"use client";

import * as React from "react";
import Image from "next/image";
import { Infer } from "convex/values";
import { stackValidator } from "@/convex/schema";

type StackItem = Infer<typeof stackValidator>;

const CATEGORY_LABELS: Record<string, string> = {
    all: "All",
    language: "Languages & Frameworks",
    tool: "Tools & Backend",
    resource: "Design & Workflow",
};

export function StackCards({ items }: { items: StackItem[] }) {
    const [activeTab, setActiveTab] = React.useState<string>("all");

    const categories = React.useMemo(() => {
        return [
            { id: "all", label: "All", count: items.length },
            { id: "language", label: "Languages", count: items.filter((i) => i.type === "language").length },
            { id: "tool", label: "Tools", count: items.filter((i) => i.type === "tool").length },
            { id: "resource", label: "Design", count: items.filter((i) => i.type === "resource").length },
        ];
    }, [items]);

    const filteredItems = React.useMemo(() => {
        if (activeTab === "all") return items;
        return items.filter((item) => item.type === activeTab);
    }, [items, activeTab]);

    return (
        <div className="flex flex-col gap-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-4">
                {categories.map((cat) => {
                    const isActive = activeTab === cat.id;
                    return (
                        <button
                            key={cat.id}
                            type="button"
                            onClick={() => setActiveTab(cat.id)}
                            className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${isActive
                                    ? "bg-foreground text-background shadow-sm"
                                    : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                                }`}
                        >
                            <span>{cat.label}</span>
                            <span
                                className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${isActive
                                        ? "bg-background/20 text-background"
                                        : "bg-background/60 text-muted-foreground border border-border/50"
                                    }`}
                            >
                                {cat.count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                    <StackCard key={item.name} item={item} />
                ))}
            </div>
        </div>
    );
}

function StackCard({ item }: { item: StackItem }) {
    return (
        <div className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
            <div className="flex flex-col gap-3.5">
                {/* Card Header: Icon, Name & Type */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="relative flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/30 p-2 transition-colors group-hover:border-primary/20 group-hover:bg-primary/5">
                            {item.iconDarkSrc ? (
                                <>
                                    <Image
                                        src={item.iconSrc}
                                        alt={item.name}
                                        width={24}
                                        height={24}
                                        className="size-5 object-contain dark:hidden"
                                    />
                                    <Image
                                        src={item.iconDarkSrc}
                                        alt={item.name}
                                        width={24}
                                        height={24}
                                        className="hidden size-5 object-contain dark:block"
                                    />
                                </>
                            ) : (
                                <Image
                                    src={item.iconSrc}
                                    alt={item.name}
                                    width={24}
                                    height={24}
                                    className="size-5 object-contain"
                                />
                            )}
                        </div>

                        <div>
                            <h3 className="font-semibold text-sm text-foreground tracking-tight">
                                {item.name}
                            </h3>
                            <span className="text-[11px] font-medium text-muted-foreground capitalize">
                                {CATEGORY_LABELS[item.type] || item.type}
                            </span>
                        </div>
                    </div>

                    <span className="text-xs font-mono font-medium text-muted-foreground/80 bg-muted/50 border border-border/50 px-2 py-0.5 rounded">
                        {item.percentage}%
                    </span>
                </div>

                {/* Proficiency Bar */}
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/60">
                    <div
                        className="h-full rounded-full bg-primary/70 transition-all duration-500 group-hover:bg-primary"
                        style={{ width: `${item.percentage}%` }}
                    />
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {item.description}
                </p>
            </div>

            {/* Usages Chips */}
            {item.usages && item.usages.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/50 pt-3.5">
                    {item.usages.map((usage) => (
                        <span
                            key={usage.title}
                            className="rounded-md border border-border/40 bg-muted/30 px-2 py-0.5 text-[11px] font-normal text-muted-foreground transition-colors group-hover:border-border group-hover:text-foreground"
                        >
                            {usage.title}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
