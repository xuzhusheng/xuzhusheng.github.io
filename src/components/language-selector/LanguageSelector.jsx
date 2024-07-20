import { useTranslation } from "react-i18next";
import "./LanguageSelector.css"

const languages = [{code: "en", language: "English"}, {code: "zh", language: "中文"}];

export default function LanguageSelector() {

    const { i18n } = useTranslation();

    const languagesOptions = languages.map((language) => (
        <option key={language.code} value={language.code}>
            {language.language}
        </option>
    ));

    return (
        <select
            onChange={
                (e) => {
                    i18n.changeLanguage(e.target.value);
                }
                
            }
            defaultValue={i18n.language} 
        >
            {languagesOptions}
        </select>
    );
}