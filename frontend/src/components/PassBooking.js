import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookingList from './BookingList';


function ViewPassBookings() {
    var [bookings, setRequest] = useState([]);

    useEffect(() => {
        function ViewRequest() {
            axios.get("http://localhost:5000/booking/ViewBookings").then((res) => {
                setRequest(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        ViewRequest();

    })


    return (
        <div>
            <h1>Hello Pass Bookings</h1>
            <BookingList bookings={bookings.filter((booking) => booking.bookingState === "Pass")} />
        </div>

    )
}


export default ViewPassBookings;