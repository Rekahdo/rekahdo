import { Tags } from "../app-ui/tag";
import { Container } from "../shared-ui/container";
import { Grid } from "../shared-ui/layout2";
import { HeroContent } from "../app-ui/hero-content";
import { Description, Greeting, Role } from "../app-ui/hero-ui";
import { H1 } from "../shared-ui/headings";
import { AvailableForWork, PingTag } from "../shared-ui/ping";
import { cn } from "cn";
import { buttonVariants } from "../ui/button";
import { Download } from "lucide-react";
import { STACK_ID } from "./stack-section";
import { NavigationLink } from "../shared-ui/navigation";
import { CONTACT_ID } from "./contact-section";
import { heroData } from "@/data/hero";
import AppImage from "../shared-ui/image";
import { headerData } from "@/data/header";

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

            <Grid
                lgCols={'two'}
                lgPosition={'right'}

                topClassName="flex justify-center"
                top={
                    <>
                        {(data.image && data.image.src) &&
                            <AppImage
                                src={data.image.src}
                                alt={data.image?.alt ?? "hero image"}
                                width={1000} height={1000}
                                maxMdSize={'s80'}
                                mdSize={'s50'}
                                lgSize={'s90'}
                                rounded={'full'}
                                className="flex justify-center"
                            />
                        }
                    </>
                }

                bottom={
                    <HeroContent className="max-lg:text-center max-lg:justify-center"
                        greetings={<Greeting text={data.greetings} />}
                        role={<Role text={data.role} />}
                        description={<Description text={data.description} className="max-lg:text-center max-lg:w-[80%] mx-auto" />}
                        tags={<Tags tags={data.tags} className='w-fit justify-center max-lg:mx-auto' />}

                        title={
                            <H1 size={'hero'}
                                title={<>
                                    <span>{data.introduction}{" "}</span>
                                    <span className="text-primary">{data.name}</span>
                                </>}
                                className="max-lg:text-center"
                            />
                        }

                        badge={
                            <>{
                                data.availableForWork &&
                                <AvailableForWork />
                            }</>
                        }

                        ctaBtns={[
                            <NavigationLink
                                key={"hero-btn-1"}
                                link={{
                                    href: STACK_ID,
                                    label: "Download CV",
                                    type: 'download',
                                    icon: <Download />,
                                    filename: cv!.name
                                }}
                                className={cn(buttonVariants({ size: 'lg' }), "shadow-sm")}
                            />,

                            <NavigationLink
                                key={"hero-btn-2"}
                                link={{
                                    href: STACK_ID,
                                    label: "Tech Stack",
                                    type: 'scroll',
                                }}
                                className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }), "shadow-sm")}
                            />,

                            <NavigationLink
                                key={"hero-btn-3"}
                                link={{
                                    href: CONTACT_ID,
                                    label: "Contact Me",
                                    type: 'scroll',
                                }}
                                className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), "shadow-sm")}
                            />,
                        ]}
                    />
                }
            />
        </Container>
    )
}