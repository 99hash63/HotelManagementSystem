import React from 'react';
import './sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (

        <div className="sidenav">
            <Link to="/room-manager">Rooms</Link>
            <Link to="/room-manager/roomType">Room Types</Link>
            <Link to="/room-manager/addroom">Add Room</Link>

            {/* <Link to="/updateroom">Update Room</Link>
            <Link to="deleteroom">Delete Room</Link> */}


        </div>


    );
}