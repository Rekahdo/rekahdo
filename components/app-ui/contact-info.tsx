"use client"

import { AvailableForWork } from "../shared-ui/ping";
import { ReactNode } from "react";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "cn";
import { LinkedinIcon } from "../icons/lucide-linkedin";
import { GithubIcon } from "../icons/lucide-github";
import { XFillIcon } from "../icons/akar-icons-x-fill";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Infer } from "convex/values";
import { contactValidator } from "@/convex/schema";
import { useWidthMedia } from "@/hooks/useMedia";
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
                <Info title="Email" description={data.email} icon={<Mail />} allowCopy />
                <Info title="Phone" description={`+${data.phone}`} icon={<Phone />} allowCopy />
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
                    <AvailableForWork width="full" className="shadow-xs backdrop-blur-md" />
                </div>
            </>}
        />
    );
}

function Info({ icon, title, description, allowCopy }: {
    icon?: ReactNode;
    title: string;
    description: string;
    allowCopy?: boolean;
}) {
    const [copy, copied] = useCopyToClipboard();
    const media = useWidthMedia().md;

    return (
        <div
            onClick={async () => { if (media && allowCopy) await copy(description) }}
            className={cn(
                "group relative flex items-center gap-4 p-4 rounded-2xl",
                "border border-border/70 bg-card/75 dark:bg-card/45 backdrop-blur-sm",
                "shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.2)]",
                "transition-all duration-200",
                allowCopy && "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md md:cursor-pointer"
            )}
        >
            {icon && (
                <div className={cn(AppIconVariants({ variant: 'primary', size: 'lg', border: true }))}>
                    {icon}
                </div>
            )}

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
            )}
        >
            {icon}
        </Link>
    );
}
