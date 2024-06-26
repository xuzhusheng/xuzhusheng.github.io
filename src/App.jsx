import "./App.css";
// import "./themes.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContext } from "./contexts";
import Home from "./pages/home/Home";
import Root from "./pages/root/Root";
import useLocalStorage from "./useLocalStorage";
// import "./i18n";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./conponents/seo/SEO";
import { SEO_META_DATA } from "./portfolio";
import { lazy } from "react";

const Blogs = lazy(() => import("./pages/blogs/Blogs"));
// const Resume = lazy(() => import("./pages/resume/Resume"));
const loadResume = import("./pages/resume/Resume");
const Resume = lazy(() => loadResume);
const pdfjsWorker = import("pdfjs-dist/build/pdf.worker.min.js");
const Contact = lazy(() => import("./pages/contact/Contact"));

export default function App() {
    const preferredTheme = matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    console.debug(preferredTheme);
    const [theme, setTheme] = useLocalStorage("theme", preferredTheme);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {

                    path: "/home",
                    element: <Home />,
                },
                {
                    path: "/blogs",
                    element: <Blogs />,
                },
                {
                    path: "/resume",
                    element: <Resume wroker={pdfjsWorker}/>,
                },

                {
                    path: "/contact",
                    element: <Contact />,
                },
            ],
        },
    ]);

    return (
        <HelmetProvider>
            {/* <Preload /> */}
            <SEO {...SEO_META_DATA} />
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div data-theme={theme}>
                    {/* <Suspense> */}
                    <RouterProvider router={router}></RouterProvider>
                    {/* </Suspense> */}
                </div>
            </ThemeContext.Provider>
        </HelmetProvider>
    );
}
