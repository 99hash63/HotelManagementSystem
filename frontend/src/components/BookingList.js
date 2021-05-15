import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function BookingList(props) {

    const bookings = props.bookings;
    return (
        <div className="display-box">
            <div className="content-box-list">
                <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th> Address</th>
                        <th>NIC Number</th>
                        <th>promoCode</th>
                        <th>In Date</th>
                        <th>Out Date</th>
                        <th>travelAgent</th>
                        <th>Adults</th>
                        <th>Children</th>
                        {/* <th>Packege</th> */}
                        {/* <th>Other Accomodations</th> */}
                        {/* <th>nationality</th> */}
                        {/* <th>Passport No</th>
                        <th>Room Allocation</th> */}
                        <th>Price</th>

                    </tr>
                    </thead>
                    <tbody>

                    {bookings.map(function (bookings) {
                        return <tr>
                            {/* <td>{bookings.bookingId}</td> */}
                            <td>{bookings.fName} {bookings.lName}</td>
                            <td>{bookings.address}</td>
                            <td>{bookings.NIC}</td>
                            <td>{bookings.promoCode}</td>
                            <td>{bookings.checkInDate.substring(0, 10)}</td>
                            <td>{bookings.checkOutDate.substring(0, 10)}</td>
                            <td>{bookings.travelAgent}</td>
                            <td>{bookings.noOfAdults}</td>
                            <td>{bookings.noOfChildren}</td>
                            {/* <td>{bookings.package}</td> */}
                            {/* <td>{bookings.otherAccomodations}</td> */}
                            {/* <td>{bookings.nationality}</td> */}
                            {/* <td>{bookings.passportNo}</td> */}
                            {/* <td>{bookings.roomAllocation}</td> */}
                            <td>{bookings.price}</td>
                        </tr>

                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookingList;