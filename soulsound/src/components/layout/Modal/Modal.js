import React, { useRef, useState, useEffect } from "react";
import "./Modal.scss";
import ThumbsUp from "../assets/images/thumbs-up.jpg";

export function ModalLogIn({ open, onClose }) {
  const [signUpOpen, setSignUpOpen] = useState(false);

  const userRef = useRef();
  const pwdRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [nameError, setNameError] = useState("");
  const [pwdError, setPwdError] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (user.length < 4) {
      isValid = false;
      setNameError("Username must contain at least 4 characters");
    } else {
      setNameError("");
    }

    if (pwd.length < 8) {
      isValid = false;
      setPwdError("Password must contain at least 8 characters");
    } else {
      setPwdError("");
    }

    if (isValid) {
      setUser("");
      setPwd("");
      setSuccess(true);
    }
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
    setNameError("");
    setErrMsg("");
  };

  const handlePwdChange = (e) => {
    setPwd(e.target.value);
    setPwdError("");
    setErrMsg("");
  };

  if (!open) return null;
  return (
    <div className="overlay">
      <div className="signup">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
          {errMsg}
        </p>
        <button onClick={onClose} className="signup__button--close">
          X
        </button>
        <div className="signup__wrapper">
          {success ? (
            <>
              <h2 className="signup__title signup__title--success">
                You are logged in!
              </h2>
              <img src={ThumbsUp} alt="Thumbs Up" className="signup__img" />
              <p>
                <button
                  onClick={onClose}
                  className="btn card__button card__button--small modal__button"
                >
                  Return back
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="signup__title">Log in to your account</h2>
              <p className="signup__subtitle">
                Welcome back! Please enter your details
              </p>
              <form onSubmit={handleSubmit} className="signup__input-wrapper">
                <input
                  type="text"
                  className="signup__input"
                  placeholder="Username"
                  ref={userRef}
                  id="username"
                  onChange={handleUserChange}
                  value={user}
                  required
                />
                {nameError && <p className="error">{nameError}</p>}
                <input
                  type="password"
                  className="signup__input"
                  placeholder="Password"
                  required
                  id="password"
                  onChange={handlePwdChange}
                  value={pwd}
                />
                {pwdError && <p className="error">{pwdError}</p>}
                <button type="submit" className="signup__button">
                  Log in
                </button>
              </form>
              <div className="signup__text">
                <p>Don't have an account? </p>
                <p
                  className="signup__text--link"
                  onClick={() => setSignUpOpen(true)}
                >
                  Sign up
                </p>
              </div>
              {signUpOpen && (
                <ModalSignUp
                  open={signUpOpen}
                  onClose={() => setSignUpOpen(false)}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function ModalSignUp({ open, onClose }) {
  const [logInOpen, setLogInOpen] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [nameError, setNameError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (user.length < 4) {
      isValid = false;
      setNameError("Username must contain at least 4 characters");
    } else {
      setNameError("");
    }

    if (pwd.length < 8) {
      isValid = false;
      setPwdError("Password must contain at least 8 characters");
    } else {
      setPwdError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailRegex)) {
      isValid = false;
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    if (isValid) {
      setUser("");
      setPwd("");
      setSuccess(true);
    }
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
    setNameError("");
    setErrMsg("");
  };

  const handlePwdChange = (e) => {
    setPwd(e.target.value);
    setPwdError("");
    setErrMsg("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setErrMsg("");
  };

  if (!open) return null;
  return (
    <div className="overlay">
      <div className="signup">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
          {errMsg}
        </p>
        <button onClick={onClose} className="signup__button--close">
          X
        </button>
        <div className="signup__wrapper">
          {success ? (
            <>
              <h2 className="signup__title signup__title--success">
                You've successfully created an account!
              </h2>
              <img src={ThumbsUp} alt="Thumbs Up" className="signup__img" />
              <p>
                <button
                  onClick={onClose}
                  className="btn card__button card__button--small modal__button"
                >
                  Return back
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="signup__title">Create An Account</h2>
              <p className="signup__subtitle">
                Create an account to enjoy all the services without any ads for
                free!
              </p>
              <form onSubmit={handleSubmit} className="signup__input-wrapper">
                <input
                  type="text"
                  className="signup__input"
                  ref={userRef}
                  onChange={handleUserChange}
                  value={user}
                  placeholder="Enter your nickname"
                  required
                  id="input"
                />
                {nameError && <p className="error">{nameError}</p>}
                <input
                  type="text"
                  className="signup__input"
                  placeholder="Enter your email address"
                  onChange={handleEmailChange}
                  value={email}
                  required
                  id="input"
                />
                {emailError && <p className="error">{emailError}</p>}

                <input
                  type="password"
                  className="signup__input"
                  placeholder="Password (8 characters minimum)"
                  required
                  id="input"
                  onChange={handlePwdChange}
                  value={pwd}
                />
                {pwdError && <p className="error">{pwdError}</p>}
                <button type="submit" className="signup__button">
                  Create account
                </button>
              </form>

              <div className="signup__text">
                <p>Already Have An Account?</p>
                <p
                  className="signup__text--link"
                  onClick={() => setLogInOpen(true)}
                >
                  Log In
                </p>
              </div>
              {logInOpen && (
                <ModalLogIn open={logInOpen} onClose={() => setLogInOpen(false)} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
