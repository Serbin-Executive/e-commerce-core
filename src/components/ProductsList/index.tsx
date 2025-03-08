import type IProduct from "@domains/Product";
import Product from "@components/ProductCard";
import { memo, type ReactElement } from "react";
import "./style.css";

export interface IProductsListProps {
    products: IProduct[];
}

const ProductsList = memo(({ products }: IProductsListProps): ReactElement => {
    if (!products?.length) {
        return (
            <div className="dummy-content">
                <h2>No products</h2>
            </div>
        );
    }

    return (
        <div className="products-list">
            {products.map((product: IProduct) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
});

export default ProductsList;
