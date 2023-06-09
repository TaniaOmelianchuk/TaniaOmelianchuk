import React from "react";
import "./Main.scss";
import RectangleFirst from "../assets/images/Rectangle-1.png";
import RectangleSecond from "../assets/images/Rectangle-2.png";
import RectangleThird from "../assets/images/Rectangle-3.png";
import RectangleForth from "../assets/images/Rectangle-4.png";
import RectangleFifth from "../assets/images/Rectangle-5.png";
import Background from "../assets/images/background.gif";

export const Main = () => {
  return (
    <main className="main">
      <img
        className="aboutus__rectangle aboutus__rectangle--center"
        src={RectangleFirst}
        alt="Background"
      ></img>
      <img
        className="aboutus__rectangle aboutus__rectangle--right"
        src={RectangleSecond}
        alt="Background"
      ></img>
      <img
        className="aboutus__rectangle aboutus__rectangle--left"
        src={RectangleThird}
        alt="Background"
      ></img>
      <img
        className="aboutus__rectangle aboutus__rectangle--down"
        src={RectangleForth}
        alt="Background"
      ></img>
      <img
        className="aboutus__rectangle aboutus__rectangle--down-left"
        src={RectangleFifth}
        alt="Background"
      />
      <div className="main__wrapper">
        <img src={Background} alt="background" className="main__img" />
        <h1 className="main__title">SoulSound</h1>
      </div>
    </main>
  );
};
