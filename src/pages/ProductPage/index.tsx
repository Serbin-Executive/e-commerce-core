import BackButton from "@/components/BackButton";
import API_Emulated from "@/services/API_Emulated";
import { Navigate, useNavigate, useParams } from "react-router";
import { type IProduct } from "@/components/Product";
import { type ReactElement } from "react";
import { paths } from "@/router/routes";

const ProductPage = (): ReactElement => {
    const { productId } = useParams();
    const navigate = useNavigate();

    if (!productId) {
        return <Navigate to={"*"} />
    }

    const product: IProduct | undefined =
        API_Emulated.getProductById(productId);

    if (!product) {
        return <Navigate to={"*"} />
    }

    const readMoreAboutProduct = (): void => {
        navigate(`${paths.PRODUCTS.path}/${productId}/story`); // TODO constructor
    };

    return (
        <div className="product-page">
            <BackButton />
            <h1>Product Page</h1>
            <h2>Product {product.name}</h2>
            <h2>
                Product {product.story}
                <button onClick={readMoreAboutProduct}>READ MORE</button>
            </h2>
        </div>
    );
};

export default ProductPage;
