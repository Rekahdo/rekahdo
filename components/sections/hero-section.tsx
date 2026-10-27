import { Tags } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import { HeroContent } from "../app-ui/hero-content";
import { Description, Greeting, Role } from "../app-ui/hero-ui";
import { H1 } from "../shared-ui/headings";
import { AvailableForWork, PingTag } from "../shared-ui/ping";
import { heroData } from "@/data/hero";
import AppImage, { imageVariants } from "../shared-ui/image";
import { documentData } from "@/data/document";
import { Layout } from "../shared-ui/layout";
import CtaBtns from "../app-ui/cta-btns";
import { aboutData } from "@/data/about";
import { cn } from "cn";

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

                topClassName="lg:items-end"
                top={
                    <>
                        {data.image?.src && (
                            <AppImage
                                src={data.image.src}
                                alt={data.image.alt ?? "hero image"}
                                width={1000}
                                height={1000}
                                maxMdWidth={'w70'}
                                mdWidth={'w50'}
                                lgWidth={'w80'}
                                rounded={'4xl'}
                                variant={'elevate'}
                                eager
                            />
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
