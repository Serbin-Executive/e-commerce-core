import type IProduct from "@domains/Product";
import NotFoundPage from "@pages/NotFoundPage";
import API_Emulated from "@services/API_Emulated";
import { useNavigate, useParams } from "react-router";
import { type ReactElement } from "react";
import { paths } from "@router/routes";

const ProductPage = (): ReactElement => {
    const { productId } = useParams();
    const navigate = useNavigate();

    if (!productId) {
        return <NotFoundPage />
    }

    const product: IProduct | undefined =
        API_Emulated.getProductById(productId);

    if (!product) {
        return <NotFoundPage />
    }

    const readMoreAboutProduct = (): void => {
        navigate(`${paths.PRODUCTS.path}/${productId}/story`); // TODO constructor
    };

    return (
        <div className="product-page">
            <h1>Product Page</h1>
            <h2>Product {product.name}</h2>
            <h2>
                Product {product.story}
                <button onClick={readMoreAboutProduct}>READ MORE</button>
            </h2>
        </div>
    );
};

export default ProductPage;
