import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryList.css'
import { Link } from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"


export default function AddInventory() {

    const [inventory, setinventory] = useState([]);

    //fetching all the inventory rows from the database
    useEffect(() => {
        axios.get("http://localhost:5000/inventory/").then((res) => {
            if (res.data.length > 0) {
                setinventory(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [])

    //funtion for genarating PDF
    const generatePDF = tickets => {

        const doc = new jspdf();
        const tableColumn = ["Name", "Model", "SKU", "Category", "Supplier", "Description", "Mesurement", "Quantity", "ReStock Level", "Unit Price", "Date"];
        const tableRows = [];

        tickets.slice(0).reverse().map(ticket => {
            const ticketData = [
                ticket.name,
                ticket.model,
                ticket.sku,
                ticket.category,
                ticket.supplier,
                ticket.description,
                ticket.mesurement,
                ticket.quantity,
                ticket.restock_level,
                ticket.original_price,
                ticket.description,
                ticket.date,
            ];
            tableRows.push(ticketData);
        });

        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
        var img = new Image().src = '/images/logo.png'
        doc.addImage(img, 'JPEG', 160, 9, 49, 15);
        doc.text("Inventory Report", 14, 15).setFontSize(12);
        doc.text(`Report Genarated Date - ${dateStr} `, 14, 23);
        doc.save(`Inventory_report_${dateStr}.pdf`);
    };



    return (
        <div className="display-box">
            <div className="header-box">
                <div>Inventory<button id="generate-reportt-btn" onClick={() => generatePDF(inventory)}>Create Report</button></div>

                <div className="total-inventory-display">
                    <span id="total-inventory-display-total">{inventory.length}</span> <br />
                    <span id="total-inventory-display-text">Total Inventory</span>
                </div>
            </div>

            <div className="content-box-list">
                <table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Model</th>
                            <th>SKU</th>
                            <th>Category</th>
                            <th>Supplier</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Date</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventory.slice(0).reverse().map(function (f) {
                                return <tr>

                                    <td >{f.name}</td>
                                    <td >{f.model} </td>
                                    <td >{f.sku} </td>
                                    <td >{f.category} </td>
                                    <td >{f.supplier} </td>
                                    <td >{f.quantity} </td>
                                    <td >{f.original_price} </td>
                                    <td >{f.date.substring(0, 10)} </td>
                                    <td > <Link to={"/inventory-manager/displayinventory/" + f._id} ><i class="far fa-edit"></i></Link></td>

                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >

    )
}