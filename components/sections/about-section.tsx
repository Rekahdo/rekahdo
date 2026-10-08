import { cn } from "cn"
import { Experiences, ExperienceType } from "../app-ui/experience";
import { Quote, QuoteType } from "../app-ui/quote";
import { Educations, EducationType } from "../app-ui/education";
import { Tags, TagType } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import { H2, H3, H4 } from "../shared-ui/headings";
import { Flex } from "../shared-ui/layout";
import { AppImageType } from "@/lib/types";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { section } from "@/data/section";

export const ABOUT_ID = "aboutMe";

export async function AboutSection() {

    const data = await fetchQuery(api.about.get);
    if (!data) return null;

    const sec = section.about;

    return (
        <Container
            id={ABOUT_ID}
            px={'section'}
            py={"section"}
        >

            <section className="flex flex-col gap-10 md:gap-15">
                <H2 title={sec.title} className={"justify-center"} />

                <Flex
                    mdDirection={"row"}
                    lgDirection={"row"}
                    className="max-md:gap-8"

                    topClassName="items-start w-full"
                    top={
                        <>{(data.me && data.me.src) &&
                            <Image
                                src={data.me.src}
                                alt={data.me?.alt ?? "profile image of richard"}
                                width={1000} height={1000}
                                className="w-full rounded-full shadow-2xl"
                            />
                        }</>
                    }

                    bottomClassName="md:ps-7 lg:ps-10"
                    bottom={
                        <H3 title={data.headline}
                            className={"max-md:justify-center max-md:text-center"}>

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
