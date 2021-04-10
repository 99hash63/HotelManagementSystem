const mongoose = require('mongoose');
const schema = mongoose.Schema;

const orderSchema = new schema({
    OrderId : {
        type : Number,
        required : true
    },

    Mail_Address : {
        type : String,
        required : true
    },

    Total_Amount : {
        type : Number,
        required : true
    }
     
})

const MealOrder = mongoose.model("MealOrder",orderSchema )
module.exports = MealOrder;
