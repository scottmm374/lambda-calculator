import React, { useState } from "react";
import data from '../../../data';
import NumberButton from './NumberButton';

//import any components needed
// console.log(numbers.numbers)
//Import your array data to from the provided data file

const Numbers = () => {
  const [numberState] = useState(data.numbers);
  console.log(numberState)
  return (
    <div>
      {numberState.map((item, index) => {
        //  console.log("item", item);
         return <NumberButton key={index} number={item} />
       })}
    </div>
  );
};

export default Numbers;