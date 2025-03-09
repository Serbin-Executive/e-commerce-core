import IProduct from "@domains/Product";

export const DEFAULT_QUANTITY: number = 1;
export const DEFAULT_PACKAGE: string = "1 штука";
export const GRAMS_PACKAGE_SUFFIX: string = " грамм";

export default class CartRecord {
    private productId: string;
    private productName: string;
    private productPackage: string; // grams or undefined (item);
    private productPackagePrice: number;
    private packagesQuantity: number;
    private totalPrice: number;

    constructor(product: IProduct) {
        this.productId = product.id;
        this.productName = product.name;
        this.productPackagePrice = product.price;
        this.packagesQuantity = DEFAULT_QUANTITY;
        this.totalPrice = product.price * DEFAULT_QUANTITY;

        this.productPackage = !product?.package
            ? DEFAULT_PACKAGE
            : `${product.package}${GRAMS_PACKAGE_SUFFIX}`;
    }

    public getProductId(): string {
        return this.productId;
    }

    public getProductName(): string {
        return this.productName;
    }

    public getProductPackage(): string {
        return this.productPackage;
    }

    public getProductPackagePrice(): number {
        return this.productPackagePrice;
    }

    public getPackagesQuantity(): number {
        return this.packagesQuantity;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setPackagesQuantity(quantity: number): void {
        if (quantity < DEFAULT_QUANTITY) {
            throw new Error(`Quantity must be ${DEFAULT_QUANTITY} or above`);
        }

        this.packagesQuantity = quantity;
        this.totalPrice = quantity * this.productPackagePrice;
    }
}
