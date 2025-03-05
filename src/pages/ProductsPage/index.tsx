import API_Emulated from "@services/API_Emulated";
import ProductsList from "@components/ProductsList";
import { type IProduct } from "@components/Product";
import { useState, type ReactElement } from "react";
import DropdownList from "@components/DropdownList";
import { DROPDOWN_INITIAL_VALUE, dropdownItemsList } from "@components/DropdownList/meta";

const ProductsPage = (): ReactElement => {
    const products: IProduct[] = API_Emulated.getProducts();

    const [selectedValue, setSelectedValue] = useState<string>(DROPDOWN_INITIAL_VALUE);

    return (
        <div className="products-page">
            <h1>Products Page</h1>
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
