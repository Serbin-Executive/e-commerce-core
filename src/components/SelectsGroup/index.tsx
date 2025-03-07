import DropdownList from "@components/DropdownList";
import { type IDropdownListOption } from "@components/DropdownListOption";
import { useState, type ReactElement } from "react";
import "./style.css";

export const dropdownItemsList: IDropdownListOption[] = [
    {
        value: "ганджубасик сушеный (10 грамм)",
        label: "Ганджубасик Сушеный (10 грамм)",
    },
    {
        value: "ганджубасик отборный (30 грамм)",
        label: "Ганджубасик Отборный (30 грамм)",
    },
    {
        value: "шайбы лесные, со вкусом лося (150 грамм)",
        label: "Шайбы лесные, со вкусом лося (150 грамм)",
    },
    {
        value: "чай (правда) (30 грамм)",
        label: "Чай (Правда) (30 грамм)",
    },
];

const SelectsGroup = (): ReactElement => {
    const [value1, setValue1] = useState<string>("");
    const [value2, setValue2] = useState<string>("");

    return (
        <div className="selects-group">
            <DropdownList
                value={value1}
                options={dropdownItemsList}
                onChange={setValue1}
            />
            <DropdownList
                value={value2}
                options={dropdownItemsList}
                onChange={setValue2}
            />
        </div>
    );
};

export default SelectsGroup;
