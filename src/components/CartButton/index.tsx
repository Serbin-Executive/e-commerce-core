import { useLocation, useNavigate } from "react-router";
import { paths } from "@/router/routes";
import { type ReactNode } from "react";

const CartButton = (): ReactNode => {
    const navigate = useNavigate();
    const location = useLocation();

    const goToCart = () => {
        navigate(paths.CART.path);
    };

    if (location.pathname === paths.CART.path) {
        return null;
    }

    return <button onClick={goToCart}>CART</button>;
};

export default CartButton;
