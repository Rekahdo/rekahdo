'use client'

import { cn } from "cn"
import { Image, ImageType } from "../shared-ui/image";
import { Experiences, ExperienceType } from "../app-ui/experience";
import { Quote, QuoteType } from "../app-ui/quote";
import { Educations, EducationType } from "../app-ui/education";
import { Tags, TagType } from "../app-ui/tag";
import { useAbout } from "@/contexts/AboutProvider";
import { Container } from "../shared-ui/container";
import { H2, H3, H4, HeaderVariants as HeaderVariants } from "../shared-ui/headings";
import { Flex } from "../shared-ui/layout";
import { textAlign } from "../shared-ui/_css";

export interface SectionProps {
    title: string;
    subtitle?: string;
}

export interface AboutProps extends SectionProps {
    headline: string;
    bio: string;
    me: ImageType;
    experiences: ExperienceType[];
    quote: QuoteType
    educations: EducationType[];
    skillTags: TagType[];
};

export function AboutSection() {

    const { data } = useAbout()!;

    return (
        <>
            {data &&
                <Container
                    id="aboutMe"
                    background={'background'}
                    py={"section"}
                    className="scroll-mt-20"
                >

                    <section className="flex flex-col gap-10 md:gap-15">
                        <H2 title={data.title} />

                        <Flex
                            mdDirection={"row"}
                            lgDirection={"row"}
                            className="max-md:gap-8"

                            topClassName="items-start"
                            top={
                                <Image src={data.me.src} alt={data.me.alt} xsSm={"lg"} lg={"lg"} />
                            }

                            bottomClassName="md:ps-7 lg:ps-10"
                            bottom={
                                <H3 title={data.headline} 
                                    className={"max-md:justify-center max-md:text-center"}>

                                    <p className={cn("whitespace-pre-line max-md:text-center")}>
                                        {data.bio}
                                    </p>

                                    <Experiences experiences={data.experiences} 
                                        className="max-md:justify-center max-md:text-center" />

                                    <Quote {...data.quote} variant={"normal"} 
                                        className="max-md:justify-center max-md:text-center"/>
                                </H3>
                            }
                        />

                        <H4 title="Education & Certification">
                            <Educations educations={data.educations} />
                        </H4>

                        <H4 title="core skills">
                            <Tags tags={data.skillTags} />
                        </H4>
                    </section>
                </Container>
            }
        </>
    )
}
