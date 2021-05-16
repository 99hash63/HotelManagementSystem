const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const customerSchema = new Schema({
    fname:{ type: String  }, 
    lname:{ type: String }, 
    address:{ type: String, required: true },
    NIC:{ type: String, required: true },
    nationality:{ type: String, required: true },
    passportNo:{ type: String },
    email:{type: String, required: true },
    contact:{type: String, required: true}, 
    passwordHash:{type: String, required: true},
});

const customer = mongoose.model('customer', customerSchema);

module.exports = customer;