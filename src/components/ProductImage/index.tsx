import { type ReactElement } from "react";
import "./style.css";

export interface IProductImageProps {
    src: string;
    name: string;
    width?: string;
}

export const enum ObjectFitTypes {
    CONTAIN = "contain",
    NONE = "none",
}

const DEFAULT_PRODUCT_IMAGE_WIDTH: string = "100%";

const ProductImage = ({
    src,
    name,
    width,
}: IProductImageProps): ReactElement => {
    const currentObjectFitType: string = !width
        ? ObjectFitTypes.NONE
        : ObjectFitTypes.CONTAIN;
    const currentWidth: string = !width ? DEFAULT_PRODUCT_IMAGE_WIDTH : width;

    return (
        <div className="product-image-container" style={{ width: width }}>
            <img
                src={src}
                alt={name}
                width={currentWidth}
                className={`product-image ${currentObjectFitType}`}
            />
        </div>
    );
};

export default ProductImage;
