import { useTranslation } from "react-i18next";
import './LanguageSwitcher.css';
 // Ensure the path is correct to your CSS file
export default function LanguageSwticher() {
  const { i18n } = useTranslation();

  return (
    <div className="lang-switcher">
      <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("he")}>HE</button>
    </div>
  );
}
