import IProduct from "@domains/Product";
import API_Emulated from "@services/API_Emulated";

export const getProducts = (query: string): IProduct[] | undefined => {
    try {
        return API_Emulated.getProducts(query);
    } catch (error: any) {
        console.error(error?.message);
    }
};

export const getProductById = (productId: string): IProduct | undefined => {
    try {
        return API_Emulated.getProductById(productId);
    } catch (error: any) {
        console.error(error?.message);
    }
};
