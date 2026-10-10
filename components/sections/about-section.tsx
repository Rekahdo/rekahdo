import { cn } from "cn"
import { Experiences } from "../app-ui/experience";
import { Quote } from "../app-ui/quote";
import { Educations } from "../app-ui/education";
import { Tags } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import { H2, H3, H4 } from "../shared-ui/headings";
import { Flex } from "../shared-ui/layout";
import { section } from "@/data/section";
import { aboutData } from "@/data/about";
import Image from "../shared-ui/image";

export const ABOUT_ID = "aboutMe";

export async function AboutSection() {

    // const data = await fetchQuery(api.about.get);
    const data = await aboutData
    if (!data) return null;

    const sec = section.about;

    return (
        <Container
            id={ABOUT_ID}
            px={'section'}
            py={"section"}
        >

            <section className="flex flex-col gap-10 md:gap-15">
                <H2 title={sec.title} className={"text-center"} />

                <Flex
                    lgDirection={"row"}
                    className="max-lg:gap-8"

                    topClassName="flex justify-center"
                    top={
                        <>{(data.me && data.me.src) &&
                            <Image
                                src={data.me.src}
                                alt={data.me?.alt ?? "profile image of richard"}
                                width={1000} height={1000}
                                size={'s100'}
                                maxSmSize={'s80'}
                                rounded={'full'}
                            />
                        }</>
                    }

                    bottomClassName="lg:ps-10 w-full lg:w-[60%]"
                    bottom={
                        <H3 title={data.headline}
                            className={"max-md:text-center"}>

                            <p className={cn("whitespace-pre-line max-md:text-center")}>
                                {data.bio}
                            </p>

                            {data.experiences &&
                                <Experiences experiences={data.experiences}
                                    className="max-md:justify-center max-md:text-center" />
                            }

                            {data.quote &&
                                <Quote {...data.quote} variant={"normal"}
                                    className="max-md:justify-center max-md:text-center" />
                            }
                        </H3>
                    }
                />

                {data.educations &&
                    <H4 title="Education & Certification">
                        <Educations educations={data.educations} />
                    </H4>
                }

                {data.skillTags &&
                    <H4 title="core skills">
                        <Tags tags={data.skillTags} />
                    </H4>
                }

            </section>
        </Container>
    )
}
