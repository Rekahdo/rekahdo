"use client"

import { AvailableForWork } from "../shared-ui/ping";
import { ElementType, ReactNode } from "react";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "cn";
import { LinkedinIcon } from "../icons/lucide-linkedin";
import { GithubIcon } from "../icons/lucide-github";
import { XFillIcon } from "../icons/akar-icons-x-fill";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Infer } from "convex/values";
import { contactValidator } from "@/convex/schema";
import { Layout } from "../shared-ui/layout";
import { AppIconVariants } from "../shared-ui/icon";

interface ContactInfoProps {
    data: Infer<typeof contactValidator>
}

export default function ContactInfo({ data }: ContactInfoProps) {
    return (
        <Layout
            className="w-full h-full"
            lgAxis={'y'}
            maxMdAxis={'y'}

            topClassName="*:w-full gap-4"
            top={<>
                <Info title="Email" description={data.email} icon={<Mail />} href={`mailto:${data.email}`} allowCopy />
                <Info title="Phone" description={`+${data.phone}`} icon={<Phone />} href={`tel:+${data.phone}`} allowCopy />
                <Info title="Location" description={data.location} icon={<MapPin />} />
            </>}


            bottomClassName="*:w-full md:max-lg:h-full gap-4"
            bottom={<>
                <div className="flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground select-none">
                        Find me online
                    </p>

                    <div className="flex items-center gap-3">
                        <FindMeOnline url={data.linkedin} icon={<LinkedinIcon />} label="LinkedIn" />
                        <FindMeOnline url={data.github} icon={<GithubIcon />} label="GitHub" />
                        <FindMeOnline url={data.x} icon={<XFillIcon />} label="X (Twitter)" />
                    </div>
                </div>

                <div className="pt-2">
                    <AvailableForWork width="full" className="shadow-xs" />
                </div>
            </>}
        />
    );
}

function Info({ icon, title, href, description, allowCopy }: {
    icon?: ReactNode;
    title: string;
    href?: string;
    description: string;
    allowCopy?: boolean;
}) {
    const [copy, copied] = useCopyToClipboard();
    const Tag = (href ? Link : 'div') as ElementType;
    const tagAttribute = href ? { href: href } : {};

    return (
        <div
            className={cn(
                "group/info relative flex items-center gap-4 p-4 rounded-2xl",
                "border border-border/70 bg-card shadow-sm",
                "transition-[transform,border-color,box-shadow] duration-200",
                allowCopy && "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            )}
        >
            {icon && (
                <Tag {...tagAttribute} className={cn(AppIconVariants({ variant: 'primary', size: 'lg', border: true }))}>
                    {icon}
                </Tag>
            )}

            <div
                onClick={async () => {
                    if (allowCopy && window.matchMedia("(min-width: 767px)").matches) {
                        await copy(description);
                    }
                }}

                className={cn(
                    "flex items-center w-full",
                    allowCopy && "md:cursor-pointer"
                )}>

                <dl className="grow leading-snug min-w-0">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground select-none">
                        {title}
                    </dt>

                    <dd className="truncate text-sm font-medium text-foreground select-none pt-0.5 max-2xs:max-w-35 max-1xs:max-w-40">
                        {description}
                    </dd>
                </dl>

                {allowCopy && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={async (e) => {
                            e.stopPropagation();
                            await copy(description);
                        }}
                        aria-label={`Copy ${title}`}
                    >
                        {copied
                            ? <Check className="size-4 text-emerald-500 animate-into-view" />
                            : <Copy className="size-4 animate-into-view" />
                        }
                    </Button>
                )}
            </div>
        </div>
    );
}

function FindMeOnline({ icon, url, label }: {
    icon?: ReactNode;
    url: string;
    label?: string;
}) {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
                AppIconVariants({ variant: 'muted', size: 'lg', hover: 'muted', border: true }),
                "bg-card backdrop-blur-none",
            )}
        >
            {icon}
        </Link>
    );
}
