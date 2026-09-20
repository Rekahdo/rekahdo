import { cn } from "cn"
import { Container } from "../../components/ui/container"
import { useAbout } from "../../hooks/context"
import { H2, H3, H4, H5, H6 } from "../../components/ui/headings";
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
                    bg={"secondary"}
                    h={"hero"}
                    py={"default"}
                    px={"lg"}>

                    <section>
                        <H2 title={data.title} align="center" />

                        <div className={cn("grid grid-cols-1 md:grid-cols-3 max-md:gap-10 my-10 md:my-15")}>

                            <div className="max-md:w-[40%] max-md:mx-auto">
                                <Image src={data.me.src} alt={data.me.alt} size={"xxl"} fluid />
                            </div>

                            <div className={cn(
                                "flex flex-col",
                                "gap-8 lg:gap-10",
                                "md:ps-10 md:col-span-2",
                                "max-md:text-center"
                            )}>

                                <H3 title={data.headline} subtitle={data.bio} />
                                <Experiences experiences={data.experiences} />
                                <Quote {...data.quote} variant={"normal"} />

                            </div>
                        </div>

                        <div>
                            <H4 title="Education & Certification" />
                            <Educations educations={data.educations} />
                        </div>

                        <div className="grid gap-6 max-md:">
                            <H4 title="core skills" />
                            <Tags tags={data.skillTags} />
                        </div>
                    </section>
                </Container>
            }
        </>
    )
}
