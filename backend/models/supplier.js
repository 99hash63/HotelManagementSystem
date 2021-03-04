const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    contact: {
        type: String,

    },
    email: {
        type: String,
    },
    location: {
        type: String,

    }
})
const Supplier = mongoose.model("supplier", supplierSchema);

module.exports = Supplier;