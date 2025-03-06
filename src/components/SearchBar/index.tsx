import SpriteIcon from "@components/SpriteIcon";
import { type ChangeEvent, type ReactElement, useState } from "react";
import { SpriteIconsIds, SpriteIconsTypesSuffixes } from "@utils/constants";
import "./style.css";

export interface ISearchBarProps {
    initialValue: string;
    onChange: any;
}

const SearchBar = ({
    initialValue,
    onChange,
}: ISearchBarProps): ReactElement => {
    const [query, setQuery] = useState<string>(initialValue);

    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setQuery(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
                className="search-bar control-text"
                type="search"
                value={query}
                placeholder={"Поиск"}
                onChange={handleQueryChange}
            />

            <SpriteIcon
                iconId={`${SpriteIconsIds.SEARCH}${SpriteIconsTypesSuffixes.SECONDARY}`}
                width="16px"
            />
        </div>
    );
};

export default SearchBar;
