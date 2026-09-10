import type { ReactNode } from "react"

type ContainerType = {
    children: ReactNode;
    className?: string;
}

export const Container = (props: ContainerType) => {
    return (
        <div className={`section-container ${props.className}`}>
            {props.children}
        </div>
    )
}