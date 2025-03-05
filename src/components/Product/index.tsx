import ProductImage from "@components/ProductImage";
import { type ReactElement } from "react";
import { useNavigate } from "react-router";
import { paths } from "@router/routes";
import "./style.css";

export interface IProductImageData {
    src: string;
}

export interface IProductCharacteristicsData {
    [characteristic: string]: string | number;
}

export interface IProduct {
    id: string;
    name: string;
    price: number;
    package: number | undefined;
    story: string;
    images: IProductImageData[];
    characteristics: IProductCharacteristicsData[];
}

export interface IProductProps {
    product: IProduct;
}

const Product = ({ product }: IProductProps): ReactElement => {
    const navigate = useNavigate();

    const firstImageSrc: string = product.images[0].src;

    const goToProductPage = (): void => {
        navigate(`${paths.PRODUCTS.path}/${product.id}`);
    };

    return (
        <div className="product" onClick={goToProductPage}>
            <h3>Product</h3>
            <h2>{product.name}</h2>
            <ProductImage
                src={firstImageSrc}
                name={product.name}
                width="200px"
            />
        </div>
    );
};

export default Product;
