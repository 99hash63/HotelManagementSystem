const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const roomSchema = new Schema({
    roomNo:{ type: String  }, 
    type:{ type: String }, 
    buildingNo:{ type: String, required: true },
    floorNum:{ type: String, required: true, unique: true },
    specialDetails:{ type: String, required: true },
});

const room = mongoose.model('room', roomSchema);

module.exports = customer;