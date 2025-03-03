import Logo, { LogoTypes } from "@components/Logo";
import HeaderControls from "@components/HeaderControls";
import { useNavigate } from "react-router";
import { type ReactElement } from "react";
import { paths } from "@router/routes";
import "./style.css";

const Header = (): ReactElement => {
    const navigate = useNavigate();

    const goToProducts = (): void => {
        navigate(paths.PRODUCTS.path);
    };

    return (
        <header className="application-header">
            <div className="header-content-wrapper">
                <Logo type={LogoTypes.PRIMARY} onClick={goToProducts} />
                <HeaderControls />
            </div>
        </header>
    );
};

export default Header;
