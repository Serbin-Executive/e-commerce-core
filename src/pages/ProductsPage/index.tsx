import IconButton from "@/components/IconButton";
import { IconButtonsIds } from "@/utils/constants";
import { type ReactElement } from "react";

const ProductsPage = (): ReactElement => {
    return (
        <div className="products-page">
            <h1>Products Page</h1>
            <IconButton iconId={IconButtonsIds.CART} isActive={false} onClick={() => {console.log("Icon clicked!")}}/>
        </div>
    );
};

export default ProductsPage;
