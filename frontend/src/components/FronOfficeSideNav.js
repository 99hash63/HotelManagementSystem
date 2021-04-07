import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
     
            <div className="sidenav">

                <Link to="/bookings">Bookings</Link>
                <Link to="/addAgent">Add Agencies</Link>
                <Link to="/viewAllAgencies">View Agencies</Link>
                <Link to="/">Event Booking</Link>
                <Link to="/">Room Booking</Link>
                <Link to="/">Final Bill</Link>
               
            </div>
      

    );
}