import API_Emulated from "@services/API_Emulated";
import ProductsList from "@components/ProductsList";
import SearchBar from "@components/SearchBar";
import DropdownList from "@components/DropdownList";
import { type IProduct } from "@components/Product";
import { type ReactElement, useState } from "react";
import {
    DROPDOWN_INITIAL_VALUE,
    dropdownItemsList,
} from "@components/DropdownList/meta";

export const INITIAL_SEARCH_VALUE: string = "";

const ProductsPage = (): ReactElement => {
    const products: IProduct[] = API_Emulated.getProducts();

    const [searchValue, setSearchValue] =
        useState<string>(INITIAL_SEARCH_VALUE);
    const [selectedValue, setSelectedValue] = useState<string>(
        DROPDOWN_INITIAL_VALUE
    );

    return (
        <div className="products-page">
            <h1>Products Page</h1>
            <SearchBar
                initialValue={INITIAL_SEARCH_VALUE}
                onChange={setSearchValue}
            />
            <div className="dropdown-list-container">
                <DropdownList
                    initialValue={DROPDOWN_INITIAL_VALUE}
                    itemsList={dropdownItemsList}
                    onChange={setSelectedValue}
                />
            </div>
            <ProductsList products={products} />
        </div>
    );
};

export default ProductsPage;
