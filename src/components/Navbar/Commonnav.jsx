import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import "./Commonnav.css";

function Commonnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Cnavbar">
      <nav className="Cnav">
        <div className="Cnav_logo">
          <h3>PLANTOSHO</h3>
        </div>
        <div className="Cmobile_link">
          <div className="Cmenu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
            )}
          </div>
        </div>

        <div className={`Cnav_links${isMenuOpen ? " open" : ""}`}>
          <Link className="Clink" to="/">
            Home
          </Link>
          <Link className="Clink" to="/mainstore">
            Store
          </Link>
          <Link className="Clink" to="/about">
            About
          </Link>
          <Link className="Clink" to="/contact">
            Contact
          </Link>
          <Link className="Clink" to="/cart">
            <FontAwesomeIcon
              icon={faBagShopping}
              style={{ fontSize: "1.5rem" }}
            />
          </Link>
          <Link className="Clink" to="/login">
            <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.5rem" }} />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Commonnav;
