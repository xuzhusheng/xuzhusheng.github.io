import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";
// import { dependencies } from "./package.json";
import { visualizer } from "rollup-plugin-visualizer";

// const VENDOR_CHUNKS_PACKAGES = [
//     "react",
//     "react-router-dom",
//     "react-dom",
//     "react-helmet-async",
// ];

// const vendorChunk = Object.keys(dependencies).filter((key) =>
//     VENDOR_CHUNKS_PACKAGES.includes(key)
// );

// const splitChunks = Object
//     .keys(dependencies)
//     .filter((key) => VENDOR_CHUNKS_PACKAGES.includes(key))
//     .reduce((chunks, key) => {
//         chunks[key] = [key];
//         return chunks
//     }, {})

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                assetFileNames: asset => {
                    if (asset.name.endsWith(".ttf")){
                        return `assets/fonts/${asset.name}`;
                    }
                    
                    return "assets/[name]-[hash][extname]";
                }
                // manualChunks: {
                //     verdor: vendorChunk,
                //     ...splitChunks,
                // },
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
