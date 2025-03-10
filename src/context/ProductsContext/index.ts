import Cart from "@domains/Cart";
import IProduct from "@domains/Product";
import { createContext, type Dispatch, type SetStateAction } from "react";

export interface IProductsContext {
    cart: Cart;
    productQuery: string;
    isSearchModeEnabled: boolean;
    currentProduct: IProduct | undefined;
    setCart: Dispatch<SetStateAction<Cart>>;
    setProductQuery: Dispatch<SetStateAction<string>>;
    setIsSearchModeEnabled: Dispatch<SetStateAction<boolean>>;
    setCurrentProduct: Dispatch<SetStateAction<IProduct | undefined>>;
}

const ProductsContext = createContext({} as IProductsContext);

export default ProductsContext;
