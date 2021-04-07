import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function BookingList(props) {

    const bookings = props.bookings;
    return (
        <div className="display-box">
           <div className="header-box"> Active Bookings </div>
                <div className="content-box-list">
            <table>
                <tr>
                       {/* <tr><th>bookingId</th> */}
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
                        <th>Packege</th>
                        <th>Other Accomodations</th>
                        <th>nationality</th>
                        <th>Passport No</th>
                        <th>Room Allocation</th>
                        <th>Price</th>

                    </tr>

                {bookings.map((bookings)=>(

                    <div key={bookings._id}>
    
                     <tr>
                        {/* <td>{bookings.bookingId}</td> */}
                            <td>{bookings.fName}</td>
                            <td>{bookings.lName}</td>
                            <td>{bookings.address}</td>
                            <td>{bookings.NIC}</td>
                            <td>{bookings.promoCode}</td>
                            <td>{bookings.travelAgent}</td>
                            <td>{bookings.checkInDate}</td>
                            <td>{bookings.checkOutDate}</td>
                            <td>{bookings.noOfAdults}</td>
                            <td>{bookings.noOfChildren}</td>
                            <td>{bookings.package}</td>
                            <td>{bookings.otherAccomodations}</td>
                            <td>{bookings.nationality}</td>
                            <td>{bookings.passportNo}</td>
                            <td>{bookings.roomAllocation}</td>
                            <td>{bookings.price}</td>
                        </tr>
                    </div>
                ))}
            </table>
            <Link to={"/bookings"}>BACK</Link>
            </div>
        </div>
    )
}

export default BookingList;