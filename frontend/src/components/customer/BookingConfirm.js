
import './BookingConfirm.css'
import React, { useContext, useState } from 'react';



const BookingConfirm = (props) => {
    
//    const price = 1500;
    return (
        
        <div className="cusBookConfirm">

        <h2 style={{textAlign: "center", marginTop: "30px"}}> Payment Details</h2>

        <ul style={{marginLeft: "35px", marginTop: "30px"}}>
            <li>Promo Code: {props.promoCode}</li><br/>
            <li>Travel Agent: {props.travelAgent}</li><br/>
            <li>Check In Date: {props.checkInDate}</li><br/>
            <li>Check Out Date: {props.checkOutDate}</li><br/>
            <li>Adults: {props.noOfAdults}</li><br/>
            <li>Children: {props.noOfChildren}</li><br/>
            <li>Package: {props.cpackage}</li><br/>
            <li>Room Type: {props.roomAllocation}</li><br/>
            <li>No Of Rooms: {props.otherAccomodations}</li><br/>
            <li>Total Price: {props.price}</li><br/>
            
        </ul>

        {/* <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3>otherAccomodations: {props.otherAccomodations}</h3>
        <h3></h3>
        <h3></h3> */}


        </div>
        
     );
}
 
export default BookingConfirm;