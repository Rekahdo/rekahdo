import { cva, type VariantProps } from "class-variance-authority";
import { Button, type ButtonType } from "./button";
import { cn } from "cn";
import { DownloadBtn, type DownloadType } from "./download";

type CTAType = VariantProps<typeof CtaVariant> & {
    className?: string;
    btns: [DownloadType, ...ButtonType[]]
}

const CtaVariant = cva(
    [
        "flex flex-wrap gap-6 align-center justify-center",
    ],
    {
        variants: {
            width: {
                stretch: "w-full",
                fit: "w-fit",
            },
        },
        defaultVariants: {
            width: 'stretch',
        }
    }
)

export function CTA({ btns, width, className }: CTAType) {
    return (
        <>
            {
                btns &&
                <div className={cn(CtaVariant({ width, className }))}>
                    <DownloadBtn data-grow {...btns[0]} variant={"default"} size={"lg"} />
                    <Button {...btns[2]} variant={"secondary"} size={"lg"} />
                    <Button {...btns[1]} variant={"outline"} size={"lg"} />
                </div>
            }
        </>
    )
}