type ChildrenType = {
    children: string;
}

type h2CompType = {
    title: string;
    subtitle?: string;
}

export function H2({title, subtitle}: h2CompType){
    return <div>
        <h2>{title}</h2>
        {subtitle && <span>subtitle</span>}
    </div>
}