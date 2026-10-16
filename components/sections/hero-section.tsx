import { Tags } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import { HeroContent } from "../app-ui/hero-content";
import { Description, Greeting, Role } from "../app-ui/hero-ui";
import { H1 } from "../shared-ui/headings";
import { AvailableForWork, PingTag } from "../shared-ui/ping";
import { heroData } from "@/data/hero";
import AppImage from "../shared-ui/image";
import { documentData } from "@/data/document";
import { Layout } from "../shared-ui/layout";
import CtaBtns from "../app-ui/cta-btns";
import { aboutData } from "@/data/about";

export const HERO_ID = "hero";

export const HeroSection = async () => {
    const data = await heroData;
    if (!data) return null;

    const about = await aboutData;
    const cv = (await documentData).cv;

    return (
        <Container
            id={HERO_ID}
            py={"section"}
            px={'section'}
            place={'center'}
            height={'hero'}
            className="relative overflow-hidden"
            wrapperClassName="overflow-visible"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[700px] rounded-full bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-[120px]" />
                <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-[90px]" />
            </div>

            <Layout
                type={'grid'}
                lgAxis={'x'}
                lgPlace={'right'}
                className="gap-12 items-center relative z-10"

                top={
                    <div className="relative mx-auto flex items-center justify-center">
                        <div
                            aria-hidden="true"
                            className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent blur-3xl opacity-80"
                        />

                        <div className="relative rounded-full p-2.5 sm:p-3 bg-gradient-to-b from-primary/30 via-border/60 to-background/40 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] ring-1 ring-border/50 backdrop-blur-sm">
                            {(data.image && data.image.src) &&
                                <div className="rounded-full overflow-hidden ring-1 ring-border/30 shadow-inner">
                                    <AppImage
                                        src={data.image.src}
                                        alt={data.image?.alt ?? "hero image"}
                                        width={1000}
                                        height={1000}
                                        eager
                                        rounded={'full'}
                                        maxSmWidth={'w80'}
                                        smWidth={'w60'}
                                        lgWidth={'w90'}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                }

                bottom={
                    <HeroContent className="max-lg:text-center max-lg:*:mx-auto lg:relative"
                        greetings={<Greeting text={data.greetings} className="-mb-6" />}
                        description={<Description text={data.description} className="max-lg:text-center max-lg:w-[80%] mx-auto text-muted-foreground/90" />}
                        tags={<Tags tags={data.tags} className='w-fit justify-center max-lg:mx-auto' />}

                        title={
                            <H1
                                title={<>
                                    <span>{data.introduction}{" "}</span>
                                    <span className="bg-gradient-to-r from-primary via-primary/95 to-primary/75 bg-clip-text text-transparent drop-shadow-sm">
                                        {about.firstname}
                                    </span>
                                </>}

                                titleSize={'hero'}
                                subtitle={about.role}
                                subtitleSize={'hero'}
                                className="max-lg:text-center tracking-tight"
                            />
                        }

                        badge={
                            <>{
                                data.availableForWork &&
                                <AvailableForWork className="lg:absolute -top-18 shadow-sm backdrop-blur-md" />
                            }</>
                        }

                        ctaBtns={
                            <CtaBtns {...cv} className="pt-2" />
                        }
                    />
                }
            />
        </Container>
    );
};
