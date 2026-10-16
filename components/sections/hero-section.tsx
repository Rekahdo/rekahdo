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
        >
            <Layout
                type={'grid'}
                lgAxis={'x'}
                lgPlace={'right'}
                className="gap-12 items-center"

                top={
                    <>
                        {data.image?.src && (
                            <div className="relative mx-auto flex items-center justify-center w-full max-w-md lg:max-w-lg">
                                <div className="relative w-full aspect-square rounded-[2.5rem] p-1.5 border border-border/80 bg-card shadow-lg">
                                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                                        <AppImage
                                            src={data.image.src}
                                            alt={data.image?.alt ?? "hero image"}
                                            width={1000}
                                            height={1000}
                                            maxSmWidth={'w70'}
                                            eager
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                }

                bottom={
                    <HeroContent className="max-lg:text-center max-lg:*:mx-auto lg:relative"
                        greetings={<Greeting text={data.greetings} className="-mb-6" />}
                        description={<Description text={data.description} className="max-lg:text-center max-lg:w-[80%] mx-auto" />}
                        tags={<Tags tags={data.tags} className='w-fit justify-center max-lg:mx-auto' />}

                        title={
                            <H1
                                title={<>
                                    <span>{data.introduction}{" "}</span>
                                    <span className="text-primary">{about.firstname}</span>
                                </>}

                                titleSize={'hero'}
                                subtitle={about.role}
                                subtitleSize={'hero'}
                                className="max-lg:text-center"
                            />
                        }

                        badge={
                            <>{
                                data.availableForWork &&
                                <AvailableForWork className="lg:absolute -top-18" />
                            }</>
                        }

                        ctaBtns={
                            <CtaBtns {...cv} className="" />
                        }
                    />
                }
            />
        </Container>
    );
};
