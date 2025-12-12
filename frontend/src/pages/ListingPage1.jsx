import React, { useContext } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../context/ListingContext";

const ListingPage1 = () => {
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
    setCategory,
  } = useContext(listingDataContext);

  const handleImage1 = (e) => {
    
    
    let file = e.target.files[0];
   

    setBackEndImage1(file);
    setFrontEndImage1(URL.createObjectURL(file));

    
    
  };

  const handleImage2 = (e) => {
    let file = e.target.files[0];

    setBackEndImage2(file);
    setFrontEndImage2(URL.createObjectURL(file));
  };

  return (
    <div className=" w-[100%] h-[100vh]  flex items-center justify-center relative overflow-auto ">
      <form
        action=""
        className="max-w-[900px] w-[90%] h-[500px] flex  flex-col justify-start items-center mt-[50px] md:items-start gap-[10px] overflow-auto"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/listingpage2");
        }}
      >
        <div
          className="w-[40px] h-[40px] cursor-pointer bg-[#FF385C] absolute  top-[5%] left-[5px] md:w-[50px] md:h-[50px] md:top-[5%] md:left-[20px]  rounded-[50%] flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FaLongArrowAltLeft className="w-[20px] h-[20px] text-[#FFFFFA] md:w-[25px] md:h-[25px] " />
        </div>
        <div className="w-[200px] h-[50px] text-[20px] bg-[#FF385C] text-[#FFFFFA] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg ">
          SetUp your home
        </div>

        <div className="w-[90%] flex items-start justify-start gap-[10px] flex-col mt-[30px] ">
          <label className="text-[20px] " htmlFor="title">
            Title
          </label>
          <input
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px] text-[18px]"
            type="text"
            id="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="name of property or title"
          />
        </div>

        <div className="w-[90%] flex items-start justify-start gap-[10px] flex-col ">
          <label className="text-[20px] " htmlFor="description">
            Description
          </label>

          <textarea
            name=""
            id="description"
            className="w-[90%] h-[80px] border-[2px] border-[#555656] rounded-lg px-[20px] text-[18px]"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <div className="w-[90%] flex items-start justify-center gap-[10px] flex-col  ">
          <label className="text-[20px] " htmlFor="image1">
            Image1
          </label>
          <div className=" flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px] ">
            <input
              className="w-[100%]  px-[10px] text-[15px]  file:bg-[#FF385C] file:rounded-md file:px-2 file:py-1 file:cursor-pointer"
              type="file"
              id="image1"
              required
              onChange={handleImage1}
              name="image1"
            />
          </div>
        </div>

        <div className="w-[90%] flex items-start justify-center gap-[10px] flex-col  ">
          <label className="text-[20px] " htmlFor="image2">
            Image2
          </label>
          <div className=" flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px] ">
            <input
              className="w-[100%]  px-[10px] text-[15px] file:bg-[#FF385C] file:rounded-md file:px-2 file:py-1 file:cursor-pointer"
              type="file"
              id="image2"
              required
              onChange={handleImage2}
              name="image2"
            />
          </div>
        </div>

        <div className="w-[90%] flex items-start justify-start gap-[10px] flex-col ">
          <label className="text-[20px] " htmlFor="rent">
            Rent
          </label>
          <input
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px] text-[18px]"
            type="number"
            id="rent"
            required
            onChange={(e) => setRent(e.target.value)}
            value={rent}
            placeholder="Rs._______/day"
          />
        </div>

        <div className="w-[90%] flex items-start justify-start gap-[10px] flex-col ">
          <label className="text-[20px] " htmlFor="city">
            City
          </label>
          <input
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px] text-[18px]"
            type="text"
            id="city"
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="city,state,country"
          />
        </div>

        <div className="w-[90%] flex items-start justify-start gap-[10px] flex-col ">
          <label className="text-[20px] " htmlFor="landmark">
            Landmark
          </label>
          <input
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px] text-[18px]"
            type="text"
            id="landmark"
            required
            onChange={(e) => setLandMark(e.target.value)}
            value={landMark}
          />
        </div>
        <button className="px-[50px] py-[10px] bg-[#FF385C] text-[#FFFFFA]   text-[18px] md:px-[100px] rounded-lg mt-[20px]">
          Next
        </button>
      </form>
    </div>
  );
};

export default ListingPage1;






