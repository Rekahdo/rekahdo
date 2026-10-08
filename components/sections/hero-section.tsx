import { Tags, TagType } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import { Grid } from "../shared-ui/layout";
import { HeroContent } from "../app-ui/hero-content";
import { BadgeText, Description, Greeting, Role } from "../app-ui/hero-ui";
import { H1 } from "../shared-ui/headings";
import { DownloadType, AppImageType } from "@/lib/types";
import { PingTag } from "../shared-ui/ping";
import { cn } from "cn";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import { STACK_ID } from "./stack-section";
import { NavigationLink } from "../shared-ui/navigation";
import { CONTACT_ID } from "./contact-section";

export const HERO_ID = "hero";

export const HeroSection = async () => {

    const data = await fetchQuery(api.hero.get);
    if (!data) return null;

    const cv = await fetchQuery(api.document.findByType, { type: 'cv' });

    return (
        <Container
            id={HERO_ID}
            py={"section"}
            px={'section'}
            place={'center'}
            height={'hero'}
            className="scroll-mt-20 relative max-xs:pt-25"
        >
            {data.availableForWork &&
                <PingTag className={cn(
                    "absolute left-0 top-4",
                    "ms-6 sm:ms-8 lg:ms-10",)}
                >
                    Available For Work
                </PingTag>
            }

            <Grid
                lgCols={'two'}
                lgPosition={'right'}

                topClassName="flex"
                top={
                    <>
                        {(data.image && data.image.src) &&
                            <Image
                                src={data.image.src}
                                alt={data.image?.alt ?? "hero image"}
                                width={1000} height={1000}
                                className="w-full rounded-full shadow-2xl"
                            />
                        }
                    </>
                }

                bottom={
                    <HeroContent className="max-lg:text-center max-lg:justify-center"
                        badge={<BadgeText text={data.badge} />}
                        greetings={<Greeting text={data.greetings} />}
                        title={<H1 size={'hero'} title={<>
                            <span>{data.introduction}</span>
                            <span className="text-primary">{data.name}</span>
                        </>} className="max-lg:text-center max-lg:justify-center" />}
                        role={<Role text={data.role} />}
                        description={<Description text={data.description} className="max-lg:text-center max-lg:w-[80%] mx-auto" />}
                        tags={<Tags tags={data.tags} className='w-fit justify-center max-lg:mx-auto' />}
                        ctaBtns={[
                            <NavigationLink
                                key={"hero-btn-1"}
                                link={{
                                    href: STACK_ID,
                                    label: "Download CV",
                                    type: 'download',
                                    icon: <Download />,
                                    filename: cv!.name
                                }}
                                className={cn(buttonVariants({ size: 'lg'}), "shadow-sm")}
                            />,

                            <NavigationLink
                                key={"hero-btn-2"}
                                link={{
                                    href: STACK_ID,
                                    label: "Tech Stack",
                                    type: 'scroll',
                                }}
                                className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }), "shadow-sm")}
                            />,

                            <NavigationLink
                                key={"hero-btn-3"}
                                link={{
                                    href: CONTACT_ID,
                                    label: "Contact Me",
                                    type: 'scroll',
                                }}
                                className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), "shadow-sm")}
                            />,
                        ]}
                    />
                }
            />
        </Container>
    )
}