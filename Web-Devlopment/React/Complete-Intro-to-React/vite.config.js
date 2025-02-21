import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrgin: true,
            },
            "/public": {
                target: "http://localhost:3000",
                changeOrgin: true,
            },
        },
    },
    plugins: [react()],
});
