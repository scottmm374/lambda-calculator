import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button className="operator-button buttons">{props.operator.char}</button>
    </>
  );
};

export default OperatorButton;