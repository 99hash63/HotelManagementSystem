import React from 'react';
import '../sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
     
            <div className="sidenav">
                
                <Link to="/">Add New Booking</Link>
                <Link to="/">Upcoming Bookings</Link>
                <Link to="/">Booking History</Link>
                <Link to="/">My Account</Link>
                <Link to="/">Loyalty Memberships</Link>
                <Link to="/">My Loyalty</Link>
                <Link to="/">Log Out</Link>
            </div>
      

    );
}