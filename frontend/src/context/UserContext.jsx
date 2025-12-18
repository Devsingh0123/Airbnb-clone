import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { authDataContext } from "./AuthContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
export const userDataContext = createContext();

const UserContext = ({ children }) => {
  let { serverUrl } = useContext(authDataContext);
  let [userData, setUserData] = useState(null);
   

  //   console.log(serverUrl);

  const getCurrentUser = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/currentuser", {
        withCredentials: true,
      });
      toast.success("find current user successful")
      // console.log(result.data);

      setUserData(result.data)
    } catch (error) {
      toast.error("current user not found")
      setUserData(null);
      console.log(error);
    } 
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  let value = {
    userData,
    setUserData,
    getCurrentUser
  };

  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  );
};

export default UserContext;
