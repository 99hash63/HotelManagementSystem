import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryCheckout.css'

const CheckoutHistory = ({ POP }) => {

    const [history, sethistory] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/checkout/").then((res) => {
            if (res.data.length > 0) {
                sethistory(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    }, [])


    return (<div>

        <dir className="blurc-s">




            <div className="checkouthistory-box-s">
                <div className="checkouthistory-head">
                    <div className="title">Checkout History </div>
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
                                history.map(function (f) {
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