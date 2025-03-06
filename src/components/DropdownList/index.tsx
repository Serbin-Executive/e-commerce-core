import { SpriteIconsIds, SpriteIconsTypesSuffixes } from "@utils/constants";
import DropdownListOption, {
    DATA_ATTRIBUTE,
    OPTION_CLASS_NAME,
    type IDropdownListOption,
} from "@components/DropdownListOption";
import {
    useState,
    useEffect,
    type Dispatch,
    type MouseEvent,
    type ReactElement,
    type SetStateAction,
} from "react";
import "./style.css";

export interface IDropdownListProps {
    value: string;
    options: IDropdownListOption[];
    isDisabled: boolean;
    onChange: Dispatch<SetStateAction<string>>;
}

const findOptionByValue = (
    value: string,
    options: IDropdownListOption[]
): IDropdownListOption | undefined =>
    options.find((option: IDropdownListOption) => option.value === value);

const DropdownList = ({
    value,
    options,
    isDisabled = false,
    onChange,
}: IDropdownListProps): ReactElement => {
    const [isListOpen, setIsListOpen] = useState<boolean>(false);

    const [currentItem, setCurrentItem] = useState<
        IDropdownListOption | undefined
    >(findOptionByValue(value, options));

    const className: string = `dropdown-list ${isListOpen && "open"} ${
        isDisabled && "disabled"
    }`;

    const iconId: string = `${SpriteIconsIds.ARROW_DOWN}${
        !isListOpen
            ? SpriteIconsTypesSuffixes.ACTIVE
            : SpriteIconsTypesSuffixes.ACTIVE // temp
    }`;

    const closeList = (): void => {
        setIsListOpen(false);
    };

    const toggleList = (event: MouseEvent<HTMLDivElement>): void => {
        event.stopPropagation();

        setIsListOpen(!isListOpen);
    };

    const selectValue = (event: MouseEvent<HTMLDivElement>): void => {
        try {
            const { target } = event;

            if (!target || !(target instanceof HTMLElement)) {
                throw new Error("Cannot acquire event.target");
            }

            const selectedValue = target
                .closest(`.${OPTION_CLASS_NAME}`)
                ?.getAttribute(DATA_ATTRIBUTE);

            if (!selectedValue) {
                throw new Error(
                    "Cannot obtain selected value. Are you using <DropdownList /> right?"
                );
            }

            const selectedItem = findOptionByValue(selectedValue, options);

            if (!selectedItem) {
                throw new Error(
                    "Cannot obtain selected item. Are options provided?"
                );
            }

            setCurrentItem(selectedItem);
            onChange(selectedItem.value);
        } catch (error: any) {
            console.error(error?.message);
        } finally {
            closeList();
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeList);

        return () => document.removeEventListener("click", closeList);
    }, []);

    return (
        <div className={className}>
            <div className="dropdown-list-head">
                <DropdownListOption
                    iconId={iconId}
                    data={currentItem}
                    onClick={toggleList}
                />
            </div>
            <div className="dropdown-options-list" onClick={selectValue}>
                {options.map((option: IDropdownListOption) => (
                    <DropdownListOption
                        data={option}
                        key={option.value}
                        isSelected={option.value === value}
                    />
                ))}
            </div>
        </div>
    );
};

export default DropdownList;
