import { cn } from "cn"
import { Container } from "../../components/ui/container"
import { useAbout } from "../../hooks/context"
import { H2, H3, H4 } from "../../components/ui/headings";
import { Image, type ImageType } from "../../components/ui/image";
import { Experiences, type ExperienceType } from "../../components/ui/experience";
import { Quote, type QuoteType } from "../../components/ui/quote";
import { Tags, type TagType } from "../../components/ui/tag";
import { Educations, type EducationType } from "../../components/ui/education";
import { Flex } from "../../components/ui/layout";

export type SectionType = {
    title: string;
    subtitle?: string;
}

export type AboutType = SectionType & {
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
                    h={"hero"}
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
                                    <Image src={data.me.src} alt={data.me.alt} xsSm={"lg"} lg={"lg"}/>
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
