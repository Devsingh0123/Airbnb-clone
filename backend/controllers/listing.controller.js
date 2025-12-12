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
      res.status(404).json({message:"user not found for adding the listings"});
    }

    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json(`addListing error = ${error}`);
  }
};

// for getting the listing data

export const getListing =async (req,res)=>{

  try {
    let listing =await Listing.find().sort({createdAt:-1})
    res.status(200).json(listing)
  } catch (error) {
    res.status(200).json({message:`getListing error , ${error}`})
  }
}
