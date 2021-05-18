import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './InventoryList.css'
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
        <div className="display-box">
             <div className="header-box"> Upcome Bookings </div>
                <div className="content-box-list">
                     <table >
              <thead>

                        <tr>
                            {/* <th>bookingId</th> */}
                            <th> Name</th>
                            {/* <th>Last Name</th> */}
                            <th> Address</th>
                            <th>NIC</th>
                            <th>promoCode</th>
                            <th>travelAgent</th>
                            <th>In Date</th>
                            <th>Out Date</th>
                            <th>Adults</th>
                            <th>Children</th>
                            <th></th>

                        </tr>
                        </thead>

                        <tbody>
               

                {request.slice(0).reverse().map(function(request){

                    
                          return  <tr>
                                <td>{request.fName} {request.lName}</td>
                                <td>{request.address}</td>
                                <td>{request.NIC}</td>
                                <td>{request.promoCode}</td>
                                <td>{request.travelAgent}</td>
                                <td>{request.checkInDate.substring(0, 10)}</td>
                                <td>{request.checkOutDate.substring(0, 10)}</td>
                                <td>{request.noOfAdults}</td>
                                <td>{request.noOfChildren}</td>
                                <td><Link to={"/accept/" + request._id}><i class="far fa-edit"></i></Link></td>
                                
                            </tr>

                })
            }
                    </tbody>
                    </table>
                    <Link to={"/bookings"}>BACK</Link>
            </div>
        </div>


    )
}

export default ViewBookingRequsets;