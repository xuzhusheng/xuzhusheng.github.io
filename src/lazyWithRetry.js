import { lazy } from "react";

export default function lazyWithRetry(componentImport) {
    return lazy(async () => {
        try {
            const component = await componentImport();
            localStorage.setItem("refreshed", false);
            return component;
        } catch (error) {
            const refreshed = localStorage.getItem("refreshed") || false;  
            if (refreshed == "false") {
                localStorage.setItem("refreshed", true);
                return location.reload();
            }
        }
    });
}
