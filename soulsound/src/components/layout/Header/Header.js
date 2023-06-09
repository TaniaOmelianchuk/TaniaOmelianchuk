import React, { useState, useRef } from "react";
import "./Header.scss";
import Logo from "../assets/images/logo.jpg";
import LogoLight from "../assets/images/logo--light.jpg";
import { ModalSignUp, ModalLogIn } from "../Modal/Modal";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

export const Header = () => {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [logInOpen, setLogInOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("light");
  const headerRef = useRef(null);
  const burgerButtonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header ref={headerRef} className={`header ${menuOpen ? "open" : ""}`}>
        <div className="header__wrapper">
          <div className="header__subwrapper">
            <button
              ref={burgerButtonRef}
              className="header__burger-button"
              id="burger-button"
              onClick={toggleMenu}
            >
              <span className="header__burger-button-line"></span>
              <span className="header__burger-button-line"></span>
              <span className="header__burger-button-line"></span>
            </button>
            <img
              src={selectedTheme === "light" ? LogoLight : Logo}
              className="header__logo"
              alt="SoulSound"
            />
          </div>

          <div className=" header__container">
            <ul className="header__nav">
              <Link
                to="/"
                className="header__nav--item"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/search"
                className="header__nav--item"
                onClick={() => setMenuOpen(false)}
              >
                Search
              </Link>
              <Link
                to="/about-us"
                className="header__nav--item"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <li
                className="header__nav--item"
                onClick={() => setMenuOpen(false)}
              >
                Settings
              </li>
            </ul>
            <div className="header__buttons">
              <button
                type="button"
                className="header__sign-up"
                onClick={() => setSignUpOpen(true)}
              >
                Sign up
              </button>
              <button
                type="button"
                className="header__log-in"
                onClick={() => setLogInOpen(true)}
              >
                Log in
              </button>
            </div>
            <DarkMode setSelectedTheme={setSelectedTheme} />
          </div>
        </div>
      </header>
      <ModalSignUp open={signUpOpen} onClose={() => setSignUpOpen(false)} />
      <ModalLogIn open={logInOpen} onClose={() => setLogInOpen(false)} />
    </>
  );
};
