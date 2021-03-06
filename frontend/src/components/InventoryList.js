import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './InventoryList.css'

export default function AddInventory() {

    const [inventory, setinventory] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/inventory/").then((res) => {
            if (res.data.length > 0) {
                setinventory(res.data);
            }
        }).catch((e) => {
            console.log(e);
        })


    })



    return (
        <div className="display-box">
            <div className="header-box"> Inventory </div>
            <div className="content-box-list">
                <table id="items">
              
                        <tr>
                            <th>Name</th>
                            <th>Model</th>
                            <th>SKU</th>
                            <th>Category</th>
                            <th>Supplier</th>
                            <th>Quantity</th>
                            <th>date</th>
                            
                        </tr>
                   
                    {
                        inventory.map(function (f) {
                            return <tr>

                                <td ><a href="">{f.name} </a> </td>
                                <td >{f.model} </td>
                                <td >{f.sku} </td>
                                <td >{f.category} </td>
                                <td >{f.supplier} </td>
                                <td >{f.quantity} </td>
                                <td >{f.date} </td>
                              

                            </tr>

                        })
                    }

                </table>
            </div>


        </div >

    )
}