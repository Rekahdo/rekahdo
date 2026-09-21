import { cn } from "cn"
import { Container } from "../../components/ui/container"
import { useAbout } from "../../hooks/context"
import { H2, H3, H4 } from "../../components/ui/headings";
import { Image, type ImageType } from "../../components/ui/image";
import { Experiences, type ExperienceType } from "../../components/ui/experience";
import { Quote, type QuoteType } from "../../components/ui/quote";
import { Tags, type TagType } from "../../components/ui/tag";
import { Educations, type EducationType } from "../../components/ui/education";

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
                >

                    <section className="flex flex-col gap-10 md:gap-15">
                        <H2 title={data.title} />

                        <div className={cn("grid grid-cols-1 md:grid-cols-3 max-md:gap-10")}>
                            <div className="max-md:w-[40%] max-md:mx-auto">
                                <Image src={data.me.src} alt={data.me.alt} />
                            </div>


                            <H3 title={data.headline}
                                className={cn("md:ps-10 md:col-span-2 max-md:text-center")}
                                childrenClassName={cn("flex flex-col gap-8 lg:gap-10")}>

                                <p>{data.bio}</p>
                                <Experiences experiences={data.experiences} />
                                <Quote {...data.quote} variant={"normal"} />
                            </H3>
                        </div>

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
