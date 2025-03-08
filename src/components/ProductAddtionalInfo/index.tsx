import { type ReactElement } from "react";
import "./style.css";

export interface IProductAdditionalInfoProps {
    story: string;
    readMoreAboutProduct: () => void;
}

const READ_MORE_BUTTON_TEXT: string = "READ MORE";

const ProductAdditionalInfo = ({
    story,
    readMoreAboutProduct,
}: IProductAdditionalInfoProps): ReactElement => {
    return (
        <div className="product-additional-info">
            <div className="product-additional-info-text additional-info-text">
                {story}
            </div>
            <div className="product-additional-info-more-button-container">
                <button
                    className="product-additional-info-more-button control-text-passive"
                    onClick={readMoreAboutProduct}
                >
                    {READ_MORE_BUTTON_TEXT}
                </button>
            </div>
        </div>
    );
};

export default ProductAdditionalInfo;
