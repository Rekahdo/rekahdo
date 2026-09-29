import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

export type ExperienceType = {
  years: number;
  title: string;
};

const experienceVariants = cva(
  [],
  {
    variants: {
      variant: {
        normal: cn("group flex flex-col items-center justify-center gap-2 rounded-xl",
          "border border-border bg-card text-card-foreground py-6 px-8 sm:px-10 text-center hover-1"),
        inline: "flex flex-row items-baseline justify-start gap-3 p-0 border-0 bg-transparent text-left",
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

type ExperiencesProps = {
  experiences: ExperienceType[];
  className?: string;
};

export function Experiences({
  experiences,
  className,
}: ExperiencesProps) {

  return (
    <div role="list" aria-label="Experience"
      className={cn("w-full flex items-center gap-4", className)}>

      {experiences.map((e, i) => (
        <Experience key={`${e.title}-${i}`} {...e} />
      ))}
    </div>
  );
}