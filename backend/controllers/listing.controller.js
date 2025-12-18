import uploadOnCloudinary from "../config/cloudinary.js";

import Listing from "../model/listing.model.js";
import User from "../model/user.model.js";

export const addlisting = async (req, res) => {
  try {
    let host = req.userId;
    let { title, description, rent, city, landMark, category } = req.body;
    let image1 = await uploadOnCloudinary(req.files.image1[0].path);
    let image2 = await uploadOnCloudinary(req.files.image2[0].path);

    let listing = await Listing.create({
      title,
      description,
      rent,
      city,
      landMark,
      category,
      host,
      image1,
      image2,
    });

    let user = await User.findByIdAndUpdate(
      host,
      { $push: { listing: listing._id } },
      { new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ message: "user not found for adding the listings" });
    }

    res.status(201).json(listing);
  } catch (error) {
    return res.status(500).json(`addListing error = ${error}`);
  }
};

// for getting the listing data

export const getListing = async (req, res) => {
  try {
    let listing = await Listing.find().sort({ createdAt: -1 });
    return res.status(200).json(listing);
  } catch (error) {
    return res.status(200).json({ message: `getListing error , ${error}` });
  }
};

//find listing data by using listing-id

export const findListing = async (req, res) => {
  try {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
     return res.status(404).json({ message: "listing not found" });
    }
    return res.status(200).json(listing);
  } catch (error) {
    return res.status(500).json({message:`findListing error ${error}`});
  }
};

// update listing throuth id

export const updateListing = async (req, res) => {
  try {
    let { id } = req.params;
    let { title, description, rent, city, landMark, category } = req.body;
    let image1 = await uploadOnCloudinary(req.files.image1[0].path);
    let image2 = await uploadOnCloudinary(req.files.image2[0].path);

    let listing = await Listing.findByIdAndUpdate(
      id,
      {
        title,
        description,
        rent,
        city,
        landMark,
        category,
        image1,
        image2,
      },
      { new: true }
    );

    return res.status(201).json(listing);
  } catch (error) {
    return res.status(500).json({ message: `updateListing error ${error}` });
  }
};

// delete listing through id
export const deleteListing =async (req, res) => {
  try {
    let {id} = req.params
    
    let listing = await Listing.findByIdAndDelete(id)
    // console.log(listing.host);
    
    let user = await User.findByIdAndUpdate(listing.host,{
      $pull:{listing:listing._id}
    },{new:true})
    if(!user){
      return res.status(404).json({message:"user not found while delating the list"})
    }
    return res.status(201).json({message:"listing deleted"})
  } catch (error) {
    return res.status(500).json({message:`error in deleting the list ${error}`})
  }
};

// catch ratings

export const ratingListing = async (req,res) =>{
  try {
    let {id } = req.params
    let {ratings} =req.body
    let listing = await Listing.findById(id)
    if (!listing){
     return res.status(404).json({ message: "listing not found" });

    }
    listing.ratings= Number(ratings)
    await listing.save()
     return res.status(200).json({message:`RatingListing   ${listing.ratings}`})
  } catch (error) {
    return res.status(500).json({message:`RatingListing  error ${error}`});
  }
} 
