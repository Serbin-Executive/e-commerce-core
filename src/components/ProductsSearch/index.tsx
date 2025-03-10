import SearchBar from "@components/SearchBar";
import SelectsGroup from "@components/SelectsGroup";
import ProductsContext from "@context/ProductsContext";
import { useContext, type ReactElement } from "react";
import "./style.css";

const ProductsSearch = (): ReactElement => {
    const { productQuery, setProductQuery, isSearchModeEnabled } =
        useContext(ProductsContext);

    if (!isSearchModeEnabled) {
        return (
            <div className="products-search">
                <SelectsGroup />
            </div>
        );
    }

    const updateSearchQuery = (newValue: string): void => {
        setProductQuery(newValue.toLowerCase());
    };

    return (
        <div className="products-search">
            <SearchBar
                initialValue={productQuery}
                onChange={updateSearchQuery}
            />
        </div>
    );
};

export default ProductsSearch;
