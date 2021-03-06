import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookingList from './BookingList';
import { useHistory } from "react-router-dom";
import jspdf from 'jspdf'
import "jspdf-autotable"

function ViewPassBookings() {
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
        const tableColumn = ["Name", "Address", "NIC Number", "promoCode", "In Date", "Out Date", "travelAgent", "Adults", "Children", "Booking Status", "nationality", "Passport No", "Room Allocation", "Price"];
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
                ticket.bookingState,
                ticket.price,
                
            ];
            tableRows.push(ticketData);
        });


        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
        var img = new Image().src = '/images/logo.png'
        doc.addImage(img, 'JPEG', 160, 9, 49, 15);
        doc.text("Past-Bookings-Report", 14, 15).setFontSize(12);
        doc.text(`Report Genarated Date - ${dateStr} `, 14, 23);
        doc.save(`Past-Booking-Report_${dateStr}.pdf`);
    }


    return (
        <div>
           <div id="edit-title" className="header-box"> Past Bookings
            
            <div>
                     <button  id="delete_btn"   onClick={e => generatePDF(bookings)}>REPORT</button>
                    <button id="edit_btn"  onClick={() => { history.goBack();}}>BACK</button>
                  
                </div>

            </div>
            <BookingList bookings={bookings.filter((booking) => booking.bookingState === "Past")} />
        </div>

    )
}


export default ViewPassBookings;