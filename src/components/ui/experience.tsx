import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

export type ExperienceType = {
  years: number;
  title: string;
};

const experienceVariants = cva(
    "",
    {
        variants: {
            variant: {
                normal: ""
            }
        }
    }
)

type experienceCompType = ExperienceType & VariantProps<typeof experienceVariants>

export function Experience({ 
    title, years,
    variant
}: experienceCompType) {
    return (
        <div className={cn(experienceVariants({variant}))}>
            <p>{years}</p>
            <p className={cn()}>{title}</p>
        </div>
    )
}