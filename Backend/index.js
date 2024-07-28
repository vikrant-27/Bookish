import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


import bookRoute from './route/book.route.js'
const app = express();
dotenv.config();


const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;
console.log(PORT)

// try{
//   mongoose.connect(MONGO_URI,{
//   });
//   console.log("connected to mongoDB")     try catch simple mtd

// }
// catch(error){
// console.log("Error ",error )
// }

///////////////////////// Connect to mongoDB //////////////////////////////////

mongoose.connect(MONGO_URI, {
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("Error connecting to MongoDB:", error);
});


app.use("/book",bookRoute)

app.listen(PORT, () => {
  console.log(`Bookish app listening on port ${PORT}`);
},);