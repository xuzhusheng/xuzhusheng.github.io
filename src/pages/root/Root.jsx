import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Root.css"
import { Suspense } from "react";



export default function Root() {
    return (
        <>
            <Header />
            <div className="main-container">
                <Suspense>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
}
