import { Hero } from '../../components/block/hero';
import type { ButtonType } from '../../components/ui/button';
import { Container } from '../../components/ui/container';
import { CTA } from '../../components/ui/cta';
import type { DownloadType } from '../../components/ui/download-btn';
import { HeroImage } from '../../components/ui/hero-image';
import { BadgeText, type LocationType } from '../../components/ui/hero-ui';
import type { ImageType } from '../../components/ui/image';
import { Description, Greeting, Role } from '../../components/ui/hero-content';
import { useHero } from '../../hooks/context'
import { H1 } from '../../components/ui/headings';
import { Tags, type TagType } from '../../components/ui/tag';

export type HeroType = {
    badge: string;
    greetings: string;
    fullName: string;
    role: string;
    description: string;
    heroImage: ImageType;
    location: LocationType
    tags: TagType[];
    buttons: [DownloadType, ...ButtonType[]];
}

export const HeroSection = () => {

    const { data } = useHero()!;

    return (
        <>
            {data &&
                <Container 
                    bg={"background"}
                    height={'hero'}
                    py={"normal"}
                    px={"normal"}
                    align={'center'}>

                    <Hero
                        badge={<BadgeText text={data.badge}/>}
                        greetings={<Greeting text={data.greetings} />}
                        title={<H1 title={data.fullName} />}
                        role={<Role text={data.role} />}
                        description={<Description text={data.description} />}
                        tags={<Tags tags={data.tags}/>}
                        ctaBtns={<CTA btns={data.buttons} width={'fit'} />}
                        heroImage={<HeroImage {...data.heroImage} 
                        size={'xl'} />}
                        location={data.location}
                    />
                </Container>
            }
        </>
    )
}