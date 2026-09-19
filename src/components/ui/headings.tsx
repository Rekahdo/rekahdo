import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

type TitleType = {
    title: string
};

type Subtitle = TitleType & {
    subtitle?: string;
}

const TextVariants = cva(
    "text-foreground",
    {
        variants: {
            textcase: {
                lowercase: "lowercase",
                uppercase: "uppercase",
                capitalize: "capitalize",
            },
            textsize: {
                h1: "text-3xl md:text-6xl lg:text-7xl",
                h2: "text-3xl md:text-6xl lg:text-7xl",
                h3: "text-3xl md:text-6xl lg:text-7xl",
                h4: "text-3xl md:text-6xl lg:text-7xl",
                h5: "text-3xl md:text-6xl lg:text-7xl",
                h6: "text-3xl md:text-6xl lg:text-7xl",
            },
            subTextsize: {
                p: ""
            },
            fontWeight: {
                bold: "font-bold",
                extrabold: "font-extrabold",
            },
            style: {
                default: "",
                gradient: "bg-gradient-to-tr from-red-500 to-cyan-400 bg-clip-text text-transparent",
            }
        },
    }
)

type HeadingTitleCompType = TitleType & VariantProps<typeof TextVariants>;
type HeadingSubTitleCompType = Subtitle & VariantProps<typeof TextVariants>

export function H1({
    title, 
    textcase, 
    textsize, 
    fontWeight, 
    style
}: HeadingTitleCompType) {
    return (
        <>
            <h1 className={cn(TextVariants({ textcase, textsize, fontWeight, style }))}>
                {title}
            </h1>
        </>
    )
}


export function H2({
    title, subtitle, textcase, textsize, subTextsize, fontWeight, style
}: HeadingSubTitleCompType) {
    return (
        <div>
            <h2 className={cn(TextVariants({ textcase, textsize, subTextsize, fontWeight, style }))}>{title}</h2>
            {subtitle && <span>subtitle</span>}
        </div>
    )
}

export function H3({
    title, subtitle, textcase, textsize, subTextsize, fontWeight, style
}: HeadingSubTitleCompType) {
    return (
        <div>
            <h3 className={cn(TextVariants({ textcase, textsize, subTextsize, fontWeight, style }))}>{title}</h3>
            {subtitle && <span>subtitle</span>}
        </div>
    )
}

export function H4({
    title, subtitle, textcase, textsize, subTextsize, fontWeight, style
}: HeadingSubTitleCompType) {
    return (
        <div>
            <h4 className={cn(TextVariants({ textcase, textsize, subTextsize, fontWeight, style }))}>{title}</h4>
            {subtitle && <span>subtitle</span>}
        </div>
    )
}

export function H5({
    title, subtitle, textcase, textsize, subTextsize, fontWeight, style
}: HeadingSubTitleCompType) {
    return (
        <div>
            <h5 className={cn(TextVariants({ textcase, textsize, subTextsize, fontWeight, style }))}>{title}</h5>
            {subtitle && <span>subtitle</span>}
        </div>
    )
}

export function H6({
    title, subtitle, textcase, textsize, subTextsize, fontWeight, style
}: HeadingSubTitleCompType) {
    return (
        <div>
            <h6 className={cn(TextVariants({ textcase, textsize, subTextsize, fontWeight, style }))}>{title}</h6>
            {subtitle && <span>subtitle</span>}
        </div>
    )
}