export const enum LogoStatusesList {
    ACTIVE = "active",
    PASSIVE = "passive",
    PRIMARY = "primary",
    INACTIVE = "inactive",
}

export interface ILogoStatusInfo {
    imageId: string;
    titleColor: string;
}

export const LogoInfoList: Record<LogoStatusesList, ILogoStatusInfo> = {
    passive: {
        imageId: "passive",
        titleColor: "#446E61",
    },
    active: {
        imageId: "active",
        titleColor: "#67446E",
    },
    primary: {
        imageId: "primary",
        titleColor: "#111213",
    },
    inactive: {
        imageId: "inactive",
        titleColor: "#BAC2BB",
    },
};