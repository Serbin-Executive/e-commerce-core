import { memo, type ReactElement } from "react";
import Product, { type IProduct } from "@components/Product";

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
            <h2>Products</h2>
            {products.map((product: IProduct) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
});

export default ProductsList;
