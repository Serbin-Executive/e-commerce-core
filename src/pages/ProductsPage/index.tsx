import API_Emulated from "@services/API_Emulated";
import ProductsList from "@components/ProductsList";
import { type IProduct } from "@components/Product";
import { useState, type ReactElement } from "react";
import DropdownList, { IDropdownItem } from "@components/DropdownList";
import { INITIAL_ITEM, itemsList } from "@components/DropdownList/meta";

const ProductsPage = (): ReactElement => {
    const products: IProduct[] = API_Emulated.getProducts();

    const [selectedItem, setSelectedItem] = useState<IDropdownItem>(INITIAL_ITEM);
    
    return (
        <div className="products-page">
            <h1>Products Page</h1>
            <DropdownList initialItem={INITIAL_ITEM} itemsList={itemsList} onChange={setSelectedItem}/>
            <ProductsList products={products} />
        </div>
    );
};

export default ProductsPage;
