import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
     
            <div className="sidenav">

                <Link to="/AddHall">Reception Halls</Link>
                <Link to="/">Book Hall</Link>
                <Link to="/viewAllAgencies">Booked Halls</Link>
                <Link to="/">Add Hall</Link>
                <Link to="/">Update Hall</Link>
               
            </div>
      

    );
}