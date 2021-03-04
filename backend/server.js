const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require ('dotenv');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
 
const URL= process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
const connection =mongoose.connection;
connection.once("open", ()=>{
    console.log("connection success")
})

//routes

const itemsRouter = require("./routes/items");
app.use("/inventory",itemsRouter);

const categoryRouter = require("./routes/category");
app.use("/category",categoryRouter);





app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`)
})
