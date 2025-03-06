import { createContext, type Dispatch, type SetStateAction } from "react";

export interface IProductsContext {
    isSearchModeEnabled: boolean;
    setIsSearchModeEnabled: Dispatch<SetStateAction<boolean>>;
}

const ProductsContext = createContext({} as IProductsContext);

export default ProductsContext;
