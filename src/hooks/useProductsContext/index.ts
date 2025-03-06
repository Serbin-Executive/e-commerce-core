import { type IProductsContext } from "@context/ProductsContext";
import { useState } from "react";

const useProductsContext = (): IProductsContext => {
    const [isSearchModeEnabled, setIsSearchModeEnabled] =
        useState<boolean>(false);

    return {
        isSearchModeEnabled,
        setIsSearchModeEnabled,
    };
};

export default useProductsContext;
