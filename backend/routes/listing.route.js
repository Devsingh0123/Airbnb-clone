import express from "express"

import isAuth from "../middleware/isAuth.js"
import upload from "../middleware/multer.js";
import { addlisting, deleteListing, findListing, getListing, ratingListing, updateListing } from "../controllers/listing.controller.js";

let listingRouter = express.Router();

listingRouter.post("/add",isAuth,upload.fields([
    {name :"image1",maxCount:1},
    {name :"image2",maxCount:1}
]),addlisting)

listingRouter.get ("/get",getListing)
listingRouter.get ("/findListingById/:id",isAuth,findListing)

listingRouter.post("/update/:id",isAuth,upload.fields([
    {name :"image1",maxCount:1},
    {name :"image2",maxCount:1} 
]),updateListing)

listingRouter.delete ("/deleteListingById/:id",isAuth,deleteListing)
listingRouter.post ("/ratings/:id",isAuth,ratingListing)

export default listingRouter


