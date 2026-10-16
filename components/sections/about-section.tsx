import { cn } from "cn"
import { Experiences } from "../app-ui/experience";
import { Quote } from "../app-ui/quote";
import { Educations } from "../app-ui/education";
import { Tags } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import { H2, H3, H4 } from "../shared-ui/headings";
import { Flex } from "../shared-ui/layout2";
import { section } from "@/data/section";
import { aboutData } from "@/data/about";
import AppImage from "../shared-ui/image";
import { Layout } from "../shared-ui/layout";

export const ABOUT_ID = "aboutMe";

export async function AboutSection() {
    const data = await aboutData;
    if (!data) return null;

    const sec = section.about;

    return (
        <Container
            id={ABOUT_ID}
            px="section"
            py="section"
            background="muted"
        >
            <section className="flex flex-col gap-20 md:gap-26">
                <H2 title={sec.title} className="mx-auto" />

                <Layout
                    lgAxis="x"
                    maxLgAxis="y"
                    className="gap-12 lg:gap-12 items-center"
                    topClassName="shrink-0 flex justify-center lg:justify-start"
                    top={
                        data.profile?.src ? (
                            <AppImage
                                src={data.profile.src}
                                alt={data.profile.alt ?? "profile image of richard"}
                                width={500}
                                height={500}
                                eager
                                className="w-55 sm:w-65 md:w-75 lg:w-100"
                            />
                        ) : null
                    }
                    bottomClassName="w-full gap-6"
                    bottom={
                        <>
                            <H3 title={data.headline} className="max-md:text-center lg:text-left" />

                            <p className="whitespace-pre-line max-lg:text-center lg:text-left">
                                {data.bio}
                            </p>

                            {data.experiences && (
                                <Experiences
                                    experiences={data.experiences}
                                    className="max-md:justify-center max-md:text-center mt-10 lg:mt-2 gap-8!"
                                />
                            )}
                        </>
                    }
                />

                {data.quote && !true && (
                    <Quote
                        {...data.quote}
                        variant="normal"
                        className="max-md:justify-center max-md:text-center not-italic"
                    />
                )}

                {data.educations && (
                    <H4 title="Education & Certification">
                        <Educations educations={data.educations} />
                    </H4>
                )}

                {data.skillTags && (
                    <H4 title="core skills">
                        <Tags tags={data.skillTags} />
                    </H4>
                )}
            </section>
        </Container>
    );
}