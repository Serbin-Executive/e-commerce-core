import { type ReactElement } from "react";
import { LogoInfoList, LogoStatusesList } from "./meta";
import "./style.css";

export const LOGO_TITLE: string = "Line";
export const DEFAULT_LOGO_SIZE: string = "30px";
export const LOGO_IMAGE_URL: string = "src/assets/images/logo-";
export const LOGO_IMAGE_EXTENSION: string = ".png";

export interface ILogoProps {
    status: string;
    size?: string;
}

const Logo = ({
    status,
    size = DEFAULT_LOGO_SIZE,
}: ILogoProps): ReactElement => {
    const { imageId, titleColor } = LogoInfoList[status as LogoStatusesList];

    return (
        <div className="logo-container" style={{ width: size, height: size }}>
            <img
                src={`${LOGO_IMAGE_URL}${imageId}${LOGO_IMAGE_EXTENSION}`}
                alt="logo"
            />

            {imageId === LogoStatusesList.INACTIVE ? (
                <></>
            ) : (
                <div className="logo-title" style={{ color: titleColor }}>
                    {LOGO_TITLE}
                </div>
            )}
        </div>
    );
};

export default Logo;
