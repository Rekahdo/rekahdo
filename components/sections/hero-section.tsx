'use client'

import { useHero } from "@/contexts/HeroProvider";
import { Tags, TagType } from "../app-ui/tag";
import { ImageType } from "../shared-ui/image";
import { Container } from "../shared-ui/container";
import { Grid } from "../shared-ui/layout";
import { HeroImage } from "../app-ui/hero-image";
import { HeroContent } from "../app-ui/hero-content";
import { BadgeText, Description, Greeting, Role } from "../app-ui/hero-ui";
import { H1 } from "../shared-ui/headings";
import { AnchorBtn, Buttons, DownloadBtn } from "../shared-ui/buttons";
import { linksData } from "@/data/links";
import { DownloadType } from "@/lib/prop-types";

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
                    bg={"background"}
                    py={"section"}>

                    <Grid
                        lgCols={'two'}
                        lgPosition={'right'}

                        top={
                            <HeroImage {...data.heroImage} lgJustify={'end'} />
                        }

                        bottom={
                            <HeroContent
                                lgJustify={'start'}
                                badge={<BadgeText text={data.badge} />}
                                greetings={<Greeting text={data.greetings} />}
                                title={<H1 title={data.fullName} />}
                                role={<Role text={data.role} />}
                                description={<Description text={data.description} />}
                                tags={<Tags tags={data.tags} className='max-md:justify-center' />}
                                ctaBtns={<Buttons btns={[
                                    <DownloadBtn key={`hero-btn-1`} size={'lg'} variant={'default'}
                                        text="Download CV" {...data.downloadCV} />,

                                    <AnchorBtn key={`hero-btn-2`} size={'lg'} variant={'outline'}
                                        {...links.techStack} />,

                                    <AnchorBtn key={`hero-btn-3`} size={'lg'} variant={'secondary'}
                                        {...links.contactMe} />,
                                ]} width={'fit'} />}
                            />
                        }
                    />
                </Container>
            }
        </>
    )
}