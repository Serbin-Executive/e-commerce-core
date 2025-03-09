import type IProduct from "@domains/Product";
import { type ReactElement } from "react";
import { useNavigate } from "react-router";
import { paths } from "@router/routes";
import "./style.css";

export interface IProductSotryBlock {
    product: IProduct;
}

const READ_MORE_BUTTON_TEXT: string = "READ MORE";

const ProductStoryBlock = ({ product }: IProductSotryBlock): ReactElement => {
    const navigate = useNavigate();

    const readMoreAboutProduct = (): void => {
        navigate(`${paths.PRODUCTS.path}/${product.id}/story`); // TODO constructor
    };

    return (
        <div className="product-story-block">
            <div className="product-story additional-info-text">
                {product.story}
            </div>
            <div className="more-story-button-container">
                <button
                    className="more-story-button control-text-passive"
                    onClick={readMoreAboutProduct}
                >
                    {READ_MORE_BUTTON_TEXT}
                </button>
            </div>
        </div>
    );
};

export default ProductStoryBlock;
