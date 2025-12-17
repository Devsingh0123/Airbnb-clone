import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { userDataContext } from "../context/UserContext";
import Card from "../Components/Card";

const MyListing = () => {

    let navigate = useNavigate();
    let {userData,setUserData} = useContext(userDataContext);


    console.log(userData);
    
  return (
    <div className="w-screen h-screen flex items-center justify-start gap-[50px] relative flex-col">
     
      <div
        className="w-[40px] h-[40px] cursor-pointer bg-[#FF385C] absolute  top-[5%] left-[5px] md:w-[50px] md:h-[50px] md:top-[5%] md:left-[20px]  rounded-[50%] flex items-center justify-center "
        onClick={() => navigate("/")}
      >
        <FaLongArrowAltLeft className="w-[20px] h-[20px] text-[#FFFFFA] md:w-[25px] md:h-[25px] " />
      </div>

      <div className=" w-[50%] h-[10%] border-[2px] border-[#FF385C] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#4a3434] font-semibold mt-[20px] md:w-[600px] ">MY LISTING</div>
      


      <div className=" w-[100%] h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px]">

      {userData.listing.map((list, i) => (
          <Card
            title={list.title}
            description={list.description}
            image1={list.image1}
            image2={list.image2}
            rent={list.rent}
            city={list.city}
            landMark={list.landMark}
            category={list.category}
            id={list._id}
            key={i}
            isBooked={list.isBooked}
            host={list.host}
            ratings={list.ratings}

            
          />
        ))}
        
      </div>
    </div>
  );
};

export default MyListing;
