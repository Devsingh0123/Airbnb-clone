import React, { useContext } from "react";
import Nav from "../Components/Nav";
import { listingDataContext } from "../context/ListingContext";
import Card from "../Components/Card";

const Home = () => {
  let { getListingData, setGetListingData,newGetListingData, setNewGetListingData } = useContext(listingDataContext);
  return (
    <div>
      <Nav />
      <div className=" w-[100vw] h-[75vh] flex items-center justify-center gap-[25px] flex-wrap mt-[250px] md:mt-[180px] ">
        {newGetListingData.map((list) => (
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
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
