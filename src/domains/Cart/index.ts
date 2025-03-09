import IProduct from "@domains/Product";
import CartRecord from "@domains/CartRecord";

export default class Cart {
    private records: Map<string, CartRecord>;

    constructor() {
        this.records = new Map();
    }

    public getSize(): number {
        return this.records.size;
    }

    public clear(): void {
        this.records = new Map();
    }

    public getRecords(): CartRecord[] {
        return Array.from(this.records.values());
    }

    public addProduct(product: IProduct): void {
        this.records.set(product.id, new CartRecord(product));
    }

    public removeProductById(productId: string): void {
        this.records.delete(productId);
    }

    public updateProductRecordById(
        productId: string,
        productRecord: CartRecord
    ): void {
        this.records.set(productId, productRecord);
    }

    public getProductRecordById(productId: string): CartRecord {
        const product: CartRecord | undefined = this.records.get(productId);

        if (!product) {
            throw new Error("Cannot acquire product from Cart object");
        }

        return product;
    }

    public increaseProductQuantityById(productId: string): void {
        const productRecord: CartRecord = this.getProductRecordById(productId);

        productRecord.setPackagesQuantity(
            productRecord.getPackagesQuantity() + 1
        );

        this.updateProductRecordById(productId, productRecord);
    }

    public decreaseProductQuantityById(productId: string): void {
        const productRecord: CartRecord = this.getProductRecordById(productId);

        productRecord.setPackagesQuantity(
            productRecord.getPackagesQuantity() - 1
        );

        this.updateProductRecordById(productId, productRecord);
    }
}
