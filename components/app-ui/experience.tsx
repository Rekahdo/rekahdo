import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Card, CardContent } from "../ui/card";

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
    <Card className="p-4 xs:p-6 sm:p-10">
      <CardContent className="flex flex-col items-center justify-center text-center">

        <p className={cn("flex items-center font-bold tabular-nums tracking-tight text-primary text-4xl")}>
          {years}

          <span className="text-primary/70 text-2xl">+</span>
        </p>

        <p className={cn("font-medium text-muted-foreground capitalize")}>
          {title}
        </p>

      </CardContent>
    </Card>
  );
}

type ExperiencesProps = {
  experiences: ExperienceType[] | undefined;
  className?: string;
};

export function Experiences({
  experiences,
  className,
}: ExperiencesProps) {

  return (
    <div role="list" aria-label="Experience"
      className={cn("w-full flex items-center justify-center gap-4", className)}>

      {experiences?.map((e, i) => (
        <Experience key={`${e.title}-${i}`} {...e} />
      ))}
    </div>
  );
}