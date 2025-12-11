import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiSolidBuildingHouse } from "react-icons/bi";

const ListingPage2 = () => {
  let navigate = useNavigate();
  return (
    <div className=" w-[100%] h-[100vh]  flex items-center justify-center relative overflow-auto ">
      <div
        className="w-[40px] h-[40px] cursor-pointer bg-[#FF385C] absolute  top-[5%] left-[5px] md:w-[50px] md:h-[50px] md:top-[5%] md:left-[20px]  rounded-[50%] flex items-center justify-center cursor-pointer"
        onClick={() => navigate("/listingPage1")}
      >
        <FaLongArrowAltLeft className="w-[20px] h-[20px] text-[#FFFFFA] md:w-[25px] md:h-[25px] " />
      </div>

      <div className="w-[200px] h-[50px] text-[20px] bg-[#FF385C] text-[#FFFFFA] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg ">
        Set your category
      </div>

      <div className="max-w-[900px] w-[100%] h-[500px] flex justify-start items-center gap-[40px] mt-[30px] flex-col bg-[#FFFFFA] overflow-auto ">
        <h1 className=" text-[18px] text-blackmd:text-[30px] ">Choose your desire</h1>

      <div className="max-w-[900px] w-[100%] flex flex-wrap  justify-center items-center gap-[15px] md:w-[70%]  ">
        
        <div className=" w-[180px] h-[100px] flex items-center justify-center flex-col border-[2px] hover:border-[#a6a5a5] text-[13px] rounded-lg  ">
          <GiFamilyHouse className=" w-[30px] h-[30px] text-black " />
          <h3>Villa</h3>
        </div>
        


           <div className=" w-[180px] h-[100px] flex items-center justify-center flex-col border-[2px] hover:border-[#a6a5a5] text-[13px] rounded-lg  ">
         <MdBedroomParent className=" w-[30px] h-[30px] text-black " />
            <h3>Farm house</h3>
        </div>


         <div className=" w-[180px] h-[100px] flex items-center justify-center flex-col border-[2px] hover:border-[#a6a5a5] text-[13px] rounded-lg  ">
          <MdOutlinePool className=" w-[30px] h-[30px] text-black " />
            <h3>Pool house</h3>
        </div>

         <div className=" w-[180px] h-[100px] flex items-center justify-center flex-col border-[2px] hover:border-[#a6a5a5] text-[13px] rounded-lg  ">
           <GiWoodCabin className=" w-[30px] h-[30px] text-black " />
            <h3>Rooms</h3>
        </div>


         <div className=" w-[180px] h-[100px] flex items-center justify-center flex-col border-[2px] hover:border-[#a6a5a5] text-[13px] rounded-lg  ">
          <SiHomeassistantcommunitystore className=" w-[30px] h-[30px] text-black " />
            <h3>Flat</h3>
        </div>


         <div className=" w-[180px] h-[100px] flex items-center justify-center flex-col border-[2px] hover:border-[#a6a5a5] text-[13px] rounded-lg  ">
         <IoBedOutline className=" w-[30px] h-[30px] text-black " />
            <h3>PG</h3>
        </div>


         <div className=" w-[180px] h-[100px] flex items-center justify-center flex-col border-[2px] hover:border-[#a6a5a5] text-[13px] rounded-lg  ">
         <FaTreeCity className=" w-[30px] h-[30px] text-black " />
            <h3>Cabins</h3>
        </div>


         <div className=" w-[180px] h-[100px] flex items-center justify-center flex-col border-[2px] hover:border-[#a6a5a5] text-[13px] rounded-lg  ">
         <BiSolidBuildingHouse className=" w-[30px] h-[30px] text-black " />
            <h3>Shops</h3>
        </div>

      </div>
      <button className="px-[50px] py-[10px] bg-[#FF385C] text-[#FFFFFA]   text-[18px] md:px-[100px] rounded-lg mt-[15px]  right-[10%] bottom--[10%] ">
          Next
        </button>
      </div>
    </div>
  );
};

export default ListingPage2;
