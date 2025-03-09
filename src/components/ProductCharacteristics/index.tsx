import { type ReactElement } from "react";
import { type IProductCharacteristicsData } from "@domains/Product";
import "./style.css";

export interface IProductCharacteristicsProps {
    characteristics: IProductCharacteristicsData[];
}

const ProductCharacteristics = ({
    characteristics,
}: IProductCharacteristicsProps): ReactElement => {
    const characteristicsData = characteristics[0];
    const characteristicsKeysList = Object.keys(characteristicsData);

    return (
        <div className="product-characteristics-list">
            {characteristicsKeysList.map((key) => (
                <div key={key} className="product-characteristic footnote-text">
                    {key}
                    <hr className="bottom-line" />
                    {characteristicsData[key]}
                </div>
            ))}
        </div>
    );
};

export default ProductCharacteristics;
