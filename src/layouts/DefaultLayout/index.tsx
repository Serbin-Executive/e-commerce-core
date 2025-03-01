import { type ReactElement, type ReactNode } from "react";

export interface IDefaultLayoutProps {
    children: ReactElement | ReactNode;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): ReactElement => {
    return (
        <div className="default-layout">
            <header>
                <h1>Page Header</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default DefaultLayout;
