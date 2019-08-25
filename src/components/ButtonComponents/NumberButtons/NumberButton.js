import React from "react";

const NumberButton = (props) => {
  // console.log("otherprops", props)
 
  return (
    <div className="number-container">
      <button className="num-button buttons">{props.number}</button>
    </div>
  );
};

export default NumberButton;
