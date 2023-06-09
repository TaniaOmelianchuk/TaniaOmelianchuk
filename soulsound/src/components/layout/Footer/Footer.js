import React, { useState } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      isValid = false;
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }

    if (isValid) {
      setSubmitted(true);
      alert("Your request has been sent.");
      setEmail("");
    }
  };

  const handleFieldFocus = (errorSetter) => {
    errorSetter("");
  };

  return (
    <footer className="footer">
      <div className="footer__img-wrapper"></div>
      <div className="footer__wrapper">
        <div className="footer__logo-wrapper">
          <p className="footer__logo footer__title">SOULSOUND</p>
        </div>

        <div className="footer__wrapper--tablet">
          <div className="footer__wrapper--mobile">
            <div className="footer__text-wrapper">
              <h3 className="footer__title">Sitemap</h3>
              <ul className="footer__nav">
                <li className="footer__nav--item">
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li className="footer__nav--item">
                  <Link to="/search">Search</Link>
                </li>
                <li className="footer__nav--item">
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="footer__nav--item">Settings</li>
              </ul>
            </div>

            <div className="footer__text-wrapper">
              <h3 className="footer__title">Talk to us</h3>
              <ul className="footer__nav">
                <li className="footer__nav--item">
                  <a href="mailto:support@ercom.com ">support@ercom.com</a>
                </li>
                <li className="footer__nav--item">
                  <a href="tel:+6623991145 ">+66 2399 1145</a>
                </li>
                <li className="footer__nav--item">
                  <a href="#">Linkedin</a>{" "}
                </li>
                <li className="footer__nav--item">
                  <a href="#">Facebook</a>
                </li>
                <li className="footer__nav--item">
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>

          <form className="footer__form" id="form" onSubmit={handleSubmit}>
            <label className="footer__label footer__title">
              News Letter
              <input
                type="text"
                className="footer__input"
                placeholder="Enter your email address"
                value={email}
                required
                id="input"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => handleFieldFocus(setEmailError)}
              />
              {emailError && <p className="error">{emailError}</p>}
            </label>
            <button
              type="submit"
              className="btn card__button card__button--small"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="footer__line"></div>
      <p className="footer__text">Copyrights © 2023 SoulSound</p>
    </footer>
  );
};
