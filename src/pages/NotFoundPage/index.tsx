import BackButton from "@/components/BackButton";
import { type ReactElement } from "react";

const NotFoundPage = (): ReactElement => {
    return (
        <div className="not-found-page">
            <h1>Not Found Page</h1>
            <BackButton />
        </div>
    );
};

export default NotFoundPage;
