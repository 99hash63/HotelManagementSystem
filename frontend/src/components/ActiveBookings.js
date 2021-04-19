import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookingList from './BookingList';
import { useHistory } from "react-router-dom";


function ViewAllBookings() {
    const history = useHistory();
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
            <div className="header-box"> Active Bookings
            <button id="checkoutHistory-window-btn" onClick={() => { history.goBack(); }} >Back</button>

            </div>
            <BookingList bookings={bookings.filter((booking) => booking.bookingState === "Active")} />
        </div>

    )
}


export default ViewAllBookings;