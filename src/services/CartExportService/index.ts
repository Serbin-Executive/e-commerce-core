import Cart from "@domains/Cart";
import CartRecord from "@domains/CartRecord";
import * as XLSX from "xlsx";

interface IExportCartProduct {
    productId: string;
    productName: string;
    productPackage: string;
    productPackagePrice: number;
    packagesQuantity: number;
    totalPrice: number;
}

type TExportProductsList = IExportCartProduct[];

export const ExcelFileTitles = [
    "Product ID",
    "Name",
    "Package",
    "Quantity",
    "Price per item",
    "Total price",
];

export const EXCEL_FILE_NAME: string = "Your Cart.xlsx";
export const EXCEL_BOOK_NAME: string = "Your Cart";

export default class CartExportService {
    public static getExportProductsListByCart(cart: Cart): TExportProductsList {
        const cartRecordsList: CartRecord[] = Object.values(cart.getRecords());

        const exportProductsList: TExportProductsList = cartRecordsList.map((cartRecord) => {
            const exportProduct: IExportCartProduct = {
                productId: cartRecord.getProductId(),
                productName: cartRecord.getProductName(),
                productPackage: cartRecord.getProductPackage(),
                productPackagePrice: cartRecord.getProductPackagePrice(),
                packagesQuantity: cartRecord.getPackagesQuantity(),
                totalPrice: cartRecord.getTotalPrice(),
            };

            return exportProduct;
        });

        return exportProductsList;
    }

    public static addTotalCartValue(worksheet: XLSX.WorkSheet, exportProductsList: TExportProductsList) {
        const totalCartValue: number = exportProductsList.reduce((totalCartValue, exportProduct) => totalCartValue + Number(exportProduct.totalPrice), 0);

        const labelCellRow = exportProductsList.length + 1;
        const labelCellColumn = Object.keys(exportProductsList[0]).length - 2;

        const labelCellAddress: string = XLSX.utils.encode_cell({ c: labelCellColumn, r: labelCellRow });
        const valueCellAddress: string = XLSX.utils.encode_cell({ c: labelCellColumn + 1, r: labelCellRow });

        worksheet["!ref"] = `A1:${valueCellAddress}`;

        worksheet[labelCellAddress] = {
            v: "Total",
            t: 's',
        };
        worksheet[valueCellAddress] = {
            v: totalCartValue,
            t: 's',
        };
    }

    public static exportToXLSX(cart: Cart): void {
        const exportProductsList: TExportProductsList = this.getExportProductsListByCart(cart);

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(exportProductsList);

        XLSX.utils.sheet_add_aoa(worksheet, [ExcelFileTitles]);
        this.addTotalCartValue(worksheet, exportProductsList);

        XLSX.utils.book_append_sheet(workbook, worksheet, EXCEL_BOOK_NAME);

        XLSX.writeFile(workbook, EXCEL_FILE_NAME, { compression: true });

        alert("Cart export called, cart size: " + cart.getSize());
    }
}
