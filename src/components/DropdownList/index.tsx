import SpriteIcon from "@components/SpriteIcon";
import { DEFAULT_INITIAL_ITEM, dropdownItemsList } from "./meta";
import { type MouseEvent, type ReactElement, useEffect, useState } from "react";
import { SpriteIconsIds, SpriteIconsTypesSuffixes } from "@utils/constants";
import "./style.css";

export interface IDropdownItem {
    value: string;
    label: string;
}

export interface IDropdownListProps {
    initialValue: string;
    itemsList: IDropdownItem[];
    onChange: any;
}

const getInitialItemByValue = (initialValue: string): IDropdownItem => {
    const initialItem = dropdownItemsList.find(
        (dropdownItem) => dropdownItem.value === initialValue
    );

    return !initialItem ? DEFAULT_INITIAL_ITEM : initialItem;
};

const DropdownList = ({
    initialValue,
    itemsList,
    onChange,
}: IDropdownListProps): ReactElement => {
    const [currentItem, setCurrentItem] = useState<IDropdownItem>(
        getInitialItemByValue(initialValue)
    );
    const [isDropdownListOpen, setIsDropdownListOpen] =
        useState<boolean>(false);

    const openButtonIconId: string = !isDropdownListOpen
        ? `${SpriteIconsIds.ARROW_UP}${SpriteIconsTypesSuffixes.PRIMARY}`
        : `${SpriteIconsIds.ARROW_DOWN}${SpriteIconsTypesSuffixes.ACTIVE}`;

    useEffect(() => {
        document.addEventListener("click", closeDropdownList);

        return () => document.removeEventListener("click", closeDropdownList);
    }, []);

    const toggleDropdownListOpen = (
        event: MouseEvent<HTMLDivElement>
    ): void => {
        event.stopPropagation();

        setIsDropdownListOpen(!isDropdownListOpen);
    };

    // const openDropdownList = (): void => {
    //     setIsDropdownListOpen(true);
    // };

    const closeDropdownList = (): void => {
        setIsDropdownListOpen(false);
    };

    const getIsOpenClass = (): string => {
        return !isDropdownListOpen ? "" : " open";
    };

    const getFontClassByItem = (item: IDropdownItem): string => {
        return item.value !== currentItem.value
            ? `control-text`
            : `control-text-active`;
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

        setCurrentItem(selectedItem);
        onChange(selectedItem.value);

        closeDropdownList();
    };

    return (
        <div className="dropdown-list">
            <div
                className={`dropdown-list-custom-value control-text${getIsOpenClass()}`}
                onClick={toggleDropdownListOpen}
            >
                {currentItem.label}

                <SpriteIcon iconId={openButtonIconId} width="12px" />
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
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownList;
