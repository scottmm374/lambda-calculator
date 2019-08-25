import React, { useState} from "react";
import specials from '../../../data';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials.specials);
  console.log(specialState)

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

{specialState.map((item, index) => {
         console.log("item", item);
         return <SpecialButton key={index} special={item} />
       })}
    </div>
  );
};

export default Specials;