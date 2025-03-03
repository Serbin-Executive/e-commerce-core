import SpriteIcon from "@components/SpriteIcon";
import { type ReactElement } from "react";

export const DEFAULT_LOGO_WIDTH: string = "80px";
export const DEFAULT_LOGO_HEIGHT: string = "30px";
export const LOGO_ICON_PREFIX: string = "logo-";

export const enum LogoTypes {
    ACTIVE = "active",
    PASSIVE = "passive",
    PRIMARY = "primary",
    INACTIVE = "inactive",
}

export interface ILogoProps {
    type: string;
    width?: string;
    height?: string;
    onClick: () => void;
}

const Logo = ({
    type = LogoTypes.PRIMARY,
    onClick,
    width = DEFAULT_LOGO_WIDTH,
    height = DEFAULT_LOGO_HEIGHT,
}: ILogoProps): ReactElement => {
    const currentIconId: string = `${LOGO_ICON_PREFIX}${type}`;

    return (
        <button className="logo-button" onClick={onClick}>
            <SpriteIcon iconId={currentIconId} width={width} height={height} />
        </button>
    );
};

export default Logo;
