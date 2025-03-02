import { useState, type ReactElement } from "react";
import "./style.css";

export interface IIconButtonProps {
    iconId: string;
    isActive: boolean;
    onClick: () => void;
    width?: string;
    height?: string;
}

const SVG_SPRITE_LINK_PATH: string = "/src/assets/sprite.svg#";
const DEFAULT_ICON_BUTTON_WIDTH: string = "30px";
const DEFAULT_ICON_BUTTON_HEIGHT: string = "30px";
const ACTIVE_ICON_SUFFIX: string = "-active";

const IconButton = ({
    iconId,
    isActive,
    onClick,
    width = DEFAULT_ICON_BUTTON_WIDTH,
    height = DEFAULT_ICON_BUTTON_HEIGHT,
}: IIconButtonProps): ReactElement => {
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

    const handleMouseEnter = (): void => {
        setIsMouseOver(true);
    };

    const handleMouseLeave = (): void => {
        setIsMouseOver(false);
    };

    const currentIconId =
        !isMouseOver && !isActive ? iconId : `${iconId}${ACTIVE_ICON_SUFFIX}`;

    return (
        <svg
            className="sprite-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            width={width}
            height={height}
        >
            <use href={`${SVG_SPRITE_LINK_PATH}${currentIconId}`} />
        </svg>
    );
};

export default IconButton;
