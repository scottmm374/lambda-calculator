import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="special-button">{props.number}</button>
    </>
  );
};

export default SpecialButton;