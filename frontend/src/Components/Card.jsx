import React from "react";

const Card = ({title,description,image1,image2,rent,city,landMark,category,id}) => {

    
  return <div className=" w-[330px] h-[460px] max-w-[85%] flex items-start justify-start flex-col rounded-lg cursor-pointer ">

    <div className=" w-[100%] h-[67%] rounded-lg overflow-auto  flex ">

        <img src={image1} alt="image" />
        <img src={image2} alt="image" />
    </div>

    <div className=" w-[100%] h-[33%] py-[20px] flex flex-col gap-[2px] ">

        <span className=" w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434] ">In {landMark.toUpperCase()}, {city.toUpperCase()}</span>
        <span className=" w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434] ">{title.toUpperCase()}</span>
        <span className=" w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434] ">Rs.{rent}/day</span>
        <span className=" w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434] ">{description.toUpperCase()}</span>
    </div>
  </div>
};

export default Card;
