import type { ButtonType } from '../../components/ui/button';
import { Container } from '../../components/ui/container';
import { BadgeText, CTA, Description, Greeting, Hero, HeroImage, Role, Title, type LocationType } from '../../components/ui/hero';
import type { ImageType } from '../../components/ui/image';
import { Tag } from '../../components/ui/tag';
import { useHero } from '../../hooks/context'
import type { ClassNameType } from '../../utils/type';

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

export const HeroSection = ({className}: ClassNameType) => {

    const { data } = useHero()!;

    return (
        <>
            {data && !data.hidden &&
                <Container variant={"hero"} className={className}>
                    <Hero
                    className='bg-green-400'
                        badge={<BadgeText text='developer that help your business grow'/>}
                        greetings={<Greeting text={data.greetings} />}
                        title={<Title text={data.fullName} />}
                        role={<Role text={data.role} />}
                        description={<Description text={data.description} />}
                        tags={<Tag texts={data.tags} section={'hero'}/>}
                        ctaBtns={<CTA btns={data.buttons}/>}
                        heroImage={<HeroImage {...data.heroImage} />}
                        location={data.location}
                    />
                </Container>
            }

            <p className='sm:text-4xl'></p>
        </>
    )
}