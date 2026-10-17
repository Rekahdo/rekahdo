import { cn } from "cn";
import { Experiences } from "../app-ui/experience";
import { Quote } from "../app-ui/quote";
import { Educations } from "../app-ui/education";
import { Tags } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import { H2, H3, H4 } from "../shared-ui/headings";
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
            className="spacing-base"
        >
            <H2 title={sec.title}
                subtitle={<div className="h-1 w-12 rounded-full bg-primary/40 mx-auto" />}
                className="mx-auto tracking-tight" />

            <Layout format={'container'}
                maxLgAxis={'y'}
                className="spacing-base"

                topClassName={cn("lg:items-start lg:justify-start")}
                top={data.profile?.src && <>
                    <AppImage
                        src={data.profile.src}
                        alt={data.profile.alt ?? "profile image of richard"}
                        width={500}
                        height={500}
                        maxSmWidth={'w70'}
                        rounded={'4xl'}
                        variant={'elevate'}
                        eager
                        className={cn(
                            "w-56 sm:w-64 md:w-72 lg:w-80 bg-linear-to-b from-primary/25 via-border/60 to-background/40",
                        )}
                        imgClassName="transition-transform duration-300 hover:scale-105"
                    />
                </>}

                bottomClassName="grow gap-6"
                bottom={<>
                        <H3
                            title={data.headline}
                            className="text-center"
                        />

                        <p className="whitespace-pre-line max-lg:text-center lg:text-left leading-relaxed text-base sm:text-lg">
                            {data.bio}
                        </p>

                    {data.experiences && (
                        <Experiences experiences={data.experiences} className="lg:justify-start" />
                    )}
                </>}
            />

            <Layout
                type={'grid'}
                className="gap-base"

                top={
                    data.educations && (
                        <Layout
                            format={'card'}
                            axis={'y'}
                            className="items-start justify-start grow w-full"

                            top={
                                <H4 title="Education & Certification" />
                            }

                            bottomClassName="w-full"
                            bottom={
                                <Educations educations={data.educations}/>
                            }
                        />
                    )}

                bottom={
                    data.skillTags && (
                        <Layout
                            format={'card'}
                            className="items-start justify-start w-full"
                            axis={'y'}

                            top={
                                <H4 title="Core Skills" />
                            }

                            bottom={
                                <Tags tags={data.skillTags} />
                            }
                        />
                    )
                }
            />
        </Container>
    );
}
