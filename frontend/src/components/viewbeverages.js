import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryList.css'
import { Link } from 'react-router-dom'

export default function ViewBeverages() {

    const [barinventory, setbarinventory] = useState([]);

    //fetching all the barinventory rows from the database
    useEffect(() => {
        axios.get("http://localhost:5000/barInventory/retrieve").then((res) => {
            if (res.data.length > 0) {
                setbarinventory(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [])



    return (
        <div className="display-box">
            <div className="header-box">
                <div>Bar Inventory</div>

                <div className="total-inventory-display">
                    <span id="total-inventory-display-total">{barinventory.length}</span> <br />
                    <span id="total-inventory-display-text">Total Inventory</span>
                </div>
            </div>

            <div className="content-box-list">
                <table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Supplier</th>
                            <th>Quantity</th>
                            <th>Re-stock Level</th>
                            <th>Unit Price</th>
                            <th>Date</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            barinventory.slice(0).reverse().map(function (f) {
                                return <tr>

                                    <td >{f.item_id}</td>
                                    <td >{f.name} </td>
                                    <td >{f.category} </td>
                                    <td >{f.supplier} </td>
                                    <td >{f.quantity} </td>
                                    <td >{f.restocklevel} </td>
                                    <td >{f.unitPrice} </td>
                                    <td >{f.date.substring(0, 10)} </td>
                                    <td > <Link to={"/bar-manager/editBeverages/" + f._id} ><i class="far fa-edit"></i></Link></td>

                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >

    )
}