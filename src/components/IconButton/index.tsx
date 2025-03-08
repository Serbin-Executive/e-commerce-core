import { useState, type ReactElement } from "react";
import "./style.css";
import SpriteIcon from "../SpriteIcon";

export interface IIconButtonProps {
    iconId: string;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick: () => void;
    width?: string;
    height?: string;
}

const DEFAULT_ICON_BUTTON_WIDTH: string = "30px";
const DEFAULT_ICON_BUTTON_HEIGHT: string = "30px";
const ACTIVE_ICON_SUFFIX: string = "-active";

const IconButton = ({
    iconId,
    isActive,
    isDisabled,
    onClick,
    width = DEFAULT_ICON_BUTTON_WIDTH,
    height = DEFAULT_ICON_BUTTON_HEIGHT,
}: IIconButtonProps): ReactElement => {
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

    const className: string = `icon-button ${!isDisabled ? "" : "disabled"}`;

    const handleMouseEnter = (): void => {
        setIsMouseOver(true);
    };

    const handleMouseLeave = (): void => {
        setIsMouseOver(false);
    };

    const currentIconId =
        !isMouseOver && !isActive ? iconId : `${iconId}${ACTIVE_ICON_SUFFIX}`;

    return (
        <button
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <SpriteIcon iconId={currentIconId} width={width} height={height} />
        </button>
    );
};

export default IconButton;
