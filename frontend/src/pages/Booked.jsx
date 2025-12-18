import React, { useContext, useState } from "react";

import { GiConfirmed } from "react-icons/gi";
import { bookingDataContext } from "../context/BookingContext";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Star from "../Components/Star";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";
import { listingDataContext } from "../context/ListingContext";

const Booked = () => {
  let { bookingData, setBookingData } = useContext(bookingDataContext);
  let [star, setStar] = useState(null);
  let { serverUrl } = useContext(authDataContext);
  let { getCurrentUser } = useContext(userDataContext);
  let { getListing } = useContext(listingDataContext);
  let { cardDetails } = useContext(listingDataContext);
  let navigate = useNavigate();

//   console.log(bookingData);
  

  const handleStar = async (value) => {
    setStar(value);
    console.log("your rating is ", value);
  };

  const handleRating = async (id) => {
    try {
      let result = await axios.post(
        serverUrl + `/api/listing/ratings/${id}`,
        {
          ratings: star,
        },
        { withCredentials: true }
      );

      await getCurrentUser();
      await getListing();
      navigate("/");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w--[100vw] min-h-[100vh] flex items-center justify-center gap-[10px] bg-slate-200 flex-col ">
      <div className=" w-[95%] max-w-[500px] h-[400px] bg-white flex items-center justify-center border-[1px] border-[#b5b5b5] flex-col p-[20px] md:w-[80%] rounded-lg ">
        <div className=" w-[100%] h-[50%] text-[20px] flex items-center justify-center flex-col gap-[20px] font-semibold ">
          Booking Confirmed
          <div>
          <GiConfirmed className=" w-[80px] h-[80px] text-green-700 " /></div>

          <div className=" w-[100%] flex items-center justify-between text-[16px] md:text-[18px] ">
            <span>Booking Id :</span>
            <span>{bookingData._id}</span>
          </div>
          <div className=" w-[100%] flex items-center justify-between text-[16px] md:text-[18px] ">
            <span>Owner details :</span>
            <span>{bookingData.host.email}</span>
          </div>
          <div className=" w-[100%] flex items-center justify-between text-[16px] md:text-[18px] ">
            <span>Rent:</span>
            <span>{bookingData.totalRent}</span>
          </div>
        </div>
      </div>

      <div className=" w-[95%] max-w-[600px] h-[200px] bg-white flex items-center justify-center border-[1px] border-[#b5b5b5] flex-col p-[20px] md:w-[80%] rounded-lg  gap-[20px]">
        <h1 className=" text-[18px] ">{star} Out of 5 rating</h1>
       
        <Star onRate={handleStar} />
        

        <button
          className="px-[50px] py-[10px] bg-[#FF385C] text-[#FFFFFA]   text-[18px] md:px-[100px] rounded-lg mt-[20px]"
          onClick={() => {
            handleRating(cardDetails._id);
          }}
        >
          Submit
        </button>
      </div>

      <button
        className="px-[1%] py-[10px] bg-[#FF385C] text-[#FFFFFA]   text-[18px] md:px-[3%] rounded-lg mt-[20px] text-nowrap absolute top-[10px] right-[0px]"
        onClick={() => navigate("/")}
      >
        Back To Home
      </button>
    </div>
  );
};

export default Booked;
