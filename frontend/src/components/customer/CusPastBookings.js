import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"
import './CusSideComponents.css'
import Hero from './subComponents/Hero'
import PageBottom from './PageBottom';



export default function PBookings() {
    const [upBookings, setUpBookings] = useState([]);

    async function getUpBookings(){
        const UpBookingRes = await axios.get("http://localhost:5000/booking/getPast");
        setUpBookings(UpBookingRes.data);
    }

    useEffect(() => {
        getUpBookings();
    }, []);

    return (
        <div>
        <div>
           <Hero hero="behindHero">
        </Hero>
       
        <div className="cusSideComp" >
            {/* className="display-box" style={{background: "#ffffff",borderRadius: "20px"} */}
            <div className="header-box">
                {/* <div>Inventory<button id="generate-reportt-btn" onClick={() => generatePDF(inventory)}>Create Report</button></div> */}

                <div className="total-inventory-display">
                    <span id="total-inventory-display-total">{upBookings.length}</span> <br />
                    <span id="total-inventory-display-text">Past Bookings</span>
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
                            {/* <th>Other</th> */}
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
                                    <td >{f.checkInDate.substring(0, 10)} </td>
                                    <td >{f.checkOutDate.substring(0, 10)} </td>
                                    <td >{f.noOfAdults} </td>
                                    <td >{f.noOfChildren} </td>
                                    <td >{f.package} </td>
                                    {/* <td >{f.otherAccomodations} </td> */}
                                    <td >{f.roomAllocation} </td>
                                    <td >{f.price} </td>
                                    <td >{f.bookingState} </td>
                                    <td > <Link to={"/CusSideNav/displayPast/" + f._id} ><i class="far fa-edit"></i></Link></td>

                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
        </div>

<PageBottom/>
</div>
    )
}
 
