// import './Tag.css'

import type { TagCompType } from '../utils/type'

export const Tag = (props: TagCompType) => {
    return (
        <>
            {
                !props.hidden &&
                <span key={props.id} hidden={props.hidden} className={`tag ${props.className}`}>
                    {props.text}
                </span>
            }
        </>
    )
}