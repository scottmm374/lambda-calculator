import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button className="num-button">{props.operator.char}</button>
    </>
  );
};

 export default OperatorButton;