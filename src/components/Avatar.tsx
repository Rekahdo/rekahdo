import './Avatar.css'
import { CodeXml } from "lucide-react"

export type LocationType = {
    hidden: boolean;
    state: string;
    country: string;
}

export type AvatarType = {
    hidden: boolean;
    file_name: string;
    file_path: string;
    rounded: boolean;
    location: LocationType;
}

export type AvatarCompType = AvatarType & {
    className?: string;
}

export const Avatar = (props: AvatarCompType) => {
    return (
        <>
            {
                !props.hidden &&
                <div hidden={props.hidden} className={`avatar ${props.className}`}>
                    <div className='avatar-img-con'>
                        <img src={props.file_path} alt={`${props.file_name} hero section avatar photo`} />
                        <CodeXml color="#ffffff" className='code' />
                    </div>

                    {
                        !props.location.hidden &&
                        <span className='avatar-location-con'>
                            <span className='dot'></span>
                            {props.location.state}, {props.location.country}
                        </span>
                    }
                </div>
            }
        </>
    )
}