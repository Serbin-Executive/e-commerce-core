import { type ReactElement } from "react";
import "./style.css";

export const enum ButtonTypes {
    PRIMARY = "primary",
    OUTLINED = "outlined",
}

export interface IControlButton {
    type: ButtonTypes;
    text: string;
    onClick: () => void;
}

const ControlButton = ({ type, text, onClick }: IControlButton): ReactElement => {
    return (
        <button className={`control-button ${type}`} onClick={onClick} title={text}>
            {text}
        </button>
    );
};

export default ControlButton;
