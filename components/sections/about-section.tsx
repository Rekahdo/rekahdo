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
            px="section"
            py="section"
            bgGradient="dots"
            wrapperClassName="relative overflow-visible"
            className="relative"
        >
            <section className="flex flex-col gap-16 md:gap-20 relative z-10 w-full">
                <div className="flex flex-col items-center text-center gap-2">
                    <H2 title={sec.title} className="mx-auto tracking-tight" />
                    <div className="h-1 w-12 rounded-full bg-primary/40 mx-auto" />
                </div>

                <div className="relative rounded-3xl border border-border/70 bg-card/60 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                    <Layout
                        lgAxis="x"
                        maxLgAxis="y"
                        className="gap-10 lg:gap-14 items-center"
                        topClassName="shrink-0 flex justify-center lg:justify-start"
                        top={
                            data.profile?.src ? (
                                <div className="relative mx-auto flex items-center justify-center p-3">
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-2 rounded-2xl bg-primary/20 blur-2xl"
                                    />

                                    <div className="relative rounded-2xl p-2 bg-gradient-to-b from-primary/25 via-border/60 to-background/40 ring-1 ring-border/50 shadow-xl overflow-hidden backdrop-blur-sm">
                                        <div className="rounded-xl overflow-hidden">
                                            <AppImage
                                                src={data.profile.src}
                                                alt={data.profile.alt ?? "profile image of richard"}
                                                width={500}
                                                height={500}
                                                eager
                                                className="w-56 sm:w-64 md:w-72 lg:w-80 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }
                        bottomClassName="w-full flex flex-col gap-6"
                        bottom={
                            <>
                                <H3
                                    title={data.headline}
                                    className="max-md:text-center lg:text-left text-foreground tracking-tight"
                                />

                                <p className="whitespace-pre-line max-lg:text-center lg:text-left text-muted-foreground leading-relaxed text-base sm:text-lg">
                                    {data.bio}
                                </p>

                                {data.experiences && (
                                    <div className="pt-4 border-t border-border/50 mt-2">
                                        <Experiences
                                            experiences={data.experiences}
                                            className="max-md:justify-center max-md:text-center gap-8!"
                                        />
                                    </div>
                                )}
                            </>
                        }
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                    {data.educations && (
                        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 sm:p-8 shadow-sm flex flex-col gap-4">
                            <H4 title="Education & Certification" className="text-foreground tracking-tight pb-2 border-b border-border/40" />
                            <Educations educations={data.educations} />
                        </div>
                    )}

                    {data.skillTags && (
                        <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 sm:p-8 shadow-sm flex flex-col gap-4">
                            <H4 title="Core Skills" className="text-foreground tracking-tight pb-2 border-b border-border/40" />
                            <div className="flex flex-wrap gap-2 pt-2">
                                <Tags tags={data.skillTags} />
                            </div>
                        </div>
                    )}
                </div>

                {data.quote && !true && (
                    <Quote
                        {...data.quote}
                        variant="normal"
                        className="max-md:justify-center max-md:text-center not-italic"
                    />
                )}
            </section>
        </Container>
    );
}
