import type IProduct from "@domains/Product";
import NotFoundPage from "@pages/NotFoundPage";
import ProductImage from "@components/ProductImage";
import ProductsContext from "@context/ProductsContext";
import ProductStoryBlock from "@components/ProductStoryBlock";
import ProductShoppingInfo from "@components/ProductShoppingInfo";
import ProductCharacteristics from "@components/ProductCharacteristics";
import { useContext, type ReactElement } from "react";
import { getProductById } from "@api/index";
import { useParams } from "react-router";
import "./style.css";

const ProductPage = (): ReactElement => { 
    let product: IProduct | undefined;
    const { productId } = useParams();
    const { currentProduct } = useContext(ProductsContext);

    if (!productId) {
        return <NotFoundPage />;
    }

    if (currentProduct?.id !== productId) {
        product = getProductById(productId);
    }

    if (!product) {
        return <NotFoundPage />;
    }

    return (
        <div className="product-page">
            <div className="shopping-block">
                <div className="product-image-container">
                    <ProductImage
                        src={product.images[0].src} // TODO gallery
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
