import SpriteIcon from "@components/SpriteIcon";
import { ChangeEvent, useState, type ReactElement } from "react";
import { SpriteIconIds, SpriteIconTypesSuffixes } from "@utils/constants";
import "./style.css";

export interface ISearchBarProps {
    initialValue: string;
    onChange: any;
}

const SearchBar = ({initialValue, onChange}: ISearchBarProps): ReactElement => {
    const [query, setQuery] = useState<string>(initialValue);

    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setQuery(event.target.value);
        onChange(event.target.value);
    }

    return(
        <div className="search-bar-container">
            <input className="search-bar" type="text" value={query} placeholder={"Поиск"} onChange={(event) => {handleQueryChange(event)}}/>

            <SpriteIcon iconId={`${SpriteIconIds.SEARCH}${SpriteIconTypesSuffixes.SECONDARY}`} width="16px"/>
        </div>
    )
}

export default SearchBar;