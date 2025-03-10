import type IProduct from "@domains/Product";
import ProductsList from "@components/ProductsList";
import ProductsContext from "@context/ProductsContext";
import { useContext, useMemo, type ReactElement } from "react";
import { getProducts } from "@api/index";
import "./style.css";

export const INITIAL_SEARCH_VALUE: string = "";

const ProductsPage = (): ReactElement => {
    const { productQuery } = useContext(ProductsContext);

    const products: IProduct[] | undefined = useMemo(() => {
        return getProducts(productQuery);
    }, [productQuery]);

    return (
        <div className="products-page">
            <ProductsList products={products} />
        </div>
    );
};

export default ProductsPage;
