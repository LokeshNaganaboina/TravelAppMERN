const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const hotelRouter = require('./routes/hotel.router');
const categoryRouter  =require('./routes/category.router');
const singleHotelRouter = require('./routes/singlehotel.router');
const authRouter = require('./routes/auth.router')
const wishlistRouter = require('./routes/wishlist.router')

const hotelDataRouter = require('./routes/dataimport.router');
const categoryDataRouter = require('./routes/categoryimport.router');


const connectDB = require('./config/dbconfig');

const app = express();
app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/",(req,res)=>{
    res.send("Hey there!! I am Lokesh ")
})

app.use(cors());

app.use('/api/hotelData', hotelDataRouter)
app.use('/api/categorydata',categoryDataRouter)
app.use('/api/hotels',hotelRouter)
app.use('/api/category',categoryRouter)
app.use('/api/hotels',singleHotelRouter)
app.use('/api/auth',authRouter)
app.use('/api/wishlist',wishlistRouter)

mongoose.connection.once("open",()=>{
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, ()=>{
        console.log("Server in use")
    })
})