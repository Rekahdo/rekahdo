import { Button, type ButtonType } from "./button";
import { Download } from "lucide-react";

export type DownloadType = ButtonType & {
  src: string;
  file_name: string;
}

export function DownloadBtn({...props}: DownloadType) {
  return (
    <a href={props.src} download={props.file_name} className={props.className}>
      <Button {...props} icon={<Download size={20} />}/>
    </a>
  )
}
