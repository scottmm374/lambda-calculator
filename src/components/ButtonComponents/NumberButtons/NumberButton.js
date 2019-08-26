import React from "react";

const NumberButton = (props) => {
  // console.log("otherprops", props)
 
  return (
    <>
      <button className="num-button buttons">{props.number}</button>
    </>
  );
};

export default NumberButton;
