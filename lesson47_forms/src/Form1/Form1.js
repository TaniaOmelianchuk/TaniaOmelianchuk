import React, { useState } from "react";
import "./Form1.scss";

export const Form1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [updates, setUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (name.length < 4) {
      isValid = false;
      setNameError("Юзернейм повинен містити мінімум 4 символи");
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      isValid = false;
      setEmailError("Неправильна адреса електронної пошти");
    } else {
      setEmailError("");
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!phone.match(phoneRegex)) {
      isValid = false;
      setPhoneError("Перевір формат телефону");
    } else {
      setPhoneError("");
    }

    if (message.length < 10) {
      isValid = false;
      setMessageError("Повідомлення має бути не менше 10 символів");
    } else {
      setMessageError("");
    }

    if (isValid) {
      setSubmitted(true);
      alert("Ваш запит було надіслано.");
    }
  };

  const handleFieldFocus = (errorSetter) => {
    errorSetter("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__wrapper">
        <div className="form__info">
          <label className="form__label">
            <input
              className="form__input"
              placeholder="Ім'я та прізвище"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => handleFieldFocus(setNameError)}
            />
            {nameError && <p className="form__error">{nameError}</p>}
          </label>
          <label className="form__label">
            <input
              className="form__input"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFieldFocus(setEmailError)}
            />
            {emailError && <p className="form__error">{emailError}</p>}
          </label>
        </div>
        <label className="form__label">
          <input
            className="form__input"
            placeholder="Телефон (у форматі +380)"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => handleFieldFocus(setPhoneError)}
          />
          {phoneError && <p className="form__error">{phoneError}</p>}
        </label>
        <label className="form__label">
          <input
            className="form__input"
            placeholder="Повідомлення"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => handleFieldFocus(setMessageError)}
          />
          {messageError && <p className="form__error">{messageError}</p>}
        </label>

        <label className="form__label form__label-checkbox">
          <input
            type="checkbox"
            className="form__input form__checkbox"
            checked={updates}
            onChange={(e) => setUpdates(e.target.checked)}
          />
          Надсилати мені оновлення про академію
        </label>

        <div className="form__button-wrapper">
          <button className="form__button" type="submit">
            Надіслати
          </button>
        </div>
      </div>
    </form>
  );
};
