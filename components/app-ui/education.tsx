import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import AppImage from "../shared-ui/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

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
    "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
    "border border-border/70 bg-card/75 dark:bg-card/50 backdrop-blur-sm",
    "shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.25)]",
    "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
  ],
  {
    variants: {
      variant: {
        normal: "p-5 sm:p-6",
        compact: "p-4 text-sm",
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
      aria-label={`${course} at ${institution}`}
    >
      <div className="flex flex-col gap-4">
        
        <header className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-background/80 p-2 shadow-xs group-hover:border-primary/30 transition-colors">
              <AppImage
                src={logo}
                height={40}
                width={40}
                alt={`${institution} logo`}
                className="object-contain"
              />
            </div>

            <div className="min-w-0 flex flex-col">
              <span className="truncate text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {institution}
              </span>
            </div>
          </div>

          {website && (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${institution} website`}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-8 rounded-lg text-muted-foreground hover:text-foreground shrink-0"
              )}
            >
              <ExternalLink className="size-4" />
            </Link>
          )}
        </header>

        
        <div className="space-y-2">
          <h3 className="flex items-start gap-2 text-base font-semibold leading-snug text-foreground tracking-tight">
            <GraduationCap className="mt-0.5 size-4.5 shrink-0 text-primary" />
            <span>{course}</span>
          </h3>

          {descriptions && (
            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {descriptions}
            </p>
          )}
        </div>
      </div>

      
      {certification && (
        <div className="mt-5 pt-4 border-t border-border/50">
          <Link
            href={certification}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View certification for ${course}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "w-full justify-center gap-2 rounded-xl text-xs font-medium group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            )}
          >
            <Award className="size-3.5 text-primary group-hover/btn:text-primary-foreground transition-colors" />
            <span>View Certification</span>
            <ExternalLink className="size-3 opacity-60 ml-auto" />
          </Link>
        </div>
      )}
    </article>
  );
}

const educationsVariants = cva("w-full", {
  variants: {
    variant: {
      normal: "grid gap-5 grid-cols-1 md:grid-cols-2 items-stretch",
      grid3: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch",
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
