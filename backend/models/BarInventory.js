const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const barInventorySchema  = new Schema({
    item_id : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    category :{
        type : String,
        required : true
    },
    
    supplier :{
        type : String,
        required : true
    },

    quantity :{
        type : Number,
        required : true
    },
    restocklevel :{
        type : Number,
        
       
    },

    unitPrice :{
        type : Number,
       
    },

   date :{
       type : Date,
       default: Date.now
   }



})
const BarInventory = mongoose.model("BarInventory",barInventorySchema);

module.exports = BarInventory;