import { Position } from '../utils/enum';
import type { ButtonCompType } from '../utils/type';

export const Button = (props: ButtonCompType) => {

    return (
        <>
            {
                !props.button?.hidden &&

                <button key={props.button.id} className={`btn-comp-ui ui-${props.uiTypeId} ${props.className}`} onClick={props.onClick}>

                    {
                        props.button.file_name && props.button.file_path ?
                            (
                                <a href={props.button.file_path} download={props.button.file_name}>
                                    {props.button.text}
                                </a>
                            ) : props.button.text
                    }

                </button>
            }
        </>
    )
}