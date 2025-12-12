import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const MyListing = () => {

    let navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex items-center justify-center relative ">
      <div
        className="w-[40px] h-[40px] cursor-pointer bg-[#FF385C] absolute  top-[5%] left-[5px] md:w-[50px] md:h-[50px] md:top-[10%] md:left-[20px]  rounded-[50%] flex items-center justify-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <FaLongArrowAltLeft className="w-[20px] h-[20px] text-[#FFFFFA] md:w-[25px] md:h-[25px] " />
      </div>

      =======================================
    </div>
  );
};

export default MyListing;
