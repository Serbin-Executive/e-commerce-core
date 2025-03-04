import { type ReactElement } from "react";
import Logo, { LogoTypes } from "@components/Logo";
import "./style.css";

const Footer = (): ReactElement => {
    return (
        <div className="footer-container">
            <div className="footer-logo-container">
                <Logo type={LogoTypes.PRIMARY} onClick={() => {}} />
            </div>
            <div className="footer-text">
                Сочетает  в себе отличный ассортимент разнообразных сортов чая с
                чайной утварью и сопутствующими товарами на любой вкус.
            </div>
        </div>
    );
};

export default Footer;
