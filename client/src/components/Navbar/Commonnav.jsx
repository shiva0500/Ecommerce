import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Commonnav.css";

function Commonnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      setIsLogin(false);
    }

    if (user) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="Cnavbar">
      <nav className="Cnav">
        <div className="Cnav_logo">
          <h3>PLANTOSHO</h3>
        </div>
        <div className="Cmobile_link">
          <div className="Cmenu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? (
              <i class="fa-solid fa-xmark fa-2xl"></i>
              ) : (
                <i class="fa-solid fa-xmark fa-2xl"></i>
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
          <i class="fa-solid fa-bag-shopping" style={{ fontSize: "1.5rem" }}></i>

          </Link>
          {
            isLogin ? (
              <Link className="Clink" to="/user">
                <i class="fa-solid fa-user" style={{ fontSize: "1.5rem" }}></i>{" "}

              </Link>
            ) : (
              <Link className="Clink" to="/login">
                <i class="fa-solid fa-arrow-right-to-bracket" style={{ fontSize: "1.5rem" }}></i>{" "}
              </Link>
            )
          }

        </div>
      </nav>
    </div>
  );
}

export default Commonnav;