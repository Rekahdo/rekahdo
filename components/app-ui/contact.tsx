"use client"

import { AvailableForWork } from "../shared-ui/ping";
import { Layout } from "../shared-ui/layout";
import { ReactNode } from "react";
import { Check, Copy, Mail, Map, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "cn";
import { LinkedinIcon } from "../icons/lucide-linkedin";
import { GithubIcon } from "../icons/lucide-github";
import { XFillIcon } from "../icons/akar-icons-x-fill";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import z from "zod";
import { sendMessageSchema } from "@/schemas/zod-schemas";
import { Infer } from "convex/values";
import { contactTable, contactValidator } from "@/convex/schema";

interface ContactInfoProps {
    data: Infer<typeof contactValidator>
}

export default function Contact({ data }: ContactInfoProps) {
    return (
        <Layout
            lgAxis={'y'}
            maxSmAxis={'y'}
            className="justify-between flex-wrap max-lg:w-full"

            top={
                <div className="grid gap-6">
                    <ContactInfo title="Email" description={data.email} icon={<Mail />} allowCopy />
                    <ContactInfo title="Phone" description={`+${data.phone}`} icon={<Phone />} allowCopy />
                    <ContactInfo title="Location" description={data.location} icon={<MapPin />} />
                </div>
            }

            bottom={
                <div className="flex flex-col gap-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground select-none">
                        Find me online</p>

                    <div className="flex gap-3">
                        <FindMeOnline url={data.linkedin} icon={<LinkedinIcon />} />
                        <FindMeOnline url={data.github} icon={<GithubIcon />} />
                        <FindMeOnline url={data.x} icon={<XFillIcon />} />
                    </div>

                    <AvailableForWork width="full" />
                </div>
            }
        />
    );
}


function ContactInfo({ icon, title, description, allowCopy }: {
    icon?: ReactNode;
    title: string;
    description: string;
    allowCopy?: boolean;
}) {

    const [copy, copied] = useCopyToClipboard();

    return (
        <div className={cn("flex items-center gap-3.5 group")}>
            {icon && (
                <div className={cn(
                    "size-10 flex items-center justify-center rounded-xl",
                    "border border-border/60 bg-muted/40 text-muted-foreground transition-colors",
                    "group-hover:border-border group-hover:text-foreground [&_svg]:size-4"
                )}>
                    {icon}
                </div>
            )}

            <dl className="grow leading-snug">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground select-none">
                    {title}
                </dt>
                <dd className="truncate text-sm font-medium text-foreground">
                    {description}
                </dd>
            </dl>

            {allowCopy && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={async () => await copy(description)}
                    aria-label={`Copy ${title}`}
                    className="size-8 shrink-0 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                    {
                        copied
                            ? <Check className="size-4 text-emerald-500 animate-into-view" />
                            : <Copy className="size-4 animate-into-view" />
                    }
                </Button>
            )}
        </div>
    );
}


function FindMeOnline({ icon, url }: {
    icon?: ReactNode;
    url: string;
}) {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer"
            className={cn(
                buttonVariants({ size: 'icon-lg', variant: 'secondary' }),
                "*:text-muted-foreground hover:*:text-foreground! size-12"
            )}>

            {icon}
        </Link>
    );
}
