const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loMemberSchema = new Schema({
    email:{ type: String, required: true, unique: true}, 
    type:{ type: String, required: true }, 
    startDate:{ type: Date, required: true },
    loPoints:{ type: Number, required: true },
});


const loMember = mongoose.model('loMember', loMemberSchema);
module.exports = loMember;