var mongoose=require("../config/db");
//SCHEMA
var BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
  }); 
var Book = mongoose.model('Book', BookSchema, "books"); //MODEL
module.exports=Book;