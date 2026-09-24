import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { textAlign, textsize } from "./css-types";

export type QuoteType = {
  text: string;
  author?: string;
  role?: string;
};

const quoteVariants = cva(
  "p-8 md:p-10 text-xs md:text-sm text-foreground",
  {
    variants: {
      variant: {
        normal:
          "border-l-4 border-primary bg-primary/10 rounded-xl p-6 md:p-8",
        soft: "bg-primary/5 rounded-2xl p-6 md:p-8",
        filled:
          "bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 shadow-md",
        minimal:
          "border-t border-b border-border py-6 md:py-8 italic text-muted-foreground",
        gradient:
          "rounded-2xl p-6 md:p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-border",
      },
      size: textsize,
      align: textAlign,
    },
    defaultVariants: {
      variant: "normal",
      align: "start",
    },
  }
);

type QuoteCompType = QuoteType &
  VariantProps<typeof quoteVariants> & {
    className?: string;
  };

export function Quote({
  text,
  author,
  role,
  variant,
  size,
  align,
  className,
}: QuoteCompType) {
  const isFilled = variant === "filled";

  return (
    <figure className={cn(quoteVariants({ variant, size, align }), className)}>
      <blockquote
        className={cn(
          "relative italic",
          align === "center" && "mx-auto max-w-2xl"
        )}
      >
        <p>
          <span aria-hidden className="mr-1 not-italic opacity-60">
            “
          </span>
          {text}
          <span aria-hidden className="ml-1 not-italic opacity-60">
            ”
          </span>
        </p>
      </blockquote>

      {author && (
        <figcaption
          className={cn(
            "mt-4 flex flex-col gap-0.5 text-xs not-italic",
            isFilled ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          <span className="font-semibold">— {author}</span>
          {role && <span className="opacity-80">{role}</span>}
        </figcaption>
      )}
    </figure>
  );
}