import NotFoundPage from "@pages/NotFoundPage";
import API_Emulated from "@services/API_Emulated";
import ProductShoppingInfo from "@components/ProductShoppingInfo";
import ProductStoryBlock from "@components/ProductStoryBlock";
import ProductImage from "@components/ProductImage";
import ProductCharacteristics from "@components/ProductCharacteristics";
import type IProduct from "@domains/Product";
import { useParams } from "react-router";
import { type ReactElement } from "react";
import "./style.css";

const ProductPage = (): ReactElement => {
    const { productId } = useParams();

    if (!productId) {
        return <NotFoundPage />;
    }

    const product: IProduct | undefined =
        API_Emulated.getProductById(productId);

    if (!product) {
        return <NotFoundPage />;
    }

    return (
        <div className="product-page">
            <div className="shopping-block">
                <div className="product-image-container">
                    <ProductImage
                        src={product.images[0].src}
                        name={product.name}
                    />
                </div>
                <div className="info">
                    <ProductShoppingInfo product={product} />
                    <ProductCharacteristics
                        characteristics={product.characteristics}
                    />
                    <ProductStoryBlock product={product} />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
