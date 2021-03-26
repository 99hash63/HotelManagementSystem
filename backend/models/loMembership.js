const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loMembershipSchema = new Schema({
    type:{ type: String, required: true, unique: true}, 
    charge:{ type: Number, required: true }, 
    validPeriod:{ type: Number, required: true },
    discountPerPoint:{ type: Number, required: true},
});


const loMembership = mongoose.model('loMembership', loMembershipSchema);
module.exports = loMembership;