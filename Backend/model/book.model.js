import mongoose from "mongoose";

const bookschema=mongoose.Schema({
    name:String,
    price:Number,
    title:String,
    category:String,
    image:String,
})

const Book = mongoose.model("Book",bookschema);

export default Book;