import ApplicationRouter from "@/router";
import { ReactElement } from "react";
import "./styles.css";

const Application = (): ReactElement => {
    return (
        <div className="application">
            <ApplicationRouter />
        </div>
    );
};

export default Application;
