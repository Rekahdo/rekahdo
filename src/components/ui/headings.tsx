import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const textcase = {
    lowercase: "lowercase",
    uppercase: "uppercase",
    capitalize: "capitalize",
}

const fontWeight = {
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
}

const foreground = {
    default: "text-foreground",
    gradient: "bg-gradient-to-tr from-red-500 to-cyan-400 bg-clip-text text-transparent",
}

const TitleVariants = cva("",
    {
        variants: {
            titleSize: {
                h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
                h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
                h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
                h4: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
                h5: "text-base sm:text-lg md:text-xl lg:text-2xl",
                h6: "text-sm sm:text-base md:text-lg lg:text-xl",
            },
            titleCase: textcase,
            titleWeight: fontWeight,
            titleForeground: foreground,
        },
        defaultVariants: {
            titleWeight:'extrabold',
            titleForeground: 'default',
        }
    }
)

const SubTitleVariants = cva("",
    {
        variants: {
            subTitleSize: {
                h1: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
                h2: "text-base sm:text-lg",
                h3: "text-base sm:text-lg",
                h4: "text-base sm:text-lg",
                h5: "text-base sm:text-lg",
                h6: "text-base sm:text-lg",
            },
            subTitleCase: textcase,
            subTitleWeight: fontWeight,
            subTitleForeground: foreground,
        },
        defaultVariants: {
            subTitleCase:'capitalize',
            subTitleWeight:'medium',
            subTitleForeground: 'default',
        }
    }
)

type TitleType = {
    title: string
    subtitle?: string;
};

type TitleCompType = TitleType 
    & VariantProps<typeof TitleVariants> 
    & VariantProps<typeof SubTitleVariants>;

export function H1({
    title,
    titleForeground,
    subtitle,
    subTitleForeground
}: TitleCompType) {
    return (
        <div>
            <h1 className={cn(TitleVariants({ 
                'titleSize':'h1', 'titleCase':'uppercase', 
                'titleWeight':'extrabold', titleForeground 
            }))}>
                {title}
            </h1>

            {subtitle && <p className={cn(SubTitleVariants({
                'subTitleSize':'h1', subTitleForeground
            }))}>
                {subtitle}
            </p>}
        </div>
    )
}

export function H2({
    title,
    titleForeground,
    subtitle,
    subTitleForeground
}: TitleCompType) {
    return (
        <div>
            <h2 className={cn(TitleVariants({ 
                'titleSize':'h2', 'titleCase':'capitalize', 
                'titleWeight':'extrabold', titleForeground 
            }))}>
                {title}
            </h2>

            {subtitle && <p className={cn(SubTitleVariants({
                'subTitleSize':'h2', subTitleForeground
            }))}>
                {subtitle}
            </p>}
        </div>
    )
}

export function H3({
    title,
    titleForeground,
    subtitle,
    subTitleForeground
}: TitleCompType) {
    return (
        <div>
            <h3 className={cn(TitleVariants({ 
                'titleSize':'h3', 'titleCase':'capitalize', 
                'titleWeight':'extrabold', titleForeground 
            }))}>
                {title}
            </h3>

            {subtitle && <p className={cn(SubTitleVariants({
                'subTitleSize':'h3', subTitleForeground
            }))}>
                {subtitle}
            </p>}
        </div>
    )
}

export function H4({
    title,
    titleForeground,
    subtitle,
    subTitleForeground
}: TitleCompType) {
    return (
        <div>
            <h4 className={cn(TitleVariants({ 
                'titleSize':'h4', 'titleCase':'capitalize', 
                'titleWeight':'extrabold', titleForeground 
            }))}>
                {title}
            </h4>

            {subtitle && <p className={cn(SubTitleVariants({
                'subTitleSize':'h4', subTitleForeground
            }))}>
                {subtitle}
            </p>}
        </div>
    )
}

export function H5({
    title,
    titleForeground,
    subtitle,
    subTitleForeground
}: TitleCompType) {
    return (
        <div>
            <h5 className={cn(TitleVariants({ 
                'titleSize':'h5', 'titleCase':'capitalize', 
                'titleWeight':'extrabold', titleForeground 
            }))}>
                {title}
            </h5>

            {subtitle && <p className={cn(SubTitleVariants({
                'subTitleSize':'h5', subTitleForeground
            }))}>
                {subtitle}
            </p>}
        </div>
    )
}

export function H6({
    title,
    titleForeground,
    subtitle,
    subTitleForeground
}: TitleCompType) {
    return (
        <div>
            <h6 className={cn(TitleVariants({ 
                'titleSize':'h6', 'titleCase':'capitalize', 
                'titleWeight':'extrabold', titleForeground 
            }))}>
                {title}
            </h6>

            {subtitle && <p className={cn(SubTitleVariants({
                'subTitleSize':'h6', subTitleForeground
            }))}>
                {subtitle}
            </p>}
        </div>
    )
}