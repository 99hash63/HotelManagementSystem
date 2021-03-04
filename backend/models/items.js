const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    model: {
        type: String,

    },
    sku: {
        type: String,
    },
    category: {
        type: String,

    },
    supplier: {
        type: String,

    },
    description: {
        type: String,

    },
    mesurement: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    restock_level: {
        type: Number,

    },
    original_price: {
        type: Number,

    },
    selling_price: {
        type: Number,
    },
    profit: {
        type: Number,
    },
    date: {
        type: Date,
        require: true
    }
})
const Items = mongoose.model("item",itemsSchema);

module.exports =Items;