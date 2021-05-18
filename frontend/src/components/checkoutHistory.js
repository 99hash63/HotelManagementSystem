import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryCheckout.css'
import jspdf from 'jspdf'
import "jspdf-autotable"


const CheckoutHistory = ({ POP }) => {

    const [history, sethistory] = useState([]);

    useEffect(() => {
        //fetching CHECKOUT HISTORY data from the DB
        axios.get("http://localhost:5000/checkout/").then((res) => {
            if (res.data.length > 0) {
                sethistory(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })

    }, [history])

    //pdf creating funtion
    const generatePDF = tickets => {

        const doc = new jspdf(); //initializing jspdf dependancy 
        const tableColumn = ["Name", "Model", "SKU", "Category", "Quantity", "To", "Description", "Date"];
        const tableRows = [];

        tickets.slice(0).reverse().map(ticket => { //assigning table row data
            const ticketData = [
                ticket.name,
                ticket.model,
                ticket.sku,
                ticket.category,
                ticket.quantity,
                ticket.to,
                ticket.description,
                ticket.date,
            ];
            tableRows.push(ticketData);
        });


        doc.autoTable(tableColumn, tableRows, { startY: 35 });
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
        var img = new Image().src = '/images/logo.png'
        doc.addImage(img, 'JPEG', 160, 9, 49, 15);
        doc.text("Sold Inventory Report", 14, 15).setFontSize(12);
        doc.text(`Report Genarated Date - ${dateStr} `, 14, 23);
        doc.save(`Sold_Inventory_report_${dateStr}.pdf`);
    };

    return (<div>

        <dir className="blurc-s">
            <div className="checkouthistory-box-s">
                <div className="checkouthistory-head">
                    <div className="title">Checkout History <button id="generate-reportt-btn" onClick={() => generatePDF(history)}>Create Report</button> </div>
                    <button className="btn" onClick={POP}>&times;</button>
                </div>

                <hr />

                <div className="checkouthistory-table">

                    <table >
                        <thead>
                            <tr >
                                <th>Name</th>
                                <th>Model</th>
                                <th>SKU</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>To</th>
                                <th>Description</th>
                                <th>Date</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                history.slice(0).reverse().map(function (f) {
                                    return <tr>

                                        <td >{f.name}</td>
                                        <td >{f.model} </td>
                                        <td >{f.sku} </td>
                                        <td >{f.category} </td>
                                        <td >{f.quantity} </td>
                                        <td >{f.to} </td>
                                        <td >{f.description} </td>
                                        <td >{f.date} </td>


                                    </tr>

                                })
                            }
                        </tbody>

                    </table>

                </div>


            </div>

        </dir>

    </div>
    );
}

export default CheckoutHistory;