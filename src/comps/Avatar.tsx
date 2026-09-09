import { CodeXml } from "lucide-react"
import type { LocationType } from "../sections/hero/HeroType";

export type AvatarType = {
  hidden: boolean;
  file_name: string;
  file_path: string;
  rounded: boolean;
}

export type AvatarCompType = AvatarType & LocationType & {
    className?: string;
}

export const Avatar = (props: AvatarCompType) => {
    return (
        <>
            {
                !props.hidden && 
                <div hidden={props.hidden} className={`${props.className}`}>
                    <div>

                    <img src={props.file_path} alt={`${props.file_name} hero section avatar photo`} />
                    <CodeXml color="#ffffff" />
                    </div>
                    <span>
                        <span></span>
                        {props.state}, {props.country}
                    </span>
                </div>
            }
        </>
    )
}