import { type ReactElement } from "react";
import "./style.css";

export const enum ControlButtonTypes {
    PRIMARY = "primary",
    OUTLINED = "outlined",
}

export interface IControlButton {
    type: ControlButtonTypes;
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
