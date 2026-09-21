import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { hover } from "./css-types";

export type ExperienceType = {
  years: number;
  title: string;
};

const experienceVariants = cva(
  [
    "group relative flex flex-col items-center justify-center gap-2 rounded-xl",
    "border border-border bg-card p-6 text-center", hover.outline
  ],
  {
    variants: {
      variant: {
        normal: "",
        inline: "flex-row items-baseline justify-start gap-3 p-0 border-0 bg-transparent text-left",
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
  return (
    <div className={cn(experienceVariants({ variant }), className)}>
      {/* Years */}
      <p className={cn("flex items-center font-bold tabular-nums tracking-tight text-primary text-4xl")}>
        {years}

        <span className="text-primary/70 text-2xl">+</span>
      </p>

      {/* Title */}
      <p className={cn("font-medium text-muted-foreground")}>
        {title}
      </p>
    </div>
  );
}

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

type ExperiencesProps = VariantProps<typeof experiencesVariants> & {
  experiences: ExperienceType[];
  className?: string;
};

export function Experiences({
  experiences,
  className,
  variant,
}: ExperiencesProps) {
  const itemVariant: VariantProps<typeof experienceVariants>["variant"] =
    variant === "inline" ? "inline" : "normal";

  return (
    <div
      role="list"
      aria-label="Experience"
      className={cn(experiencesVariants({ variant }), className)}
    >
      {experiences.map((e, i) => (
        <Experience key={`${e.title}-${i}`} variant={itemVariant} {...e} />
      ))}
    </div>
  );
}