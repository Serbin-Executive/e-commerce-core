import ProductImage from "@components/ProductImage";
import type IProduct from "@domains/Product";
import { type ReactElement } from "react";
import { useNavigate } from "react-router";
import { paths } from "@router/routes";
import { CURRENCY } from "@utils/constants";
import "./style.css";

export interface IProductProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProductProps): ReactElement => {
    const navigate = useNavigate();

    const firstImageSrc: string = product.images[0].src;

    const goToProductPage = (): void => {
        navigate(`${paths.PRODUCTS.path}/${product.id}`);
    };

    const productPrice: string = `${product.price}${CURRENCY}`;

    return (
        <div className="product" onClick={goToProductPage}>
            <div className="product-image-container">
                <ProductImage src={firstImageSrc} name={product.name} />
            </div>
            <div className="product-info">
                <div className="product-name common-text" title={product.name}>
                    {product.name}
                </div>
                <div
                    className="product-price primary-text-passive"
                    title={productPrice}
                >
                    {productPrice}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
