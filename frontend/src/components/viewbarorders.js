import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryList.css'
import { Link } from 'react-router-dom'

export default function ViewBarOrders() {

    const [orderitems, setorderitems] = useState([]);

    //fetching all the barorders rows from the database
    useEffect(() => {
        axios.get("http://localhost:5000/orderItems/retrieve").then((res) => {
            if (res.data.length > 0) {
                setorderitems(res.data);
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
                    <span id="total-inventory-display-total">{orderitems.length}</span> <br />
                    <span id="total-inventory-display-text">Total Orders</span>
                </div>
            </div>

            <div className="content-box-list">
                <table >
                    <thead>
                        <tr>
                            <th>Order No</th>
                            <th>Item ID</th>
                            <th>Quantity</th>
                            <th>Price</th> 
                            <th>date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderitems.map(function (f) {
                                return <tr>

                                    
                                    
                                    <td >{f.order_no} </td>
                                    <td >{f.item_id}</td>
                                    <td >{f.quantity} </td>
                                    <td >{f.price} </td>
                                    <td >{f.date} </td>
                                  

                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >

    )
}