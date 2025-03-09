import Cart from "@domains/Cart";

export default class CartExportService {
    public static exportToXLSX(cart: Cart): void {
        alert("Cart export called, cart size: " + cart.getSize());
    }
}