import SpriteIcon from "../SpriteIcon";
import { type ReactElement } from "react";

export const DEFAULT_LOGO_WIDTH: string = "30px";
export const DEFAULT_LOGO_HEIGHT: string = "30px";

export const enum LogoStatusesList {
    ACTIVE = "active",
    PASSIVE = "passive",
    PRIMARY = "primary",
    INACTIVE = "inactive",
}

export interface ILogoProps {
    status: string;
    onClick: () => void;
    width?: string;
    height?: string;
}

export const LOGO_ICON_PREFIX: string = "logo-";

const Logo = ({
    status,
    onClick,
    width = DEFAULT_LOGO_WIDTH,
    height = DEFAULT_LOGO_HEIGHT,
}: ILogoProps): ReactElement => {
    const currentIconId: string = `${LOGO_ICON_PREFIX}${status}`;

    return (
        <button className="logo-button" onClick={onClick}>
            <SpriteIcon iconId={currentIconId} width={width} height={height} />
        </button>
    );
};

export default Logo;
