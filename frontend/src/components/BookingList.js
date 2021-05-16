import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function BookingList(props) {

    const [search, setsearch] = useState("");
    const [filtered, setfiltered] = useState([]);
    const bookings = props.bookings;


    useEffect(() => { //search funtion
        setfiltered(
          //filtering the inventory array to only contain objects that match with the seach term and save in the FILTERED useState 
          bookings.filter(items => {
            return items.fName.toLowerCase().includes(search.toLowerCase())
              || items.NIC.toLowerCase().includes(search.toLowerCase())||
              items.lName.toLowerCase().includes(search.toLowerCase())
          })
        )
      }, [search, bookings])


    return (
        <div className="display-box">
            <div className="content-box-list">
            <div class="search">
            <input type="text" class="searchTerm" placeholder="Enter Customer Mail Here"  style={{width:"500px", marginLeft:240}} placeholder="Enter Customer Name or NIC number Here" onChange={e => { setsearch(e.target.value) }}/><br></br>
              <Link to={"/front-office-manager"} class="searchButton">   <i class="fa fa-search"></i>   </Link><br></br>
               </div>
                <table style={{marginTop:10}} >
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

                    {filtered.slice(0).reverse().map(function (bookings) {
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