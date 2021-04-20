import React from 'react';
import '../sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
     
            <div className="sidenav">
                
                <Link to="/addRegBooking">Add New Booking</Link>
                <Link to="/cusUpBookings">Upcoming Bookings</Link>
                <Link to="/cusPastBookings">Booking History</Link>
                <Link to="/cusMyaccount">My Account</Link>
                <Link to="/">Loyalty Memberships</Link>
                <Link to="/">My Loyalty</Link>
                <Link to="/cusLogout">Log Out</Link>
            </div>
      

    );
}