import Header from "@components/Header";
import Footer from "@components/Footer";
import { type ReactElement, type ReactNode } from "react";
import "./style.css";

export interface IDefaultLayoutProps {
    children: ReactElement | ReactNode;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): ReactElement => {
    return (
        <div className="default-layout">
            <div className="content-container">
                <Header />
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};

export default DefaultLayout;
