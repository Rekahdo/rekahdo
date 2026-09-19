import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Link } from "./link";
import { ExternalLink } from "lucide-react";
import { OpenBtn } from "./open-btn";

export type Education = {
    institution: string;
    course: string;
    descriptions?: string;
    certification: string;
    website: string;
    logo: string;
};

const educationVariants = cva(
    "",
    {
        variants: {
            variant: {
                normal: ""
            }
        }
    }
)

type educationCompType = Education & VariantProps<typeof educationVariants>

export function Education({
    course,
    descriptions,
    certification,
    website,
    logo,
}: educationCompType) {
    return (
        <div>
            <div>
                <span>{logo}</span>
                <Link href="website">
                    {website} {<ExternalLink />}
                </Link>
            </div>

            {course}
            {descriptions}

            <OpenBtn text="View" src={certification}/>
        </div>
    )
}