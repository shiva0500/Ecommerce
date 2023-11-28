import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // const handleUserLink = () => {
  //   // Redirect based on authentication status
  //   // if () {
  //   //   // Redirect to the user page if logged in
  //   //   window.location.href = "/user"; // Use window.location.href for external navigation
  //   // } else {
  //   //   // Redirect to the login page if not logged in
  //   //   window.location.href = "/login"; // Use window.location.href for external navigation
  //   // }
  // };

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="nav_logo">
          <h3>PLANTOSHO</h3>
        </div>
        <div className="mobile_link">
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
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
            <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: "1.5rem" }} />           
          </Link>
          <div className="link" >
        
        <Link to="/user" ><FontAwesomeIcon icon={faUser} style={{ fontSize: "1.5rem" }} /></Link>
        
      </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;