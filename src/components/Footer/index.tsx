import Logo from "@components/Logo";
import { type ReactElement } from "react";
import { LogoTypes } from "@components/Logo";
import { useNavigate } from "react-router";
import { paths } from "@router/routes";
import "./style.css";

const Footer = (): ReactElement => {
    const navigate = useNavigate();

    const goToProducts = (): void => {
        navigate(paths.PRODUCTS.path);
    };

    return (
        <footer className="footer-container">
            <div className="footer-logo-container">
                <Logo type={LogoTypes.PRIMARY} onClick={goToProducts} />
            </div>
            <div className="footer-text common-text-small">
                Сочетает  в себе отличный ассортимент разнообразных сортов чая с
                чайной утварью и сопутствующими товарами на любой вкус.
            </div>
        </footer>
    );
};

export default Footer;
