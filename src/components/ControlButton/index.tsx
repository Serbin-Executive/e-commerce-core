import { type ReactNode, type ReactElement } from "react";
import "./style.css";

export const enum ControlButtonTypes {
    PRIMARY = "primary",
    OUTLINED = "outlined",
}

export interface IControlButton {
    type: ControlButtonTypes;
    title?: string;
    children: ReactNode;
    onClick: () => void;
}

const ControlButton = ({
    type,
    title,
    children,
    onClick,
}: IControlButton): ReactElement => {
    return (
        <button
            className={`control-button ${type}`}
            onClick={onClick}
            title={title}
        >
            {children}
        </button>
    );
};

export default ControlButton;
