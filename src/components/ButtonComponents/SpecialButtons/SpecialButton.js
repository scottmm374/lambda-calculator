import React from "react";

const SpecialButton = (props) => {
  return (
    <div className="specials-container">
      <button className="special-button buttons">{props.special}</button>
    </div>
  );
};

export default SpecialButton;