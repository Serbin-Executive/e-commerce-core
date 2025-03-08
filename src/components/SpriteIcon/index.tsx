import { type ReactElement } from "react";
import "./style.css";

export interface ISpriteIconProps {
    iconId: string;
    width?: string;
    height?: string;
}

const SVG_SPRITE_LINK_PATH: string = "/assets/images/sprite.svg#";
const DEFAULT_ICON_WIDTH: string = "30px";
const DEFAULT_ICON_HEIGHT: string = "30px";

const SpriteIcon = ({
    iconId,
    width = DEFAULT_ICON_WIDTH,
    height = DEFAULT_ICON_HEIGHT,
}: ISpriteIconProps): ReactElement => {
    return (
        <svg className="sprite-icon" width={width} height={height}>
            <use href={`${SVG_SPRITE_LINK_PATH}${iconId}`} />
        </svg>
    );
};

export default SpriteIcon;
