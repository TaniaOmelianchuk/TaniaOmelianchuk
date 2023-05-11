import React from "react";
import "./App.scss";
import { Grid } from "./Grid.js";

function App() {
  return (
    <div className="main">
      <h2 className="main__title">CSS Weather Forecast </h2>
      <div className="main__wrapper">
        <Grid variant="item-1" mainText="Lisbon" addText="21°C"></Grid>
        <Grid variant="item-2" mainText="Paris" addText="11°C"></Grid>
        <Grid variant="item-3" mainText="Belgrade" addText="15°C"></Grid>
        <Grid variant="item-4" mainText="Venice" addText="21°C"></Grid>
        <Grid variant="item-5" mainText="Tel-Avive" addText="32°C"></Grid>
        <Grid variant="item-6" mainText="Cair" addText="21°C"></Grid>
        <Grid variant="item-7" mainText="New-York" addText="17°C"></Grid>
        <Grid variant="item-8" mainText="New-Delhi" addText="17°C"></Grid>
        <Grid variant="item-9" mainText="San-Francisco" addText="15°C"></Grid>
        <Grid variant="item-10" mainText="Tokyo" addText="8°C"></Grid>
        <Grid variant="item-11" mainText="Sydney" addText="25°C"></Grid>
      </div>
      <h2 className="main__subtitle">
        Have a nice day and don't forget umbrella if you are in New Delhi now!
      </h2>
    </div>
  );
}

export default App;
