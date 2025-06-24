import "./Navbar.css"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (e, id) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="logo" onClick={(e) => handleScroll(e, "hero")}>
          <img src="/logo2.jpg" alt="HUTZAAV Logo" className="logo-img" />
          <span className="logo-text">HUTZAAV</span>
        </a>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#hero" onClick={(e) => handleScroll(e, "hero")}>Ателье</a></li>
          <li><a href="#clothing" onClick={(e) => handleScroll(e, "clothing")}>Одежда</a></li>
          <li><a href="#painting" onClick={(e) => handleScroll(e, "painting")}>Рисунки</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Контакты</a></li>
        </ul>

        <div className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  )
}
