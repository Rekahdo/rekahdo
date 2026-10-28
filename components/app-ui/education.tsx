import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import AppImage from "../shared-ui/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { H3, H4, H5 } from "../shared-ui/headings";
import { AppIcon } from "../shared-ui/icon";

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
          <AppIcon
            src={logo}
            alt={`${institution} logo`}
            size={'lg'}
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
          <H4 title={course} titleSize={'h6'}
            titleClassName="font-semibold"
            icon={<GraduationCap className="mt-0.5 shrink-0 text-primary" />}
          />

          {descriptions && (
            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {descriptions}
            </p>
          )}
        </CardContent>

        {certification && false && (
          <CardFooter>
            <Link
              href={certification}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View certification for ${course}`}
              className={cn("w-full gap-4 flex items-center py-4",
                buttonVariants({ variant: "secondary", size: "sm" }),
                "group/btn hover:bg-primary/50! transition-all"
              )}
            >
              View Certification
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
        "lg:grid grid-cols-3",
        className
      )}
    >
      {educations.map((edu, i) => (
        <Education key={`${edu.institution}-${i}`} {...edu} />
      ))}
    </div>
  );
}
