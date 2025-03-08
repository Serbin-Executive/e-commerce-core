import NotFoundPage from "@pages/NotFoundPage";
import API_Emulated from "@services/API_Emulated";
import { IProduct } from "@components/ProductCard";
import { useParams } from "react-router";
import { type ReactElement } from "react";

const ProductStoryPage = (): ReactElement => {
    const { productId } = useParams();

    if (!productId) {
        return <NotFoundPage />
    }

    const product: IProduct | undefined =
        API_Emulated.getProductById(productId);

    if (!product) {
        return <NotFoundPage />
    }

    return (
        <div className="product-story-page">
            <h1>Product Story Page</h1>
            <h2>{product.story}</h2>
        </div>
    );
};

export default ProductStoryPage;
