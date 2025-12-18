import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ starvalue = 5 ,onRate}) => {
  let [rating, setRating] = useState(0);
  let [hover, SetHover] = useState(0);
  return <div  className="flex gap-2">
    {
        [...Array(starvalue)].map((_,index)=>{
                let starvalue =index +1;
                let isFilled = starvalue <= 
                (hover || rating);

                return (
                    
                    <span 
                    key ={starvalue}
                    onClick={()=>{
                        setRating(starvalue)
                        onRate && onRate(starvalue)
                    }}
                    onMouseEnter={()=>SetHover(starvalue)}
                    >
                     <FaStar className={` cursor-pointer text-2xl ${isFilled ?"text-yellow-400":"text-gray-400"} `} />
                    </span>
                    
                )
        })
    }</div>;
};

export default Star;
