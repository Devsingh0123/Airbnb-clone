import React, { useContext, useState } from "react";
import Airbnb_logo from "../assets/Airbnb_logo.png";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { useNavigate } from "react-router-dom"
import { userDataContext } from "../context/UserContext";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

const Nav = () => {
  let [showMenu, setShowMenu] = useState(false);
  let {serverUrl} = useContext(authDataContext)
  let navigate =useNavigate()

  const {userData,setUserData}=useContext(userDataContext);

  const handleLogout = async () =>{
    try {
      
      let result = await axios.post(serverUrl + "/api/auth/logout", {},{withCredentials:true})
      setUserData(null);
      console.log(result);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
      <div className="w-[100%] min-h-[88px] border-b-[1px] border-[#dcdcdc] px-[40px] flex justify-between items-center ">
        <div>
          <img src={Airbnb_logo} alt="Airbnb_logo" className="w-[130px]" />
        </div>
        <div className="w-[35%] relative hidden md:block ">
          <input
            className="w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px]"
            placeholder="Search your destination"
            type="text"
          />
          <button className=" absolute p-[10px] bg-[#FF385C]  rounded-[50%] right-[3%] top-[3px] ">
            <CiSearch className=" w-[20px] h-[20px]  text-[#FFFFFA]  " />
          </button>
        </div>
        <div className=" flex items-center justify-center gap-[10px] relative ">
          <span className=" text-[18px] cursor-pointer rounded-[50px] hover:bg-[#FF385C] hover:text-[#FFFFFA] px-[8px] py-[5px] hidden md:block">
            List your home
          </span>
          <button
            className=" px-[20px] py-[10px] flex items-center justify-center border-[1px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg "
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span>
              <GiHamburgerMenu className=" w-[20px] h-[20px] " />{" "}
            </span>
            {!userData && <span>
              <CgProfile className=" w-[20px] h-[20px] " />
            </span>}

            {userData && <span className=" w-[30px] h-[30px] bg-[#080808] text-white rounded-full pb-1 flex items-center justify-center ">
                {userData.name.slice(0,1)}
            </span>}

          </button>
          {showMenu && (
            <div className=" w-[220px] h-[250px] absolute bg-slate-50 top-[110%] border-[1px] right-[3%] md:right-[10%] border-[#aaa9a9] z-10 rounded-lg ">
              <ul>
                <li className=" w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer "onClick={()=>navigate("/login")} >
                  Login
                </li>
                <li className=" w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer " onClick={handleLogout}>
                  Logout
                </li>
                <li className=" w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer ">
                  List your home
                </li>
                <li className=" w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer ">
                  My listing
                </li>
                <li className=" w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer ">
                  Bookings
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="w-[90%] m-[10px] relative block md:hidden ">
        <input
          className="w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px]"
          placeholder="Search your destination"
          type="text"
        />
        <button className=" absolute p-[10px] bg-[#FF385C]  rounded-[50%] right-[3%] top-[3px] ">
          <CiSearch className=" w-[20px] h-[20px]  text-[#FFFFFA]  " />
        </button>
      </div>

      <div className=" w-[100%] min-h-[88px] px-[40px] flex justify-start md:justify-center  items-center cursor-pointer gap-[40px] overflow-auto px-[15px] ">
        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#dcdcdc] text-[13px] ">
          <MdWhatshot className=" w-[30px] h-[30px] text-black " />
          <h3>Tranding</h3>
        </div>
        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#dcdcdc] text-[13px] ">
          <GiFamilyHouse className=" w-[30px] h-[30px] text-black " />
          <h3>Villa</h3>
        </div>
        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#dcdcdc] text-[13px] text-nowrap ">
          <MdBedroomParent className=" w-[30px] h-[30px] text-black " />
          <h3>Farm house</h3>
        </div>
        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#dcdcdc] text-[13px] text-nowrap ">
          <MdOutlinePool className=" w-[30px] h-[30px] text-black " />
          <h3>Pool house</h3>
        </div>
        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#dcdcdc] text-[13px] ">
          <GiWoodCabin className=" w-[30px] h-[30px] text-black " />
          <h3>Rooms</h3>
        </div>
        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#dcdcdc] text-[13px] ">
          <SiHomeassistantcommunitystore className=" w-[30px] h-[30px] text-black " />
          <h3>Flat</h3>
        </div>
        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#dcdcdc] text-[13px] ">
          <IoBedOutline className=" w-[30px] h-[30px] text-black " />
          <h3>PG</h3>
        </div>
        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#dcdcdc] text-[13px] ">
          <FaTreeCity className=" w-[30px] h-[30px] text-black " />
          <h3>Cabins</h3>
        </div>
        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#dcdcdc] text-[13px] ">
          <BiSolidBuildingHouse className=" w-[30px] h-[30px] text-black " />
          <h3>Shops</h3>
        </div>
      </div>
    </div>
  );
};

export default Nav;
