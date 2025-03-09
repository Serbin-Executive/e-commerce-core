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

// TODO add slider
const ProductImage = ({
    src,
    name,
    width,
}: IProductImageProps): ReactElement => {
    const currentObjectFitType: string = !width
        ? ObjectFitTypes.CONTAIN
        : ObjectFitTypes.NONE;
    const currentWidth: string = !width ? DEFAULT_PRODUCT_IMAGE_WIDTH : width;

    return (
        <div className="product-image-slider" style={{ width: currentWidth }}>
            <img
                src={src}
                alt={name}
                className={`product-image ${currentObjectFitType}`}
            />
        </div>
    );
};

export default ProductImage;
