import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import { connectdb } from "./db/dbcon.js";
import router from "./routes/reg.js";
dotenv.config();
connectdb();
const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/user",router);
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})