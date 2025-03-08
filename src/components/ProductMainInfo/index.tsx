import ProductAddCartField from "@components/ProductAddCartField";
import ProductCharacteristic from "@components/ProductCharacteristic";
import ProductImage from "@components/ProductImage";
import { paths } from "@router/routes";
import { type ReactElement } from "react";
import { useNavigate } from "react-router";
import { IProductCharacteristicsData } from "@domains/Product";
import { CURRENCY } from "@utils/constants";
import "./style.css";

export interface IProductMainInfoProps {
    name: string;
    imageSrc: string;
    price: number;
    characteristics: IProductCharacteristicsData[];
}

const CHARACTERISTIC_WEIGHT_KEY: string = "weight";

const ProductMainInfo = ({
    name,
    imageSrc,
    price,
    characteristics,
}: IProductMainInfoProps): ReactElement => {
    const navigate = useNavigate();

    const characteristicsData = characteristics[0];
    const characteristicsKeysList = Object.keys(characteristicsData);
    const fullPrice: string = `${price} ${CURRENCY}`;
    const priceWithWeight = `${fullPrice}/${characteristicsData[CHARACTERISTIC_WEIGHT_KEY]}`;

    const openCartPage = (): void => {
        navigate(paths.CART.path);
    };

    return (
        <div className="product-main-info">
            <div className="product-main-info-image-container">
                <ProductImage src={imageSrc} name={name} />
            </div>
            <div className="product-main-info-text">
                <h1>{name}</h1>
                <ProductAddCartField
                    fullPrice={priceWithWeight}
                    addCard={openCartPage}
                />
                <div className="product-main-info-characteristics-container">
                    {characteristicsKeysList.map((key) => (
                        <ProductCharacteristic
                            key={key}
                            title={key}
                            value={characteristicsData[key]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductMainInfo;
