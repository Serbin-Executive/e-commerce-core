import { useState, type ReactElement } from "react";
import "./style.css";

export interface IIconButtonProps {
    iconId: string;
    size?: string;
}

export const SVG_SPRITE_LINK_PATH: string = "/src/assets/sprite.svg#";
export const DEFAULT_ICON_BUTTON_SIZE: string = "30px";
export const ACTIVE_ICON_ID: string = "-active";

const IconButton = ({
    iconId,
    size = DEFAULT_ICON_BUTTON_SIZE,
}: IIconButtonProps): ReactElement => {
    const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);

    const handleChangeMouseEnterStatus = (): void => {
        setIsMouseEnter(!isMouseEnter);
    };

    const currentIconId = isMouseEnter ? `${iconId}${ACTIVE_ICON_ID}` : iconId;

    return (
        <div
            className="sprite-icon-container"
            style={{ width: size, height: size }}
            onMouseEnter={handleChangeMouseEnterStatus}
            onMouseLeave={handleChangeMouseEnterStatus}
        >
            <svg width={"100%"} height={"100%"}>
                <use
                    href={`${SVG_SPRITE_LINK_PATH}${currentIconId}`}
                />
            </svg>
        </div>
    );
};

export default IconButton;
