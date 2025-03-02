import BackButton from "@/components/BackButton";
import { type ReactElement } from "react";

const CartPage = (): ReactElement => {
    return (
        <div className="cart-page">
            <h1>Cart Page</h1>
            <BackButton />
        </div>
    );
};

export default CartPage;
