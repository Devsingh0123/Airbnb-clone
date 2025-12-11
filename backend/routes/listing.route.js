import express from "express"

import isAuth from "../middleware/isAuth.js"
import upload from "../middleware/multer.js";
import { addalisting } from "../controllers/listing.controller.js";

let listingRouter = express.Router();

listingRouter.post("/add",isAuth,upload.fields([
    {name :"image1",maxCount:1},
    {name :"image2",maxCount:1}
]),addalisting)


export default listingRouter


