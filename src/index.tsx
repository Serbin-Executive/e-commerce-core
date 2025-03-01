import Application from "@components/Application";
import ReactDOM, { Root } from "react-dom/client";

const RootHTMLElement: HTMLElement | null = document.getElementById("root");

if (!RootHTMLElement) {
    throw new Error("Cannot acquire div#root to start the Application");
}

const ReactRoot: Root = ReactDOM.createRoot(RootHTMLElement);

ReactRoot.render(<Application />);
