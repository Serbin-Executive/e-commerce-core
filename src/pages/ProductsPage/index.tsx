import API_Emulated from "@services/API_Emulated";
import ProductsList from "@components/ProductsList";
import SearchBar from "@components/SearchBar";
import { type IProduct } from "@components/Product";
import { useState, type ReactElement } from "react";

export const INITIAL_SEARCH_VALUE: string = "";

const ProductsPage = (): ReactElement => {
    const products: IProduct[] = API_Emulated.getProducts();

    const [searchValue, setSearchValue] = useState<string>(INITIAL_SEARCH_VALUE);
    
    return (
        <div className="products-page">
            <h1>Products Page</h1>
            <SearchBar initialValue={INITIAL_SEARCH_VALUE} onChange={setSearchValue} />
            <ProductsList products={products} />
        </div>
    );
};

export default ProductsPage;
