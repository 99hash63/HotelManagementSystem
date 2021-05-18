
import './BookingConfirm.css'
import React, { useContext, useState } from 'react';

import jsPDF from 'jspdf';

const BookingConfirm = (props) => {

    const generatePDF = dataSet => {
        var doc = new jsPDF('p', 'pt');
        
        // var code = ;
        doc.addFont('Symbol', 'normal')

        doc.text(260, 40, 'Hotel Sobana', {fontSize: 16 })
        doc.text(60, 80, 'Room Reservation Bill Invoice - (Booking Not Confirmed)')

        doc.text(60, 120, 'Promo Code: '+dataSet.promoCode)
        doc.text(60, 150, 'Travel Agent: '+dataSet.travelAgent)
        doc.text(60, 180, 'Check In Date: '+dataSet.checkInDate)
        doc.text(60, 210, 'Check Out Data: '+dataSet.checkOutDate)
        doc.text(60, 240, 'No Of Adults:'+dataSet.noOfAdults)
        doc.text(60, 270, 'No Of Children: '+dataSet.noOfChildren)
        doc.text(60, 300, 'Package: '+dataSet.cpackage)
        doc.text(60, 330, 'Room type: '+dataSet.roomAllocation)
        doc.text(60, 360, 'No Of Rooms: '+dataSet.otherAccomodations)
        doc.text(60, 390, 'Total Price: '+dataSet.price)

        // doc.text(20, 60, 'This is the second title.')
        // doc.text(20, 100, 'This is the thrid title.')      
  
        doc.save('demo.pdf')
      }   



    //gen pgf using html tag

    
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
            <button className="BookConbutton" style={{marginLeft: "120px"}} onClick={() => generatePDF(props)}><span>Generate Bill</span></button>
        </div>
        
     );
}
 
export default BookingConfirm;