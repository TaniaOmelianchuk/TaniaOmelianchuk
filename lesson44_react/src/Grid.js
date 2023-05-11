import React, { useState } from "react";
import "./Grid.scss";

export const Grid = (props) => {
  const { mainText, addText, variant } = props;
  const className = `grid-item ${variant}`;
  const [opacity, setOpacity] = useState(0.7);

  const handleClick = () => {
    setOpacity(1);
  };

  const divStyle = { opacity };
  return (
    <div className={className} style={divStyle} onClick={handleClick}>
      <h3>{mainText}</h3>
      <p>{addText}</p>
    </div>
  );
};

export default Grid;
