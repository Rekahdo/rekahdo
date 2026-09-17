import { cva, type VariantProps } from "class-variance-authority";
import { Button, type ButtonType } from "./button";
import { cn } from "cn";

type CTAType = VariantProps<typeof CtaVariant> & {
    className?: string;
    btns: ButtonType[]
}

const CtaVariant = cva(
    "flex flex-wrap gap-6",
    {
        variants: {
            width: {
                stretch: "w-full",
                fit: "w-fit"
            },
        },
        defaultVariants: {
            width:'stretch',
        }
    }
)

export function CTA({ btns, width, className }: CTAType) {
    return (
        <>
            {
                btns &&
                <div className={cn(CtaVariant({ width, className }))}>
                    <Button {...btns[0]} variant={"default"} size={"lg"} className={"grow-0"} />
                    <Button {...btns[1]} variant={"outline"} size={"lg"} className={"grow-0"}/>
                    <Button {...btns[2]} variant={"secondary"} size={"lg"} className={"grow-0"}/>
                </div>
            }
        </>
    )
}