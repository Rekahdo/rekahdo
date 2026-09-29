'use client'

import { cn } from "cn"
import { Image, ImageType } from "../shared-ui/image";
import { Experiences, ExperienceType } from "../app-ui/experience";
import { Quote, QuoteType } from "../app-ui/quote";
import { Educations, EducationType } from "../app-ui/education";
import { Tags, TagType } from "../app-ui/tag";
import { useAbout } from "@/contexts/AboutProvider";
import { Container } from "../shared-ui/container";
import { H2, H3, H4 } from "../shared-ui/headings";
import { Flex } from "../shared-ui/layout";

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
                    py={"section"}
                    px={"default"}
                    bg={"background"}
                >

                    <section className="flex flex-col gap-10 md:gap-15">
                        <H2 title={data.title} />

                        <Flex
                            mdDirection={"row"}
                            lgDirection={"row"}

                            top={
                                <div className="h-full flex items-start min-w-[40%]">
                                    <Image src={data.me.src} alt={data.me.alt} xsSm={"lg"} lg={"lg"} />
                                </div>
                            }

                            bottomClassName="md:ps-7 lg:ps-10"
                            bottom={
                                <H3 title={data.headline}
                                    xsAlign={"center"} smAlign={"center"}
                                    childrenClassName={cn("flex flex-col gap-8 lg:gap-10 max-md:text-center")}
                                >

                                    <p className="whitespace-pre-line">{data.bio}</p>
                                    <Experiences experiences={data.experiences}
                                        mdJustify={"start"} lgJustify={"start"} />
                                    <Quote {...data.quote} variant={"normal"} />
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
