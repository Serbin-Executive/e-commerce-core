import { type ReactElement } from "react";
import "./style.css";

export const enum ButtonStatusList {
    PRIMARY = "primary",
    OUTLINED = "outlined",
}

export interface IButton {
    status: string;
    text: string;
    onClick: () => void;
}

const Button = ({status,text, onClick}: IButton): ReactElement => {
    return(
        <div className="button-container">
            <button className={status} onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button;