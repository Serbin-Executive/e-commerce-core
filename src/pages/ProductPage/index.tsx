import NotFoundPage from "@pages/NotFoundPage";
import API_Emulated from "@services/API_Emulated";
import ProductMainInfo from "@components/ProductMainInfo";
import ProductAdditionalInfo from "@components/ProductAddtionalInfo";
import type IProduct from "@domains/Product";
import { useNavigate, useParams } from "react-router";
import { type ReactElement } from "react";
import { paths } from "@router/routes";
import "./style.css";

const ProductPage = (): ReactElement => {
    const { productId } = useParams();
    const navigate = useNavigate();

    if (!productId) {
        return <NotFoundPage />;
    }

    const product: IProduct | undefined =
        API_Emulated.getProductById(productId);

    if (!product) {
        return <NotFoundPage />;
    }

    const { images, price, name, story, characteristics } = product;
    const firstImageSrc = images[0].src;

    const readMoreAboutProduct = (): void => {
        navigate(`${paths.PRODUCTS.path}/${productId}/story`); // TODO constructor
    };

    return (
        <div className="product-page">
            <ProductMainInfo
                name={name}
                imageSrc={firstImageSrc}
                price={price}
                characteristics={characteristics}
            />
            <ProductAdditionalInfo
                story={story}
                readMoreAboutProduct={readMoreAboutProduct}
            />
        </div>
    );
};

export default ProductPage;
