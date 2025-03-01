import ApplicationRouter from "@/router";
import DefaultLayout from "@/layouts/DefaultLayout";
import { ReactElement } from "react";
import "./style.css";

const Application = (): ReactElement => {
    return (
        <div className="application">
            <DefaultLayout>
                <ApplicationRouter />
            </DefaultLayout>
        </div>
    );
};

export default Application;
