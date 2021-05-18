const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require ('dotenv');
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
    res.send("It works"); 
});

app.use(express.json());
app.use(cookieParser());
 
//connect to mongoDB
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

const InventoryCheckout = require("./routes/InventoryCheckout");
app.use("/checkout",InventoryCheckout);



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
const finalBill = require("./routes/Bill.js");
app.use("/FinalBill", finalBill);



//Ramesh 
const employeeRouter = require("./routes/Employees.js");
app.use("/employee",employeeRouter);

const salaryRouter = require("./routes/Salaries.js");
app.use("/salary",salaryRouter);

const vacationRouter = require("./routes/Vactionrequests.js");
app.use("/vacation",vacationRouter);


//Thilan Routes
const barInventoryRouter = require("./routes/barInventory");
const barOrdersRouter = require("./routes/barOrders");
const orderItemsRouter = require("./routes/orderItems");

 app.use("/barInventory",barInventoryRouter);
 app.use("/barOrders",barOrdersRouter);
 app.use("/orderItems",orderItemsRouter);


//Anu Routes
const mealOrderRout = require("./routes/MealOrder.js");
app.use("/Meal_Order", mealOrderRout);



//Ishara routes
const roomRouter = require("./routes/rooms.js");
app.use("/room",roomRouter);

const roomType = require("./routes/roomType.js");
app.use("/roomType",roomType);



//Pamoda Routes
const bookedHalls = require("./routes/bookedHalls.js");
app.use("/bookedhalls", bookedHalls);

const halls = require("./routes/halls.js");
app.use("/halls", halls);





app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`)
})








