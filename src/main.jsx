import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./fonts.css"
import "./index.css";
import "./i18n.js";

addEventListener("vite:preloadError", () => {
    const retriesCount = parseInt(sessionStorage.getItem("reload_count") || 0);
    if (retriesCount < 3) {
        sessionStorage.setItem("reload_count", retriesCount + 1);
        location.reload()
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
