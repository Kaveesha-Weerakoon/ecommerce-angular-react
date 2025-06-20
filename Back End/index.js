const express = require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
require('dotenv').config();

const CustomerRoute=require('./route/CustomerRoute');
const OrderRoute=require('./route/OrderRoute');


const app=express();
const port=process.env.PORT||3000;

// app.use(bodyParser.urlencoded({ extended: false }))
//
// app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

app.use('/api/v1/order',OrderRoute);
app.use('/api/v1/customer',CustomerRoute);

mongoose.connect('mongodb://localhost:27017/Finalproject').then(()=>{
    app.listen(port,()=>{
        console.log(`Final Project up and running on prt number ${port}`)
    });
}).catch(error=>{
    console.log(error)
});

