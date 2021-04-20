import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"


export default function UpBookings() {
    const [upBookings, setUpBookings] = useState([]);

    async function getUpBookings(){
        const UpBookingRes = await axios.get("http://localhost:5000/booking/getUp");
        setUpBookings(UpBookingRes.data);
    }

    useEffect(() => {
        getUpBookings();
    }, []);

    return (
        <div className="display-box" style={{background: "#ffffff",borderRadius: "20px"}}>
            <div className="header-box">
                {/* <div>Inventory<button id="generate-reportt-btn" onClick={() => generatePDF(inventory)}>Create Report</button></div> */}

                <div className="total-inventory-display">
                    <span id="total-inventory-display-total">{upBookings.length}</span> <br />
                    <span id="total-inventory-display-text">Total Bookings</span>
                </div>
            </div>

            <div className="content-box-list">
                <table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>PromoCode</th>
                            <th>Agent</th>
                            <th>CheckIn</th>
                            <th>CheckOut</th>
                            <th>Adults</th>
                            <th>Children</th>
                            <th>Package</th>
                            <th>Other</th>
                            <th>Rooms</th>
                            <th>Price</th>
                            <th>State</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            upBookings.slice(0).reverse().map(function (f) {
                                return <tr>

                                    <td >{f._id}</td>
                                    <td >{f.promoCode} </td>
                                    <td >{f.travelAgent} </td>
                                    <td >{f.checkInDate} </td>
                                    <td >{f.checkOutDate} </td>
                                    <td >{f.noOfAdults} </td>
                                    <td >{f.noOfChildren} </td>
                                    <td >{f.package} </td>
                                    <td >{f.otherAccomodations} </td>
                                    <td >{f.roomAllocation} </td>
                                    <td >{f.price} </td>
                                    <td >{f.bookingState} </td>
                                    <td > <Link to={"/displayUpcoming/" + f._id} ><i class="far fa-edit"></i></Link></td>

                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}