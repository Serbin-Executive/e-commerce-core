import { type ReactElement } from "react";
import { IDropdownItem } from "@components/DropdownList";
import "./style.css";

export const enum DropdownItemStyles {
    SELECT = "select",
    UNSELECT = "unselect",
}

export interface IDropDownItemProps {
    item: IDropdownItem;
    isSelect: boolean;
    onClick: (selectedItem: IDropdownItem) => void;
}

const DropdownItem = ({ item, isSelect, onClick }: IDropDownItemProps): ReactElement => {
    const selectStyle: string = !isSelect ? DropdownItemStyles.UNSELECT : DropdownItemStyles.SELECT;

    const handleClick = (): void => {
        onClick(item);
    };

    return (
        <button className={`dropdown-item ${selectStyle}`} onClick={handleClick}>
            {item.title}
        </button>
    );
};

export default DropdownItem;
