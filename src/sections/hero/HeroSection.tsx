import { AnchorBtn, Buttons, DownloadBtn, type DownloadBtnType, type PageBtnType } from '../../components/ui/button';
import { Container } from '../../components/ui/container';
import { HeroImage } from '../../components/ui/hero-image';
import { BadgeText, Description, Greeting, Role, type LocationType } from '../../components/ui/hero-ui';
import { useHero } from '../../hooks/context'
import { H1 } from '../../components/ui/headings';
import { Tags, type TagType } from '../../components/ui/tag';
import type { ImageType } from '../../components/ui/image';
import { Grid } from '../../components/ui/layout';
import { HeroContent } from '../../components/ui/hero-content';

export type HeroType = {
    badge: string;
    greetings: string;
    fullName: string;
    role: string;
    description: string;
    heroImage: ImageType;
    location: LocationType
    tags: TagType[];
    buttons: {
        downloadCV: DownloadBtnType,
        contact: PageBtnType,
        techStack: PageBtnType
    };
}

export const HeroSection = () => {

    const { data } = useHero()!;

    return (
        <>
            {data &&
                <Container
                    id="hero"
                    bg={"background"}
                    h={'hero'}
                    align={'center'}
                    py={"section"}>

                    <Grid
                        lgCols={'two'}
                        lgPosition={'right'}

                        top={
                            <HeroImage {...data.heroImage} lgJustify={'end'}/>
                        }

                        bottom={
                            <HeroContent
                                lgJustify={'start'}
                                badge={<BadgeText text={data.badge} />}
                                greetings={<Greeting text={data.greetings} />}
                                title={<H1 title={data.fullName} />}
                                role={<Role text={data.role} />}
                                description={<Description text={data.description} />}
                                tags={<Tags tags={data.tags} className='max-md:justify-center' />}
                                ctaBtns={<Buttons btns={[
                                    <DownloadBtn key={data.buttons.downloadCV.href} size={'lg'}
                                        {...data.buttons.downloadCV} variant={'default'} />,

                                    <AnchorBtn key={data.buttons.contact.href} size={'lg'}
                                        {...data.buttons.contact} variant={'outline'} />,

                                    <AnchorBtn key={data.buttons.techStack.href} size={'lg'}
                                        {...data.buttons.techStack} variant={'secondary'} />,
                                ]} width={'fit'} />}
                            />
                        }
                    />
                </Container>
            }
        </>
    )
}