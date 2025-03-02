import BackButton from "@/components/BackButton";
import API_Emulated from "@/services/API_Emulated";
import { Navigate, useParams } from "react-router";
import { IProduct } from "@/components/Product";
import { type ReactElement } from "react";

const ProductStoryPage = (): ReactElement => {
    const { productId } = useParams();

    if (!productId) {
        return <Navigate to={"*"} />
    }

    const product: IProduct | undefined =
        API_Emulated.getProductById(productId);

    if (!product) {
        return <Navigate to={"*"} />
    }

    return (
        <div className="product-story-page">
            <BackButton />
            <h1>Product Story Page</h1>
            <h2>{product.story}</h2>
        </div>
    );
};

export default ProductStoryPage;
