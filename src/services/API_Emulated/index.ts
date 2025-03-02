import products from "@/data/products.json";
import { IProduct } from "@/components/Product";

const productsList: IProduct[] = products as unknown as IProduct[];

export default class API_Emulated {
    public static getProducts(query?: string): IProduct[] {
        if (!query) {
            return productsList;
        }

        return productsList.filter(
            (product: IProduct) => product.name === query
        );
    }

    public static getProductById(productId: string): IProduct | undefined {
        return productsList.find(
            (product: IProduct) => product.id === productId
        );
    }
}
