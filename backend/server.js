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

// Dilshan

const itemsRouter = require("./routes/items");
app.use("/inventory",itemsRouter);

const categoryRouter = require("./routes/category");
app.use("/category",categoryRouter);

const supplierRouter = require("./routes/supplier");
app.use("/supplier",supplierRouter);


// Hashen
const BookingRouter = require("./routes/booking.js");
const CustomerRouter = require("./routes/customer.js");
const loMembershipRouter = require("./routes/loMembership.js");
const loMemberRouter = require("./routes/loMember.js");
const roomTypeRouter = require("./routes/roomType.js");

app.use("/booking",BookingRouter);
app.use("/customer",CustomerRouter);
app.use("/loMembership",loMembershipRouter);
app.use("/loMember",loMemberRouter);
app.use("/roomType",roomTypeRouter);






//Lahiru Routes
const travelAgentntRouter = require("./routes/Travel_Agency.js");
app.use("/Travel_Agency", travelAgentntRouter);

app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`)
})
