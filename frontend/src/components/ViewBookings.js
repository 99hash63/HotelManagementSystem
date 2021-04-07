import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ViewBookingHistry() {
    return (
        <div>
            <pre><Link to="/request">Up Coming Booking </Link>&nbsp;&nbsp;&nbsp;
            <Link to="/active">Active Bookings</Link>&nbsp;&nbsp;&nbsp;
             <Link to="/pass">Pass Bookings</Link></pre>
        </div>
    )
}


export default ViewBookingHistry;