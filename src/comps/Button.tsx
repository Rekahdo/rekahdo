import { Download } from 'lucide-react'
import './Button.css'

export type ButtonType = {
    readonly id?: number;
    hidden?: boolean;
    text?: string;
    download?: {
        file_name: string;
        file_path: string;
    };
    className?: string;
    onClick?: () => void
};

export const Button = (props: ButtonType) => {
    return (
        <button key={props.id} className={`btn-ui ${props.className}`} hidden={props.hidden} onClick={props.onClick}>
            {props.download && <Download size={16} />}

            {!props.download ? props.text : (
                <a href={props.download.file_path} download={props.download.file_name}>
                    {props.text}
                </a>
            )}
        </button>
    )
}