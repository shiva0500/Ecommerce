import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      setIsLogin(false);
    }

    if (user) {
      setIsLogin(true);
    }
  }, []);

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
              <i class="fa-solid fa-xmark fa-2xl"></i>
            ) : (
              <i class="fa-solid fa-bars fa-2xl"></i>
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
            <i
              class="fa-solid fa-bag-shopping"
              style={{ fontSize: "1.5rem" }}></i>
          </Link>
          <div className="link">
            {isLogin ? (
              <Link className="link" to="/user">
                <i class="fa-solid fa-user" style={{ fontSize: "1.5rem" }}></i>{" "}
              </Link>
            ) : (
              <Link className="link" to="/login">
                <i
                  class="fa-solid fa-arrow-right-to-bracket"
                  style={{ fontSize: "1.5rem" }}></i>{" "}
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
