import './Button.css'
import type { ReactNode } from 'react';

export type ButtonType = {
    readonly id: number;
    hidden: boolean;
    text: string;
    file_name?: string;
    file_path?: string;
    icon?: ReactNode;
    className?: string;
    onClick?: () => void
};

export const Button = (props: ButtonType) => {
    return (
        <button key={props.id} className={`btn-ui ${props.className}`} hidden={props.hidden} onClick={props.onClick}>
            {props.icon && props.icon}

            {
                props.file_name && props.file_path ?
                    (
                        <a href={props.file_path} download={props.file_name}>
                            {props.text}
                        </a>
                    ) : props.text
            }

        </button>
    )
}