import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './sidenav.css'
import { Link } from 'react-router-dom'

export default function FrontOfficeSideNav() {
    var [request, setRequest] = useState([]);

    useEffect(() => {
        function ViewRequest() {
            axios.get("http://localhost:5000/booking/ViewHistry").then((res) => {
                setRequest(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        ViewRequest();

    }, [request])

    useEffect(() => {
        if (request.length == 0) {
            document.getElementById('icon-button__badge').style.display = "none ";
        }
        else if (request.length != 0) {

            document.getElementById('icon-button__badge').style.display = "block ";
        }

    }, [request])





    return (

        <div className="sidenav">

            <div className="icon-button">
                <span id="icon-button__badge" className="icon-button__badge " style={{ display: 'none', textAlign: 'center', paddingTop: '5px' }} >{request.length}</span>
                <Link to="/bookings">Bookings</Link>
            </div>
            <Link to="/addAgent">Add Agencies</Link>
            <Link to="/viewAllAgencies">View Agencies</Link>
            <Link to="/">Event Booking</Link>
            <Link to="/">Room Booking</Link>
            <Link to="/FinalBill">Final Bill</Link>

        </div>


    );
}





