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