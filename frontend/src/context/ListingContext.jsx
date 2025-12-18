import React, { useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const listingDataContext = createContext();

const ListingContext = ({ children }) => {
  let navigate = useNavigate();

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [frontEndImage1, setFrontEndImage1] = useState(null);
  let [frontEndImage2, setFrontEndImage2] = useState(null);
  let [backEndImage1, setBackEndImage1] = useState(null);
  let [backtEndImage2, setBackEndImage2] = useState(null);
  let [rent, setRent] = useState("");
  let [city, setCity] = useState("");
  let [landMark, setLandMark] = useState("");
  let [category, setCategory] = useState("");
  let [dataAddingLoadder, setDataAddingLoadder] = useState(false);
  let [dataUpdatingLoadder, setDataUpdatingLoadder] = useState(false);
  let [dataDeletingLoadder, setDataDeletingLoadder] = useState(false);
  let [getListingData, setGetListingData] = useState([]);
  let [newGetListingData, setNewGetListingData] = useState([]);
  let [cardDetails, setCardDetails] = useState(null);


  let { serverUrl } = useContext(authDataContext);

  //sending the listing data
  const handleAddlisting = async () => {
    try {
      setDataAddingLoadder(true);

      let formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image1", backEndImage1);
      formData.append("image2", backtEndImage2);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landMark", landMark);
      formData.append("category", category);

      let result = await axios.post(serverUrl + "/api/listing/add", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(result);

      setDataAddingLoadder(false);
      navigate("/");

      setTitle("");
      setDescription("");
      setFrontEndImage1(null);
      setFrontEndImage2(null);
      setBackEndImage1(null);
      setBackEndImage2(null);
      setRent("");
      setCity("");
      setLandMark("");
      setCategory("");
    } catch (error) {
       setDataAddingLoadder(false);
      console.log(`listingContext error  ${error}`);
    }
  };

  // gatting the listing data

  const getListing = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/listing/get", {
        withCredentials: true,
      });
      toast.success("get all Listing data successful")
      setGetListingData(result.data);
      setNewGetListingData(result.data);
    } catch (error) {
      toast.error("something went wrong while getting all list data")
      console.log("error in getListingData", error);
    }
  };

  const handleViewCard = async (id)=>{
    try {
      let result =await axios.get(serverUrl + `/api/listing/findListingById/${id}`,{ withCredentials: true,})
         toast.success("get Listing successful")
      // console.log(result);

      setCardDetails(result.data)
      navigate("/viewcard")
      
    } catch (error) {
      toast.error("something went wrong while getting list")
      console.log(error);
    }

  }

  useEffect(() => {
   getListing()
  }, [dataAddingLoadder,dataUpdatingLoadder,dataDeletingLoadder])
  

  let value = {
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
    handleAddlisting,
    dataAddingLoadder, setDataAddingLoadder,
    getListingData,
    setGetListingData,
    getListing,newGetListingData, setNewGetListingData,handleViewCard,cardDetails, setCardDetails,dataUpdatingLoadder, setDataUpdatingLoadder,dataDeletingLoadder, setDataDeletingLoadder
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
