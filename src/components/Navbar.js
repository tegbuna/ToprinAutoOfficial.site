import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-scroll";
import Logo from "../components/images/Logo.png";
import { SiYoutube, SiInstagram, SiFacebook } from "react-icons/si";
import "./CSS/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-105}
            duration={500}
            onClick={closeMenu}
          >
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <AiOutlineClose
              size={14}
              style={{ color: "var(--white-white)" }}
            />
          ) : (
            <VscMenu size={28} style={{ color: "var(--white-white)" }} />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="nav-item"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="process"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="nav-item"
              onClick={closeMenu}
            >
              How it Works
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="nav-item"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="nav-item"
              onClick={closeMenu}
            >
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="nav-item"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>

          <li className="mobile-social-nav">
            <div className="social">
              <div className="social-list">
                <a
                  className="youtube"
                  href="https://www.facebook.com/tee.recks.75?mibextid=hu50Ix"
                  rel="noreferrer"
                  target="_blank"
                >
                  <SiFacebook />
                </a>
                <a
                  className="Instagram"
                  href="https://www.instagramcom/toprin_auto"
                  rel="noreferrer"
                  target="_blank"
                >
                  <SiInstagram />
                </a>
                <a
                //   className="youtube"
                //   href="https://www.youtube.com/"
                //   rel="noreferrer"
                //   target="_blank"
                >
                  {/* <SiYoutube /> */}
                </a>
              </div>
            </div>
          </li>
        </ul>

        <div className="desktop-social-bar">
          <div className="social">
            <div className="social-list">
              <a
                className="facebook"
                href="https://www.facebook.com"
                rel="noreferrer"
                target="_blank"
              >
                <SiFacebook />
              </a>
              <a
                className="Instagram"
                href="https://www.Instagram.com"
                rel="noreferrer"
                target="_blank"
              >
                <SiInstagram />
              </a>
              <a
                className="youtube"
                href="https://www.youtube.com"
                rel="noreferrer"
                target="_blank"
              >
                <SiYoutube />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
