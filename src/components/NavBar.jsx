import "./Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
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
          <img src="/logo2.jpg" alt="HUTZAAV Logo" className="logo-img" />
          <span className="logo-text">HUTZAAV</span>
        </a>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#hero" onClick={(e) => handleScrollTo(e, "hero")}>Ателье</a></li>
          <li><a href="#clothing" onClick={(e) => handleScrollTo(e, "clothing")}>Одежда</a></li>
          <li><a href="#painting" onClick={(e) => handleScrollTo(e, "painting")}>Картины</a></li>
          <li><a href="#home" onClick={(e) => handleScrollTo(e, "home")}>Дом</a></li> {/* 👈 ДОБАВЛЕНО */}
          <li><a href="#contact" onClick={(e) => handleScrollTo(e, "contact")}>Контакты</a></li>
        </ul>

        <div className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}
