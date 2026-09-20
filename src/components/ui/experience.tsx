import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type ExperienceType = {
  years: number;
  title: string;
};

/* ------------------------------------------------------------------ */
/* Single Experience Item                                              */
/* ------------------------------------------------------------------ */

const experienceVariants = cva(
  "group relative flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md",
  {
    variants: {
      variant: {
        normal: "",
        inline: "flex-row items-baseline justify-start gap-3 p-0 border-0 bg-transparent text-left hover:translate-y-0 hover:shadow-none",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  }
);

type ExperienceCompType = ExperienceType &
  VariantProps<typeof experienceVariants> & {
    className?: string;
  };

function Experience({
  title,
  years,
  variant,
  className,
}: ExperienceCompType) {
  const isInline = variant === "inline";

  return (
    <div className={cn(experienceVariants({ variant }), className)}>
      {/* Years — big number */}
      <p
        className={cn(
          "font-bold tabular-nums tracking-tight text-primary",
          isInline ? "text-2xl" : "text-4xl sm:text-5xl"
        )}
      >
        {years}
        <span className="text-primary/70">+</span>
      </p>

      {/* Title — label under the number */}
      <p
        className={cn(
          "font-medium text-muted-foreground",
          isInline
            ? "text-base text-foreground"
            : "text-sm uppercase tracking-wide"
        )}
      >
        {title}
      </p>

      {/* Decorative accent on hover (card variant only) */}
      {!isInline && (
        <span
          aria-hidden
          className="absolute inset-x-6 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-300 group-hover:scale-x-100"
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Experience Grid / List                                              */
/* ------------------------------------------------------------------ */

const experiencesVariants = cva("", {
  variants: {
    variant: {
      normal: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
      inline: "flex flex-wrap items-center gap-x-8 gap-y-4",
      row: "flex flex-wrap justify-center gap-4",
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});

type ExperiencesType = VariantProps<typeof experiencesVariants> & {
  experiences: ExperienceType[];
  className?: string;
};

export function Experiences({
  experiences,
  className,
  variant,
}: ExperiencesType) {
  const itemVariant: VariantProps<typeof experienceVariants>["variant"] =
    variant === "inline" ? "inline" : "normal";

  return (
    <div
      role="list"
      aria-label="Experience"
      className={cn(experiencesVariants({ variant }), className)}
    >
      {experiences.map((e, i) => (
        <Experience key={`${e.title}-${i}`} variant={itemVariant} {...e}/>
      ))}
    </div>
  );
}