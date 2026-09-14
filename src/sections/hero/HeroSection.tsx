import type { ButtonType } from '../../components/ui/button';
import { Container } from '../../components/ui/container';
import { BadgeText, CTA, Description, Greeting, Hero, HeroImage, Role, SocialProfText, Title, type LocationType } from '../../components/ui/hero';
import type { ImageType } from '../../components/ui/image';
import { Tag } from '../../components/ui/tag';
import { useHero } from '../../hooks/context'
// import './HeroSection.css'

export type HeroType = {
    hidden: boolean;
    greetings: string;
    fullName: string;
    role: string;
    description: string;
    heroImage: ImageType;
    location: LocationType
    tags: string[];
    buttons: ButtonType[];
}

export const HeroSection = () => {

    const { data } = useHero()!;

    return (
        <>
            {data && !data.hidden &&
                <Container variant={"hero"}>
                    <Hero
                        badge={<BadgeText text='app that help your business grow'/>}
                        greetings={<Greeting text={data.greetings} />}
                        title={<Title text={data.fullName} />}
                        role={<Role text={data.role} />}
                        description={<Description text={data.description} />}
                        tags={<Tag texts={data.tags} />}
                        ctaBtns={<CTA btns={data.buttons}/>}
                        heroImage={<HeroImage {...data.heroImage} />}
                        location={data.location}
                        socialProfText={<SocialProfText count={10000}/>}
                    />
                </Container>
            }

            <p className='sm:text-4xl'></p>
        </>
    )
}