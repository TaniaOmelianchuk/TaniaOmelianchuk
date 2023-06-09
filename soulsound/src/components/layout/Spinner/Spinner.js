import React from "react";
import "./Spinner.scss";

export const Spinner = () => {
  return (
    <div class="loader">
      <span class="loader-text">loading</span>
      <span class="load"></span>
    </div>
  );
};
