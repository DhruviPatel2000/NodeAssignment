var express = require('express');  
var app = express(); 
require('dotenv').config()
var BookRoute=require("./routes/BookRoute")

 const cors=require("cors");
 app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use("/books",BookRoute)	
//http://localhost:8000/books
app.listen(8000);

//change with app.post app.get . test with postman
// make another application with model route and controller separate