import IconButton from "@components/IconButton";
import ProductsContext from "@context/ProductsContext";
import { useNavigate } from "react-router";
import { useContext, type ReactElement } from "react";
import { SpriteIconsIds } from "@utils/constants";
import { paths } from "@router/routes";
import "./style.css";

export interface IHeaderControlsProps {
    isProductsPageActive: boolean;
}

const HeaderControls = ({
    isProductsPageActive,
}: IHeaderControlsProps): ReactElement => {
    const navigate = useNavigate();

    const { isSearchModeEnabled, setIsSearchModeEnabled } =
        useContext(ProductsContext);

    const toggleSearchMode = (): void => {
        setIsSearchModeEnabled(!isSearchModeEnabled);
    };

    const goToCart = (): void => {
        navigate(paths.CART.path);
    };

    const goBack = () => {
        navigate(-1);
    };

    if (!isProductsPageActive) {
        return (
            <div className="header-controls">
                <IconButton
                    width="25px"
                    iconId={SpriteIconsIds.ARROW_LEFT}
                    onClick={goBack}
                />
            </div>
        );
    }

    return (
        <div className="header-controls">
            <IconButton
                width="25px"
                iconId={SpriteIconsIds.SEARCH}
                isActive={isSearchModeEnabled}
                onClick={toggleSearchMode}
            />
            <IconButton width="25px" iconId={SpriteIconsIds.CART} onClick={goToCart} />
        </div>
    );
};

export default HeaderControls;
