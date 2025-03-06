import SpriteIcon from "@components/SpriteIcon";
import { type MouseEvent, type ReactElement } from "react";
import "./style.css";

export interface IDropdownListOption {
    value: string;
    label: string;
}

export interface IDropdownLisOptionProps {
    iconId?: string;
    isSelected?: boolean;
    isDisabled?: boolean;
    data?: IDropdownListOption;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const DATA_ATTRIBUTE: string = "data-value";
export const OPTION_CLASS_NAME: string = "dropdown-list-option";

export const DEFAULT_DROPDOWN_ITEM: IDropdownListOption = {
    label: "Выберите значение",
    value: "",
};

const ICON_WIDTH: string = "12px";

const DropdownListOption = ({
    iconId,
    isSelected = false,
    isDisabled = false,
    data = DEFAULT_DROPDOWN_ITEM,
    onClick,
}: IDropdownLisOptionProps): ReactElement => {
    const className: string = `${OPTION_CLASS_NAME} ${
        isSelected && "selected"
    } ${isDisabled && "disabled"}`;

    return (
        <div
            onClick={onClick}
            title={data.label}
            className={className}
            data-value={data.value}
        >
            <div className="dropdown-list-option-value">{data.label}</div>

            {iconId && (
                <div className="dropdown-list-icon-container">
                    <SpriteIcon iconId={iconId} width={ICON_WIDTH} />
                </div>
            )}
        </div>
    );
};

export default DropdownListOption;
