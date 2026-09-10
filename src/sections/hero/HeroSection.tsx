import { Avatar } from '../../comps/Avatar';
import { Button } from '../../comps/Button';
import { Container } from '../../comps/Container';
import { Tag } from '../../comps/Tag';
import { useHero } from '../../hooks/context'
import './HeroSection.css'

export const HeroSection = () => {

    const { data, reload } = useHero()!;

    return (
        <>
            {data && !data.hidden &&
                <Container className='hero-container'>
                    <section className='hero-section'>
                        <Avatar {...data.avatar} {...data.location} className='top-right' />

                        <div  className='bottom-left'>
                            <p>{data.greetings}</p>
                            <h1>{data.fullName}</h1>
                            <p>{data.role}</p>
                            <p>{data.description}</p>
                            
                            <div>{
                                data.tags.map(tag => <Tag {...tag} />)
                            }</div>

                            <div>{
                                data.actionButtons.map(button => <Button {...button} />)
                            }</div>
                        </div>
                    </section>
                </Container>
            }
        </>
    )
}