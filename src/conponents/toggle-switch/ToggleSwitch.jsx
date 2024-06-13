import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={theme == "dark"}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
            <span className="slider round">
                <span className="emoji">{theme == "dark" ? "🌙" : "☀️"}</span>
            </span>
        </label>
    );
}
