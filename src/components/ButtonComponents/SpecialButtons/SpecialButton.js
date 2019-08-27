import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="special-button buttons">{props.special}</button>
    </>
  );
};

export default SpecialButton;