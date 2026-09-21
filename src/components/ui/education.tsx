import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ExternalLink, GraduationCap } from "lucide-react";
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
  "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground ",
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

        <header className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background p-1.5">
              <Image
                src={logo}
                alt={`${institution} logo`}
                className="size-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {institution}
              </p>
            </div>
          </div>

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${institution} website`}
            className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ExternalLink className="size-4" />
          </a>
        </header>

        {/* Course title */}
        <div className="space-y-1">
          <h3 className="flex items-start gap-2 text-base font-semibold leading-snug text-foreground">
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
          <OpenBtn text="View Certification" src={certification} size="lg" />
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Education Grid                                                      */
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