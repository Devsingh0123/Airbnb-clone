import uploadOnCloudinary from "../config/cloudinary";

import Listing from "../model/listing.model.js";
import User from "../model/user.model.js";

export const addalisting = async (req, res) => {
  try {
    let host = req.userId;
    let { title, description, rent, city, landMark, category } = req.body;
    let image1 = await uploadOnCloudinary(req.files.image1[0].path);
    let image2 = await uploadOnCloudinary(req.files.image2[0].path);

    let listing = Listing.create({
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
