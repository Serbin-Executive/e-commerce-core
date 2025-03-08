import ControlButton from "@components/ControlButton";
import { type ReactElement } from "react";
import { ControlButtonTypes } from "@components/ControlButton";
import "./style.css";

export interface IProductAddCartFieldProps {
    fullPrice: string;
    addCard: () => void;
}

const IN_BASKET_BUTTON_TEXT: string = "В КОРЗИНЕ";

const ProductAddCartField = ({
    fullPrice,
    addCard,
}: IProductAddCartFieldProps): ReactElement => (
    <div className="product-add-cart-field">
        <div className="product-add-cart-field-price primary-text-passive-big">
            {fullPrice}
        </div>

        <ControlButton
            type={ControlButtonTypes.OUTLINED}
            text={IN_BASKET_BUTTON_TEXT}
            onClick={addCard}
        />
    </div>
);

export default ProductAddCartField;
