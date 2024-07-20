import { NavLink, Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
// import ToggleSwitch from "../toggle-switch/ToggleSwitch";
// import LanguageSelector from "../language-selector/LanguageSelector";
// import { useTranslation } from "react-i18next";

export default function Header() {
    const [unfold, setUnfold] = useState(false);
    const location = useLocation();

    useEffect(() => setUnfold(false), [location.pathname]);
    // const { t } = useTranslation();

    // const links = [
    //     { to: "/home", label: t("header.home") },
    //     { to: "/projects", label: t("header.projects") },
    //     { to: "/experience", label: t("header.experience") },
    //     { to: "/education", label: t("header.education") },
    //     { to: "/contact", label: t("header.contact") },
    // ];
    const links = [
        { to: "/home", label: "Home" },
        { to: "/blogs", label: "Blogs" },
        { to: "resume", label: "Resume" },
        { to: "/contact", label: "Contact Me" },
    ];

    const navLinks = links.map((link) => (
        <li key={link.to}>
            <NavLink to={link.to} tag={Link}>
                {link.label}
            </NavLink>
        </li>
    ));

    return (
        <header className="header">
            <NavLink to="/" tag={Link} className="logo">
                <span className="logo-name">Xu Zhusheng</span>
            </NavLink>
            <input
                className="menu-btn"
                type="checkbox"
                id="menu-btn"
                onChange={(e) => setUnfold(e.target.checked)}
                checked={unfold}
            />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
            </label>
            <ul className="menu">
                {navLinks}
                {/* <li>
                    <a>
                        <LanguageSelector />
                    </a>
                </li>
                <li>
                    <a>
                        <ToggleSwitch />
                    </a>
                </li> */}
            </ul>
        </header>
    );
}
