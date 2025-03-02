import mongoose from "mongoose";

export const connectdb=async()=>{
   try{
    await mongoose.connect(process.env.mongo_uri);
    console.log("database conneceted");
   }
   catch(error)
   {
console.log(error);
   }
};
