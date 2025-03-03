import CartPage from "@pages/CartPage";
import ProductPage from "@pages/ProductPage";
import ProductsPage from "@pages/ProductsPage";
import NotFoundPage from "@pages/NotFoundPage";
import ProductStoryPage from "@pages/ProductStoryPage";
import { Navigate, type RouteObject } from "react-router";

export interface IRouterPath {
    id: string;
    path: string;
    label?: string;
}

export const paths = {
    HOME: {
        id: "home",
        path: "/",
    },
    CART: {
        id: "cart",
        path: "/cart",
    },
    PRODUCTS: {
        id: "products",
        path: "/products",
    },
    PRODUCT: {
        id: "product",
        path: "/products/:productId",
    },
    PRODUCT_STORY: {
        id: "product-story",
        path: "/products/:productId/story",
    },
    NOT_FOUND: {
        id: "notFound",
        path: "*",
    },
};

const routes: RouteObject[] = [
    {
        ...paths.HOME,
        element: <Navigate to={paths.PRODUCTS.path} />,
    },
    {
        ...paths.CART,
        element: <CartPage />,
    },
    {
        ...paths.PRODUCTS,
        element: <ProductsPage />,
    },
    {
        ...paths.PRODUCT,
        element: <ProductPage />,
    },
    {
        ...paths.PRODUCT_STORY,
        element: <ProductStoryPage />,
    },
    {
        ...paths.NOT_FOUND,
        element: <NotFoundPage />,
    },
];

export default routes;
