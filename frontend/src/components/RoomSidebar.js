import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (

        <div className="sidenav">
            <Link to="/rooms">Rooms</Link>
            <Link to="/roomType">Room Types</Link>
            <Link to="/addroom">Add Room</Link>

            {/* <Link to="/updateroom">Update Room</Link>
            <Link to="deleteroom">Delete Room</Link> */}


        </div>


    );
}