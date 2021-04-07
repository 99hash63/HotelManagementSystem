const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BarOrdersSchema  = new Schema({
    order_no : {
        type : Number,
        required : true
    },

    total_amount :{
        type : Number,
        required : true
    },
  

    discount:{
        type : Number,
        required : true
    },


    customer_nic:{
        type : String,
        required : true
    }
 
    })
const BarOrders = mongoose.model("BarOrders",BarOrdersSchema);

module.exports = BarOrders;   