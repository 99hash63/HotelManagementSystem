import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookingList from './BookingList';

function ViewBookingRequsets() {
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

    })


    return (
        <div>
            <h1>Hello Upcome Bookings</h1>
            <table>
              
                    <tr id="items">
                        <th>bookingId</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th> Address</th>
                        <th>NIC</th>
                        <th>promoCode</th>
                        <th>travelAgent</th>
                        <th>check In Date</th>
                        <th>check Out Date</th>
                        <th>No Of Adults</th>
                        <th>No Of Children</th>
                        <th></th>

                    </tr>
               

                {request.map(function(request){

                    
                          return  <tr>
                                <td>{request.bookingId}</td>
                                <td>{request.fName}</td>
                                <td>{request.lName}</td>
                                <td>{request.address}</td>
                                <td>{request.NIC}</td>
                                <td>{request.promoCode}</td>
                                <td>{request.travelAgent}</td>
                                <td>{request.checkInDate}</td>
                                <td>{request.checkOutDate}</td>
                                <td>{request.noOfAdults}</td>
                                <td>{request.noOfChildren}</td>
                                <td><Link to={"/accept/" + request._id}> View More </Link></td>
                                <td></td>
                            </tr>

                })
            }

            </table>
            <Link to={"/bookings"}>BACK</Link>
        </div>


    )
}

export default ViewBookingRequsets;