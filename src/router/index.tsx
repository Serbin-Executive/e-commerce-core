import routes from "./routes";
import { BrowserRouter, Route, type RouteObject, Routes } from "react-router";
import { type ReactElement } from "react";

const ApplicationRouter = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route: RouteObject) => (
                    <Route
                        id={route.id}
                        key={route.id}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default ApplicationRouter;
