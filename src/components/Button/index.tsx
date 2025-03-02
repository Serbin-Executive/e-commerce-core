import { type ReactElement } from "react";
import "./style.css";

export const enum ButtonTypes {
    PRIMARY = "primary",
    OUTLINED = "outlined",
}

export interface IButton {
    type: ButtonTypes;
    text: string;
    onClick: () => void;
}

const Button = ({ type, text, onClick }: IButton): ReactElement => {
    return (
        <button className={`control-button ${type}`} onClick={onClick} title={text}>
            {text}
        </button>
    );
};

export default Button;
