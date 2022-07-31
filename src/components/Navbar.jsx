import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Ardwells | Website & Development System | jasa pembuatan website</title>
        <meta name="description" content="jasa pembuatan website" />
        <link rel="canonical" href="/" />
      </Helmet>
      <nav>
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <div className="toggle-container">
            <div className="toggle">
              {navState ? (
                <MdClose onClick={() => setNavState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavState(true)} />
              )}
            </div>
            <div className="mode" onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="light" />
              ) : (
                <BsFillMoonFill className="dark" />
              )}
            </div>
          </div>
        </div>
        <div className={`links-container ${navState ? "nav-visible" : ""}`}>
          <ul className="links">
          <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#solution">Solution</a>
            </li>
            <li onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="light" />
              ) : (
                <BsFillMoonFill className="dark" />
              )}
            </li>
          </ul>
        </div>
      </nav>
    </HelmetProvider>
  );
}
