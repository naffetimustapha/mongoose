// 1 require express 
const express = require ("express");


// 2 create an instance
const app = express ();

// 5 require dotenv
require("dotenv").config();



 //8 middleware bodyparser
 app.use(express.json())

//6 connect DB
const connectDB=require ('./config/connectDB')
connectDB();



//7 routes
app.use("/api/contact",require ("./routes/contact"))

// 3 create PORT
const PORT = process.env.PORT



 //4 create server 
app.listen(PORT,error =>{
    error? console.error (`FAILED TO CONNECT   ${error}`)
    : console.log(`running on port ${PORT} ...`);

})