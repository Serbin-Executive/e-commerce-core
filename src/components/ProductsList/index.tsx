import ProductCard from "@components/ProductCard";
import type IProduct from "@domains/Product";
import { memo, type ReactElement } from "react";
import "./style.css";
import DummyBlock from "@components/DummyBlock";

export interface IProductsListProps {
    products: IProduct[] | undefined;
}

const ProductsList = memo(({ products }: IProductsListProps): ReactElement => {
    if (!products?.length) {
        return (
            <DummyBlock message="По данному запросу ничего не найдено" />
        );
    }

    return (
        <div className="products-list">
            {products.map((product: IProduct) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
});

export default ProductsList;
