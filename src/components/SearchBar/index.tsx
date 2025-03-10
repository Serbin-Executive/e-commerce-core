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
                value={query}
                type="search"
                placeholder="Поиск"
                onChange={handleQueryChange}
                className="search-bar control-text"
            />

            <SpriteIcon
                width="16px"
                iconId={`${SpriteIconsIds.SEARCH}${SpriteIconsTypesSuffixes.SECONDARY}`}
            />
        </div>
    );
};

export default SearchBar;
