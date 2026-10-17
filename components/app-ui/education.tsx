import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import AppImage from "../shared-ui/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { H3, H5 } from "../shared-ui/headings";

export type EducationType = {
  institution: string;
  course: string;
  descriptions?: string;
  certification: string;
  website: string;
  logo: string;
};

type EducationCompType = EducationType & {
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
}: EducationCompType) {
  return (
    <>
      <Card className={cn(
        "group relative rounded-2xl",
        "shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.25)]",
        "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
        className,
      )}>

        <CardHeader className="flex items-center gap-4">
          <AppImage
            src={logo}
            height={40}
            width={40}
            alt={`${institution} logo`}
            className={cn(
              "bg-red-300 size-12",
              "flex size-12 shrink-0 items-center justify-center rounded-xl",
              "border border-border/80 bg-background/80 p-2 shadow-xs"
            )}
          />

          <CardTitle className="truncate text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {institution}
          </CardTitle>

          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${institution} website`}
            className={cn("ms-auto",
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-8 rounded-lg text-muted-foreground hover:text-foreground shrink-0"
            )}
          >
            <ExternalLink className="size-4" />
          </Link>
        </CardHeader>

        <CardContent>
          <H5 title={course} titleSize={'h6'}
            icon={<GraduationCap className="mt-0.5 shrink-0 text-primary" />}
          />

          {descriptions && (
            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {descriptions}
            </p>
          )}
        </CardContent>

        {certification && (
          <CardFooter>
            <Link
              href={certification}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View certification for ${course}`}
              className={cn("w-full gap-4 flex items-center py-4",
                buttonVariants({ variant: "outline", size: "sm" }),
                "group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              )}
            >
              <Award className="size-3 text-primary group-hover/btn:text-primary-foreground transition-colors" />
              <span>View Certification</span>
              <ExternalLink className="size-3 opacity-60 ml-auto" />
            </Link>
          </CardFooter>
        )}

      </Card>
    </>
  );
}

type EducationsProps = {
  educations: EducationType[];
  className?: string;
};

export function Educations({
  educations,
  className,
}: EducationsProps) {
  return (
    <div aria-label="Education"
      className={cn(
        "flex flex-wrap w-full *:grow gap-xs",
        className
      )}
    >
      {educations.map((edu, i) => (
        <Education key={`${edu.institution}-${i}`} {...edu} />
      ))}
    </div>
  );
}
