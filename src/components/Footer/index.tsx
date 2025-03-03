import { type ReactElement } from "react";
import "./style.css";
import Logo, { LogoTypes } from "@components/Logo";

const Footer = (): ReactElement => {
    return (
        <div className="footer-container">
            <Logo type={LogoTypes.PRIMARY} onClick={() => {}} />
            <div className="footer-text">
                Сочетает  в себе отличный ассортимент разнообразных сортов чая с
                чайной утварью и сопутствующими товарами на любой вкус.
            </div>
        </div>
    );
};

export default Footer;
