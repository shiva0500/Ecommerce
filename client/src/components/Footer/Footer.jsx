import React from "react";
import "../../App.css";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <>
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>
              PLANT<span>OSHO</span>
            </h3>
            <p className="footer-links">
              <a href="/" className="link-1">
                Home
              </a>
              <a href="/">Pricing</a>
              <a href="/">Blog</a>
              <a href="/">About</a>
              <a href="/">Faq</a>
              <a href="/">Contact</a>
            </p>
            <p className="footer-company-name">Company Name © 2023</p>
          </div>
          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker" />
              <p>
                <span>444 S. Cedros Ave</span> Solana Beach, California
              </p>
            </div>
            <div>
              <i className="fa fa-phone" />
              <p>+1.555.555.5555</p>
            </div>
            <div>
              <i className="fa fa-envelope" />
              <p>
                <a href="mailto:support@company.com">support@company.com</a>
              </p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>
            <div className="footer-icons">
              <a href="/">
              <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="/">
              <i class="fab fa-twitter"></i>              </a>
              <a href="/">
              <i class="fa-brands fa-linkedin"></i>
                            </a>
              <a href="/">
              <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Footer;
