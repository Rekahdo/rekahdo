import { Hero } from '../../components/block/hero';
import { AnchorBtn, Buttons, DownloadBtn, type DownloadBtnType, type PageBtnType } from '../../components/ui/button';
import { Container } from '../../components/ui/container';
import { HeroImage } from '../../components/ui/hero-image';
import { BadgeText, type LocationType } from '../../components/ui/hero-ui';
import { Description, Greeting, Role } from '../../components/ui/hero-content';
import { useHero } from '../../hooks/context'
import { H1 } from '../../components/ui/headings';
import { Tags, type TagType } from '../../components/ui/tag';
import type { ImageType } from '../../components/ui/image';

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

                    <Hero
                        badge={<BadgeText text={data.badge}/>}
                        greetings={<Greeting text={data.greetings} />}
                        title={<H1 title={data.fullName} />}
                        role={<Role text={data.role} />}
                        description={<Description text={data.description} />}
                        tags={<Tags tags={data.tags}/>}
                        ctaBtns={<Buttons btns={[
                            <DownloadBtn key={data.buttons.downloadCV.href} {...data.buttons.downloadCV} variant={'default'}/>,
                            <AnchorBtn key={data.buttons.contact.href} {...data.buttons.techStack} variant={'secondary'}/>,
                            <AnchorBtn key={data.buttons.techStack.href} {...data.buttons.contact} variant={'outline'}/>,
                        ]} width={'fit'} />}
                        heroImage={<HeroImage {...data.heroImage} 
                        size={'xl'} xs={'lg'} sm={'lg'}/>}
                        location={data.location}
                    />
                </Container>
            }
        </>
    )
}