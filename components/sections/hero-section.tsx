import { Tags } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import CtaBtns, { Description, Greeting, Role } from "../app-ui/hero-content";
import { H1 } from "../shared-ui/headings";
import { AvailableForWork, PingTag } from "../shared-ui/ping";
import { heroData } from "@/data/hero";
import AppImage, { imageVariants } from "../shared-ui/image";
import { documentData } from "@/data/document";
import { Layout } from "../shared-ui/layout";
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

                bottomClassName="gap-2 md:gap-4 lg:text-left lg:items-start "
                bottom={
                    <>
                        {
                            <>{
                                data.availableForWork &&
                                <AvailableForWork className="" />
                            }</>
                        }

                        <Greeting text={data.greetings} />

                        <H1
                            title={
                                <div className="flex gap-[0.3ch]">
                                    <span>{data.introduction}</span>
                                    <span className="text-primary">{about.firstname}</span>
                                </div>
                            }
                            titleSize={'hero'}
                        />

                        <Role text={about.role} />

                        <Description text={data.description} />

                        <Tags tags={data.tags} className='w-fit justify-center max-lg:mx-auto mt-3' />

                        <CtaBtns {...cv} />
                    </>
                }
            />
        </Container>
    );
};
