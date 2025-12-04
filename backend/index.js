import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
dotenv.config();

let app = express();
let port = process.env.PORT || 7000;



app.get("/", (req, res)=>{
res.send("hello this is server")
})

app.listen(port , ()=>{
    connectDb();
    console.log(`server start at ${port}`)
})