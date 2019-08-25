import React, { useState } from "react";
import numbers from '../../../data';
import NumberButton from './NumberButton';

//import any components needed
// console.log(numbers.numbers)
//Import your array data to from the provided data file

const Numbers = () => {
  const [numberState] = useState(numbers.numbers);
  // console.log(numbers)
  // console.log(numberState)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      

       {numberState.map((item, index) => {
        //  console.log("item", item);
         return <NumberButton key={index} number={item} />
       })}
    </div>
  );
};

export default Numbers;