const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    

    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    promoCode: {
        type: String
    },
    travelAgent: {
        type: String,
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    noOfAdults: {
        type: Number,
        required: true
    },
    noOfChildren: {
        type: Number,
        required: true
    },
    package: {
        type: String,
        required: true
    },
    otherAccomodations: {
        type: String,
    },
    nationality: {
        type: String,
        required: true
    },
    passportNo: {
        type: String,
    },
    roomAllocation: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bookingState: {
        type: String,
        required: true
    }
})

const Bookings = mongoose.model("Bookings", BookingSchema);

module.exports = Bookings;