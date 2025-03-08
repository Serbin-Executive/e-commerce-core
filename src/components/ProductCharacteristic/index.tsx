import { type ReactElement } from "react";
import "./style.css";

export interface IProductCharacteristicProps {
    title: string;
    value: string | number;
}

const ProductCharacteristic = ({
    title,
    value,
}: IProductCharacteristicProps): ReactElement => (
    <div className="product-characteristic footnote-text">
        {title}
        <hr className="product-characteristic-line" />
        {value}
    </div>
);

export default ProductCharacteristic;
