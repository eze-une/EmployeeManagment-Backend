const express=require('express');
const mongoose=require('mongoose');

const connectDB=require('./config/db')
const dotenv=require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleware')
const port=process.env.PORT || 5000;

const app=express();


const cors=require("cors");
const corsOptions ={
   origin:'+', 
   credentials:true,            
   optionSuccessStatus:200,
   
}
app.options('*', cors())

//middlware
//this helps us use the rq.body
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

app.use('/api/employee',require('./routes/employeeRoutes'))
connectDB()

app.listen(port,()=> console.log(`Server started on port ${port}`));

// const cors = require("cors");

app.options(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use(cors(corsOptions))

// app.all('/api/employee/', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    next()
//  });