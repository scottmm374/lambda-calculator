import React, { useState } from "react";
import data from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState] = useState(data.operators);

  console.log(operatorState)
  return (
    <div>
      {operatorState.map((item, index) => {
        return <OperatorButton key={index} operator={item} />
      })}
    </div>
  );
};


export default Operators;