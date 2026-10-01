'use client'

import { useHero } from "@/contexts/HeroProvider";
import { Tags, TagType } from "../app-ui/tag";
import { AppImage } from "../shared-ui/image";
import { Container } from "../shared-ui/container";
import { Grid } from "../shared-ui/layout";
import { HeroContent } from "../app-ui/hero-content";
import { BadgeText, Description, Greeting, Role } from "../app-ui/hero-ui";
import { H1 } from "../shared-ui/headings";
import { AnchorBtn, DownloadBtn } from "../shared-ui/buttons";
import { linksData } from "@/data/links";
import { DownloadType, ImageType } from "@/lib/prop-types";

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
    const links = linksData;

    return (
        <>
            {data &&
                <Container
                    id="hero"
                    py={"section"}
                    min-height={'hero'}
                    background={'background'}
                    className="scroll-mt-20 "
                >

                    <Grid
                        lgCols={'two'}
                        lgPosition={'right'}

                        topClassName="flex "
                        top={
                            <AppImage {...data.heroImage} xsSm={"lg"} md={"xl"} lg={"xl"} className="lg:ms-auto" />
                        }

                        bottom={
                            <HeroContent className="max-lg:text-center max-lg:justify-center"
                                badge={<BadgeText text={data.badge} />}
                                greetings={<Greeting text={data.greetings} />}
                                title={<H1 title={data.fullName} />}
                                role={<Role text={data.role} />}
                                description={<Description text={data.description} className="max-lg:text-center max-lg:w-[80%] mx-auto" />}
                                tags={<Tags tags={data.tags} className='w-fit justify-center max-lg:mx-auto' />}
                                ctaBtns={[
                                    <DownloadBtn key={`hero-btn-1`} size={'lg'} variant={'default'}
                                        text="Download CV" {...data.downloadCV} />,

                                    <AnchorBtn key={`hero-btn-2`} size={'lg'} variant={'outline'}
                                        {...links.techStack} />,

                                    <AnchorBtn key={`hero-btn-3`} size={'lg'} variant={'secondary'}
                                        {...links.contactMe} />]} />
                        }
                    />
                </Container>
            }
        </>
    )
}