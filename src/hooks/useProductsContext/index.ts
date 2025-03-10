import Cart from "@domains/Cart";
import IProduct from "@domains/Product";
import { type IProductsContext } from "@context/ProductsContext";
import { useState } from "react";

const useProductsContext = (): IProductsContext => {
    const [cart, setCart] = useState<Cart>(new Cart());
    
    const [productQuery, setProductQuery] = useState<string>("");
   
    const [isSearchModeEnabled, setIsSearchModeEnabled] =
        useState<boolean>(false);

    const [currentProduct, setCurrentProduct] = useState<
        IProduct | undefined
    >();

    return {
        cart,
        setCart,
        productQuery,
        setProductQuery,
        currentProduct,
        setCurrentProduct,
        isSearchModeEnabled,
        setIsSearchModeEnabled,
    };
};

export default useProductsContext;
