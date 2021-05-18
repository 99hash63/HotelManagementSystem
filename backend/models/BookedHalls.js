const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookedHallSchema = new Schema({

    id : {
        type : Number,
        required : true
    },

    cusNic : {
        type : Number,
        required  : true
    },

    bookedDate : {
        type : Date,
        required : true
    },

    noOfSeates : {
        type : Number,
        required : true
    },

    noOfTables : {
        type : Number,
        required : true
    },

    addedFeatures : {
        type : String,
    }
    

})


const BookedHalls = mongoose.model("BookedHalls",bookedHallSchema);

module.exports = BookedHalls;