import React from "react";
import banner from "../assets/images/banner.png";
import "./Banner.scss";

export const Banner = () => {
  return (
    <section className="section">
      <img src={banner} alt="Banner"></img>
    </section>
  );
};
