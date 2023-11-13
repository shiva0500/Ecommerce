import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes ,faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import "./Navbar.css";
import { ShopContext } from "../../context/shop-context";

function Navbar(props) {
  const { totalItems } = useContext(ShopContext);
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
          <FontAwesomeIcon icon={faBagShopping} style={{fontSize:"1.5rem"}} />
          <div className="count">{totalItems}</div>
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
