import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

export type QuoteType = {
  text: string;
};

const quoteVariants = cva(
    "",
    {
        variants: {
            variant: {
                normal: ""
            }
        }
    }
)

type quoteCompType = QuoteType & VariantProps<typeof quoteVariants>

export function QuoteType({ 
    text, variant
}: quoteCompType) {
    return (
        <div className={cn(quoteVariants({variant}))}>
            <p>{text}</p>
        </div>
    )
}