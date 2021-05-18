import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryList.css'
import { Link } from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"



export default function ViewRoom() {

    const [rooms, setrooms] = useState([]);

    //fetching all the inventory rows from the database
    useEffect(() => {
        axios.get("http://localhost:5000/room/").then((res) => {
            if (res.data.length > 0) {
                setrooms(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [])

    const generatePDF = tickets => {
        const doc = new jspdf();
        const tableColumn = ["Room No", "Type", "Building No", "Floor No", "Special Details"];
        const tableRows = [];

        tickets.slice(0).reverse().map(ticket => {
            const ticketData = [
                ticket.roomNo,
                ticket.type,
                ticket.buildingNo,
                ticket.floorNum,
                ticket.specialDetails,
               
            ];
            tableRows.push(ticketData);
        });

        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
        var img = new Image().src = '/images/logo.png'
        doc.addImage(img, 'JPEG', 160, 9, 49, 15);
        doc.text("Room Details Report", 14, 15).setFontSize(12);
        doc.text(`Report Genarated Date - ${dateStr} `, 14, 23);
        doc.save(`Room_report_${dateStr}.pdf`);
    };



    return (
        <div className="display-box">
            <div className="header-box">
                <div>Rooms<button id="generate-reportt-btn" onClick={() => generatePDF(rooms)}>Create Report</button></div>

                <div className="total-inventory-display">
                    <span id="total-inventory-display-total">{rooms.length}</span> <br />
                    <span id="total-inventory-display-text">Total Rooms</span>
                </div>
            </div>

            <div className="content-box-list">
                <table >
                    <thead>
                        <tr>
                            <th>Room No</th>
                            <th>Type</th>
                            <th>Building No</th>
                            <th>Floor Number</th>
                            <th>Special Details</th>
                            <th></th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rooms.slice(0).reverse().map(function (f) {
                                return <tr>

                                    <td >{f.roomNo}</td>
                                    <td >{f.type} </td>
                                    <td >{f.buildingNo} </td>
                                    <td >{f.floorNum} </td>
                                    <td >{f.specialDetails} </td>
                                    <td><Link to={"/room-manager/roomUD/" + f._id}><i class="far fa-edit"></i></Link></td>
                                   
                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >

    )
}