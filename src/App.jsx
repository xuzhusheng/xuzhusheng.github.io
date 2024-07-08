import "./App.css";
// import "./themes.css";

import { ThemeContext } from "./contexts";

import useLocalStorage from "./useLocalStorage";
// import "./i18n";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./conponents/seo/SEO";
import { SEO_META_DATA } from "./portfolio";
import Router from "./conponents/router/Router";

export default function App() {
    const preferredTheme = matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    console.debug(preferredTheme);
    const [theme, setTheme] = useLocalStorage("theme", preferredTheme);

    return (
        <HelmetProvider>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div data-theme={theme}>
                    <Router />
                    <div className="footer">Made by Xu Zhusheng</div>
                </div>
            </ThemeContext.Provider>
            <SEO {...SEO_META_DATA} />
        </HelmetProvider>
    );
}
