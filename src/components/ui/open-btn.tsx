import { Button, type ButtonType } from "./button";
import { ExternalLink } from "lucide-react";
import { cn } from "cn";

export type OpenType = ButtonType & {
  src: string;
}

export function OpenBtn({ className, ...props }: OpenType) {
  return (
    <a href={props.src} target="_blank" 
      className={cn("grow", className)} data-grow>

      <Button {...props} 
        icon={<ExternalLink size={20} />} className="w-full" />
    </a>
  );
}