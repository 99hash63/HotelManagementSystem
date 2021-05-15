import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewBooking.css'


function ViewBookingHistry() {
    return (
        <div>
        
             <Link to="/front-office-manager/request" className="ManagerLoginBox-a ManagerLoginBoxBTN"  >
        
                <p style={{fontSize: "35px", marginTop:4, markerEnd:2, color:"red"}}>UPCOMMING BOOKINGS</p>
            </Link>
            <Link to="/front-office-manager/active" className="ManagerLoginBox-a ManagerLoginBoxBTN"  >
            <p style={{fontSize: "35px", marginTop:4, markerEnd:2, color:"Blue"}}>ACTIVE BOOKINGS</p>
            </Link>
            <Link to="/front-office-manager/pass" className="ManagerLoginBox-a ManagerLoginBoxBTN"  >
            <p style={{fontSize: "35px", marginTop:4, markerEnd:2, color:"Black"}}>PAST BOOKINGS</p>
               
            </Link>
          
        </div>
    )
}


export default ViewBookingHistry;