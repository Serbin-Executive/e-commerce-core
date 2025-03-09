import { type ReactElement } from "react";
import DummyBlock from "@components/DummyBlock";

const NotFoundPage = (): ReactElement => {

    return (
        <div className="not-found-page">
            <DummyBlock message="Такой страницы не существует" />
        </div>
    );
};

export default NotFoundPage;
