import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssCodeSplit: false,
    },
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: "./src/locales",
                    dest: "./",
                },
                {
                    src: "./src/assets/lotties",
                    dest: "./assets/",
                },
            ],
        }),
    ],
    server: {
        hmr: true,
        watch: {
            usePolling: true,
        },
        proxy: {
            "/assets": {
                target: "http://localhost:5173",
                rewrite: (path) => path.replace("/assets", "/src/assets"),
            },
        },
    },
});
