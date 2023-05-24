import React from "react";
import "./Header.scss";
import Logo from "../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={Logo} alt="Logo" className="header__logo"></img>
        <h3 className="header__title">MONTICELLO</h3>
        <ul className="header__nav">
          <li>
            <div className="header__dot"></div>
            <a href="#aboutus" className="header__nav--item">
              ABOUT US
            </a>
          </li>
          <li>
            <div className="header__dot"></div>
            <a href="#gallery" className="header__nav--item">
              PROJECTS
            </a>
          </li>
          <li>
            <div className="header__dot"></div>
            <Link to="/news" className="header__nav--item">
              NEWS
            </Link>
          </li>
          <li>
            <div className="header__dot"></div>
            <Link to="/contact" className="header__nav--item">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="contacts">
      <div className="contacts__wrapper">
        <h1>Contact Information</h1>
        <p>
          Phone: <a href="tel:1234567890">123-456-7890</a>
        </p>
        <p>
          Email: <a href="mailto:info@example.com">info@example.com</a>
        </p>
        <p>Address: 123 Street, City, Country</p>
        <button className="contacts__button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </section>
  );
};

export const News = () => {
  const navigate = useNavigate();

  const newsList = [
    {
      id: 1,
      title: "New Product Launch",
      date: "May 15, 2023",
      description: "We are excited to announce the launch of our new product!",
    },
    {
      id: 2,
      title: "Upcoming Event: Workshop",
      date: "June 1, 2023",
      description:
        "Join us for an interactive workshop on the latest trends in technology.",
    },
    {
      id: 3,
      title: "Company Milestone Reached",
      date: "June 10, 2023",
      description:
        "We are proud to announce that we have reached a major milestone in our company's history.",
    },
  ];

  return (
    <section className="news">
      <div className="news__wrapper">
        <h1 className="news__title">News</h1>
        <ul className="news__list">
          {newsList.map((newsItem) => (
            <li key={newsItem.id} className="news__item">
              <h2 className="news__title">{newsItem.title}</h2>
              <p className="news__date">{newsItem.date}</p>
              <p className="news__description">{newsItem.description}</p>
            </li>
          ))}
        </ul>
        <button className="contacts__button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </section>
  );
};
