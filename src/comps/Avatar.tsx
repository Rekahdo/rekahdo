import { CodeXml } from "lucide-react"

export type AvatarType = {
  hidden: boolean;
  file_name: string;
  file_path: string;
  rounded: boolean;
}

export type AvatarCompType = AvatarType & {
    className?: string;
}

export const Avatar = (props: AvatarCompType) => {
    return (
        <>
            {
                !props.hidden && 
                <div hidden={props.hidden} className={`${props.className}`}>
                    <img src={props.file_path} alt={`${props.file_name} hero section avatar photo`} />
                    <CodeXml color="#ffffff" />
                </div>
            }
        </>
    )
}