import BackButton from "@components/BackButton";
import CartButton from "@components/CartButton";
import { useLocation } from "react-router";
import { type ReactElement } from "react";
import { paths } from "@router/routes";

const HeaderControls = (): ReactElement => {
    const location = useLocation();
    const isProductsPageActive: boolean =
        location.pathname === paths.PRODUCTS.path;

    if (!isProductsPageActive) {
        return (
            <div className="header-controls">
                <BackButton />
            </div>
        );
    }

    return (
        <div className="header-controls">
            <CartButton />
        </div>
    );
};

export default HeaderControls;
