// import './Avatar.css'
import { CodeXml } from "lucide-react"
import type { AvatarCompType } from '../utils/type';


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