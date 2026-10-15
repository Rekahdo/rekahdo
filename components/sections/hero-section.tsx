import { Tags } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import { HeroContent } from "../app-ui/hero-content";
import { Description, Greeting, Role } from "../app-ui/hero-ui";
import { H1 } from "../shared-ui/headings";
import { AvailableForWork, PingTag } from "../shared-ui/ping";
import { heroData } from "@/data/hero";
import AppImage from "../shared-ui/image";
import { headerData } from "@/data/header";
import { Layout } from "../shared-ui/layout";
import CtaBtns from "../app-ui/cta-btns";

export const HERO_ID = "hero";

export const HeroSection = async () => {

    // const data = await fetchQuery(api.hero.get);
    // const cv = await fetchQuery(api.document.findByType, { type: 'cv' });
    const data = await heroData;
    if (!data) return null;

    const cv = (await headerData).downloadCv;

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
                className="gap-12"

                top={
                    <>
                        {(data.image && data.image.src) &&
                            <AppImage
                                src={data.image.src}
                                alt={data.image?.alt ?? "hero image"}
                                width={1000} height={1000}
                                eager
                                rounded={'full'}
                                maxSmWidth={'w80'}
                                smWidth={'w60'}
                                lgWidth={'w90'}
                            />
                        }
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
                                    <span className="text-primary">{data.name}</span>
                                </>}
                                titleSize={'hero'}
                                subtitle={data.role}
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
                            <CtaBtns {...cv} className=""/>
                        }
                    />
                }
            />
        </Container>
    )
}