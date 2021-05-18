import React from 'react';
// import '../sidenav.css'
import { Link } from 'react-router-dom'
import './CusSideNav.css'

export default function Sidenav() {
    return (
     
            <div className="cussidenav">
                
                <Link to="/CusSideNav/addRegBooking">Add New Booking</Link>
                <Link to="/CusSideNav/cusUpBookings">Upcoming Bookings</Link>
                <Link to="/CusSideNav/cusPastBookings">Booking History</Link>
                <Link to="/CusSideNav/cusMyaccount">My Account</Link>
                {/* <Link to="/">Loyalty Memberships</Link> */}
                <Link to="#">My Loyalty</Link>
                <Link to="/CusSideNav/cusLogout">Log Out</Link>
            </div>
      

    );
}