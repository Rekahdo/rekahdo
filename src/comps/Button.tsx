import { Download, Send } from 'lucide-react';
import './Button.css'

export const Position = {
    LEFT: "Left",
    RIGHT: "Right",
}

export type PositionType = (typeof Position)[keyof typeof Position];

export const ButtonIcon = {
    DOWNLOAD: {
        btnId: 1,
        icon: <Download size={16} />,
        position: Position.LEFT,
    },
    SEND: {
        btnId: 4,
        icon: <Send size={16} />,
        position: Position.RIGHT,
    }
}

export type ButtonIconType = (typeof ButtonIcon)[keyof typeof ButtonIcon]

export type ButtonType = {
    readonly id: number;
    hidden: boolean;
    text: string;
    file_name?: string;
    file_path?: string;
};

export type ActionButtonType = {
  uiTypeId: number;
  button: ButtonType;
}

export type ButtonCompType = ActionButtonType & {
    icon?: ButtonIconType;
    className?: string;
    onClick?: () => void;
};

export const Button = (props: ButtonCompType) => {

    return (
        <>
            {
                !props.button?.hidden &&

                <button key={props.button.id} className={`btn-comp-ui ui-${props.uiTypeId} ${props.className}`} onClick={props.onClick}>
                    {
                        props.icon && props.icon.position === Position.LEFT && props.icon.icon
                    }

                    {
                        props.button.file_name && props.button.file_path ?
                            (
                                <a href={props.button.file_path} download={props.button.file_name}>
                                    {props.button.text}
                                </a>
                            ) : props.button.text
                    }

                    {
                        props.icon && props.icon.position === Position.RIGHT && props.icon.icon
                    }

                </button>
            }
        </>
    )
}