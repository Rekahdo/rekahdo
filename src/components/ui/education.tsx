import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { GraduationCap } from "lucide-react";
import { Image } from "./image";
import { hover, shadow } from "./css-types";
import { OpenBtn } from "./button";

export type EducationType = {
  institution: string;
  course: string;
  descriptions?: string;
  certification: string;
  website: string;
  logo: string;
};

const educationVariants = cva(
  [
  "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground",
  shadow.sm, hover.outline
  ],
  {
    variants: {
      variant: {
        normal: "",
        compact: "text-sm",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  }
);

type EducationCompType = EducationType &
  VariantProps<typeof educationVariants> & {
    className?: string;
  };

function Education({
  institution,
  course,
  descriptions,
  certification,
  website,
  logo,
  className,
  variant,
}: EducationCompType) {
  return (
    <article
      className={cn(educationVariants({ variant }), className)}
      aria-label={`${course} at ${institution}`}>

      <div className="flex flex-1 flex-col gap-4 p-5">

        <header className="flex justify-between gap-3 items-center">
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 p-1.5">
              <Image
                src={logo}
                alt={`${institution} logo`}
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {institution}
              </p>
            </div>
          </div>

          <OpenBtn href={website} variant={"ghost"}
            aria-label={`Visit ${institution} website`}/>
        </header>

        {/* Course title */}
        <div className="space-y-1">
          <h3 className="flex items-start gap-2 text-base font-semibold leading-snug text-card-foreground">
            <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{course}</span>
          </h3>

          {descriptions && (
            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {descriptions}
            </p>
          )}
        </div>

        {/* Footer action */}
        <div className="mt-auto pt-2">
          <OpenBtn text="View Certification" href={certification} size="lg" />
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Education Grid                                                     */
/* ------------------------------------------------------------------ */

const educationsVariants = cva("", {
  variants: {
    variant: {
      normal: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch",
      list: "flex flex-col gap-4",
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});

type EducationsProps = VariantProps<typeof educationsVariants> & {
  educations: EducationType[];
  className?: string;
};

export function Educations({
  educations,
  className,
  variant,
}: EducationsProps) {
  return (
    <div
      aria-label="Education"
      className={cn(educationsVariants({ variant }), className)}
    >
      {educations.map((edu, i) => (
        <Education key={`${edu.institution}-${i}`} {...edu} />
      ))}
    </div>
  );
}