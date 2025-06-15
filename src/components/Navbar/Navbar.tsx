// src/components/Navbar.tsx
import React, { useState } from "react";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Now Playing",
      href: "/now-playing",
    },
    {
      label: "Top Rated",
      href: "/top-rated",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    
    <header className="header">
      <div className="logo-container">
        <div className="logo">Movie</div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <a 
            href={item.href} 
            className="nav-link" 
            key={index}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search movies..." />
      </div>
    </header>
    <div className="padding-navbar" />

    </>
  );
};

export default Navbar;
