const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());



const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connectection = mongoose.connection;
connectection.once("open", () => {
    console.log("Mongodb Conncetion success!");  
});


const BookingRouter = require("./routes/booking.js");
const CustomerRouter = require("./routes/customer.js");
const loMembershipRouter = require("./routes/loMembership.js");
const loMemberRouter = require("./routes/loMember.js");

app.use("/booking",BookingRouter);
app.use("/customer",CustomerRouter);
app.use("/loMembership",loMembershipRouter);
app.use("/loMember",loMemberRouter);

app.listen(PORT, () => {
    console.log('Server is up and running on port: '+PORT);
})



