import DropdownItem from "@components/DropdownItem";
import { useState, type ReactElement } from "react";
import "./style.css";
import SpriteIcon from "@components/SpriteIcon";
import { SpriteIconsIds, SpriteIconsTypesSuffixes } from "@utils/constants";

export interface IDropdownItem {
    title: string;
    key: string;
}

export type TDropdownItemsList = IDropdownItem[];

export const enum DropdownOpenTypes {
    OPEN = "open",
    CLOSE = "close",
}

export interface IDropdownListProps {
    initialItem: IDropdownItem;
    itemsList: TDropdownItemsList;
    onChange: any;
}

const DropdownList = ({
    initialItem,
    itemsList,
    onChange,
}: IDropdownListProps): ReactElement => {
    const [currentItem, setCurrentItem] = useState<IDropdownItem>(initialItem);
    const [isDropdownListOpen, setIsDropdownListOpen] =
        useState<boolean>(false);

    const openType: string = !isDropdownListOpen ? DropdownOpenTypes.CLOSE : DropdownOpenTypes.OPEN;
    const openButtonIconId: string = !isDropdownListOpen ? `${SpriteIconsIds.ARROW_UP}${SpriteIconsTypesSuffixes.PRIMARY}` : `${SpriteIconsIds.ARROW_DOWN}${SpriteIconsTypesSuffixes.ACTIVE}`

    const toggleDropdownListOpen = (): void => {
        setIsDropdownListOpen(!isDropdownListOpen);
    };

    const selectItem = (selectedItem: IDropdownItem): void => {
        setCurrentItem(selectedItem);
        onChange(selectedItem);

        toggleDropdownListOpen();
    };

    return (
        <div className="dropdown-list-container">
            <button
                className={`dropdown-list-open-button ${openType}`}
                onClick={toggleDropdownListOpen}
            >
                {currentItem.title}

                <SpriteIcon iconId={openButtonIconId} width="12px"/>
            </button>
            <div className={`dropdown-list ${openType}`}>
                {itemsList.map((item) => (
                    <DropdownItem
                        key={item.key}
                        item={item}
                        isSelect={item.key === currentItem.key}
                        onClick={selectItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default DropdownList;
