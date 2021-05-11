const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hallSchema = new Schema({

    id : {
        type : Number,
        required : true
    },

    name : {
        type : String,
        required : true 
    },

    type : {
        type : String,
        required : true
    },

    maxSeats : {
        type : Number,
        required : true
    },

    maxTables : {
        type : Number,
        requred : true
    },

    features : {
        type : String
        
    },

    state : {
        type : String
    },

    price : {
        type : Number
    }



})

const Hall = mongoose.model("Hall",hallSchema);

module.exports = Hall;