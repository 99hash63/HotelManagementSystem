import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
     
            <div className="sidenav">

                <Link to="/viewhall">Reception Halls</Link>
                <Link to="/addhall">Add Hall</Link>
                <Link to="/bookedHallView">Booked Halls</Link>
                <Link to="/bookhall">Book Hall</Link>
                
               
            </div>
      

    );
}