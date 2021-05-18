const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create salary database schema
const salaryschema = new Schema({
    email: {
        type: String,
        require: true
    },
  
    accountNo: {
        type: String,
        require: true
    },

  
   basicSalary: {
        type: Number,
        required:true 
    },

    otRate: {
        type: Number,
        required:true 
    },

    otHours: {
        type: Number,
        required:true 
    },

    totalsalary: {
        type: Number,
        required:true 
 },

     paidDate: {
        type: String,
        require: true
    }


})

//add employee schema to monogodb databse
const Salary = mongoose.model("salary", salaryschema);

module.exports = Salary ;