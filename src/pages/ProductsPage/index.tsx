import API_Emulated from "@services/API_Emulated";
import ProductsList from "@components/ProductsList";
import { type IProduct } from "@components/Product";
import { type ReactElement } from "react";
import Logo, { LogoTypes } from "@components/Logo";

const ProductsPage = (): ReactElement => {
    const products: IProduct[] = API_Emulated.getProducts();
    
    return (
        <div className="products-page">
            <h1>Products Page</h1>
            <Logo type={LogoTypes.PRIMARY} onClick={() => {}} width="200px" height="200px" />
            <ProductsList products={products} />
        </div>
    );
};

export default ProductsPage;
