import React from 'react';
import { Link } from 'react-router-dom';
import './MyDetails.css'

const MyDeatails = () => {
    return ( 
        <div className="myDetails">  
            {/* <Link to="/CusSideNav" className="btn btn-primary">MY DETAILS</Link> */}
           
            <button  className="mdbutton" onClick={event =>  window.location.href='/CusSideNav/cusUpBookings'}><span>MY DETAILS</span></button>

        </div>
     );
}
 
export default MyDeatails;