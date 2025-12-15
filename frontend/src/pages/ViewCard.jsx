import React from "react";
import { useContext } from "react";
import { listingDataContext } from "../context/ListingContext";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
import { use } from "react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";

const ViewCard = () => {
  let navigate = useNavigate();
  let [editListingPopUp, setEditListingPopUp] = useState(false);

  let {
    cardDetails,
    setCardDetails,
    dataUpdatingLoadder,
    setDataUpdatingLoadder,dataDeletingLoadder, setDataDeletingLoadder
  } = useContext(listingDataContext);
  let { userData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);

  let [title, setTitle] = useState(cardDetails.title);
  let [description, setDescription] = useState(cardDetails.description);
  let [backEndImage1, setBackEndImage1] = useState(null);
  let [backtEndImage2, setBackEndImage2] = useState(null);
  let [rent, setRent] = useState(cardDetails.rent);
  let [city, setCity] = useState(cardDetails.city);
  let [landMark, setLandMark] = useState(cardDetails.landMark);

  //sending the listing data
  const handleUpdatelisting = async () => {
    try {
      setDataUpdatingLoadder(true);

      let formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image1", backEndImage1);
      formData.append("image2", backtEndImage2);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landMark", landMark);

      // console.log(cardDetails._id);

      let result = await axios.post(
        serverUrl + `/api/listing/update/${cardDetails._id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // console.log(result);

      setDataUpdatingLoadder(false);
      navigate("/");

      setTitle("");
      setDescription("");

      setBackEndImage1(null);
      setBackEndImage2(null);
      setRent("");
      setCity("");
      setLandMark("");
    } catch (error) {
      setDataUpdatingLoadder(false);
      console.log(`handleUpdateListing error  ${error}`);
    }
  };

  const handleImage1 = (e) => {
    let file = e.target.files[0];

    setBackEndImage1(file);
  };

  const handleImage2 = (e) => {
    let file = e.target.files[0];

    setBackEndImage2(file);
  };

  // delete listing handler function
  const handleDeleteListing = async () => {
    try {
      setDataDeletingLoadder(true)
      let result = await axios.delete(
        serverUrl + `/api/listing/deleteListingById/${cardDetails._id}`,
        {
          withCredentials: true,
        }
      );
        setDataDeletingLoadder(false)
        navigate("/")
      console.log(result.data);
      
    } catch (error) {
      setDataDeletingLoadder(false)
      console.log(`handleDeleteListing error ${error}`)
    }
  };

  return (
    <div className=" w-[100vw] h-[100vh]  flex items-center justify-center relative overflow-auto ">
      <div
        className="w-[40px] h-[40px] cursor-pointer bg-[#FF385C] absolute  top-[5%] left-[5px] md:w-[50px] md:h-[50px] md:top-[5%] md:left-[20px]  rounded-[50%] flex items-center justify-center "
        onClick={() => navigate("/")}
      >
        <FaLongArrowAltLeft className="w-[20px] h-[20px] text-[#FFFFFA] md:w-[25px] md:h-[25px] " />
      </div>

      <div className=" w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]  flex-col mt-[10%] md:mt-0">
        <h1 className=" text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden ">
          {`In  ${cardDetails.landMark.toUpperCase()}, ${cardDetails.city.toUpperCase()} `}
        </h1>

        <div className=" w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row  ">
          <div className=" w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-white ">
            <img src={cardDetails.image1} alt="image" className="w-[100%]" />
          </div>

          <div className=" w-[100%] h-[35%] md:w-[30%] h-[100%] flex items-center justify-center md:flex-col ">
            <div className=" w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]  ">
              <img src={cardDetails.image2} alt="image" className="w-[100%]" />
            </div>
            <div className=" w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]  ">
              <img src={cardDetails.image2} alt="image" className="w-[100%]" />
            </div>
          </div>
        </div>

        <div className=" w-[95%]  flex items-start justify-start flex-col text-[18px] md:w-[80%] md:text-[25px]">
          {`${cardDetails.title.toUpperCase()}, ${cardDetails.category.toUpperCase()},${cardDetails.landMark.toUpperCase()}`}
        </div>

        <div className=" w-[95%]  flex items-start justify-start flex-col text-[18px] md:w-[80%] md:text-[25px]">
          {`${cardDetails.description.toUpperCase()}`}
        </div>

        <div className=" w-[95%]  flex items-start justify-start flex-col text-[18px] md:w-[80%] md:text-[25px]">
          {`Rs.${cardDetails.rent}/day`}
        </div>

        {cardDetails.host == userData._id && (
          <button
            className="px-[50px] py-[10px] bg-[#FF385C] text-[#FFFFFA]   text-[18px] md:px-[100px] rounded-lg mt-[15px]  right-[10%] bottom-[10%] "
            onClick={() => setEditListingPopUp((prev) => !prev)}
          >
            Edit Listing
          </button>
        )}
        {cardDetails.host != userData._id && (
          <button className="px-[50px] py-[10px] bg-[#FF385C] text-[#FFFFFA]   text-[18px] md:px-[100px] rounded-lg mt-[15px]  right-[10%] bottom-[10%] ">
            Book Now
          </button>
        )}

        {/* edit or update listing popUp */}

        {editListingPopUp && (
          <div className=" w-[100vw] h-[100vh] flex items-center justify-center bg-[#000000e2] absolute top-[0px] left-[0%] z-[100] ">
            <RxCross1
              className="w-[30px] h-[30px] cursor-pointer bg-[#FF385C] absolute  top-[5%] right-[5%] md:w-[50px] md:h-[50px] md:top-[5%] md:right-[5%]  rounded-[50%] flex items-center justify-center text-white p-1.5 "
              onClick={() => setEditListingPopUp(false)}
            />
            <form
              action=""
              className="max-w-[900px] w-[90%] h-[500px] flex  flex-col justify-start items-center mt-[50px] rounded-lg gap-[10px] overflow-auto text-white bg-[#272727] p-[20px]"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <div className="w-[200px] h-[50px] text-[20px] bg-[#FF385C] text-[#FFFFFA] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[45%] shadow-lg ">
                Update Your Home
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

              <div className=" w-[90%] flex justify-between items-center">
                <button
                  className="px-[50px] py-[10px] bg-[#FF385C] text-[#FFFFFA]   text-[18px] md:px-[100px] rounded-lg mt-[20px] text-nowrap"
                  onClick={handleUpdatelisting}
                  disabled={dataUpdatingLoadder}
                >
                  {dataUpdatingLoadder ? "Updating..." : "Update Listing"}
                </button>
                <button
                  className="px-[50px] py-[10px] bg-[#FF385C] text-[#FFFFFA]   text-[18px] md:px-[100px] rounded-lg mt-[20px] text-nowrap"
                  onClick={handleDeleteListing}
                  disabled={dataDeletingLoadder}
                >
                  {dataDeletingLoadder?"Deleting...":"Delete Listing"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCard;
