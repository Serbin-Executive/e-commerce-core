import Logo, { LogoTypes } from "@components/Logo";
import HeaderControls from "@components/HeaderControls";
import ProductsSearch from "@components/ProductsSearch";
import { useLocation, useNavigate } from "react-router";
import { type ReactElement } from "react";
import { paths } from "@router/routes";
import "./style.css";

const Header = (): ReactElement => {
    const location = useLocation();
    const navigate = useNavigate();

    const goToProducts = (): void => {
        navigate(paths.PRODUCTS.path);
    };

    const isProductsPageActive: boolean =
        location.pathname === paths.PRODUCTS.path;

    return (
        <header className="application-header">
            <div className="header-content-wrapper">
                <Logo type={LogoTypes.PASSIVE} onClick={goToProducts} />
                {isProductsPageActive && <ProductsSearch />}
                <HeaderControls isProductsPageActive={isProductsPageActive} />
            </div>
        </header>
    );
};

export default Header;
