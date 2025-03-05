import SpriteIcon from "@components/SpriteIcon";
import { dropdownItemsList } from "./meta";
import { type MouseEvent, type ReactElement, useEffect, useState } from "react";
import { SpriteIconsIds, SpriteIconsTypesSuffixes } from "@utils/constants";
import "./style.css";

export interface IDropdownItem {
    value: string;
    label: string;
}

export interface IDropdownListProps {
    value: string;
    itemsList: IDropdownItem[];
    onChange: any;
}

const ARROW_ICON_WIDTH: string = "12px";

const DropdownList = ({
    value,
    itemsList,
    onChange,
}: IDropdownListProps): ReactElement => {
    const [isDropdownListOpen, setIsDropdownListOpen] =
        useState<boolean>(false);

    const openButtonIconId: string = !isDropdownListOpen
        ? `${SpriteIconsIds.ARROW_UP}${SpriteIconsTypesSuffixes.PRIMARY}`
        : `${SpriteIconsIds.ARROW_DOWN}${SpriteIconsTypesSuffixes.ACTIVE}`;

    const openDropdownList = (): void => {
        setIsDropdownListOpen(true);
    };

    const closeDropdownList = (): void => {
        setIsDropdownListOpen(false);
    };

    const handleChangeDropdownListOpen = (
        event: MouseEvent<HTMLDivElement>
    ): void => {
        event.stopPropagation();

        !isDropdownListOpen ? openDropdownList() : closeDropdownList();
    };

    const getCurrentItemByValue = (currentValue: string): IDropdownItem => {
        const currentItem = dropdownItemsList.find(
            (dropdowItem) => dropdowItem.value === currentValue
        );

        return currentItem!;
    };

    const getIsOpenClass = (): string => {
        return !isDropdownListOpen ? "" : " open";
    };

    const getFontClassByItem = (item: IDropdownItem): string => {
        return item.value !== value ? `control-text` : `control-text-active`;
    };

    const selectValue = (event: MouseEvent<HTMLDivElement>): void => {
        event.stopPropagation();

        const targetElement = event.target as HTMLElement;
        const targetItemElement = targetElement.closest(
            ".dropdown-option"
        ) as HTMLElement | null;

        if (!targetItemElement) {
            closeDropdownList();

            return;
        }

        const targetValue = targetItemElement.getAttribute("data-value");

        const selectedItem = dropdownItemsList.find(
            (dropdownItem) => dropdownItem.value === targetValue
        );

        if (!selectedItem) {
            closeDropdownList();

            return;
        }

        onChange(selectedItem.value);

        closeDropdownList();
    };

    useEffect(() => {
        document.addEventListener("click", closeDropdownList);

        return () => document.removeEventListener("click", closeDropdownList);
    }, []);

    return (
        <div className="dropdown-list">
            <div
                className={`dropdown-list-custom`}
                onClick={handleChangeDropdownListOpen}
                title={getCurrentItemByValue(value).label}
            >
                <div
                    className={`dropdown-list-custom-value control-text${getIsOpenClass()}`}
                >
                    {getCurrentItemByValue(value).label}
                </div>

                <SpriteIcon
                    iconId={openButtonIconId}
                    width={ARROW_ICON_WIDTH}
                />
            </div>
            <div
                className={`dropdown-options-list${getIsOpenClass()}`}
                onClick={selectValue}
            >
                {itemsList.map((item) => (
                    <div
                        key={item.value}
                        data-value={item.value}
                        className={`dropdown-option ${getFontClassByItem(
                            item
                        )}`}
                        title={item.label}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownList;
