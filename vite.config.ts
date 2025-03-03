import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "./src/components"),
            "@domains": path.resolve(__dirname, "./src/domains"),
            "@router": path.resolve(__dirname, "./src/router"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@layouts": path.resolve(__dirname, "./src/layouts"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@data": path.resolve(__dirname, "./src/data"),
        },
    },
});