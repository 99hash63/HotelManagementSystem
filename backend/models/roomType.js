const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const roomTypeSchema = new Schema({
    typeName:{ type: String, required: true}, 
    capacity:{ type: Number, required: true }, 
    AC:{ type: String, required: true },
    FullBoardPrice:{ type: Number, required: true },
    HalfBoardPrice:{ type: Number, required: true },
    BedAndBreakfastPrice:{ type: Number, required: true },
});

const roomType = mongoose.model('roomType', roomTypeSchema);

module.exports = roomType;