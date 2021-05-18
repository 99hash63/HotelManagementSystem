import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
     
            <div className="sidenav">

                <Link to="/hall-manager">Reception Halls</Link>
                <Link to="/hall-manager/addhall">Add Hall</Link>
                <Link to="/hall-manager/bookedHallView">Booked Halls</Link>
                <Link to="/hall-manager/bookhall">Book Hall</Link>
                
               
            </div>
      

    );
}