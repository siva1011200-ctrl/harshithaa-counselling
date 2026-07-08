import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">MindCare</h2>

      <div className={`nav-links ${open ? "active" : ""}`}>

        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

      </div>

      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}

export default Navbar;