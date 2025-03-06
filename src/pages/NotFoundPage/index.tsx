import { useNavigate } from "react-router";
import { type ReactElement } from "react";
import { paths } from "@router/routes";

const NotFoundPage = (): ReactElement => {
    const navigate = useNavigate();

    const goHome = (): void => {
        navigate(paths.PRODUCTS.path);
    };

    return (
        <div className="not-found-page">
            <h1>Not Found Page</h1>
            <button onClick={goHome}>На домашнюю страницу</button>
        </div>
    );
};

export default NotFoundPage;
