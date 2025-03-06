import ApplicationRouter from "@router/index";
import DefaultLayout from "@layouts/DefaultLayout";
import ProductsContext from "@context/ProductsContext";
import useProductsContext from "@hooks/useProductsContext";
import { BrowserRouter as RouterProvider } from "react-router";
import { type ReactElement } from "react";
import "@domains/Theme/style.css";

const Application = (): ReactElement => {
    return (
        <div className="application">
            <RouterProvider>
                <ProductsContext.Provider value={useProductsContext()}>
                    <DefaultLayout>
                        <ApplicationRouter />
                    </DefaultLayout>
                </ProductsContext.Provider>
            </RouterProvider>
        </div>
    );
};

export default Application;
