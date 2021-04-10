const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InventoryCheckout = new Schema({
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
    to: {
        type: String,

    },
    description: {
        type: String,

    },
    quantity: {
        type: Number,
        require: true
    },
    unit_price: {
        type: Number,

    },
    total_price: {
        type: Number,

    },
    date: {
        type: String,
        require: true
    }
})
const Checkout = mongoose.model("checkoutInventory", InventoryCheckout);

module.exports = Checkout;