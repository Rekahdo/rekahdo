import type { ContainerType } from '../utils/type'

export const Container = (props: ContainerType) => {
    return (
        <div className={`section-container ${props.className}`}>
            {props.children}
        </div>
    )
}