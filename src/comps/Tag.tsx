export type TagType = {
    readonly id: number;
    hidden: boolean;
    text: string;
}

export type TagCompType = TagType & {
    className?: string;
}

export const Tag = (props: TagCompType) => {
    return (
        <>
            {
                !props.hidden &&
                <span key={props.id} hidden={props.hidden} className={`${props.className}`}>
                    {props.text}
                </span>
            }
        </>
    )
}