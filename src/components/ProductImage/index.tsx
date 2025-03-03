import { type ReactElement } from "react";
import "./style.css";

export interface IProductImageProps {
    imageSrc: string;
    altText: string;
    width?: string;
}

export const enum ObjectFitTypes {
    CONTAIN = "contain",
    SQUARE = "square",
}

const DEFAULT_PRODUCT_IMAGE_WIDTH: string = "100%";
const PRODUCTS_IMAGES_URL: string = "src/assets/";

const ProductImage = ({
    imageSrc,
    altText,
    width,
}: IProductImageProps): ReactElement => {
    const currentObjectFitType: string = !width
        ? ObjectFitTypes.SQUARE
        : ObjectFitTypes.CONTAIN;
    const currentWidth: string = !width ? DEFAULT_PRODUCT_IMAGE_WIDTH : width;

    const currentImageSrc: string = `${PRODUCTS_IMAGES_URL}${imageSrc}`;

    return (
        <img
            src={currentImageSrc}
            alt={altText}
            width={currentWidth}
            className={`product-image ${currentObjectFitType}`}
        />
    );
};

export default ProductImage;
