import ApplicationRouter from "@/router";
import DefaultLayout from "@/layouts/DefaultLayout";
import { BrowserRouter } from "react-router";
import { type ReactElement } from "react";
import "@domains/Theme/style.css";
import "./style.css";

const Application = (): ReactElement => {
    return (
        <div className="application">
            <BrowserRouter>
                <DefaultLayout>
                    <ApplicationRouter />
                </DefaultLayout>
            </BrowserRouter>
        </div>
    );
};

export default Application;
