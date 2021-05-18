const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Bills = new Schema({
    CusName: {
        type: String,
        require: true,
    },
    NIC: {
        type: String,
        require: true,
        
    },
    Allocationa_Amount: {
        type: Number,
        require: true,
       
    },
    Mail: {
        type: String,
        require: true,
        
       
    },
    Meal_Order_Cost: {
        type: String,
        require: true,
       
    },
   BarOrder_Cost: {
        type: Number,
        require: true,
       
    },
    Additional_Bill: {
        type: Number,
        require: true,
       
    },
    Final_Cost: {
        type: Number,
        require: true,
       
    },
})
const fbil = mongoose.model("Final Bill",Bills);

module.exports =fbil;