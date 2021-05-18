const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const roomSchema = new Schema({
    roomNo:{ type: Number, required: true  }, 
    type:{ type: String, required: true }, 
    buildingNo:{ type: Number, required: true },
    floorNum:{ type: Number, required: true },
    specialDetails:{ type: String, required: true },
});

const room = mongoose.model('room', roomSchema);

module.exports = room;