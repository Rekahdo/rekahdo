import { Download, Send } from 'lucide-react';
import './Button.css'
import type { ReactNode } from 'react';

export const Position = {
    LEFT: "Left",
    RIGHT: "Right",
}

export type PositionType = (typeof Position)[keyof typeof Position];

export const ButtonUI = {
    HEADER_DOWNLOAD_CV_MOBILE: {
        className: "header-download-cv-mobile",
        icon: <Download size={16} />,
        position: Position.LEFT,
    },
    HEADER_DOWNLOAD_CV_DESKTOP: {
        className: "header-download-cv-desktop",
        icon: <Download size={16} />,
        position: Position.LEFT,
    },
    HERO_DOWNLOAD_CV: {
        className: "hero-download-cv",
        icon: null,
        position: null,
    },
    CONTACT_ME: {
        className: "contact-me",
        icon: null,
        position: null,
    },
    TECH_STACK: {
        className: "tech-stack",
        icon: null,
        position: null,
    },
    SEND_MESSAGE: {
        className: "send-message",
        icon: <Send size={16} />,
        position: Position.RIGHT,
    }
};

export type ButtonUIType = (typeof ButtonUI)[keyof typeof ButtonUI]

export type ButtonType = {
    readonly id: number;
    hidden: boolean;
    text: string;
    file_name?: string;
    file_path?: string;
};

export type ButtonCompType = ButtonType & {
    icon?: ReactNode;
    className?: string;
    type: ButtonUIType;
    onClick?: () => void;
};

export const Button = (props: ButtonCompType) => {
    return (
        <>
            {
                !props.hidden &&

                <button key={props.id} className={`btn-comp-ui ${props.className} ${props.type?.className}`} onClick={props.onClick}>
                    {props.icon && props.icon}

                    {
                        !props.icon && props.type?.position === Position.LEFT && props.type?.icon
                    }

                    {
                        props.file_name && props.file_path ?
                            (
                                <a href={props.file_path} download={props.file_name}>
                                    {props.text}
                                </a>
                            ) : props.text
                    }

                    {
                        !props.icon && props.type?.position === Position.RIGHT && props.type?.icon
                    }

                </button>
            }
        </>
    )
}