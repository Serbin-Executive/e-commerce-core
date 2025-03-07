import SearchBar from "@components/SearchBar";
import SelectsGroup from "@components/SelectsGroup";
import ProductsContext from "@context/ProductsContext";
import { useContext, type ReactElement } from "react";
import "./style.css";

const ProductsSearch = (): ReactElement => {
    const { isSearchModeEnabled } = useContext(ProductsContext);

    return (
        <div className="products-search">
            {!isSearchModeEnabled ? (
                <SelectsGroup />
            ) : (
                <SearchBar initialValue={""} onChange={undefined} />
            )}
        </div>
    );
};

export default ProductsSearch;
