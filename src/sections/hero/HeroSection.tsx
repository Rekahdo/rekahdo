import { Avatar } from '../../comps/Avatar';
import { Button } from '../../comps/Button';
import { Tag } from '../../comps/Tag';
import { useHero } from '../../hooks/context'
import './HeroSection.css'

export const HeroSection = () => {

    const {data, reload} = useHero()!;

    return (
        <>
            { data && !data.hidden &&
                
                <section>
                    <Avatar {...data.avatar}/>
                    <p>{data.greetings}</p>
                    <h1>{data.fullName}</h1>
                    <p>{data.role}</p>
                    <p>{data.description}</p>
                    <div>{
                        data.tags.map(tag => <Tag {...tag}/>)    
                    }</div>
                    <div>{
                        data.actionButtons.map(button => <Button {...button}/>)  
                    }</div>
                </section>
            }
        </>
    )
}