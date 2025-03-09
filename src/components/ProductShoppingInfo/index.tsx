import ControlButton from "@components/ControlButton";
import type IProduct from "@domains/Product";
import { paths } from "@router/routes";
import { ControlButtonTypes } from "@components/ControlButton";
import { Fragment, type ReactElement } from "react";
import { useNavigate } from "react-router";
import { CURRENCY, GRAM, PIECE_PACKAGE } from "@utils/constants";
import { OpenCartPageButtonTexts } from "./meta";
import "./style.css";

export interface IProductMainInfoProps {
    product: IProduct;
}

const ProductShoppingInfo = ({
    product,
}: IProductMainInfoProps): ReactElement => {
    const navigate = useNavigate();

    const isProductInCart: boolean = true; //get value through Cart context

    const openCartPageButtonText: string = !isProductInCart
        ? OpenCartPageButtonTexts.NOT_IN_CART
        : OpenCartPageButtonTexts.IN_CART;

    const fullPrice: string = `${product.price} ${CURRENCY}`;
    const priceWithWeight = !product.package
        ? `${fullPrice}/${PIECE_PACKAGE}`
        : `${fullPrice}/${product.package}${GRAM}`;

    const openCartPage = (): void => {
        navigate(paths.CART.path);
    };

    return (
        <Fragment>
            <h3>{product.name}</h3>
            <h5>{`Код товара ${product.id}`}</h5>
            <div className="product-cart-status">
                <div className="product-full-price primary-text-passive-big">
                    {priceWithWeight}
                </div>
                <ControlButton
                    type={ControlButtonTypes.OUTLINED}
                    title={openCartPageButtonText}
                    children={openCartPageButtonText}
                    onClick={openCartPage}
                />
            </div>
        </Fragment>
    );
};

export default ProductShoppingInfo;
