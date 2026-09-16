import { Button, type ButtonType } from "./button";
import { Link } from "./link";
import { Download } from "lucide-react";

export type DownloadType = ButtonType & {
  src: string;
  file_name: string;
}

export function DownloadBtn({ variant, size, ...props }: DownloadType) {
  return (
    <Link href={props.src} file_name={props.file_name}>
      <Button className={props.className} variant={variant} size={size}>
        <Download size={20}/> {props.text}
      </Button>
    </Link>
  )
}
