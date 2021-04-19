import React from 'react';
import '../sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
     
            <div className="sidenav">

                <Link to="/up">Upcoming Bookings</Link>
                <Link to="/">Booking History</Link>
                <Link to="/">Payment Details</Link>
                <Link to="/">Offers For Me</Link>
            </div>
      

    );
}