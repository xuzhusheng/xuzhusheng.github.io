import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

import Home from "../../pages/home/Home";
import Root from "../../pages/root/Root";

const Blogs = lazy(() => import("../../pages/blogs/Blogs"));
const Resume = lazy(() => import("../../pages/resume/Resume"));
const Contact = lazy(() => import("../../pages/contact/Contact"));

const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "blogs",
                element: <Blogs />,
            },
            {
                path: "resume",
                element: <Resume />,
            },

            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}