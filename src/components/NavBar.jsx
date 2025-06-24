// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "./NavBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#hero" className="logo" onClick={(e) => handleScrollTo(e, "hero")}>
          <img src="/logo2.jpg" alt="Logo" className="logo-img" />
          <span className="logo-text">HUTZAAV</span>
        </a>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#hero" onClick={(e) => handleScrollTo(e, "hero")}>{t("nav_atelier")}</a></li>
          <li><a href="#clothing" onClick={(e) => handleScrollTo(e, "clothing")}>{t("nav_clothing")}</a></li>
          <li><a href="#painting" onClick={(e) => handleScrollTo(e, "painting")}>{t("nav_painting")}</a></li>
          <li><a href="#home" onClick={(e) => handleScrollTo(e, "home")}>{t("nav_home")}</a></li>
          <li><a href="#contact" onClick={(e) => handleScrollTo(e, "contact")}>{t("nav_contact")}</a></li>

          {/* Языки внутри меню (мобильная версия) */}
          <li className="mobile-lang"><LanguageSwitcher /></li>
        </ul>

        {/* Языки наверху (десктоп) */}
        <div className="desktop-lang">
          <LanguageSwitcher />
        </div>

        <div className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}
