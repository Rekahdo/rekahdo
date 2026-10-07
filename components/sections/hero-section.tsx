import { Tags, TagType } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import { Grid } from "../shared-ui/layout";
import { HeroContent } from "../app-ui/hero-content";
import { BadgeText, Description, Greeting, Role } from "../app-ui/hero-ui";
import { H1 } from "../shared-ui/headings";
import { DownloadType, ImageType } from "@/lib/types";
import { PingTag } from "../shared-ui/ping";
import { cn } from "cn";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export interface HeroProps {
    badge: string;
    greetings: string;
    fullName: string;
    role: string;
    description: string;
    heroImage: ImageType;
    location: String;
    tags: TagType[];
    downloadCV: DownloadType;
}

export const HERO_ID = "hero";

export const HeroSection = async () => {

    const data = await fetchQuery(api.hero.get);
    if (!data) return null;

    const cv = await fetchQuery(api.document.findByType, { type: 'cv' });

    return (
        <Container
            id={HERO_ID}
            py={"section"}
            place={'center'}
            height={'hero'}
            background={'background'}
            className="scroll-mt-20 relative max-xs:pt-25"
        >
            <PingTag className={cn(
                "absolute left-0 top-4",
                "ms-6 sm:ms-8 lg:ms-10",)}
            >
                Available For Work
            </PingTag>

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
                                width={200} height={200}
                                className="w-full rounded-full"
                            />
                        }
                    </>
                }

                bottom={
                    <HeroContent className="max-lg:text-center max-lg:justify-center"
                        badge={<BadgeText text={data.badge} />}
                        greetings={<Greeting text={data.greetings} />}
                        title={<H1 size={'heroH1'} title={<>
                            <span>{data.introduction}</span>
                            <span className="text-primary">{data.name}</span>
                        </>} className="max-lg:text-center max-lg:justify-center" />}
                        role={<Role text={data.role} />}
                        description={<Description text={data.description} className="max-lg:text-center max-lg:w-[80%] mx-auto" />}
                        tags={<Tags tags={data.tags} className='w-fit justify-center max-lg:mx-auto' />}
                        ctaBtns={[
                            <a href={cv?.href} download={cv?.name} key={`hero-btn-1`}
                                className={cn(buttonVariants({ size: 'lg' }), "shadow-md")}>
                                <Download />
                                Download CV
                            </a>,

                            <Link href={''} key={`hero-btn-1`}
                                className={cn(buttonVariants({ size: 'lg', variant:'secondary' }), "shadow-md")}>
                                Tech Stack
                            </Link>,

                            <Link href={''} key={`hero-btn-1`}
                                className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), "shadow-md")}>
                                Contact Me
                            </Link>
                        ]}
                    />
                }
            />
        </Container>
    )
}