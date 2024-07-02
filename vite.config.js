import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";
// import { dependencies } from "./package.json";
import { visualizer } from "rollup-plugin-visualizer";

const chunks = ["react", "react-dom", "react-router-dom"].reduce(
    (chunks, key) => {
        chunks[key] = [key];
        return chunks;
    },
    {}
);


// const splitChunks = Object.keys(dependencies)
//     .filter((key) => !VENDOR_CHUNKS_PACKAGES.includes(key))
//     .reduce((chunks, key) => {
//         chunks[key] = [key];
//         return chunks;
//     }, {});

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                assetFileNames: (asset) => {
                    if (
                        asset.name.endsWith(".ttf") ||
                        asset.name.endsWith(".woff2")
                    ) {
                        return `assets/fonts/${asset.name}`;
                    }

                    return "assets/[name]-[hash][extname]";
                },
                manualChunks: {
                    ...chunks
                    // react: ["react", "react-dom"],
                    // "react-router": ["react-router-dom"],
                },
            },
        },
    },
    plugins: [
        react(),
        visualizer(),
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
                changeOrigin: true,
                rewrite: (path) => path.replace("/assets", "/src/assets"),
            },
        },
    },
});
