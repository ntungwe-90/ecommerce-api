const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser")

const dotenv = require("dotenv").config();
require("dotenv").config();
const ecormmerceRoute = require("./routes/apiRoutes");



 const PORT = process.env.PORT || 8070;

 const app = express();


//middlewares
app.use(cors({
   credentials: true,
   origin: "http: //localhost: 3000",
   methods: "GET, POST, OPTIONS, PUT, DELETE"
}))

//
app.use(morgan("dev"))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))


//adding multer image upload
app.use(express.static("images"));
app.use("/images", express.static("images"))


//routes middleware
app.use(ecormmerceRoute);













 const mongoUri = process.env.MongoURL;

 mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true })
 .then(result => {
    if(result)
console.log("I have connected my ecommerce application to the database")

 }).catch(err => {
    console.log(err)
 })

 app.listen(PORT,  () => console.log(`server running on ${8070}`))
    
