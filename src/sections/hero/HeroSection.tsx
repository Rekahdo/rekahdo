import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Tag } from '../../components/Tag';
import { useHero } from '../../hooks/context'
// import './HeroSection.css'

export const HeroSection = () => {

    const { data } = useHero()!; 

    return (
        <>
            {data && !data.hidden &&
                <Container className='hero-container bg-dominant-rd'>
                    <section className='hero-section'>
                        <Avatar {...data.avatar} className='top-right' />

                        <div  className='bottom-left'>
                            <p className="greetings">{data.greetings}</p>
                            <h1 className="fullName">{data.fullName}</h1>
                            <p className="role">{data.role}</p>
                            <p className="description">{data.description}</p>

                            <div className="tags ignore-font">{
                                data.tags.filter((_, i)  => i < 3).map(tag => <Tag key={tag.id} {...tag} />)
                            }</div>

                            <div className="actionBtns ignore-font">{
                                data.actionButtons.map(acBtn => <Button key={acBtn.button.id} {...acBtn} />)
                            }</div>
                        </div>
                    </section>
                </Container>
            }
        </>
    )
}