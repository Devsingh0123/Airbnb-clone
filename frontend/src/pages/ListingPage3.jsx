import React, { useContext } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../context/ListingContext";

const ListingPage3 = () => {
  let navigate = useNavigate();

  let {
    title,
    setTitle,
    description,
    setDescription,
    frontEndImage1,
    setFrontEndImage1,
    frontEndImage2,
    setFrontEndImage2,
    backEndImage1,
    setBackEndImage1,
    backtEndImage2,
    setBackEndImage2,
    rent,
    setRent,
    city,
    setCity,
    landMark,
    setLandMark,
    category,
    setCategory, handleAddlisting,
    dataAddingLoadder, setDataAddingLoadder
  } = useContext(listingDataContext);

 
  return (
    <div className=" w-[100%] h-[100vh]  flex items-center justify-center relative overflow-auto ">
      <div
        className="w-[40px] h-[40px] cursor-pointer bg-[#FF385C] absolute  top-[5%] left-[5px] md:w-[50px] md:h-[50px] md:top-[5%] md:left-[20px]  rounded-[50%] flex items-center justify-center"
        onClick={() => navigate("/listingPage2")}
      >
        <FaLongArrowAltLeft className="w-[20px] h-[20px] text-[#FFFFFA] md:w-[25px] md:h-[25px] " />
      </div>

      <div className=" w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]  flex-col">
        <h1 className=" text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden ">
          {`In  ${landMark.toUpperCase()}, ${city.toUpperCase()} `}
        </h1>

        <div className=" w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row  ">
          <div className=" w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-white ">
            <img src={frontEndImage1} alt="image" className="w-[100%]" />
          </div>

          <div className=" w-[100%] h-[35%] md:w-[30%] h-[100%] flex items-center justify-center md:flex-col ">
            <div className=" w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]  ">
              <img src={frontEndImage2} alt="image" className="w-[100%]" />
            </div>
            <div className=" w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]  ">
              <img src={frontEndImage2} alt="image" className="w-[100%]" />
            </div>
          </div>
        </div>

        <div className=" w-[95%]  flex items-start justify-start flex-col text-[18px] md:w-[80%] md:text-[25px]">
          {`${title.toUpperCase()}, ${category.toUpperCase()},${landMark.toUpperCase()}`}
        </div>

        <div className=" w-[95%]  flex items-start justify-start flex-col text-[18px] md:w-[80%] md:text-[25px]">
          {`${description.toUpperCase()}`}
        </div>

        <div className=" w-[95%]  flex items-start justify-start flex-col text-[18px] md:w-[80%] md:text-[25px]">
          {`Rs.${rent}/day`}
        </div>

        <button
          className="px-[50px] py-[10px] bg-[#FF385C] text-[#FFFFFA]   text-[18px] md:px-[100px] rounded-lg mt-[15px]  right-[10%] bottom-[10%] "
          onClick={handleAddlisting} disabled={dataAddingLoadder}
        >
         {dataAddingLoadder? "Adding...":"Add Listing"}
        </button>

      </div>
    </div>
  );
};

export default ListingPage3;
