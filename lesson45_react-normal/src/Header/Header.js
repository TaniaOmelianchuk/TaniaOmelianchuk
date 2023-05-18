import React from "react";
import "./Header.scss";
import Logo from "../assets/images/Logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={Logo} alt="Logo" className="header__logo"></img>
        <h3 className="header__title">MONTICELLO</h3>
        <ul className="header__nav">
          <li>
            <div class="header__dot"></div>
            <a href="#main" class="header__nav--item">
              {" "}
              ABOUT US{" "}
            </a>
          </li>
          <li>
            <div class="header__dot"></div>
            <a href="#gallery" class="header__nav--item">
              PROJECTS
            </a>
          </li>
          <li>
            <div class="header__dot"></div>
            <a href="#news" class="header__nav--item">
              NEWS
            </a>
          </li>
          <li>
            <div class="header__dot"></div>
            <a href="#form" class="header__nav--item">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
