import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

const uploadOnCloudinary = (filePath) => {
  try {
    cloudinary.config({
      cloud_name: "dqzxhcvzn",
      api_key: "163896172298365",
      api_secret: "<your_api_secret>",
    });

    
  } catch (error) {}
};
