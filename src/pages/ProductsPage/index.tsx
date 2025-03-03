import API_Emulated from "@services/API_Emulated";
import ProductsList from "@components/ProductsList";
import { type IProduct } from "@components/Product";
import { type ReactElement } from "react";

const ProductsPage = (): ReactElement => {
    const products: IProduct[] = API_Emulated.getProducts();
    
    return (
        <div className="products-page">
            <h1>Products Page</h1>
            <ProductsList products={products} />
        </div>
    );
};

export default ProductsPage;
