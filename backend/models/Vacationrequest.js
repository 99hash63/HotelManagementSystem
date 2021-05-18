const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create employee database schema
const vacationrequestschema = new Schema({
    eemail: {
        type: String,
       require: true
    },
    propose: {
        type: String,
       require: true
    },
    vfrom: {
        type: String,
         required: true
    },
    vto: {
        type: String,
       required: true
    
    }
 
})

//add employee schema to monogodb databse
const VacationRequest = mongoose.model("vacationr", vacationrequestschema);

module.exports = VacationRequest ;