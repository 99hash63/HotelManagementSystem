import React from 'react';
import { Link } from 'react-router-dom';

const MyDeatails = () => {
    return ( 
        <div className="myDetails">  
            {/* <Link to="/CusSideNav" className="btn btn-primary">MY DETAILS</Link> */}
           
            <button  className="btn btn-block btn-outline-primary" onClick={event =>  window.location.href='/CusSideNav/cusUpBookings'}>MY DETAILS</button>

        </div>
     );
}
 
export default MyDeatails;