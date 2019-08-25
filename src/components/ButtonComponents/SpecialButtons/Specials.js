import React, { useState } from "react";
import data from '../../../data';
import SpecialButton from './SpecialButton';



const Specials = () => {
  const [specialState] = useState(data.specials);
  console.log(specialState)

  return (
    <div>

      {specialState.map((item, index) => {
        console.log("item", item);
        return <SpecialButton key={index} special={item} />
      })}

    </div>
  );
};

export default Specials;