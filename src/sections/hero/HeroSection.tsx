import { Hero } from '../../components/block/hero';
import type { ButtonType } from '../../components/ui/button';
import { Container } from '../../components/ui/container';
import { CTA } from '../../components/ui/cta';
import type { DownloadType } from '../../components/ui/download';
import { HeroImage } from '../../components/ui/hero-image';
import { BadgeText, type LocationType } from '../../components/ui/hero-ui';
import type { ImageType } from '../../components/ui/image';
import { Tag } from '../../components/ui/tag';
import { Description, Greeting, Role, Title } from '../../components/ui/hero-content';
import { useHero } from '../../hooks/context'

export type HeroType = {
    hidden: boolean;
    greetings: string;
    fullName: string;
    role: string;
    description: string;
    heroImage: ImageType;
    location: LocationType
    tags: string[];
    buttons: [DownloadType, ...ButtonType[]];
}

export const HeroSection = () => {

    const { data } = useHero()!;

    return (
        <>
            {data && !data.hidden &&
                <Container section={"hero"}>
                    <Hero
                        badge={<BadgeText text='developer that help your business grow'/>}
                        greetings={<Greeting text={data.greetings} />}
                        title={<Title text={data.fullName} />}
                        role={<Role text={data.role} />}
                        description={<Description text={data.description} />}
                        tags={<Tag texts={data.tags} section={'hero'}/>}
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