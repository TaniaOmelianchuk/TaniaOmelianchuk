import React, { useEffect, useRef } from "react";
import "./AboutUs.scss";
import Background from "../assets/images/about-us--bg.png";
import RectangleFirst from "../assets/images/Rectangle-1.png";
import RectangleSecond from "../assets/images/Rectangle-2.png";
import RectangleThird from "../assets/images/Rectangle-3.png";
import RectangleForth from "../assets/images/Rectangle-4.png";
import RectangleFifth from "../assets/images/Rectangle-5.png";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  const textWrapperRef = useRef(null);

  useEffect(() => {
    const textWrapper = textWrapperRef.current;
    textWrapper.style.opacity = 1;
  }, []);

  return (
    <section className="aboutus">
      <img className="aboutus__img" src={Background} alt="Background" />
      <img
        className="aboutus__rectangle aboutus__rectangle--center"
        src={RectangleFirst}
        alt="Background"
      />
      <img
        className="aboutus__rectangle aboutus__rectangle--right"
        src={RectangleSecond}
        alt="Background"
      />
      <img
        className="aboutus__rectangle aboutus__rectangle--left"
        src={RectangleThird}
        alt="Background"
      />
      <img
        className="aboutus__rectangle aboutus__rectangle--down"
        src={RectangleForth}
        alt="Background"
      />
      <img
        className="aboutus__rectangle aboutus__rectangle--down-left"
        src={RectangleFifth}
        alt="Background"
      />

      <div className="aboutus__wrapper">
        <div className="aboutus__text-wrapper" ref={textWrapperRef}>
          <h1 className="aboutus__title">ABOUT US</h1>
          <p className="aboutus__subtitle">Hi there! We're SoulSound!</p>
        </div>

        <p className="aboutus__text">
          Welcome to SoulSound, your ultimate destination for discovering and
          exploring song lyrics. We are here to provide you with a seamless and
          comprehensive experience, helping you connect with the power of music
          one lyric at a time.
        </p>

        <div className="aboutus__get-started">
          <h2 className="aboutus__get-started--title">
            Join our community and dive into the world of melodies, where words
            come alive.
          </h2>
          <Link to="/">
            <button className="aboutus__get-started--button">
              Get Started
            </button>
          </Link>
        </div>

        <div className="aboutus__quiz">
          <h3 className="aboutus__quiz--title">
            Don't know what to listen? Find out a song for you!
          </h3>
          <a
            href="https://www.quotev.com/quiz/15403438/let-me-suggest-you-a-song"
            className="aboutus__quiz--link"
          >
            Try now{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
