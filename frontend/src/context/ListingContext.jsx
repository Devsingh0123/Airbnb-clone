import React, { useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios"
import { authDataContext } from "./AuthContext";

export const listingDataContext = createContext();

const ListingContext = ({ children }) => {

    let [title, setTitle] =useState("")
    let [description, setDescription] =useState("")
    let [frontEndImage1, setFrontEndImage1] =useState(null)
    let [frontEndImage2, setFrontEndImage2] =useState(null)
    let [backEndImage1, setBackEndImage1] =useState(null)
    let [backtEndImage2, setBackEndImage2] =useState(null)
    let [rent, setRent] =useState("")
    let [city, setCity] =useState("")
    let [landMark, setLandMark] =useState("")
    let [category, setCategory] =useState("")

    let {serverUrl }=useContext(authDataContext)

 const handleAddlisting = async () => {

    try {
        

           let formData = new FormData();
    formData.append("title",title)
    formData.append("description",description)
    formData.append("backEndImage1",backEndImage1)
    formData.append("backtEndImage2",backtEndImage2)
    formData.append("rent",rent)
    formData.append("city",city)
    formData.append("landMark",landMark)
    formData.append("category",category)
    
      let result = await axios.post(serverUrl + "/api/listing/add",formData,{withCredentials:true})

        console.log(result);
        
    } catch (error) {
        console.log(`lidtingContext error  ${error}`);
        
    }
 }
 
 let value = {
       title, setTitle,
       description, setDescription,
       frontEndImage1, setFrontEndImage1,
       frontEndImage2, setFrontEndImage2,
       backEndImage1, setBackEndImage1,
       backtEndImage2, setBackEndImage2,
       rent, setRent,
        city, setCity,
        landMark, setLandMark,
        category, setCategory,
        handleAddlisting
  };
  return (
    <div>
      <listingDataContext.Provider value={value}>
        {children}
      </listingDataContext.Provider>
    </div>
  );
};

export default ListingContext;
