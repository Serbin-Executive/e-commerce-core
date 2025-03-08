import type IProduct from "@domains/Product";
import API_Emulated from "@services/API_Emulated";
import ProductsList from "@components/ProductsList";
import { type ReactElement } from "react";

export const INITIAL_SEARCH_VALUE: string = "";

const ProductsPage = (): ReactElement => {
    const products: IProduct[] = API_Emulated.getProducts();

    return (
        <div className="products-page">
            <ProductsList products={products} />
        </div>
    );
};

export default ProductsPage;
