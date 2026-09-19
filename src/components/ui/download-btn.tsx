import { Button, type ButtonType } from "./button";
import { Download } from "lucide-react";
import { cn } from "cn";

export type DownloadType = ButtonType & {
  src: string;
  file_name: string;
}

export function DownloadBtn({ className, ...props }: DownloadType) {
  return (
    <a href={props.src} download={props.file_name} 
      className={cn("grow", className)} data-grow>

      <Button {...props} 
        icon={<Download size={20} />} className="w-full" />
    </a>
  );
}