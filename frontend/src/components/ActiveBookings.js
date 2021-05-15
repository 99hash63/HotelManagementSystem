import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookingList from './BookingList';
import { useHistory } from "react-router-dom";
import jspdf from 'jspdf'
import "jspdf-autotable"


function ViewAllBookings() {
    const history = useHistory();
    var [bookings, setRequest] = useState([]);

    useEffect(() => {
        function ViewRequest() {
            axios.get("http://localhost:5000/booking/ViewBookings").then((res) => {
                setRequest(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        ViewRequest();

    })


    function generatePDF(tickets){
        const doc = new jspdf();
        const tableColumn = ["Name", "Address", "NIC Number", "promoCode", "In Date", "Out Date", "travelAgent", "Adults", "Children", "Other Accomodations", "nationality", "Passport No", "Room Allocation", "Price"];
        const tableRows = [];

        tickets.slice(0).reverse().map(ticket => {
            const ticketData = [
                ticket.fName,
                ticket.address,
                ticket.NIC,
                ticket.promoCode,
                ticket.checkInDate.substring(0, 10),
                ticket.checkOutDate.substring(0, 10),
                ticket.travelAgent,
                ticket.noOfAdults,
                ticket.noOfChildren,
                ticket.package,
                ticket.nationality,
                ticket.passportNo,
                ticket.roomAllocation,
                ticket.price
            ];
            tableRows.push(ticketData);
        });


        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
        var img = new Image().src = '/images/logo.png'
        doc.addImage(img, 'JPEG', 160, 9, 49, 15);
        doc.text("Active-Bookings-Report", 14, 15).setFontSize(12);
        doc.text(`Report Genarated Date - ${dateStr} `, 14, 23);
        doc.save(`Active-Booking-Report_${dateStr}.pdf`);
    }

    return (
        <div>
            <div className="header-box"> Active Bookings
            <button id="checkoutHistory-window-btn" style={{left:30}} onClick={() => { generatePDF(bookings)}} >Report</button>
            <button id="checkoutHistory-window-btn"  onClick={() => { history.goBack(); }} >Back</button>
           
            </div>
    
           

          
            <BookingList bookings={bookings.filter((booking) => booking.bookingState === "Active")} />
        </div>

    )
}


export default ViewAllBookings;