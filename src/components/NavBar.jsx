import "./Navbar.css"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo">
          <img src="/logo2.jpg" alt="HUTZAAV Logo" className="logo-img" />
          <span className="logo-text">HUTZAAV</span>
        </a>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#atelier" onClick={() => setIsOpen(false)}>Ателье</a></li>
          <li><a href="#clothing" onClick={() => setIsOpen(false)}>Одежда</a></li>
          <li><a href="#painting" onClick={() => setIsOpen(false)}>Рисунки</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Контакты</a></li>
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
