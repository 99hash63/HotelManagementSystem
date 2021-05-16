const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create employee database schema
const employeeschema = new Schema({
    fname: {
        type: String,
       require: true
    },
    lname: {
        type: String,
       require: true
    },
    eType: {
        type: String,
         required: true
    },
    dob: {
        type: String,
       required: true
    
    },
    nic: {
        type: String,
      required: true
    
    },
    address: {
        type: String,
        required: true
    
    },
    mobileno: {
        type: String,
        required: true
    
    },
    bank: {
        type: String,
        required: true
    
    },

    bankbranch: {
        type: String,
        required: true
    
    },
    bankaccountno: {
        type: String,
        required: true
    
    },

    email: {
        type: String,
        required: true
    
    },
    password:{
        type: String,
        required: true
    }

  
    
})

//add employee schema to monogodb databse
const Employee = mongoose.model("employee", employeeschema);

module.exports = Employee ;