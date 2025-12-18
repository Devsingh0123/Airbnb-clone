import React, { useState } from "react";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext";
import { listingDataContext } from "../context/ListingContext";
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { bookingDataContext } from "../context/BookingContext";

const Card = ({
  title,
  description,
  image1,
  image2,
  rent,
  city,
  landMark,
  category,
  id,
  ratings,
  isBooked,
  host,
}) => {
  let navigate = useNavigate();
  let { userData } = useContext(userDataContext);
  let { handleViewCard } = useContext(listingDataContext);
  let { cancelBooking } = useContext(bookingDataContext);

  let [yesNoPopUp, setYesNoPopUP] = useState(false);

  const handleClick = () => {
    if (userData) {
      handleViewCard(id);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className=" w-[330px] h-[460px] max-w-[85%] flex items-start justify-start flex-col rounded-lg cursor-pointer relative z-[10] "
      onClick={isBooked ? null : handleClick}
    >
      {isBooked && (
        <div className=" text-green-700 bg-white rounded-lg absolute flex items-center justify-center right-1 top-1 gap-[5px] p-[5px] ">
          <GiConfirmed className=" w-[20px] h-[20px] text-green-700 " />
          Booked
        </div>
      )}

      {isBooked && host == userData?._id && (
        <div
          className=" text-red-700 bg-white rounded-lg absolute flex items-center justify-center right-1 top-[50px] gap-[5px] p-[5px] "
          onClick={() => setYesNoPopUP((prev) => !prev)}
        >
          <FcCancel className=" w-[20px] h-[20px] " />
          Cancel
        </div>
      )}

      {yesNoPopUp && (
        <div className=" w-[300px] h-[100px] bg-[#ffffffdf] absolute top-[110px] left-[13px] rounded-lg ">
          <div className=" w-[100%] h-[50%] text-[#2e2d2d] flex items-start justify-center rounded-lg overflow-auto text-[20px] p-[10px]  ">
            Booking Cancel
          </div>
          <div className=" w-[100%] h-[50%] text-[18px] font-semibold flex items-start justify-center gap-[10px] text-[#986b6b]  ">
            Are you sure ?
            <button
              className=" px-[20px] bg-red-700 text-white rounded-lg hover:bg-slate-600 "
              onClick={() => {
                cancelBooking(id);
                setYesNoPopUP((prev) => !prev);
              }}
            >
              Yes
            </button>
            <button
              className=" px-[20px] bg-red-700 text-white rounded-lg hover:bg-slate-600 "
              onClick={() => setYesNoPopUP((prev) => !prev)}
            >
              No
            </button>
          </div>
        </div>
      )}

      <div className=" w-[100%] h-[67%] rounded-lg overflow-auto  flex ">
        <img src={image1} alt="image" />
        <img src={image2} alt="image" />
      </div>

      <div className=" w-[100%] h-[33%] py-[20px] flex flex-col gap-[2px] ">
        <div className=" flex items-center justify-between text-[18px] ">
          <span className=" w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434] ">
            IN {landMark.toUpperCase()}, {city.toUpperCase()}
          </span>
          <span className=" flex items-center justify-center gap-[5px] ">
            <CiStar className=" text-[#FF385C] " />
            {ratings}
          </span>
        </div>
        <span className=" w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434] ">
          {title.toUpperCase()}
        </span>
        <span className=" w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434] ">
          Rs.{rent}/day
        </span>
        <span className=" w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434] ">
          {description.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default Card;
