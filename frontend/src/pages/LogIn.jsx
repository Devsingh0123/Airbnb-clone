import React, { useContext, useState } from "react";

import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { userDataContext } from "../context/UserContext";


const LogIn = () => {
  let [show, setShow] = useState(false);
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let { serverUrl } = useContext(authDataContext);

  let { userData, setUserData } = useContext(userDataContext);

  // console.log(userData);
  

  // console.log(email);
  // console.log(password);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      // console.log(result.data);
      setUserData(result.data);
      navigate("/");
      setEmail("")
      setPassword("")
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center relative ">
      <div
        className="w-[40px] h-[40px] cursor-pointer bg-[#FF385C] absolute  top-[5%] left-[5px] md:w-[50px] md:h-[50px] md:top-[10%] md:left-[20px]  rounded-[50%] flex items-center justify-center "
        onClick={() => navigate("/")}
      >
        <FaLongArrowAltLeft className="w-[20px] h-[20px] text-[#FFFFFA] md:w-[25px] md:h-[25px] " />
      </div>

      <form
        action=""
        className=" max-w-[900px] w-[90%] h-[600px] flex  flex-col justify-center items-center md:items-start gap-[10px]  "
        onSubmit={handleLogin}
      >
        <h1 className="text-[30px] text-[black]  ">Welcome to Airbnb</h1>

        <div className="w-[90%] flex items-start justify-start gap-[10px] flex-col mt-[30px] ">
          <label className="text-[20px]" htmlFor="email">
            Email
          </label>
          <input
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px] text-[18px]"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-[90%] flex items-start justify-start gap-[10px] flex-col relative ">
          <label className="text-[20px]" htmlFor="password">
            Password
          </label>
          <input
            className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg px-[20px] text-[18px]"
            type={show ? "text" : "password"}
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!show && (
            <MdRemoveRedEye
              className="w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer "
              onClick={() => setShow((prev) => !prev)}
            />
          )}

          {show && (
            <IoEyeOff
              className="w-[22px] h-[22px] absolute right-[12%] bottom-[10px]  cursor-pointer "
              onClick={() => setShow((prev) => !prev)}
            />
          )}
        </div>
        <button className="px-[50px] py-[10px] bg-[#FF385C] text-[#FFFFFA]   text-[18px] md:px-[100px] rounded-lg mt-[20px] cursor-pointer">
          Login
        </button>
        <p className="text-[18px]">
          Not have an acccount?{" "}
          <span
            className="text-[20px] text-[#FF385C] cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            SignUp
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
