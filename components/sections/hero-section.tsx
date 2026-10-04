'use client'

import { useHero } from "@/contexts/HeroProvider";
import { Tags, TagType } from "../app-ui/tag";
import { AppImage } from "../shared-ui/image";
import { Container } from "../shared-ui/container";
import { Grid } from "../shared-ui/layout";
import { HeroContent } from "../app-ui/hero-content";
import { BadgeText, Description, Greeting, Role } from "../app-ui/hero-ui";
import { H1 } from "../shared-ui/headings";
import { DownloadType, ImageType } from "@/lib/prop-types";
import { AnchorBtn, DownloadBtn } from "../shared-ui/button-impl";
import { PingTag } from "../shared-ui/ping";
import { cn } from "cn";

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

export const HeroSection = () => {

    const { data } = useHero()!;
    // const links = linksData;

    return (
        <>
            {data &&
                <Container
                    id="hero"
                    py={"section"}
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

                        topClassName="flex "
                        top={
                            <AppImage {...data.heroImage} xsSm={"lg"} md={"xl"} lg={"xl"} className="lg:ms-auto rounded-full" />
                        }

                        bottom={
                            <HeroContent className="max-lg:text-center max-lg:justify-center"
                                badge={<BadgeText text={data.badge} />}
                                greetings={<Greeting text={data.greetings} />}
                                title={<H1 size={'heroH1'} title={<>
                                    <span>I'M </span>
                                    <span className="text-primary">{data.fullName}</span>
                                </>} className="max-lg:text-center max-lg:justify-center" />}
                                role={<Role text={data.role} />}
                                description={<Description text={data.description} className="max-lg:text-center max-lg:w-[80%] mx-auto" />}
                                tags={<Tags tags={data.tags} className='w-fit justify-center max-lg:mx-auto' />}
                                // ctaBtns={[
                                //     <DownloadBtn key={`hero-btn-1`} size={'lg'} variant={'default'}
                                //         text="Download CV" {...data.downloadCV} className="shadow-md" />,

                                //     <AnchorBtn key={`hero-btn-2`} size={'lg'} variant={'outline'}
                                //         id={v5links.techStack.href} {...links.techStack} />,

                                //     <AnchorBtn key={`hero-btn-3`} size={'lg'} variant={'secondary'}
                                //         id={links.contactMe.href} {...links.contactMe} />]} 
                                        />
                        }
                    />
                </Container>
            }
        </>
    )
}