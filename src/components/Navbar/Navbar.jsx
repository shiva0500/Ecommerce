import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes ,faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="nav_logo">
          <h3>PLANTOSHO</h3>
        </div>
        <div className="mobile_link">

          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} size="1x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="1x" />
            )}
          </div>
        </div>

        <div className={`nav_links${isMenuOpen ? " open" : ""}`}>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/mainstore">
            Store
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
          <Link className="link" to="/cart">
          <FontAwesomeIcon icon={faBagShopping} style={{fontSize:"1.5rem"}} />
          </Link>
          <Link className="link" to="/login">
          <FontAwesomeIcon icon={faUser} style={{fontSize:"1.5rem"}} />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
