import React from "react";

const OperatorButton = (props) => {
  return (
    <div className="operator-container">
      <button className="operator-button buttons">{props.operator.char}</button>
    </div>
  );
};

 export default OperatorButton;