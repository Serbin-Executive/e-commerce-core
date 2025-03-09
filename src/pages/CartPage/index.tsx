import Cart from "@domains/Cart";
import CartRecord from "@domains/CartRecord";
import type IProduct from "@domains/Product";
import API_Emulated from "@services/API_Emulated";
import { memo, useCallback, useMemo, type ReactElement } from "react";
import "./style.css";
import ControlButton, { ControlButtonTypes } from "@components/ControlButton";
import CartExportService from "@services/CartExportService";
export interface ITestCartTableRowProps {
    id: string | null;
    name: string | null;
    itemPackage: string | null;
    quantity: number | null;
    price: number | string | null;
    total: number;
}

const CartPage = (): ReactElement => {
    const products: IProduct[] = useMemo(API_Emulated.getProducts, []);

    const createTestCart = useCallback(() => {
        const cart: Cart = new Cart();

        products.forEach((product: IProduct) => {
            cart.addProduct(product);
        });

        return cart;
    }, [products]);

    const cart: Cart = useMemo(createTestCart, [createTestCart]);

    const cartContents: CartRecord[] = useMemo(() => {
        return cart.getRecords();
    }, [cart]);

    const getCartTotal = useCallback(() => {
        let total: number = 0;

        cartContents.forEach((currentRecord: CartRecord) => {
            total += currentRecord.getTotalPrice();
        });

        return total;
    }, [cart]);

    const total: number = useMemo(getCartTotal, [cartContents]);

    const TestCartTable = memo(() => {
        const printTableRow = ({
            id,
            name,
            itemPackage,
            quantity,
            price,
            total,
        }: ITestCartTableRowProps): ReactElement => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{itemPackage}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td>{total}</td>
                </tr>
            );
        };

        const printTotalRow = (value: number): ReactElement => {
            return (
                <tr>
                    <td>{null}</td>
                    <td>{null}</td>
                    <td>{null}</td>
                    <td>{null}</td>
                    <td>Итого:</td>
                    <td>{value}</td>
                </tr>
            );
        };

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Package</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartContents.map((record: CartRecord) =>
                        printTableRow({
                            id: record.getProductId(),
                            name: record.getProductName(),
                            itemPackage: record.getProductPackage(),
                            quantity: record.getPackagesQuantity(),
                            price: record.getTotalPrice(),
                            total: record.getTotalPrice(),
                        })
                    )}
                    {printTotalRow(total)}
                </tbody>
            </table>
        );
    });

    const exportCart = (): void => {
        CartExportService.exportToXLSX(cart);
    };

    return (
        <div className="cart-page">
            <h1>Cart Page</h1>
            <div className="cart-contents">
                <TestCartTable />
            </div>
            <div className="export-block">
                <ControlButton
                    type={ControlButtonTypes.PRIMARY}
                    onClick={exportCart}
                >
                    Экспорт
                </ControlButton>
            </div>
        </div>
    );
};

export default CartPage;
