const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderItemsSchema  = new Schema({
    
    order_no : {
    type : Number,
    required : true
    },
 
    item_id:{
        type : Number,
        required : true
    },

    quantity:{
        type : Number,
        required : true
    },

    price:{
        type : Number,
        required : true
    },
    date:{
        type : Date,
        default: Date.now
    }

})
const OrderItems = mongoose.model("OrderItems",OrderItemsSchema);

module.exports = OrderItems;
